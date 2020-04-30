import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import ColorPicker from '../../interfaces/ColorPicker';
import Margin from '../../interfaces/Margin';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Alignment from '../../interfaces/Alignment';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";
import BorderSystem from "../../interfaces/system/BorderSystem";
import TypeSystem from "../../interfaces/system/TypeSystem";

import {Field} from '../../style/styledComponentsFields';
import {Settings, Column, Row, ChoicesCustom, ButtonEvents} from './styled';

class NavigationLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorViewBackground: false,
            events: ['basic', 'hover', 'active'],
            currentEvent: 'basic'
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.settings && this.props.getSettingsByProperty('typography', 'font')) {
            if (!Object.values(this.props.settings.typography)[0].font.family && this.props.themes) {
                this.props.initFont('typography');
            }
        }
    }

    toggleOpenViewBackground = () => this.setState(prevState => ({openColorViewBackground: !prevState.openColorViewBackground}));
    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

    render() {
        const {updated} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
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
                        <TypeSystem label={null}
                                    propertyName={'typography'}
                                    getSettingsByProperty={this.props.getSettingsByProperty}
                                    getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                    getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                    updateSettingsProperty={this.props.updateSettingsProperty}
                                    currentResponsiveMode={this.props.currentResponsiveMode}
                                    getSettingsPropertyNoResponsive={this.props.getSettingsPropertyNoResponsive}
                                    getDefaultSettingsPropertyNoResponsive={this.props.getDefaultSettingsPropertyNoResponsive}
                                    getStoreSettingsPropertyNoResponsive={this.props.getStoreSettingsPropertyNoResponsive}
                                    updateSettingsNoResponsive={this.props.updateSettingsNoResponsive}
                                    event={this.state.currentEvent}
                        />
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
                            <BorderSystem
                                label={null}
                                propertyName={'border'}
                                getSettingsByProperty={this.props.getSettingsByProperty}
                                getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                updateSettingsProperty={this.props.updateSettingsProperty}
                                event={this.state.currentEvent}
                            />
                        </ChoicesCustom>
                    </Settings>
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(NavigationLinks));
export default WrappedComponent;
