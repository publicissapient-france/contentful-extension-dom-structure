import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import InputIcon from '../../interfaces/InputIcon';
import SpeakerSelector from '../../interfaces/SpeakerSelector';
import TypeSystem from '../../interfaces/system/TypeSystem'
import ImageSystem from '../../interfaces/system/ImageSystem'
import IconSystem from '../../interfaces/system/IconSystem'

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {
    ChoiceItemsConfirm,
    Content,
    Settings,
    Column,
    ChoicesContent,
    ButtonEvents,
    ChoicesSpeakers
} from './styled';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";

class SelectSpeakers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: ['basic', 'hover'],
            currentEvent: 'basic'
        };
    }

    componentDidUpdate(prevProps) {
        ['name', 'job', 'company', 'title', 'text'].map(prop => {
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

    getIcon1 = () => this.props.content.icon1 ? this.props.content.icon1 : '';
    getIcon2 = () => this.props.content.icon2 ? this.props.content.icon2 : '';
    getIcon3 = () => this.props.content.icon3 ? this.props.content.icon3 : '';
    getSpeakers = () => this.props.content.speakers ? this.props.content.speakers : [];
    getDisplay = () => this.props.content.display ? this.props.content.display : {};
    getPriority = () => this.props.content.priority ? this.props.content.priority : [];

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

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
                                             speakers={this.getSpeakers()}
                                             display={this.getDisplay()}
                                             priority={this.getPriority()}
                                             toggleCurrentEvent={this.toggleCurrentEvent}
                            />
                        </ChoicesSpeakers>
                        <ChoicesContent>
                            <Column>
                                <label>Icon twitter</label>
                                <InputIcon
                                    font={this.props.settings['icon'] ? this.props.settings['icon'][this.props.responsiveSettings[0]]['font'] : null}
                                    action={this.props.updateContent}
                                    letters={'mn'}
                                    targetProperty={'icon1'}
                                    defaultValue={this.getIcon1()}/>
                            </Column>
                            <Column>
                                <label>Icon Linkedin</label>
                                <InputIcon
                                    font={this.props.settings['icon'] ? this.props.settings['icon'][this.props.responsiveSettings[0]]['font'] : null}
                                    action={this.props.updateContent}
                                    letters={'op'}
                                    targetProperty={'icon2'}
                                    defaultValue={this.getIcon2()}/>
                            </Column>
                            <Column>
                                <label>Icon Github</label>
                                <InputIcon
                                    font={this.props.settings['icon'] ? this.props.settings['icon'][this.props.responsiveSettings[0]]['font'] : null}
                                    action={this.props.updateContent}
                                    letters={'qr'}
                                    targetProperty={'icon3'}
                                    defaultValue={this.getIcon3()}/>
                            </Column>
                        </ChoicesContent>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        {
                            ['name', 'job', 'company', 'title', 'text'].map(prop => {
                                return <TypeSystem key={prop}
                                                   label={prop}
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
                            ['photo', 'logo'].map(prop => {
                                return <ImageSystem key={prop}
                                                    label={prop}
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
                        <IconSystem label={'Icon'}
                                    propertyName={'icon'}
                                    event={this.state.currentEvent}
                                    currentResponsiveMode={this.props.currentResponsiveMode}
                                    getSettingsByProperty={this.props.getSettingsByProperty}
                                    getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                    getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                    updateSettingsProperty={this.props.updateSettingsProperty}
                        />
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

