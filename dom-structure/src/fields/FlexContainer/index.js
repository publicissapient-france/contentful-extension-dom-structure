import React, {Component} from 'react';
import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';
import FlexContainerProperties from '../../interfaces/FlexContainerProperties';
import {Settings, Choices, Field} from './styled';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class FlexContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidUpdate(prevProps) {
        if (this.props.responsiveSettings !== prevProps.responsiveSettings) {
            this.props.setResponsiveMode(this.props.responsiveSettings[0]);
        }
    }

    updateFlexProperty = (property, value) => this.props.updateSettingsProperty('flex', property, value);

    render() {
        const { updated } = this.props
        if (!this.props.settings) return null;

        return (
            <div>
                <FieldBanner {...this.props}/>
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
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper(FlexContainer);
export default WrappedComponent;

export const FlexContainerForComponent = FieldWrapper(FlexContainer);
export const FlexContainerForSection = FieldWrapperOfSection(FlexContainer);


