import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle, updateFieldSettings} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import TextPreview from '../../components/TextPreview';
import IconPreview from '../../components/IconPreview';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';
import AssetPreview from '../../components/AssetPreview';

import InputText from '../../interfaces/InputText';
import InputIcon from '../../interfaces/InputIcon';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Margin from '../../interfaces/Margin';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Radius from '../../interfaces/Radius';
import BorderWidth from '../../interfaces/BorderWidth';
import Alignment from '../../interfaces/Alignment';
import IconTypography from '../../interfaces/IconTypography';
import SpeakerSelector from '../../interfaces/SpeakerSelector';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {
    ChoiceItemsConfirm,
    Content,
    Settings,
    Choices,
    Column,
    LinkSettings,
    Row,
    ChoicesContent,
    ChoicesCustom,
    ChoicesImage,
    ChoicesTypography,
    ButtonEvents,
    ElementName,
    ChoicesSpeakers
} from './styled';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";

class SelectSpeakers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: {
                firstname: false,
                lastname: false,
                position: false,
                company: false,
                biography: false,
                icon1: false,
                icon2: false

            },
            openPreview: {
                firstname: false,
                lastname: false,
                position: false,
                company: false,
                biography: false,
                icon1: false,
                icon2: false
            },
            events: ['view1', 'view2'],
            currentEvent: 'view1'
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.settings && this.props.getSettingsByProperty('typography', 'font')) {
            if (!Object.values(this.props.settings.typography)[0].font.family && this.props.themes) {
                this.initFont();
            }
        }
        if (this.props.settings && this.props.getSettingsByProperty('firstname', 'font', this.state.currentEvent)) {
            if (!Object.values(this.props.settings.firstname)[0].font[this.state.currentEvent].family && this.props.themes) {
                this.initFont('firstname');
            }
        }
        if (this.props.settings && this.props.getSettingsByProperty('lastname', 'font', this.state.currentEvent)) {
            if (!Object.values(this.props.settings.lastname)[0].font[this.state.currentEvent].family && this.props.themes) {
                this.initFont('lastname');
            }
        }
        if (this.props.settings && this.props.getSettingsByProperty('position', 'font', this.state.currentEvent)) {
            if (!Object.values(this.props.settings.position)[0].font[this.state.currentEvent].family && this.props.themes) {
                this.initFont('position');
            }
        }
        if (this.props.settings && this.props.getSettingsByProperty('company', 'font', this.state.currentEvent)) {
            if (!Object.values(this.props.settings.company)[0].font[this.state.currentEvent].family && this.props.themes) {
                this.initFont('company');
            }
        }
        if (this.props.settings && this.props.getSettingsByProperty('biography', 'font', this.state.currentEvent)) {
            if (!Object.values(this.props.settings.biography)[0].font[this.state.currentEvent].family && this.props.themes) {
                this.initFont('biography');
            }
        }
    }

    initFont = (property) => {
        let initFont = this.props.settings[property];

        new Promise((resolve, reject) => {
            this.props.responsiveSettings.map(mode => {

                this.state.events.map( event => {
                    let selectedTheme = this.getThemeValue(this.props.themes, initFont[mode].font[event].theme);
                    if (selectedTheme) {
                        initFont[mode].font[event].family = selectedTheme.family;
                        initFont[mode].font[event].typeface = selectedTheme.typeface;
                        initFont[mode].font[event].weight = selectedTheme.weight;
                        initFont[mode].font[event].size = selectedTheme.fontsize[mode];
                        initFont[mode].font[event].lineHeight = selectedTheme.lineheight[mode];
                    }
                })

            });
            resolve();
        }).then(() => {
            this.props.initSettingsProperty(property, initFont);
        });
    }
