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
import TypeSystem from '../../interfaces/system/TypeSystem'
import ImageSystem from '../../interfaces/system/ImageSystem'

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
                icon : false
            },
            openPreview: {
                icon : false
            },
            events: ['basic', 'hover'],
            currentEvent: 'basic'
        };
    }

    componentDidUpdate(prevProps) {
        ['name', 'job', 'company', 'title', 'text'].map( prop => {
            if (this.props.settings && this.props.getSettingsByProperty(prop, 'font')) {
                if (!Object.values(this.props.settings[prop])[0].font.family && this.props.themes) {
                    this.initFont(prop);
                }
            }
        })
    }

    initFont = (property) => {
        let initFont = this.props.settings[property];

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
            this.props.initSettingsProperty(property, initFont);
        });
    }

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
    toggleOpenViewIcon = () => this.toggleOpenViewByProperty('icon');

    toggleOpenPreviewByProperty = (property) => {
        this.setState(prevState => ({
            openPreview: {
                ...prevState.openPreview,
                [property]: !prevState.openPreview[property]
            }
        }));
    }

    toggleOpenPreviewIcon = () => this.toggleOpenPreviewByProperty('icon');

    getIcon1 = () => this.props.content.icon1 && this.props.content.icon1[this.props.indexLanguage] ? this.props.content.icon1[this.props.indexLanguage] : '';
    getIcon2 = () => this.props.content.icon2 && this.props.content.icon2[this.props.indexLanguage] ? this.props.content.icon2[this.props.indexLanguage] : '';
    getSpeakers = () => this.props.content.speakers ? this.props.content.speakers : [];
    getDisplay = () => this.props.content.display ? this.props.content.display : {};


    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);
    updateIcon = (property, value, event) => this.props.updateSettingsProperty('icon', property, value, event);


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
                                    font={this.props.getSettingsByProperty('icon', 'font', this.state.currentEvent)}
                                    action={this.props.updateTranlatedContent}
                                    targetProperty={'icon1'}
                                    defaultValue={this.getIcon1()}/>
                            </Column>
                            <Column>
                                <label>Icon Linkedin</label>
                                <InputIcon
                                    font={this.props.getSettingsByProperty('icon', 'font', this.state.currentEvent)}
                                    action={this.props.updateTranlatedContent}
                                    targetProperty={'icon2'}
                                    defaultValue={this.getIcon2()}/>
                            </Column>
                        </ChoicesContent>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        {
                            ['name', 'job', 'company', 'title', 'text'].map( prop => {
                                return <TypeSystem label={prop}
                                                   propertyName={prop}
                                                   getSettingsByProperty={this.props.getSettingsByProperty}
                                                   getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                                   getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                                   updateSettingsProperty={this.props.updateSettingsProperty}
                                                   currentResponsiveMode={this.props.currentResponsiveMode}
                                />
                            })
                        }
                        {
                            ['photo', 'logo'].map( prop => {
                                return <ImageSystem label={prop}
                                             propertyName={prop}
                                             getSettingsByProperty={this.props.getSettingsByProperty}
                                             getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                             getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                             updateSettingsProperty={this.props.updateSettingsProperty}
                                />
                            })
                        }

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

                        <ChoicesCustom>
                            <ElementName><label>Icon Twitter</label></ElementName>
                            <Column
                                className={this.state.openPreview.icon || this.state.openColorView.icon ? 'full-width' : ''}>
                                <IconPreview hidden={this.state.openColorView.icon}
                                             color={this.props.getSettingsByProperty('icon', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('icon', 'font', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                                             open={this.state.openColorView.icon}
                                             toggleOpenPreview={this.toggleOpenPreviewIcon}
                                />
                                <ColorPicker hidden={this.state.openPreview.icon}
                                             color={this.props.getSettingsByProperty('icon', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('icon', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('icon', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('icon', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView.icon}
                                             updateStateProps={this.updateIcon}
                                             toggleOpenView={this.toggleOpenViewIcon}
                                             customName={'Icon'}
                                             event={this.state.currentEvent}
                                />

                            </Column>
                            <Column
                                className={this.state.openPreview.icon || this.state.openColorView.icon ? 'hidden' : ''}>
                                <Row>
                                    <IconTypography
                                        font={this.props.getSettingsByProperty('icon', 'font', this.state.currentEvent)}
                                        defaultFont={this.props.getDefaultSettingsByProperty('icon', 'font', this.state.currentEvent)}
                                        storeValueFont={this.props.getStoreSettingsByProperty('icon', 'font', this.state.currentEvent)}
                                        updateStateProps={this.updateIcon}
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

