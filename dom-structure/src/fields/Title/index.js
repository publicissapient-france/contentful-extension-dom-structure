import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../style/styledComponents';
import {Banner, Field, ActiveCheckBox} from '../../style/styledComponentsBoxes';
import SvgCheck from '../../components/svg/SvgCheck';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import {connect} from 'react-redux';
import {toggleFieldActive, getCurrentDOM, getCurrentLanguage} from '../../actions/index';
import {
    getCurrentExtension,
    toggleLanguage,
    updateFieldContent,
} from "../../actions";
import {getCountryISO} from "../../utils/functions";
import {ToogleLanguage, Languages, ChoiceItemsConfirm} from './styled'
import InputText from '../../interfaces/InputText'

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: true,
            openSettings: false,
            openContent: false,
        };
    }

    componentDidMount() {
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];
        this.setState({
            active: TitleOnStore ? TitleOnStore.active : true,
            content: TitleOnStore.content,
            settings: TitleOnStore.settings,
        }, () => {
            console.log('STATE AFTER MOUNT', this.state)
            if(!this.state.content.title){ this.init()}
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.state.openContent != prevState.openContent || this.state.openSettings != prevState.openSettings){
            this.setState({
                openSettings : prevState.openSettings,
                openContent : prevState.openContent
            })
        }
    }

    init = () => {
        this.setState(prevState => ({
            content: {
                ...prevState.content,
                title: {}
            }
        }), () => {
            console.log('state after init', this.state)
        });
    }

    updateTranlatedContent = (value, targetProperty) => {
        this.setState(prevState => ({
            content: {
                ...prevState.content,
                [targetProperty]: {
                    ...prevState.content[targetProperty],
                    [this.props.indexLanguage] : value
                }
            }
        }), () => {
            console.log('state after update', this.state)
        });

    }

    toggleViewSettings = () => {
        this.setState({
            openSettings: !this.state.openSettings,
            openContent: false
        })
    }

    toggleViewContent = () => {
        this.setState({
            openContent: !this.state.openContent,
            openSettings: false
        })
    }

    getTitle = () => {
        return this.state.content ? this.state.content.title[this.props.indexLanguage] : ''
    }


    render() {
        const {dispatch, extension, indexLanguage, name, type, indexComponent, indexSection} = this.props;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({
                                    active: !this.state.active
                                }, () => {
                                    dispatch(toggleFieldActive(type, this.state.active, indexComponent, indexSection))
                                })

                            }}>
                            <SvgCheck/>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <div>
                        <Languages>
                            {
                                extension.locales.available.map((language, i) => {
                                    return <ToogleLanguage
                                        key={i}
                                        className={indexLanguage === i ? 'active' : ''}
                                        onClick={e => {
                                            dispatch(toggleLanguage(i));
                                        }}>{getCountryISO(language)}</ToogleLanguage>;
                                })
                            }
                        </Languages>
                        <Icon className={this.state.openContent ? 'active' : ''}
                              onClick={() => {
                                  this.toggleViewContent();
                              }}><SvgContent/></Icon>
                        <Icon className={this.state.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.toggleViewSettings();
                              }}><SvgSetting/></Icon>
                    </div>


                </Banner>
                <Field>
                    <div className={!this.state.openContent ? 'hidden' : ''}>
                        <InputText action={this.updateTranlatedContent} targetProperty={'title'} defaultValue={this.getTitle()}/>
                        <ChoiceItemsConfirm>
                            <ButtonBasic
                                label={'Cancel'}
                                disaled={false}/>
                            <ButtonValidate label={'Update'} disabled={false} action={() => {
                                dispatch(updateFieldContent(type, this.state.content, indexComponent, indexSection));
                            }}>
                                Update
                            </ButtonValidate>
                        </ChoiceItemsConfirm>
                    </div>
                    <div className={!this.state.openSettings ? 'hidden' : ''}>
                        settings
                    </div>
                </Field>
            </div>
        );
    }
}

Title.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.number
};
const mapStateToProps = state => ({
    extension: getCurrentExtension(state).extension,
    dom: getCurrentDOM(state),
    indexLanguage: getCurrentLanguage(state).language
});

export default connect(mapStateToProps)(Title);
