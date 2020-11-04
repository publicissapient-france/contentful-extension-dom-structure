import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

import InputIcon from '../../interfaces/InputIcon';
import SpeakerSelector from '../../interfaces/SpeakerSelector';
import TypeSystem from '../../interfaces/system/TypeSystem'
import ImageSystem from '../../interfaces/system/ImageSystem'
import IconSystem from '../../interfaces/system/IconSystem'

import {Field} from '../../style/styledComponentsFields';
import {
    Content,
    Settings,
    Column,
    ChoicesContent,
    ButtonEvents,
    ChoicesSpeakers
} from './styled';

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
                    this.props.initFont(prop);
                }
            }
        })
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
        const {updated} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        this.props.openContent &&
                        <Content>
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
                    }
                    {
                        this.props.openSettings &&
                        <Settings>
                            {
                                ['name', 'job', 'company', 'title', 'text'].map(prop => {
                                    return <TypeSystem key={prop}
                                                       label={prop}
                                                       propertyName={prop}
                                                       usePadding
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
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
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

