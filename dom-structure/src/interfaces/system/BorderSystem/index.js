import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../ColorPicker';
import Radius from "../../Radius";
import BorderWidth from "../../BorderWidth";

import {Choices, Column, Row, ElementName} from './styled';

const BorderSystem = ({label, propertyName, event, updateSettingsProperty, getSettingsByProperty, getDefaultSettingsByProperty, getStoreSettingsByProperty}) => {
    const [openPreview, setOpenPreview] = useState(false);
    const [openColor, setOpenColor] = useState(false);

    const toggleOpenPreview = () => setOpenPreview(!openPreview);

    const toggleOpenColor = () => setOpenColor(!openColor);

    const updateSettings = (property, value, event) => updateSettingsProperty(propertyName, property, value, event);

    return (
        <Choices>
            <ElementName><label>{label}</label></ElementName>
            <Column
                className={openPreview || openColor ? 'full-width' : ''}>
                <ColorPicker hidden={openPreview}
                             color={getSettingsByProperty(propertyName, 'color', event)}
                             opacity={getSettingsByProperty(propertyName, 'opacity', event)}
                             storeValueColor={getStoreSettingsByProperty(propertyName, 'color', event)}
                             storeValueOpacity={getStoreSettingsByProperty(propertyName, 'opacity', event)}
                             defaultColor={getDefaultSettingsByProperty(propertyName, 'color', event)}
                             defaultOpacity={getDefaultSettingsByProperty(propertyName, 'opacity', event)}
                             openView={openColor}
                             updateStateProps={updateSettings}
                             toggleOpenView={toggleOpenColor}
                             customName={'Border'}
                             event={event}
                />
            </Column>
            <Column
                className={openPreview || openColor ? 'hidden' : ''}>
                <Row>
                    <Radius radius={getSettingsByProperty(propertyName, 'radius')}
                            storeValueRadius={getStoreSettingsByProperty(propertyName, 'radius')}
                            defaultRadius={getDefaultSettingsByProperty(propertyName, 'radius')}
                            updateStateProps={updateSettings}

                    />
                    <BorderWidth width={getSettingsByProperty(propertyName, 'width')}
                                 storeValueWidth={getStoreSettingsByProperty(propertyName, 'width')}
                                 defaultWidth={getDefaultSettingsByProperty(propertyName, 'width')}
                                 updateStateProps={updateSettings}
                    />
                </Row>
                <Row></Row>
            </Column>
        </Choices>
    );
}

BorderSystem.protoTypes = {
    label : PropTypes.string,
    propertyName: PropTypes.string,
    event: PropTypes.string,
    updateSettingsProperty : PropTypes.func,
    getSettingsByProperty : PropTypes.func,
    getDefaultSettingsByProperty : PropTypes.func,
    getStoreSettingsByProperty : PropTypes.func
};

export default BorderSystem;
