import React, {Component} from 'react';

import isEmpty from 'lodash/isEmpty'
import {getAsset, getAlt} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';

import ColorPicker from '../../interfaces/ColorPicker';
import Padding from '../../interfaces/Padding'
import Margin from '../../interfaces/Margin'
import Size from '../../interfaces/Size'
import ImageUploader from '../../interfaces/ImageUploader';


import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Column, Row, ButtonEvents, AdditionalChoices, Separator} from './styled';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openColorViewSVG: false,
            openColorViewColor: false,
            openColorViewBurger: false,
            events: ['basic', 'scroll'],
            currentEvent: 'basic',
        };
    }

    componentDidMount() {

    };

    componentDidUpdate(prevProps) {
        if (this.props.responsiveSettings !== prevProps.responsiveSettings) {
            this.props.setResponsiveMode(this.props.responsiveSettings[0]);
        }
    }

    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    updateBasis = (property, value, event) => {
        console.log('update Basis')
        this.props.updateSettingsProperty('basis', property, value, event);
    }
    updateSVG = (property, value, event) => this.props.updateSettingsProperty('svg', property, value, event);
    updateBurger = (property, value, event) => this.props.updateSettingsProperty('burger', property, value, event);

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenViewSVG = () => this.setState(prevState => ({openColorViewSVG: !prevState.openColorViewSVG}));
    toggleOpenViewColor = () => this.setState(prevState => ({openColorViewColor: !prevState.openColorViewColor}));
    toggleOpenViewBurger = () => this.setState(prevState => ({openColorViewBurger: !prevState.openColorViewBurger}));

    render() {
        const {updated, indexLanguage, currentResponsiveMode} = this.props;

        if (!this.props.settings) return null;

        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.defaultContent) && this.props.openContent ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <ImageUploader asset={getAsset(content, currentResponsiveMode)}
                                               currentResponsiveMode={currentResponsiveMode}
                                               alt={getAlt(content, indexLanguage)}
                                               index={0}
                                               updateStateAsset={this.props.updateContentSubProperty}
                                               updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                                />
                            </Content> : null
                    }
                    {
                        this.props.openSettings &&
                        <Settings>
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
                                        <Size
                                            size={this.props.getSettingsByProperty('basis', 'size', this.state.currentEvent)}
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
                            <Separator>
                                <p>Select Language</p>
                            </Separator>
                            <AdditionalChoices>
                                <Column className={this.state.openColorViewSVG ? 'full-width' : ''}>
                                    <ColorPicker hidden={false}
                                                 color={this.props.getSettingsByProperty('svg', 'fill')}
                                                 opacity={this.props.getSettingsByProperty('svg', 'opacityFill')}
                                                 storeValueColor={this.props.getStoreSettingsByProperty('svg', 'fill')}
                                                 storeValueOpacity={this.props.getStoreSettingsByProperty('svg', 'fill')}
                                                 defaultColor={this.props.getDefaultSettingsByProperty('svg', 'fill')}
                                                 defaultOpacity={this.props.getDefaultSettingsByProperty('svg', 'opacityFill')}
                                                 openView={this.state.openColorViewSVG}
                                                 updateStateProps={this.updateSVG}
                                                 toggleOpenView={this.toggleOpenViewSVG}
                                                 customTargetColor={'fill'}
                                                 customTargetOpacity={'opacityFill'}
                                                 customName={'Backg.'}
                                    />
                                </Column>
                                <Column className={this.state.openColorViewSVG ? 'hidden' : ''}>
                                    <Row>
                                        <Size size={this.props.getSettingsByProperty('svg', 'size')}
                                              storeValueSize={this.props.getStoreSettingsByProperty('svg', 'size')}
                                              defaultSize={this.props.getDefaultSettingsByProperty('svg', 'size')}
                                              updateStateProps={this.updateSVG}
                                        />
                                    </Row>
                                </Column>
                                <Column className={this.state.openColorViewColor ? 'full-width' : ''}>
                                    <ColorPicker hidden={false}
                                                 color={this.props.getSettingsByProperty('svg', 'color')}
                                                 opacity={this.props.getSettingsByProperty('svg', 'opacity')}
                                                 storeValueColor={this.props.getStoreSettingsByProperty('svg', 'color')}
                                                 storeValueOpacity={this.props.getStoreSettingsByProperty('svg', 'color')}
                                                 defaultColor={this.props.getDefaultSettingsByProperty('svg', 'color')}
                                                 defaultOpacity={this.props.getDefaultSettingsByProperty('svg', 'opacity')}
                                                 openView={this.state.openColorViewColor}
                                                 updateStateProps={this.updateSVG}
                                                 toggleOpenView={this.toggleOpenViewColor}
                                                 customName={'Color'}
                                    />
                                </Column>
                            </AdditionalChoices>
                            <Separator>
                                <p>Burger</p>
                            </Separator>
                            <AdditionalChoices>
                                <Column className={this.state.openColorViewBurger ? 'full-width' : ''}>
                                    <ColorPicker hidden={false}
                                                 color={this.props.getSettingsByProperty('burger', 'fill')}
                                                 opacity={this.props.getSettingsByProperty('burger', 'opacityFill')}
                                                 storeValueColor={this.props.getStoreSettingsByProperty('burger', 'fill')}
                                                 storeValueOpacity={this.props.getStoreSettingsByProperty('burger', 'fill')}
                                                 defaultColor={this.props.getDefaultSettingsByProperty('burger', 'fill')}
                                                 defaultOpacity={this.props.getDefaultSettingsByProperty('burger', 'opacityFill')}
                                                 openView={this.state.openColorViewBurger}
                                                 updateStateProps={this.updateBurger}
                                                 toggleOpenView={this.toggleOpenViewBurger}
                                                 customTargetColor={'fill'}
                                                 customTargetOpacity={'opacityFill'}
                                                 customName={'Color'}
                                    />
                                </Column>
                                <Column className={this.state.openColorViewBurger ? 'hidden' : ''}>
                                    <Row>
                                        <Size size={this.props.getSettingsByProperty('burger', 'size')}
                                              storeValueSize={this.props.getStoreSettingsByProperty('burger', 'size')}
                                              defaultSize={this.props.getDefaultSettingsByProperty('burger', 'size')}
                                              updateStateProps={this.updateBurger}
                                        />
                                    </Row>
                                </Column>
                            </AdditionalChoices>
                        </Settings>
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper(NavigationBar);
export default WrappedComponent;

export const TemplateForComponent = FieldWrapper(NavigationBar);
export const TemplateForSection = FieldWrapperOfSection(NavigationBar);


