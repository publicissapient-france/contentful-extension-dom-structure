import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

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

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {
    ChoiceItemsConfirm,
    Content,
    Settings,
    ChoicesTypography,
    Column,
    LinkSettings,
    Row,
    ChoicesContent,
    ChoicesCustom,
    ChoicesIdentity,
    ButtonEvents,
    ElementName
} from './styled';

class SelectSpeakers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openColorViewBackground: false,
            openColorViewBorder: false,
            openColorViewIcon: false,
            openColorViewIcon2: false,
            openPreview: false,
            openPreviewIcon: false,
            openPreviewIcon2: false,
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
    }

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
    }


    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return;
        return themes.find(theme => theme.name === selectedTheme);
    }

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenViewBackground = () => this.setState(prevState => ({openColorViewBackground: !prevState.openColorViewBackground}));
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));
    toggleOpenViewIcon = () => this.setState(prevState => ({openColorViewIcon: !prevState.openColorViewIcon}));
    toggleOpenViewIcon2 = () => this.setState(prevState => ({openColorViewIcon2: !prevState.openColorViewIcon2}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));
    toggleOpenPreviewIcon = () => this.setState(prevState => ({openPreviewIcon: !prevState.openPreviewIcon}));
    toggleOpenPreviewIcon2 = () => this.setState(prevState => ({openPreviewIcon2: !prevState.openPreviewIcon2}));
    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    getText = () => this.props.content.text && this.props.content.text[this.props.indexLanguage] ? this.props.content.text[this.props.indexLanguage] : '';
    getIcon1 = () => this.props.content.icon1 && this.props.content.icon1[this.props.indexLanguage] ? this.props.content.icon1[this.props.indexLanguage] : '';
    getIcon2 = () => this.props.content.icon2 && this.props.content.icon2[this.props.indexLanguage] ? this.props.content.icon2[this.props.indexLanguage] : '';
    getLink = () => this.props.content.link && this.props.content.link[this.props.indexLanguage] ? this.props.content.link[this.props.indexLanguage] : '';
    getTarget = () => this.props.getSettingsPropertyNoResponsive('target') ? this.props.getSettingsPropertyNoResponsive('target').external : false;

    updateFirstname = (property, value, event) => this.props.updateSettingsProperty('firstname', property, value, event);
    updateLastname = (property, value, event) => this.props.updateSettingsProperty('lastname', property, value, event);
    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);
    updateBorder = (property, value, event) => this.props.updateSettingsProperty('border', property, value, event);
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
                        <ChoicesIdentity>
                            <ElementName><label>First Name</label></ElementName>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView}
                                             color={this.props.getSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('firstname', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('firstname', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}
                                />
                                <ColorPicker hidden={this.state.openPreview}
                                             color={this.props.getSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('firstname', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('firstname', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateFirstname}
                                             toggleOpenView={this.toggleOpenView}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                <Typography font={this.props.getSettingsByProperty('firstname', 'font', this.state.currentEvent)}
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
                        </ChoicesIdentity>
                        <ChoicesIdentity>
                            <ElementName><label>Last Name</label></ElementName>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView}
                                             color={this.props.getSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('lastname', 'font', this.state.currentEvent)}
                                             text={this.props.getSettingsByProperty('lastname', 'text', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}
                                />
                                <ColorPicker hidden={this.state.openPreview}
                                             color={this.props.getSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('lastname', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('lastname', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateLastname}
                                             toggleOpenView={this.toggleOpenView}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                <Typography font={this.props.getSettingsByProperty('lastname', 'font', this.state.currentEvent)}
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
                        </ChoicesIdentity>
                        <ChoicesCustom>
                            <ElementName><label>Icon Twitter</label></ElementName>
                            <Column
                                className={this.state.openPreviewIcon || this.state.openColorViewIcon ? 'full-width' : ''}>
                                <IconPreview hidden={this.state.openColorViewIcon}
                                             color={this.props.getSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('icon1', 'font', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             open={this.state.openColorViewIcon}
                                             toggleOpenPreview={this.toggleOpenPreviewIcon}
                                />
                                <ColorPicker hidden={this.state.openPreviewIcon}
                                             color={this.props.getSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('icon1', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('icon1', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorViewIcon}
                                             updateStateProps={this.updateIcon1}
                                             toggleOpenView={this.toggleOpenViewIcon}
                                             customName={'Icon'}
                                             event={this.state.currentEvent}
                                />

                            </Column>
                            <Column
                                className={this.state.openPreviewIcon || this.state.openColorViewIcon ? 'hidden' : ''}>
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
                                className={this.state.openPreviewIcon2 || this.state.openColorViewIcon2 ? 'full-width' : ''}>
                                <IconPreview hidden={this.state.openColorViewIcon2}
                                             color={this.props.getSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('icon2', 'font', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             open={this.state.openColorViewIcon2}
                                             toggleOpenPreview={this.toggleOpenPreviewIcon2}
                                />
                                <ColorPicker hidden={this.state.openPreviewIcon2}
                                             color={this.props.getSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('icon2', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('icon2', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorViewIcon2}
                                             updateStateProps={this.updateIcon2}
                                             toggleOpenView={this.toggleOpenViewIcon2}
                                             customName={'Icon'}
                                             event={this.state.currentEvent}
                                />

                            </Column>
                            <Column
                                className={this.state.openPreviewIcon2 || this.state.openColorViewIcon2 ? 'hidden' : ''}>
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


                    {/*
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <ChoicesContent>
                            <Column>
                                <label>Label</label>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'text'}
                                           defaultValue={this.getText()}/>
                            </Column>
                            <Column>
                                <LinkSettings>
                                    <label>Link</label>
                                    <label>
                                        <input type={'checkbox'} defaultChecked={this.getTarget()}
                                               onChange={(e) => {
                                                   this.props.updateSettingsNoResponsive('target', {external: !this.getTarget()})
                                               }}/>
                                        external</label>
                                </LinkSettings>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'link'}
                                           defaultValue={this.getLink()}/>
                            </Column>
                            <Column>
                                <label>Icon</label>
                                <InputIcon font={this.props.getSettingsByProperty('icon', 'font')}
                                           action={this.props.updateTranlatedContent}
                                           targetProperty={'icon'}
                                           defaultValue={this.getIcon()}/>
                            </Column>
                        </ChoicesContent>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                    <ChoicesTypography>
                    <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
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
                    <TextPreview hidden={this.state.openColorView}
                    color={this.props.getSettingsByProperty('typography', 'color', this.state.currentEvent)}
                    font={this.props.getSettingsByProperty('typography', 'font')}
                    text={this.props.getSettingsByProperty('typography', 'text')}
                    opacity={this.props.getSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                    open={this.state.openPreview}
                    toggleOpenPreview={this.toggleOpenPreview}
                    />
                    <ColorPicker hidden={this.state.openPreview}
                    color={this.props.getSettingsByProperty('typography', 'color', this.state.currentEvent)}
                    opacity={this.props.getSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                    storeValueColor={this.props.getStoreSettingsByProperty('typography', 'color', this.state.currentEvent)}
                    storeValueOpacity={this.props.getStoreSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                    defaultColor={this.props.getDefaultSettingsByProperty('typography', 'color', this.state.currentEvent)}
                    defaultOpacity={this.props.getDefaultSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                    openView={this.state.openColorView}
                    updateStateProps={this.updateTypography}
                    toggleOpenView={this.toggleOpenView}
                    event={this.state.currentEvent}
                    />
                    </Column>
                    <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                    <Typography font={this.props.getSettingsByProperty('typography', 'font')}
                    text={this.props.getSettingsByProperty('typography', 'text')}
                    defaultFont={this.props.getDefaultSettingsByProperty('typography', 'font')}
                    defaultText={this.props.getDefaultSettingsByProperty('typography', 'text')}
                    storeValueFont={this.props.getStoreSettingsByProperty('typography', 'font')}
                    storeValueText={this.props.getStoreSettingsByProperty('typography', 'text')}
                    updateStateProps={this.updateTypography}
                    currentMode={this.props.currentResponsiveMode}
                    />
                    </Column>
                    </ChoicesTypography>

                    <ChoicesCustom>
                    <Column className={this.state.openColorViewBackground ? 'full-width' : ''}>
                    <Row>
                    <ColorPicker hidden={false}
                    color={this.props.getSettingsByProperty('basis', 'color', this.state.currentEvent)}
                    opacity={this.props.getSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                    storeValueColor={this.props.getStoreSettingsByProperty('basis', 'color', this.state.currentEvent)}
                    storeValueOpacity={this.props.getStoreSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                    defaultColor={this.props.getDefaultSettingsByProperty('basis', 'color', this.state.currentEvent)}
                    defaultOpacity={this.props.getDefaultSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                    openView={this.state.openColorViewBackground}
                    updateStateProps={this.updateBasis}
                    toggleOpenView={this.toggleOpenViewBackground}
                    customName={'Backg.'}
                    event={this.state.currentEvent}
                    />

                    </Row>
                    </Column>
                    <Column className={this.state.openColorViewBackground ? 'hidden' : ''}>
                    <Row>
                    <Size size={this.props.getSettingsByProperty('basis', 'size')}
                    storeValueSize={this.props.getStoreSettingsByProperty('basis', 'size')}
                    defaultSize={this.props.getDefaultSettingsByProperty('basis', 'size')}
                    updateStateProps={this.updateBasis}
                    />
                    </Row>
                    <Row>
                    <Padding padding={this.props.getSettingsByProperty('basis', 'padding')}
                    storeValuePadding={this.props.getStoreSettingsByProperty('basis', 'padding')}
                    defaultPadding={this.props.getDefaultSettingsByProperty('basis', 'padding')}
                    updateStateProps={this.updateBasis}
                    />
                    <Margin margin={this.props.getSettingsByProperty('basis', 'margin')}
                    storeValueMargin={this.props.getStoreSettingsByProperty('basis', 'margin')}
                    defaultMargin={this.props.getDefaultSettingsByProperty('basis', 'margin')}
                    updateStateProps={this.updateBasis}
                    />
                    </Row>
                    <Row>
                    <Alignment alignment={this.props.getSettingsByProperty('basis', 'alignment')}
                    storeValueAlignment={this.props.getStoreSettingsByProperty('basis', 'alignment')}
                    defaultAlignment={this.props.getDefaultSettingsByProperty('basis', 'alignment')}
                    updateStateProps={this.updateBasis}/>

                    </Row>
                    </Column>
                    <Column className={this.state.openColorViewBorder ? 'full-width' : ''}>
                    <ColorPicker hidden={false}
                    color={this.props.getSettingsByProperty('border', 'color', this.state.currentEvent)}
                    opacity={this.props.getSettingsByProperty('border', 'opacity', this.state.currentEvent)}
                    storeValueColor={this.props.getStoreSettingsByProperty('border', 'color', this.state.currentEvent)}
                    storeValueOpacity={this.props.getStoreSettingsByProperty('border', 'opacity', this.state.currentEvent)}
                    defaultColor={this.props.getDefaultSettingsByProperty('border', 'color', this.state.currentEvent)}
                    defaultOpacity={this.props.getDefaultSettingsByProperty('border', 'opacity', this.state.currentEvent)}
                    openView={this.state.openColorViewBorder}
                    updateStateProps={this.updateBorder}
                    toggleOpenView={this.toggleOpenViewBorder}
                    customName={'Border'}
                    event={this.state.currentEvent}
                    />
                    </Column>
                    <Column className={this.state.openColorViewBorder ? 'hidden' : ''}>
                    <Radius radius={this.props.getSettingsByProperty('border', 'radius')}
                    storeValueRadius={this.props.getStoreSettingsByProperty('border', 'radius')}
                    defaultRadius={this.props.getDefaultSettingsByProperty('border', 'radius')}
                    updateStateProps={this.updateBorder}
                    />
                    <BorderWidth width={this.props.getSettingsByProperty('border', 'width')}
                    storeValueWidth={this.props.getStoreSettingsByProperty('border', 'width')}
                    defaultWidth={this.props.getDefaultSettingsByProperty('border', 'width')}
                    updateStateProps={this.updateBorder}
                    />
                    </Column>
                    <Column
                    className={this.state.openPreviewIcon || this.state.openColorViewIcon ? 'full-width' : ''}>
                    <IconPreview hidden={this.state.openColorViewIcon}
                    color={this.props.getSettingsByProperty('icon', 'color', this.state.currentEvent)}
                    font={this.props.getSettingsByProperty('icon', 'font')}
                    text={this.props.getSettingsByProperty('icon', 'text')}
                    opacity={this.props.getSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                    open={this.state.openColorViewIcon}
                    toggleOpenPreview={this.toggleOpenPreviewIcon}
                    />
                    <ColorPicker hidden={this.state.openPreviewIcon}
                    color={this.props.getSettingsByProperty('icon', 'color', this.state.currentEvent)}
                    opacity={this.props.getSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                    storeValueColor={this.props.getStoreSettingsByProperty('icon', 'color', this.state.currentEvent)}
                    storeValueOpacity={this.props.getStoreSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                    defaultColor={this.props.getDefaultSettingsByProperty('icon', 'color', this.state.currentEvent)}
                    defaultOpacity={this.props.getDefaultSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                    openView={this.state.openColorViewIcon}
                    updateStateProps={this.updateIcon}
                    toggleOpenView={this.toggleOpenViewIcon}
                    customName={'Icon'}
                    event={this.state.currentEvent}
                    />

                    </Column>
                    <Column
                    className={this.state.openPreviewIcon || this.state.openColorViewIcon ? 'hidden' : ''}>
                    <Row>
                    <IconTypography font={this.props.getSettingsByProperty('icon', 'font')}
                    defaultFont={this.props.getDefaultSettingsByProperty('icon', 'font')}
                    storeValueFont={this.props.getStoreSettingsByProperty('icon', 'font')}
                    updateStateProps={this.updateIcon}
                    currentMode={this.props.currentResponsiveMode}
                    />
                    </Row>
                    <Row
                    className={this.state.openPreviewIcon || this.state.openColorViewIcon ? 'hidden' : ''}>
                    <Padding padding={this.props.getSettingsByProperty('icon', 'padding')}
                    storeValuePadding={this.props.getStoreSettingsByProperty('icon', 'padding')}
                    defaultPadding={this.props.getDefaultSettingsByProperty('icon', 'padding')}
                    updateStateProps={this.updateIcon}
                    />
                    </Row>
                    </Column>
                    </ChoicesCustom>
                    </Settings>
                */}

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
