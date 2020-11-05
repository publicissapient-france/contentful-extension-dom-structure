import React, { useState} from 'react';
import PropTypes from 'prop-types';

import { Choices, ElementName, Column, Row } from "./styled";

import AssetPreview from '../../../components/AssetPreview';
import Size from '../../../interfaces/Size';
import Padding from '../../../interfaces/Padding';
import Alignment from '../../../interfaces/Alignment';
import ColorPicker from '../../ColorPicker';

const ImageSystem = ({label, propertyName, updateSettingsProperty, getSettingsByProperty,getStoreSettingsByProperty, getDefaultSettingsByProperty }) => {
    const [openPreview, setOpenPreview] = useState(false);
    const [openColor, setOpenColor] = useState(false);

    const toggleOpenPreview = () => setOpenPreview(!openPreview);

    const toggleOpenColor = () => setOpenColor(!openColor);

    const updateSettings = (property, value, event) => updateSettingsProperty(propertyName, property, value, event);

    return (
        <Choices>
            <ElementName><label>{label}</label></ElementName>
            <Column>
                <Row>
                    <AssetPreview locale={null} asset={null}/>
                </Row>
            </Column>
            <Column>
                <Row>
                    <Size
                        size={getSettingsByProperty(propertyName, 'size')}
                        storeValueSize={getStoreSettingsByProperty(propertyName, 'size')}
                        defaultSize={getDefaultSettingsByProperty(propertyName, 'size')}
                        updateStateProps={updateSettings}
                    />
                </Row>
                <Row>
                    <Padding
                        padding={getSettingsByProperty(propertyName, 'padding')}
                        storeValuePadding={getStoreSettingsByProperty(propertyName, 'padding')}
                        defaultPadding={getDefaultSettingsByProperty(propertyName, 'padding')}
                        updateStateProps={updateSettings}
                    />
                    <Alignment
                        alignment={getSettingsByProperty(propertyName, 'alignment')}
                        storeValueAlignment={getStoreSettingsByProperty(propertyName, 'alignment')}
                        defaultAlignment={getDefaultSettingsByProperty(propertyName, 'alignment')}
                        updateStateProps={updateSettings}
                    />
                </Row>
            </Column>
            <Column
                className={openPreview || openColor ? 'full-width' : ''}>
                <ColorPicker hidden={openPreview}
                             color={getSettingsByProperty(propertyName, 'color')}
                             opacity={getSettingsByProperty(propertyName, 'opacity')}
                             storeValueColor={getStoreSettingsByProperty(propertyName, 'color')}
                             storeValueOpacity={getStoreSettingsByProperty(propertyName, 'opacity')}
                             defaultColor={getDefaultSettingsByProperty(propertyName, 'color')}
                             defaultOpacity={getDefaultSettingsByProperty(propertyName, 'opacity')}
                             openView={openColor}
                             updateStateProps={updateSettings}
                             toggleOpenView={toggleOpenColor}
                             customName={'Backg.'}
                />
            </Column>
        </Choices>
    );
}

ImageSystem.protoTypes = {
    label : PropTypes.string,
    propertyName: PropTypes.string,
    updateSettingsProperty : PropTypes.func,
    getSettingsByProperty : PropTypes.func,
    getDefaultSettingsByProperty : PropTypes.func,
    getStoreSettingsByProperty : PropTypes.func
};

export default ImageSystem;