/*
    initFont = () => {
        let initFont = this.props.settings.typography;

        new Promise((resolve, reject) => {
            this.props.responsiveSettings.map(mode => {
                let selectedTheme = this.getThemeValue(this.props.themes, initFont[mode].font.theme);
                if (selectedTheme) {
                    initFont[mode].font.family = selectedTheme.family;
                    initFont[mode].font.typeface = selectedTheme.typeface;
                    initFont[mode].font.weight = selectedTheme.weight;
                    initFont[mode].font.size = selectedTheme.fontsize[mode];
                    initFont[mode].font.lineHeight = selectedTheme.lineheight[mode];
                }
            });
            resolve();
        }).then(() => {
            this.props.initSettingsProperty('typography', initFont);
        });
    }*/


    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return;
        return themes.find(theme => theme.name === selectedTheme);
    }

    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    toggleOpenViewByProperty = (property) => {
        this.setState(prevState => ({
            openColorView: {
                ...prevState.openColorView,
                [property]: !prevState.openColorView[property]
            }
        }));
    }
    toggleOpenViewFirstname = () => this.toggleOpenViewByProperty('firstname');
    toggleOpenViewLastname = () => this.toggleOpenViewByProperty('lastname');
    toggleOpenViewPosition = () => this.toggleOpenViewByProperty('position');
    toggleOpenViewCompany = () => this.toggleOpenViewByProperty('company');
    toggleOpenViewBiography = () => this.toggleOpenViewByProperty('biography');
    toggleOpenViewIcon1 = () => this.toggleOpenViewByProperty('icon1');
    toggleOpenViewIcon2 = () => this.toggleOpenViewByProperty('icon2');

    toggleOpenPreviewByProperty = (property) => {
        this.setState(prevState => ({
            openPreview: {
                ...prevState.openPreview,
                [property]: !prevState.openPreview[property]
            }
        }));
    }
    toggleOpenPreviewFirstname = () => this.toggleOpenPreviewByProperty('firstname');
    toggleOpenPreviewLastname = () => this.toggleOpenPreviewByProperty('lastname');
    toggleOpenPreviewPosition = () => this.toggleOpenPreviewByProperty('position');
    toggleOpenPreviewCompany = () => this.toggleOpenPreviewByProperty('company');
    toggleOpenPreviewBiography = () => this.toggleOpenPreviewByProperty('biography');
    toggleOpenPreviewIcon1 = () => this.toggleOpenPreviewByProperty('icon1');
    toggleOpenPreviewIcon2 = () => this.toggleOpenPreviewByProperty('icon2');


    getText = () => this.props.content.text && this.props.content.text[this.props.indexLanguage] ? this.props.content.text[this.props.indexLanguage] : '';
    getIcon1 = () => this.props.content.icon1 && this.props.content.icon1[this.props.indexLanguage] ? this.props.content.icon1[this.props.indexLanguage] : '';
    getIcon2 = () => this.props.content.icon2 && this.props.content.icon2[this.props.indexLanguage] ? this.props.content.icon2[this.props.indexLanguage] : '';
    getLink = () => this.props.content.link && this.props.content.link[this.props.indexLanguage] ? this.props.content.link[this.props.indexLanguage] : '';
    getTarget = () => this.props.getSettingsPropertyNoResponsive('target') ? this.props.getSettingsPropertyNoResponsive('target').external : false;
    getIdSource = () => this.props.content.idSource ? this.props.content.idSource : null;
    getSpeakers = () => this.props.content.speakers ? this.props.content.speakers : [];
    getDisplay = () => this.props.content.display ? this.props.content.display : {};


    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);
    updateFirstname = (property, value, event) => this.props.updateSettingsProperty('firstname', property, value, event);
    updateLastname = (property, value, event) => this.props.updateSettingsProperty('lastname', property, value, event);
    updatePosition = (property, value, event) => this.props.updateSettingsProperty('position', property, value, event);
    updateCompany = (property, value, event) => this.props.updateSettingsProperty('company', property, value, event);
    updateCompanyLogo = (property, value, event) => this.props.updateSettingsProperty('companyLogo', property, value, event);
    updateBiography = (property, value, event) => this.props.updateSettingsProperty('biography', property, value, event);
    updatePhoto = (property, value, event) => this.props.updateSettingsProperty('photo', property, value, event);
    updateIcon1 = (property, value, event) => this.props.updateSettingsProperty('icon1', property, value, event);
    updateIcon2 = (property, value, event) => this.props.updateSettingsProperty('icon2', property, value, event);


    render() {
        const {name} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            active={this.props.active}
                            action={this.props.toggleActive}>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <div>
                        <LanguageToggle
                            hidden={(!this.props.openContent && !this.props.openSettings) || this.props.openSettings}/>
                        <ResponsiveToggle responsive={this.props.getResponsiveChoices()}
                                          currentMode={this.props.currentResponsiveMode}
                                          action={this.props.setResponsiveMode}/>
                        <Icon className={this.props.openContent ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleContent();
                              }}><SvgContent/></Icon>
                        <Icon className={this.props.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <ChoicesSpeakers>
                            <SpeakerSelector updateContent={this.props.updateContent}
                                             idSource={this.getIdSource()}
                                             speakers={this.getSpeakers() }
                                             display={this.getDisplay(this.state.currentEvent)}
                                             event={this.state.currentEvent}
                                             events={this.state.events}
                                             toggleCurrentEvent={this.toggleCurrentEvent}
                            />
                        </ChoicesSpeakers>
                        <ChoicesContent>
                            <Column>
                                <label>Icon twitter</label>
                                <InputIcon
                                    font={this.props.getSettingsByProperty('icon1', 'font', this.state.currentEvent)}
                                    action={this.props.updateTranlatedContent}
                                    targetProperty={'icon1'}
                                    defaultValue={this.getIcon1()}/>
                            </Column>
                            <Column>
                                <label>Icon Linkedin</label>
                                <InputIcon
                                    font={this.props.getSettingsByProperty('icon2', 'font', this.state.currentEvent)}
                                    action={this.props.updateTranlatedContent}
                                    targetProperty={'icon2'}
                                    defaultValue={this.getIcon2()}/>
                            </Column>
                        </ChoicesContent>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        {
                            this.state.events && this.state.events.length !== 0 ?
                                <ButtonEvents>
                                    {
                                        this.state.events.map((event, i) => {
                                            return <button
                                                key={i}
                                                className={event === this.state.currentEvent ? 'current' : ''}
                                                onClick={() => {
                                                    this.toggleCurrentEvent(event)
                                                }}>{event}</button>
                                        })
                                    }
                                </ButtonEvents> : null

                        }
                        <ChoicesTypography>
                            <ElementName><label>First Name</label></ElementName>
                            <Column
                                className={this.state.openPreview.firstname || this.state.openColorView.firstname ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView.firstname}
                                             color={this.props.getSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('firstname', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('firstname', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview.firstname}
                                             toggleOpenPreview={this.toggleOpenPreviewFirstname}
                                />
                                <ColorPicker hidden={this.state.openPreview.firstname}
                                             color={this.props.getSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.firstname}
                                             updateStateProps={this.updateFirstname}
                                             toggleOpenView={this.toggleOpenViewFirstname}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column
                                className={this.state.openPreview.firstname || this.state.openColorView.firstname ? 'hidden' : ''}>
                                <Typography
                                    font={this.props.getSettingsByProperty('firstname', 'font', this.state.currentEvent)}
                                    text={this.props.getSettingsByProperty('firstname', 'text', this.state.currentEvent)}
                                    defaultFont={this.props.getDefaultSettingsByProperty('firstname', 'font', this.state.currentEvent)}
                                    defaultText={this.props.getDefaultSettingsByProperty('firstname', 'text', this.state.currentEvent)}
                                    storeValueFont={this.props.getStoreSettingsByProperty('firstname', 'font', this.state.currentEvent)}
                                    storeValueText={this.props.getStoreSettingsByProperty('firstname', 'text', this.state.currentEvent)}
                                    updateStateProps={this.updateFirstname}
                                    currentMode={this.props.currentResponsiveMode}
                                    event={this.state.currentEvent}
                                />
                            </Column>
                        </ChoicesTypography>
                        <ChoicesTypography>
                            <ElementName><label>Last Name</label></ElementName>
                            <Column
                                className={this.state.openPreview.lastname || this.state.openColorView.lastname ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView.lastname}
                                             color={this.props.getSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('lastname', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('lastname', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview.lastname}
                                             toggleOpenPreview={this.toggleOpenPreviewLastname}
                                />
                                <ColorPicker hidden={this.state.openPreview.lastname}
                                             color={this.props.getSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.lastname}
                                             updateStateProps={this.updateLastname}
                                             toggleOpenView={this.toggleOpenViewLastname}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column
                                className={this.state.openPreview.lastname || this.state.openColorView.lastname ? 'hidden' : ''}>
                                <Typography
                                    font={this.props.getSettingsByProperty('lastname', 'font', this.state.currentEvent)}
                                    text={this.props.getSettingsByProperty('lastname', 'text', this.state.currentEvent)}
                                    defaultFont={this.props.getDefaultSettingsByProperty('lastname', 'font', this.state.currentEvent)}
                                    defaultText={this.props.getDefaultSettingsByProperty('lastname', 'text', this.state.currentEvent)}
                                    storeValueFont={this.props.getStoreSettingsByProperty('lastname', 'font', this.state.currentEvent)}
                                    storeValueText={this.props.getStoreSettingsByProperty('lastname', 'text', this.state.currentEvent)}
                                    updateStateProps={this.updateLastname}
                                    currentMode={this.props.currentResponsiveMode}
                                    event={this.state.currentEvent}
                                />
                            </Column>
                        </ChoicesTypography>
                        <ChoicesImage>
                            <ElementName><label>Photo</label></ElementName>
                            <Column>
                                <Row>
                                    <p>No preview</p>
                                </Row>
                            </Column>
                            <Column>
                                <Row>
                                    <Size
                                        size={this.props.getSettingsByProperty('photo', 'size', this.state.currentEvent)}
                                        storeValueSize={this.props.getStoreSettingsByProperty('photo', 'size', this.state.currentEvent)}
                                        defaultSize={this.props.getDefaultSettingsByProperty('photo', 'size', this.state.currentEvent)}
                                        updateStateProps={this.updatePhoto}
                                        event={this.state.currentEvent}
                                    />
                                </Row>
                                <Row>
                                    <Padding
                                        padding={this.props.getSettingsByProperty('photo', 'padding', this.state.currentEvent)}
                                        storeValuePadding={this.props.getStoreSettingsByProperty('photo', 'padding', this.state.currentEvent)}
                                        defaultPadding={this.props.getDefaultSettingsByProperty('photo', 'padding', this.state.currentEvent)}
                                        updateStateProps={this.updatePhoto}
                                        event={this.state.currentEvent}
                                    />
                                    <Alignment
                                        alignment={this.props.getSettingsByProperty('photo', 'alignment', this.state.currentEvent)}
                                        storeValueAlignment={this.props.getStoreSettingsByProperty('photo', 'alignment', this.state.currentEvent)}
                                        defaultAlignment={this.props.getDefaultSettingsByProperty('photo', 'alignment', this.state.currentEvent)}
                                        updateStateProps={this.updatePhoto}
                                        event={this.state.currentEvent}
                                    />
                                </Row>
                            </Column>
                        </ChoicesImage>
                        <ChoicesTypography>
                            <ElementName><label>Position</label></ElementName>
                            <Column
                                className={this.state.openPreview.position || this.state.openColorView.position ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView.position}
                                             color={this.props.getSettingsByProperty('position', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('position', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('position', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('position', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview.position}
                                             toggleOpenPreview={this.toggleOpenPreviewPosition}
                                />
                                <ColorPicker hidden={this.state.openPreview.position}
                                             color={this.props.getSettingsByProperty('position', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('position', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('position', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('position', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('position', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('position', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.position}
                                             updateStateProps={this.updatePosition}
                                             toggleOpenView={this.toggleOpenViewPosition}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column
                                className={this.state.openPreview.position || this.state.openColorView.position ? 'hidden' : ''}>
                                <Typography
                                    font={this.props.getSettingsByProperty('position', 'font', this.state.currentEvent)}
                                    text={this.props.getSettingsByProperty('position', 'text', this.state.currentEvent)}
                                    defaultFont={this.props.getDefaultSettingsByProperty('position', 'font', this.state.currentEvent)}
                                    defaultText={this.props.getDefaultSettingsByProperty('position', 'text', this.state.currentEvent)}
                                    storeValueFont={this.props.getStoreSettingsByProperty('position', 'font', this.state.currentEvent)}
                                    storeValueText={this.props.getStoreSettingsByProperty('position', 'text', this.state.currentEvent)}
                                    updateStateProps={this.updatePosition}
                                    currentMode={this.props.currentResponsiveMode}
                                    event={this.state.currentEvent}
                                />
                            </Column>
                        </ChoicesTypography>
                        <ChoicesTypography>
                            <ElementName><label>Company</label></ElementName>
                            <Column
                                className={this.state.openPreview.company || this.state.openColorView.company ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView.company}
                                             color={this.props.getSettingsByProperty('company', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('company', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('company', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('company', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview.company}
                                             toggleOpenPreview={this.toggleOpenPreviewCompany}
                                />
                                <ColorPicker hidden={this.state.openPreview.company}
                                             color={this.props.getSettingsByProperty('company', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('company', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('company', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('company', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('company', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('company', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.company}
                                             updateStateProps={this.updateCompany}
                                             toggleOpenView={this.toggleOpenViewCompany}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column
                                className={this.state.openPreview.company || this.state.openColorView.company ? 'hidden' : ''}>
                                <Typography
                                    font={this.props.getSettingsByProperty('company', 'font', this.state.currentEvent)}
                                    text={this.props.getSettingsByProperty('company', 'text', this.state.currentEvent)}
                                    defaultFont={this.props.getDefaultSettingsByProperty('company', 'font', this.state.currentEvent)}
                                    defaultText={this.props.getDefaultSettingsByProperty('company', 'text', this.state.currentEvent)}
                                    storeValueFont={this.props.getStoreSettingsByProperty('company', 'font', this.state.currentEvent)}
                                    storeValueText={this.props.getStoreSettingsByProperty('company', 'text', this.state.currentEvent)}
                                    updateStateProps={this.updateCompany}
                                    currentMode={this.props.currentResponsiveMode}
                                    event={this.state.currentEvent}
                                />
                            </Column>
                        </ChoicesTypography>
                        <ChoicesImage>
                            <ElementName><label>Company Logo</label></ElementName>
                            <Column>
                                <Row>
                                    <p>No preview</p>
                                </Row>
                            </Column>
                            <Column>
                                <Row>
                                    <Size
                                        size={this.props.getSettingsByProperty('companyLogo', 'size', this.state.currentEvent)}
                                        storeValueSize={this.props.getStoreSettingsByProperty('companyLogo', 'size', this.state.currentEvent)}
                                        defaultSize={this.props.getDefaultSettingsByProperty('companyLogo', 'size', this.state.currentEvent)}
                                        updateStateProps={this.updateCompanyLogo}
                                        event={this.state.currentEvent}
                                    />
                                </Row>
                                <Row>
                                    <Padding
                                        padding={this.props.getSettingsByProperty('companyLogo', 'padding', this.state.currentEvent)}
                                        storeValuePadding={this.props.getStoreSettingsByProperty('companyLogo', 'padding', this.state.currentEvent)}
                                        defaultPadding={this.props.getDefaultSettingsByProperty('companyLogo', 'padding', this.state.currentEvent)}
                                        updateStateProps={this.updateCompanyLogo}
                                        event={this.state.currentEvent}
                                    />
                                    <Alignment
                                        alignment={this.props.getSettingsByProperty('companyLogo', 'alignment', this.state.currentEvent)}
                                        storeValueAlignment={this.props.getStoreSettingsByProperty('companyLogo', 'alignment', this.state.currentEvent)}
                                        defaultAlignment={this.props.getDefaultSettingsByProperty('companyLogo', 'alignment', this.state.currentEvent)}
                                        updateStateProps={this.updateCompanyLogo}
                                        event={this.state.currentEvent}
                                    />
                                </Row>
                            </Column>
                        </ChoicesImage>
                        <ChoicesTypography>
                            <ElementName><label>Biography</label></ElementName>
                            <Column
                                className={this.state.openPreview.biography || this.state.openColorView.biography ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView.biography}
                                             color={this.props.getSettingsByProperty('biography', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('biography', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('biography', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('biography', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview.biography}
                                             toggleOpenPreview={this.toggleOpenPreviewBiography}
                                />
                                <ColorPicker hidden={this.state.openPreview.biography}
                                             color={this.props.getSettingsByProperty('biography', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('biography', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('biography', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('biography', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('biography', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('biography', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.biography}
                                             updateStateProps={this.updateBiography}
                                             toggleOpenView={this.toggleOpenViewBiography}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column
                                className={this.state.openPreview.biography || this.state.openColorView.biography ? 'hidden' : ''}>
                                <Typography
                                    font={this.props.getSettingsByProperty('biography', 'font', this.state.currentEvent)}
                                    text={this.props.getSettingsByProperty('biography', 'text', this.state.currentEvent)}
                                    defaultFont={this.props.getDefaultSettingsByProperty('biography', 'font', this.state.currentEvent)}
                                    defaultText={this.props.getDefaultSettingsByProperty('biography', 'text', this.state.currentEvent)}
                                    storeValueFont={this.props.getStoreSettingsByProperty('biography', 'font', this.state.currentEvent)}
                                    storeValueText={this.props.getStoreSettingsByProperty('biography', 'text', this.state.currentEvent)}
                                    updateStateProps={this.updateBiography}
                                    currentMode={this.props.currentResponsiveMode}
                                    event={this.state.currentEvent}
                                />
                            </Column>
                        </ChoicesTypography>
                        <ChoicesCustom>
                            <ElementName><label>Icon Twitter</label></ElementName>
                            <Column
                                className={this.state.openPreview.icon1 || this.state.openColorView.icon1 ? 'full-width' : ''}>
                                <IconPreview hidden={this.state.openColorView.icon1}
                                             color={this.props.getSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('icon1', 'font', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             open={this.state.openColorView.icon1}
                                             toggleOpenPreview={this.toggleOpenPreviewIcon1}
                                />
                                <ColorPicker hidden={this.state.openPreview.icon1}
                                             color={this.props.getSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.icon1}
                                             updateStateProps={this.updateIcon1}
                                             toggleOpenView={this.toggleOpenViewIcon1}
                                             customName={'Icon'}
                                             event={this.state.currentEvent}
                                />

                            </Column>
                            <Column
                                className={this.state.openPreview.icon1 || this.state.openColorView.icon1 ? 'hidden' : ''}>
                                <Row>
                                    <IconTypography
                                        font={this.props.getSettingsByProperty('icon1', 'font', this.state.currentEvent)}
                                        defaultFont={this.props.getDefaultSettingsByProperty('icon1', 'font', this.state.currentEvent)}
                                        storeValueFont={this.props.getStoreSettingsByProperty('icon1', 'font', this.state.currentEvent)}
                                        updateStateProps={this.updateIcon1}
                                        currentMode={this.props.currentResponsiveMode}
                                        event={this.state.currentEvent}
                                    />
                                </Row>

                            </Column>
                            <ElementName><label>Icon Linkedin</label></ElementName>
                            <Column
                                className={this.state.openPreview.icon2 || this.state.openColorView.icon2 ? 'full-width' : ''}>
                                <IconPreview hidden={this.state.openColorView.icon2}
                                             color={this.props.getSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('icon2', 'font', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             open={this.state.openColorView.icon2}
                                             toggleOpenPreview={this.toggleOpenPreviewIcon2}
                                />
                                <ColorPicker hidden={this.state.openPreview.icon2}
                                             color={this.props.getSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.icon2}
                                             updateStateProps={this.updateIcon2}
                                             toggleOpenView={this.toggleOpenViewIcon2}
                                             customName={'Icon'}
                                             event={this.state.currentEvent}
                                />

                            </Column>
                            <Column
                                className={this.state.openPreview.icon2 || this.state.openColorView.icon2 ? 'hidden' : ''}>
                                <Row>
                                    <IconTypography
                                        font={this.props.getSettingsByProperty('icon2', 'font', this.state.currentEvent)}
                                        defaultFont={this.props.getDefaultSettingsByProperty('icon2', 'font', this.state.currentEvent)}
                                        storeValueFont={this.props.getStoreSettingsByProperty('icon2', 'font', this.state.currentEvent)}
                                        updateStateProps={this.updateIcon2}
                                        currentMode={this.props.currentResponsiveMode}
                                        event={this.state.currentEvent}
                                    />
                                </Row>

                            </Column>
                        </ChoicesCustom>
                    </Settings>
                </Field>

                <ChoiceItemsConfirm className={!this.props.updated ? 'hidden' : ''}>
                    <ButtonBasic label={'Cancel'} disabled={!this.props.updated} action={this.props.cancelStateValue}/>
                    <ButtonValidate label={'Update'} disabled={!this.props.updated} action={this.props.updateField}/>
                </ChoiceItemsConfirm>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(SelectSpeakers));
export default WrappedComponent;

export const SelectSpeakersForComponent = FieldWrapper(connect(mapStateToProps)(SelectSpeakers));
export const SelectSpeakersForSection = FieldWrapperOfSection(connect(mapStateToProps)(SelectSpeakers));

