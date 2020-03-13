import React, {Component} from 'react';

import IconPreview from '../../../components/IconPreview';
import ColorPicker from '../../ColorPicker';
import IconTypography from '../../IconTypography';
import Margin from '../../Margin';

import {Choices, Column, Row, ElementName} from './styled'

class IconSystem extends Component {
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
        const {label, propertyName, currentResponsiveMode, event} = this.props;

        return (
            <Choices>
                <ElementName><label>{label}</label></ElementName>
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'full-width' : ''}>
                    <IconPreview hidden={this.state.openColor}
                                 color={this.props.getSettingsByProperty(propertyName, 'color', event)}
                                 font={this.props.getSettingsByProperty(propertyName, 'font', event)}
                                 opacity={this.props.getSettingsByProperty(propertyName, 'opacity', event)}
                                 open={this.state.openColor}
                                 toggleOpenPreview={this.toggleOpenPreview}
                    />
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
                                 customName={'Icon'}
                                 event={event}
                    />

                </Column>
                <Column
                    className={this.state.openPreview || this.state.openColor ? 'hidden' : ''}>
                    <Row>
                        <IconTypography
                            font={this.props.getSettingsByProperty(propertyName, 'font')}
                            defaultFont={this.props.getDefaultSettingsByProperty(propertyName, 'font')}
                            storeValueFont={this.props.getStoreSettingsByProperty(propertyName, 'font')}
                            updateStateProps={this.updateSettings}
                            currentMode={currentResponsiveMode}
                        />
                    </Row>
                </Column>
                <Column/>
                <Column>
                    <Margin hidden={this.state.openColorView}
                            margin={this.props.getSettingsByProperty(propertyName, 'margin')}
                            storeValueMargin={this.props.getStoreSettingsByProperty(propertyName, 'margin')}
                            defaultMargin={this.props.getDefaultSettingsByProperty(propertyName, 'margin')}
                             updateStateProps={this.updateSettings}
                    />

                </Column>
            </Choices>
        )
    }
};

export default IconSystem;
