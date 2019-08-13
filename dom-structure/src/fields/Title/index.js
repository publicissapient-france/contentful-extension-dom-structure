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
import {toggleFieldActive, getCurrentDOM, getCurrentLanguage} from '../../actions/index';
import {
    getCurrentExtension,
    toggleLanguage,
    updateField
} from "../../actions";
import {getCountryISO} from "../../utils/functions";
import {ToogleLanguage, Languages, ChoiceItemsConfirm, Content, Settings, Choices, Column} from './styled'
import InputText from '../../interfaces/InputText'
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker'
import Seo from '../../interfaces/Seo'
import {isEmpty} from "lodash"


class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openPreview: false,
            openSettings: false,
            openContent: false

        }
    }

    componentDidMount() {
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];
        this.setState({
            content: TitleOnStore.content,
            settings: TitleOnStore.settings,
            active: TitleOnStore.active

        }, () => {
            if (!this.state.content.title) {
                this.initTitle()
            }
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

    toggleOpenView = () => this.setState({openColorView: !this.state.openColorView});
    toggleOpenPreview = () => this.setState({openPreview: !this.state.openPreview});

    toggleContent = () => this.setState(prevState => ({
        openContent: !prevState.openContent,
        openSettings: false
    }));
    toggleSettings = () => this.setState(prevState => ({
        openSettings: !prevState.openSettings,
        openContent: false
    }));


    getTitle = () => {
        return this.state.content && this.state.content.title && this.state.content.title[this.props.indexLanguage] ? this.state.content.title[this.props.indexLanguage] : ''
    }

    isUpdated = () => {
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];
        return (this.state.content != TitleOnStore.content || this.state.settings != TitleOnStore.settings)
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
        const {dispatch, extension, indexLanguage, name, type, indexComponent, indexSection, defaultSettings} = this.props;

        const TitleOnStore = this.props.dom.sections[indexSection].components[indexComponent].fields[type];

        if (!this.state.settings) return null
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(toggleFieldActive(type, this.state.active, indexComponent, indexSection))
                                });
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
                                  this.toggleContent();
                              }}><SvgContent/></Icon>
                        <Icon className={this.state.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Content className={!this.state.openContent ? 'hidden' : ''}>
                        <InputText action={this.updateTranlatedContent} targetProperty={'title'}
                                   defaultValue={this.getTitle()}/>
                    </Content>
                    <Settings className={!this.state.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column className={this.state.openPreview ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView}
                                             color={this.state.settings.color}
                                             font={this.state.settings.font}
                                             text={this.state.settings.text}
                                             opacity={this.state.settings.opacity}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}

                                />
                                <ColorPicker hidden={this.state.openPreview}
                                             color={this.state.settings.color}
                                             opacity={this.state.settings.opacity}
                                             storeValueColor={TitleOnStore && TitleOnStore.settings.color ? TitleOnStore.settings.color : null}
                                             storeValueOpacity={TitleOnStore && TitleOnStore.settings.opacity ? TitleOnStore.settings.opacity : null}
                                             defaultColor={defaultSettings.color}
                                             defaultOpacity={defaultSettings.opacity}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateSettings}
                                             toggleOpenView={this.toggleOpenView}

                                />
                                <Seo hidden={this.state.openPreview || this.state.openColorView}
                                     seo={this.state.settings.seo}
                                     defaultSeo={defaultSettings.seo}
                                     storeValueSeo={TitleOnStore && TitleOnStore.settings.seo ? TitleOnStore.settings.seo : null}
                                     updateStateProps={this.updateSettings}
                                />
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                <Typography font={this.state.settings.font}
                                            text={this.state.settings.text}
                                            defaultFont={defaultSettings.font}
                                            defaultText={defaultSettings.text}
                                            storeValueFont={TitleOnStore && TitleOnStore.settings.font ? TitleOnStore.settings.font : null}
                                            storeValueText={TitleOnStore && TitleOnStore.settings.text ? TitleOnStore.settings.text : null}
                                            updateStateProps={this.updateSettings}
                                />

                            </Column>
                        </Choices>

                    </Settings>
                </Field>
                <ChoiceItemsConfirm className={!this.isUpdated() ? 'hidden' : ''}>
                    <ButtonBasic label={'Cancel'} disabled={!this.isUpdated()} action={this.cancelStateValue}/>
                    <ButtonValidate label={'Update'} disabled={!this.isUpdated()} action={() => {
                        dispatch(updateField(type, this.state.content, this.state.settings, indexComponent, indexSection));
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
