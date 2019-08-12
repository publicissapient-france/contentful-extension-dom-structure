import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../style/styledComponents';
import {Banner, Field, ActiveCheckBox} from '../../style/styledComponentsBoxes';
import SvgCheck from '../../components/svg/SvgCheck';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import TextPreview from '../../components/TextPreview';
import {connect} from 'react-redux';
import {toggleFieldActive, getCurrentDOM, getCurrentLanguage, updateFieldStatus} from '../../actions/index';
import {
    getCurrentExtension,
    toggleLanguage,
    updateFieldContent,
} from "../../actions";
import {getCountryISO} from "../../utils/functions";
import {ToogleLanguage, Languages, ChoiceItemsConfirm, Content, Settings, Choices, Column} from './styled'
import InputText from '../../interfaces/InputText'
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker'
import {isEmpty} from "lodash"


class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openView : false,
            openPreview: false

        }
    }

    componentDidMount() {
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];
        this.setState({
            content: TitleOnStore.content,
            settings: TitleOnStore.settings,
        }, () => {
            if (!this.state.content.title) {
                this.initTitle()
            }
            console.log('éta du state au mount', this.state)
            if (isEmpty(this.state.settings)) {
                this.initSettings()
            }
        });
    };

    initTitle = () => {
        this.setState(prevState => ({
            content: {
                ...prevState.content,
                title: {}
            }
        }));
    }
    initSettings = () => {
        const initValue = this.props.defaultSettings;
        this.setState({
            settings: initValue
        }, () => {
            console.log('after init settings : ', this.state);
        });
    }

    updateTranlatedContent = (value, targetProperty) => {

        this.setState(prevState => ({
            content: {
                ...prevState.content,
                [targetProperty]: {
                    ...prevState.content[targetProperty],
                    [this.props.indexLanguage]: value
                }
            }
        }));

    }

    updateSettings = (targetProperty, value) => {
        this.setState({
            settings: {
                ...this.state.settings,
                [targetProperty]: value
            }
        });
    }

    toggleOpenView = () => this.setState({openView: !this.state.openView});
    toggleOpenPreview = () => this.setState({openPreview: !this.state.openPreview});


    getTitle = () => {
        return this.state.content && this.state.content.title && this.state.content.title[this.props.indexLanguage] ? this.state.content.title[this.props.indexLanguage] : ''
    }

    isUpdated = () => {
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];
        return (this.state.content != TitleOnStore.content)
    }

    cancelStateValue = (e) => {
        e.preventDefault();
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];
        this.setState({
            content: TitleOnStore.content,
            settings: TitleOnStore.settings
        });
    }

    render() {
        const {dispatch, extension, indexLanguage, name, type, indexComponent, indexSection} = this.props;

        const TitleOnStore = this.props.dom.sections[indexSection].components[indexComponent].fields[type];

        if(!this.state.settings) return null
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={TitleOnStore.active ? 'active' : ''}
                            onClick={e => {
                                if (TitleOnStore.active) {
                                    dispatch(toggleFieldActive(type, false, indexComponent, indexSection))
                                } else {
                                    dispatch(toggleFieldActive(type, true, indexComponent, indexSection))
                                }
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
                        <Icon className={TitleOnStore.status == 'content' ? 'active' : ''}
                              onClick={() => {
                                  dispatch(updateFieldStatus(type, 'content', indexComponent, indexSection))
                              }}><SvgContent/></Icon>
                        <Icon className={TitleOnStore.status == 'settings' ? 'active' : ''}
                              onClick={() => {
                                  dispatch(updateFieldStatus(type, 'settings', indexComponent, indexSection))
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Content className={TitleOnStore.status !== 'content' ? 'hidden' : ''}>
                        <InputText action={this.updateTranlatedContent} targetProperty={'title'}
                                   defaultValue={this.getTitle()}/>
                    </Content>
                    <Settings className={TitleOnStore.status !== 'settings' ? 'hidden' : ''}>
                        <Choices>
                            <Column className={this.state.openView ? 'full-width' : ''}>
                                <TextPreview color={this.state.settings.color}
                                             font={this.state.settings.font}
                                             text={this.state.settings.text}
                                             opacity={this.state.settings.opacity}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}

                                />
                                <ColorPicker className={this.state.openPreview ? 'hidden' : ''}
                                    color={this.state.settings.color}
                                             opacity={this.state.settings.opacity}
                                             storeValueColor={TitleOnStore && TitleOnStore.settings.color ? TitleOnStore.settings.color : null}
                                             storeValueOpacity={TitleOnStore && TitleOnStore.settings.opacity ? TitleOnStore.settings.opacity : null}
                                             defaultColor={this.props.defaultSettings.color}
                                             defaultOpacity={this.props.defaultSettings.opacity}
                                             openView={this.state.openView}
                                             updateStateProps={this.updateSettings}
                                             toggleOpenView={this.toggleOpenView}



                                />
                            </Column>

                        </Choices>

                        <Typography/>


                    </Settings>
                </Field>
                <ChoiceItemsConfirm className={!this.isUpdated() ? 'hidden' : ''}>
                    <ButtonBasic label={'Cancel'} disabled={!this.isUpdated()} action={this.cancelStateValue}/>
                    <ButtonValidate label={'Update'} disabled={!this.isUpdated()} action={() => {
                        dispatch(updateFieldContent(type, this.state.content, indexComponent, indexSection));
                    }}>
                        Update
                    </ButtonValidate>
                </ChoiceItemsConfirm>
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
