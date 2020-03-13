import React, {Component} from 'react';
import { Choices, ElementName, Column, Row } from "./styled";

import AssetPreview from '../../../components/AssetPreview';
import Size from '../../../interfaces/Size';
import Padding from '../../../interfaces/Padding';
import Alignment from '../../../interfaces/Alignment';
import ColorPicker from '../../ColorPicker';

class ImageSystem extends Component {
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
        const {label, propertyName} = this.props;

        return (
            <Choices>
                <ElementName><label>{label}</label></ElementName>
                <Column>
                    <Row>
                        <AssetPreview
                            locale={null}
                            asset={null}
                        />
                    </Row>
                </Column>
                <Column>
                    <Row>
                        <Size
                            size={this.props.getSettingsByProperty(propertyName, 'size')}
                            storeValueSize={this.props.getStoreSettingsByProperty(propertyName, 'size')}
                            defaultSize={this.props.getDefaultSettingsByProperty(propertyName, 'size')}
                            updateStateProps={this.updateSettings}
                        />
                    </Row>
                    <Row>
                        <Padding
                            padding={this.props.getSettingsByProperty(propertyName, 'padding')}
                            storeValuePadding={this.props.getStoreSettingsByProperty(propertyName, 'padding')}
                            defaultPadding={this.props.getDefaultSettingsByProperty(propertyName, 'padding')}
                            updateStateProps={this.updateSettings}
                        />
                        <Alignment
                            alignment={this.props.getSettingsByProperty(propertyName, 'alignment')}
                            storeValueAlignment={this.props.getStoreSettingsByProperty(propertyName, 'alignment')}
                            defaultAlignment={this.props.getDefaultSettingsByProperty(propertyName, 'alignment')}
                            updateStateProps={this.updateSettings}
                        />
                    </Row>
                </Column>
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'full-width' : ''}>
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
                                 customName={'Backg.'}
                    />

                </Column>
            </Choices>
        )
    }
};

export default ImageSystem;
