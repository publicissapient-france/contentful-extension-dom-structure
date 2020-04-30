import React, {Component} from 'react';

import ColorPicker from '../../ColorPicker';
import Radius from "../../Radius";
import BorderWidth from "../../BorderWidth";

import {Choices, Column, Row, ElementName} from './styled'

class BorderSystem extends Component {
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
        const {label, propertyName, event} = this.props;

        return (
            <Choices>
                <ElementName><label>{label}</label></ElementName>
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'full-width' : ''}>
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
                                 customName={'Border'}
                                 event={event}
                    />
                </Column>
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'hidden' : ''}>
                    <Row>
                        <Radius radius={this.props.getSettingsByProperty(propertyName, 'radius')}
                                storeValueRadius={this.props.getStoreSettingsByProperty(propertyName, 'radius')}
                                defaultRadius={this.props.getDefaultSettingsByProperty(propertyName, 'radius')}
                                updateStateProps={this.updateSettings}

                        />
                        <BorderWidth width={this.props.getSettingsByProperty(propertyName, 'width')}
                                     storeValueWidth={this.props.getStoreSettingsByProperty(propertyName, 'width')}
                                     defaultWidth={this.props.getDefaultSettingsByProperty(propertyName, 'width')}
                                     updateStateProps={this.updateSettings}
                        />
                    </Row>
                    <Row>

                    </Row>
                </Column>
            </Choices>
        )
    }
};

export default BorderSystem;
