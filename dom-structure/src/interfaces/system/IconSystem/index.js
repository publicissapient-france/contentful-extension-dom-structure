import React, {useState} from 'react';
import PropTypes from 'prop-types';

import IconPreview from '../../../components/IconPreview';
import ColorPicker from '../../ColorPicker';
import IconTypography from '../../IconTypography';
import Margin from '../../Margin';

import {Choices, Column, Row, ElementName} from './styled';

const IconSystem = ({label, propertyName, currentResponsiveMode, event, updateSettingsProperty, getSettingsByProperty, getStoreSettingsByProperty, getDefaultSettingsByProperty}) => {
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
                <IconPreview hidden={openColor}
                             color={getSettingsByProperty(propertyName, 'color', event)}
                             font={getSettingsByProperty(propertyName, 'font', event)}
                             opacity={getSettingsByProperty(propertyName, 'opacity', event)}
                             open={openColor}
                             toggleOpenPreview={toggleOpenPreview}
                />
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
                             customName={'Icon'}
                             event={event}
                />
            </Column>
            <Column
                className={openPreview || openColor ? 'hidden' : ''}>
                <Row>
                    <IconTypography
                        font={getSettingsByProperty(propertyName, 'font')}
                        defaultFont={getDefaultSettingsByProperty(propertyName, 'font')}
                        storeValueFont={getStoreSettingsByProperty(propertyName, 'font')}
                        updateStateProps={updateSettings}
                        currentMode={currentResponsiveMode}
                    />
                </Row>
            </Column>
            <Column/>
            <Column>
                <Margin hidden={false}
                        margin={getSettingsByProperty(propertyName, 'margin')}
                        storeValueMargin={getStoreSettingsByProperty(propertyName, 'margin')}
                        defaultMargin={getDefaultSettingsByProperty(propertyName, 'margin')}
                        updateStateProps={updateSettings}
                />
            </Column>
        </Choices>
    );
}

IconSystem.protoTypes = {
    label : PropTypes.string,
    propertyName: PropTypes.string,
    event: PropTypes.string,
    updateSettingsProperty : PropTypes.func,
    getSettingsByProperty : PropTypes.func,
    getDefaultSettingsByProperty : PropTypes.func,
    getStoreSettingsByProperty : PropTypes.func,
    currentResponsiveMode : PropTypes.string
};

export default IconSystem;
