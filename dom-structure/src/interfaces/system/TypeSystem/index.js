import React, {Component} from 'react';

import TextPreview from '../../../components/TextPreview';
import ColorPicker from '../../ColorPicker';
import Typography from '../../Typography';

import {Choices, Column, ElementName} from './styled'
class TypeSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPreview: false,
            openColor : false
        };
    }

    toggleOpenPreview = () => {
        this.setState(prevState => ({
            openPreview:  !prevState.openPreview
        }));
    };

    toggleOpenColor = () => {
        this.setState(prevState => ({
            openColor:  !prevState.openColor
        }));
    };

    updateSettings = (property, value, event) => this.props.updateSettingsProperty(this.props.propertyName, property, value, event);

    render() {
        const {label, propertyName, currentResponsiveMode} = this.props;

        return (
            <Choices>
                <ElementName><label>{label}</label></ElementName>
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'full-width' : ''}>
                    <TextPreview hidden={this.state.openColor}
                                 color={this.props.getSettingsByProperty(propertyName, 'color')}
                                 font={this.props.getSettingsByProperty(propertyName, 'font')}
                                 text={this.props.getSettingsByProperty(propertyName, 'text')}
                                 opacity={this.props.getSettingsByProperty(propertyName, 'opacity')}
                                 open={this.state.openPreview}
                                 toggleOpenPreview={this.toggleOpenPreview}
                    />
                    <ColorPicker hidden={this.state.openPreview}
                                 color={this.props.getSettingsByProperty(propertyName, 'color')}
                                 opacity={this.props.getSettingsByProperty(propertyName, 'opacity')}
                                 storeValueColor={this.props.getStoreSettingsByProperty(propertyName, 'color')}
                                 storeValueOpacity={this.props.getStoreSettingsByProperty(propertyName, 'opacity')}
                                 defaultColor={this.props.getDefaultSettingsByProperty(propertyName, 'color')}
                                 defaultOpacity={this.props.getDefaultSettingsByProperty(propertyName, 'opacity')}
                                 openView={this.state.openColor}
                                 updateStateProps={this.updateSettings}
                                 toggleOpenView={this.toggleOpenColor}
                    />
                </Column>
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
            </Choices>
        )
    }
};

export default TypeSystem;
