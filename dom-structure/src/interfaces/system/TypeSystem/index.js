import React, {Component} from 'react';

import TextPreview from '../../../components/TextPreview';
import ColorPicker from '../../ColorPicker';
import Typography from '../../Typography';
import Padding from '../../Padding';
import Seo from '../../Seo';

import {Choices, Column, ElementName, NoName} from './styled'

class TypeSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPreview: false,
            openColor: false
        };
    }

    toggleOpenPreview = () => {
        this.setState(prevState => ({
            openPreview: !prevState.openPreview
        }));
    };

    toggleOpenColor = () => {
        this.setState(prevState => ({
            openColor: !prevState.openColor
        }));
    };

    updateSettings = (property, value, event) => this.props.updateSettingsProperty(this.props.propertyName, property, value, event);

    render() {
        const {label, propertyName, currentResponsiveMode, useSeo, usePadding, event} = this.props;

        return (
            <Choices>
                {
                    !label ? <NoName/> : <ElementName><label>{label}</label></ElementName>
                }
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'full-width' : ''}>

                    {
                        !this.props.getDefaultSettingsByProperty(propertyName, 'font') ? null :
                            <TextPreview hidden={this.state.openColor}
                                         color={this.props.getSettingsByProperty(propertyName, 'color', event)}
                                         font={this.props.getSettingsByProperty(propertyName, 'font')}
                                         text={this.props.getSettingsByProperty(propertyName, 'text')}
                                         opacity={this.props.getSettingsByProperty(propertyName, 'opacity', event)}
                                         open={this.state.openPreview}
                                         toggleOpenPreview={this.toggleOpenPreview}
                            />
                    }
                    <ColorPicker hidden={this.state.openPreview}
                                 color={this.props.getSettingsByProperty(propertyName, 'color', event)}
                                 opacity={this.props.getSettingsByProperty(propertyName, 'opacity', event)}
                                 storeValueColor={this.props.getStoreSettingsByProperty(propertyName, 'color', event)}
                                 storeValueOpacity={this.props.getStoreSettingsByProperty(propertyName, 'opacity', event)}
                                 defaultColor={this.props.getDefaultSettingsByProperty(propertyName, 'color', event)}
                                 defaultOpacity={this.props.getDefaultSettingsByProperty(propertyName, 'opacity', event)}
                                 openView={this.state.openColor}
                                 updateStateProps={this.updateSettings}
                                 toggleOpenView={this.toggleOpenColor}
                    />
                    {
                        !useSeo ? null :
                            <Seo hidden={this.state.openPreview || this.state.openColor}
                                 seo={this.props.getSettingsPropertyNoResponsive('seo')}
                                 defaultSeo={this.props.getDefaultSettingsPropertyNoResponsive('seo')}
                                 storeValueSeo={this.props.getStoreSettingsPropertyNoResponsive('seo')}
                                 updateStateProps={this.props.updateSettingsNoResponsive}
                            />
                    }

                </Column>
                {
                    !this.props.getDefaultSettingsByProperty(propertyName, 'font') ? null :
                        <Column
                            className={this.state.openPreview || this.state.openColor ? 'hidden' : ''}>
                            <Typography
                                font={this.props.getSettingsByProperty(propertyName, 'font')}
                                text={this.props.getSettingsByProperty(propertyName, 'text')}
                                defaultFont={this.props.getDefaultSettingsByProperty(propertyName, 'font')}
                                defaultText={this.props.getDefaultSettingsByProperty(propertyName, 'text')}
                                storeValueFont={this.props.getStoreSettingsByProperty(propertyName, 'font')}
                                storeValueText={this.props.getStoreSettingsByProperty(propertyName, 'text')}
                                updateStateProps={this.updateSettings}
                                currentMode={currentResponsiveMode}
                            />
                        </Column>
                }

                <Column/>
                {!usePadding ? null :
                    <Column>
                        <Padding hidden={this.state.openColorView}
                                 padding={this.props.getSettingsByProperty(propertyName, 'padding')}
                                 storeValuePadding={this.props.getStoreSettingsByProperty(propertyName, 'padding')}
                                 defaultPadding={this.props.getDefaultSettingsByProperty(propertyName, 'padding')}
                                 updateStateProps={this.updateSettings}
                        />
                    </Column>}

            </Choices>
        )
    }
};

export default TypeSystem;
