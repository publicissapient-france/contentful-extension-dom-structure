import React, {Component} from 'react';

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import FlexContainerProperties from '../../interfaces/FlexContainerProperties';


import {Icon} from '../../style/styledComponents';
import {Banner} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Settings, Choices, Field} from './styled';

class FlexContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    componentDidUpdate(prevProps) {
        if (this.props.responsiveSettings !== prevProps.responsiveSettings) {
            this.props.setResponsiveMode(this.props.responsiveSettings[0]);
        }
    }

    updateFlexProperty = (property, value) => this.props.updateSettingsProperty('flex', property, value);

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
                        <Icon className={this.props.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <FlexContainerProperties
                                properties={this.props.getSettingsByProperty('flex', 'properties')}
                                storeValue={this.props.getStoreSettingsByProperty('flex', 'properties')}
                                defaultValue={this.props.getDefaultSettingsByProperty('flex', 'properties')}
                                updateStateProps={this.updateFlexProperty}
                            />
                        </Choices>
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

const WrappedComponent = FieldWrapper(FlexContainer);
export default WrappedComponent;

export const FlexContainerForComponent = FieldWrapper(FlexContainer);
export const FlexContainerForSection = FieldWrapperOfSection(FlexContainer);


