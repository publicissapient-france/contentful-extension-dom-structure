import React, {Component} from 'react';

import isEmpty from 'lodash/isEmpty'

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';

import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import ColorPicker from '../../interfaces/ColorPicker';
import Padding from '../../interfaces/Padding'
import Margin from '../../interfaces/Margin'
import Size from '../../interfaces/Size'
import ImageUploader from '../../interfaces/ImageUploader';


import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column, Row, ButtonEvents} from './styled';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            events: ['basic', 'scroll'],
            currentEvent: 'basic'
        };
    }

    componentDidMount() {
        console.log('PROPS ON NavigationBar ', this.props);

    };

    componentDidUpdate(prevProps) {
        if (this.props.responsiveSettings !== prevProps.responsiveSettings) {
            this.props.setResponsiveMode(this.props.responsiveSettings[0]);
        }
    }
    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    getAlt = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].alt && this.props.content.images[0].alt[this.props.indexLanguage] ? this.props.content.images[0].alt[this.props.indexLanguage] : '';

    getAsset = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].asset ? this.props.content.images[0].asset[this.props.currentResponsiveMode] : null

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));

    render() {
        const {name} = this.props;

        if (!this.props.settings) return null;

        let test = this.props.getDefaultSettingsByProperty('basis', 'color');
        console.log('BASIS COLOR DEFAULT', test);
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
                        {!isEmpty(this.props.defaultContent) ?
                            <Icon className={this.props.openContent ? 'active' : ''}
                                  onClick={() => {
                                      this.props.toggleContent();
                                  }}><SvgContent/></Icon>
                            : null
                        }

                        <Icon className={this.props.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    {
                        !isEmpty(this.props.defaultContent) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <ImageUploader asset={this.getAsset()}
                                               alt={this.getAlt()}
                                               index={0}
                                               updateStateAsset={this.props.updateContentSubProperty}
                                               updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                                />
                            </Content> : null
                    }


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
                        <Choices>
                            <Column className={this.state.openColorView ? 'full-width' : ''}>
                                <ColorPicker hidden={false}
                                             color={this.props.getSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateBasis}
                                             toggleOpenView={this.toggleOpenView}
                                             event={this.state.currentEvent}
                                />
                            </Column>
                            <Column className={this.state.openColorView ? 'hidden' : ''}>
                                <Row>
                                    <Size size={this.props.getSettingsByProperty('basis', 'size', this.state.currentEvent)}
                                          storeValueSize={this.props.getStoreSettingsByProperty('basis', 'size', this.state.currentEvent)}
                                          defaultSize={this.props.getDefaultSettingsByProperty('basis', 'size', this.state.currentEvent)}
                                          updateStateProps={this.updateBasis}
                                          event={this.state.currentEvent}
                                    />
                                </Row>
                                <Row>
                                    <Padding hidden={this.state.openColorView}
                                             padding={this.props.getSettingsByProperty('basis', 'padding', this.state.currentEvent)}
                                             storeValuePadding={this.props.getStoreSettingsByProperty('basis', 'padding', this.state.currentEvent)}
                                             defaultPadding={this.props.getDefaultSettingsByProperty('basis', 'padding', this.state.currentEvent)}
                                             updateStateProps={this.updateBasis}
                                             event={this.state.currentEvent}
                                    />
                                    <Margin hidden={this.state.openColorView}
                                            margin={this.props.getSettingsByProperty('basis', 'margin', this.state.currentEvent)}
                                            storeValueMargin={this.props.getStoreSettingsByProperty('basis', 'margin', this.state.currentEvent)}
                                            defaultMargin={this.props.getDefaultSettingsByProperty('basis', 'margin', this.state.currentEvent)}
                                            updateStateProps={this.updateBasis}
                                            event={this.state.currentEvent}
                                    />
                                </Row>
                            </Column>
                        </Choices>
                    </Settings>
                </Field>
                < ChoiceItemsConfirm
                    className={
                        !this.props.updated ? 'hidden' : ''
                    }>
                    <
                        ButtonBasic
                        label={'Cancel'}
                        disabled={
                            !this.props.updated
                        }
                        action={this.props.cancelStateValue
                        }
                    />
                    <ButtonValidate label={'Update'} disabled={!this.props.updated} action={this.props.updateField}/>
                    </ChoiceItemsConfirm>
            </div>
    );
    }
    }

    const WrappedComponent = FieldWrapper(NavigationBar);
    export default WrappedComponent;

    export const TemplateForComponent = FieldWrapper(NavigationBar);
    export const TemplateForSection = FieldWrapperOfSection(NavigationBar);


