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
import update from "react-addons-update";
import ResponsiveToggle from "../../components/ResponsiveToggle";


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
            active: TitleOnStore.active,
        }, () => {
            this.initResponsiveMode();
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

    initResponsiveMode = () => {
        let mode;
        if (!this.props.responsiveContent && !this.props.responsiveSettings) {
            mode = null;
        }
        else if (this.props.responsiveContent) {
            mode = this.props.responsiveContent[0]
        } else {
            mode = this.props.responsiveSettings[0]
        }
        this.setState({currentResponsiveMode: mode})
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
        if (this.state.currentResponsiveMode) {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {
                        [prevState.currentResponsiveMode]: {$set: value}

                    }
                })
            }));

        } else {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {$set: value}

                })
            }));

        }

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

    toggleResponsiveMode = (mode) => this.setState({
        currentResponsiveMode: mode
    });


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

    getCurrentSettingsProperty = (property) => {
        if (this.state.currentResponsiveMode) {
            return this.state.settings[property][this.state.currentResponsiveMode]
        } else {
            return this.state.settings[property]
        }
    }

    getCurrentDefaultSettingsProperty = (property) => {
        if (this.state.currentResponsiveMode) {
            return this.props.defaultSettings[property][this.state.currentResponsiveMode]
        } else {
            return this.props.defaultSettings[property]
        }
    }

    getCurrentStoreSettingsProperty = (property) => {
        const TitleOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.type];

        if(!TitleOnStore.settings[property]) return null

        if (this.state.currentResponsiveMode) {
            if (TitleOnStore && TitleOnStore.settings[property][this.state.currentResponsiveMode]) return null
            return TitleOnStore.settings[property][this.state.currentResponsiveMode]
        } else {
            if (TitleOnStore && TitleOnStore.settings[property]) return null
            return TitleOnStore.settings[property]
        }
    }

    render() {
        const {dispatch, extension, indexLanguage, name, type, indexComponent, indexSection, defaultSettings, responsiveContent, responsiveSettings} = this.props;

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
                        <Languages
                            className={(!this.state.openContent && !this.state.openSettings) || (this.state.openSettings) ? 'hidden' : ''}>
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
                        <ResponsiveToggle responsive={this.state.openContent ? responsiveContent : (this.state.openSettings ? responsiveSettings : null)} currentMode={this.state.currentResponsiveMode}
                                          action={this.toggleResponsiveMode}/>
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
                                             color={this.getCurrentSettingsProperty('color')}
                                             font={this.getCurrentSettingsProperty('font')}
                                             text={this.getCurrentSettingsProperty('text')}
                                             opacity={this.getCurrentSettingsProperty('opacity')}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}

                                />
                                <ColorPicker hidden={this.state.openPreview}
                                             color={this.getCurrentSettingsProperty('color')}
                                             opacity={this.getCurrentSettingsProperty('opacity')}
                                             storeValueColor={this.getCurrentStoreSettingsProperty('color')}
                                             storeValueOpacity={this.getCurrentStoreSettingsProperty('opacity')}
                                             defaultColor={this.getCurrentDefaultSettingsProperty('color')}
                                             defaultOpacity={this.getCurrentDefaultSettingsProperty('opacity')}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateSettings}
                                             toggleOpenView={this.toggleOpenView}

                                />
                                <Seo hidden={this.state.openPreview || this.state.openColorView}
                                     seo={this.getCurrentSettingsProperty('seo')}
                                     defaultSeo={this.getCurrentDefaultSettingsProperty('seo')}
                                     storeValueSeo={this.getCurrentStoreSettingsProperty('seo')}
                                     updateStateProps={this.updateSettings}
                                />
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                <Typography font={this.getCurrentSettingsProperty('font')}
                                            text={this.getCurrentSettingsProperty('text')}
                                            defaultFont={this.getCurrentDefaultSettingsProperty('font')}
                                            defaultText={this.getCurrentDefaultSettingsProperty('text')}
                                            storeValueFont={this.getCurrentStoreSettingsProperty('font')}
                                            storeValueText={this.getCurrentStoreSettingsProperty('text')}
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
