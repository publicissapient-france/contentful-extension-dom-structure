import React, {Component} from 'react';
import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';
import PartnerSelector from '../../interfaces/PartnerSelector';
import ImageSystem from '../../interfaces/system/ImageSystem'

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices } from './styled';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";

class SelectPartners extends Component {

    getData = () => this.props.content.data ? this.props.content.data : [];
    getPriority = () => this.props.content.priority ? this.props.content.priority : [];

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

    render() {
        const {name} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            active={this.props.active}
                            action={this.props.toggleActive}>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <div>
                        <LanguageToggle
                            hidden={(!this.props.openContent && !this.props.openSettings) || this.props.openSettings}/>
                        <ResponsiveToggle responsive={this.props.getResponsiveChoices()}
                                          currentMode={this.props.currentResponsiveMode}
                                          action={this.props.setResponsiveMode}/>
                        <Icon className={this.props.openContent ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleContent();
                              }}><SvgContent/></Icon>
                        <Icon className={this.props.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <Choices>
                            <PartnerSelector updateContent={this.props.updateContent}
                                             partners={this.getData()}
                                             priority={this.getPriority()}
                                             toggleCurrentEvent={this.toggleCurrentEvent}
                            />
                        </Choices>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        {
                            ['logo'].map(prop => {
                                return <ImageSystem key={prop}
                                                    label={prop}
                                                    propertyName={prop}
                                                    getSettingsByProperty={this.props.getSettingsByProperty}
                                                    getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                                    getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                                    updateSettingsProperty={this.props.updateSettingsProperty}
                                />
                            })
                        }
                    </Settings>
                </Field>
                <ChoiceItemsConfirm className={!this.props.updated ? 'hidden' : ''}>
                    <ButtonBasic label={'Cancel'} disabled={!this.props.updated} action={this.props.cancelStateValue}/>
                    <ButtonValidate label={'Update'} disabled={!this.props.updated} action={this.props.updateField}/>
                </ChoiceItemsConfirm>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper((SelectPartners));
export default WrappedComponent;
export const SelectPartnersForComponent = WrappedComponent;
export const SelectPartnersForSection = FieldWrapperOfSection((SelectPartners));

