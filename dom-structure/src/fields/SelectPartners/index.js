import React, {Component} from 'react';

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";
import PartnerSelector from '../../interfaces/PartnerSelector';
import ImageSystem from '../../interfaces/system/ImageSystem'

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices} from './styled';

class SelectPartners extends Component {

    getData = () => this.props.content.data ? this.props.content.data : [];
    getPriority = () => this.props.content.priority ? this.props.content.priority : [];

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

    render() {
        const {updated} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {this.props.openContent &&
                    <Content>
                        <Choices>
                            <PartnerSelector updateContent={this.props.updateContent}
                                             partners={this.getData()}
                                             priority={this.getPriority()}
                                             forComponent={this.props.indexSection && this.props.indexComponent ? true : false}
                            />
                        </Choices>
                    </Content>
                    }
                    {
                        this.props.openSettings &&
                        <Settings>
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
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue}
                                 updating={this.props.updateField}/>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper((SelectPartners));
export default WrappedComponent;
export const SelectPartnersForComponent = WrappedComponent;
export const SelectPartnersForSection = FieldWrapperOfSection((SelectPartners));

