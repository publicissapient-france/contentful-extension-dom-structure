import React, {useState} from 'react';
import PropTypes from 'prop-types';

import TextPreview from '../../../components/TextPreview';
import ColorPicker from '../../ColorPicker';
import Typography from '../../Typography';
import Padding from '../../Padding';
import Seo from '../../Seo';

import {Choices, Column, ElementName, NoName} from './styled'

const TypeSystem = ({label, propertyName, currentResponsiveMode, useSeo, usePadding, event, updateSettingsProperty, getSettingsByProperty, getDefaultSettingsByProperty, getStoreSettingsByProperty, updateSettingsNoResponsive, getSettingsPropertyNoResponsive, getStoreSettingsPropertyNoResponsive, getDefaultSettingsPropertyNoResponsive}) => {
    const [openPreview, setOpenPreview] = useState(false);
    const [openColor, setOpenColor] = useState(false);

    const toggleOpenPreview = () => setOpenPreview(!openPreview);

    const toggleOpenColor = () => setOpenColor(!openColor);

    const updateSettings = (property, value, event) => updateSettingsProperty(propertyName, property, value, event);

    return (
        <Choices>
            {
                !label ? <NoName/> : <ElementName><label>{label}</label></ElementName>
            }
            <Column className={openPreview || openColor ? 'full-width' : ''}>
                {
                    !getDefaultSettingsByProperty(propertyName, 'font') ? null :
                        <TextPreview hidden={openColor}
                                     color={getSettingsByProperty(propertyName, 'color', event)}
                                     font={getSettingsByProperty(propertyName, 'font')}
                                     text={getSettingsByProperty(propertyName, 'text')}
                                     opacity={getSettingsByProperty(propertyName, 'opacity', event)}
                                     open={openPreview}
                                     toggleOpenPreview={toggleOpenPreview}
                        />
                }
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
                             event={event}
                />
                {
                    useSeo &&
                    <Seo hidden={openPreview || openColor}
                         seo={getSettingsPropertyNoResponsive('seo')}
                         defaultSeo={getDefaultSettingsPropertyNoResponsive('seo')}
                         storeValueSeo={getStoreSettingsPropertyNoResponsive('seo')}
                         updateStateProps={updateSettingsNoResponsive}
                    />
                }
            </Column>
            {
                !getDefaultSettingsByProperty(propertyName, 'font') ? null :
                    <Column
                        className={openPreview || openColor ? 'hidden' : ''}>
                        <Typography
                            font={getSettingsByProperty(propertyName, 'font')}
                            text={getSettingsByProperty(propertyName, 'text')}
                            defaultFont={getDefaultSettingsByProperty(propertyName, 'font')}
                            defaultText={getDefaultSettingsByProperty(propertyName, 'text')}
                            storeValueFont={getStoreSettingsByProperty(propertyName, 'font')}
                            storeValueText={getStoreSettingsByProperty(propertyName, 'text')}
                            updateStateProps={updateSettings}
                            currentMode={currentResponsiveMode}
                        />
                    </Column>
            }
            <Column/>
            {usePadding &&
            <Column>
                <Padding hidden={false}
                         padding={getSettingsByProperty(propertyName, 'padding')}
                         storeValuePadding={getStoreSettingsByProperty(propertyName, 'padding')}
                         defaultPadding={getDefaultSettingsByProperty(propertyName, 'padding')}
                         updateStateProps={updateSettings}
                />
            </Column>
            }
        </Choices>
    );
}

TypeSystem.protoTypes = {
    label: PropTypes.string,
    propertyName: PropTypes.string,
    event: PropTypes.string,
    useSeo : PropTypes.bool,
    usePadding: PropTypes.bool,
    updateSettingsProperty: PropTypes.func,
    getSettingsByProperty: PropTypes.func,
    getDefaultSettingsByProperty: PropTypes.func,
    getStoreSettingsByProperty: PropTypes.func,
    currentResponsiveMode : PropTypes.string,
    updateSettingsNoResponsive : PropTypes.func,
    getSettingsPropertyNoResponsive: PropTypes.func,
    getStoreSettingsPropertyNoResponsive: PropTypes.func,
    getDefaultSettingsPropertyNoResponsive: PropTypes.func
};

export default TypeSystem;
