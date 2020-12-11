import React, {Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { getText} from "../../utils/Fields/getters";
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

import InputText from '../../interfaces/InputText';
import Padding from '../../interfaces/Padding';
import TypeSystem from '../../interfaces/system/TypeSystem';
import BorderSystem from '../../interfaces/system/BorderSystem';

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Column} from './styled';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";


class Text extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.settings && this.props.getSettingsByProperty('typography', 'font')) {
            if (!Object.values(this.props.settings.typography)[0].font.family && this.props.themes) {
                this.props.initFont('typography');
            }
        }
    }

    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

    render() {
        const {updated, content, indexLanguage, currentResponsiveMode} = this.props;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.content) && this.props.openContent ?
                            <Content>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'text'}
                                           defaultValue={getText(content, indexLanguage)}/>
                            </Content>
                            : null
                    }
                    {
                        !isEmpty(this.props.settings) && this.props.openSettings ?
                            <Settings>
                                <TypeSystem label={null}
                                            useSeo
                                            propertyName={'typography'}
                                            getSettingsByProperty={this.props.getSettingsByProperty}
                                            getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                            getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                            updateSettingsProperty={this.props.updateSettingsProperty}
                                            currentResponsiveMode={currentResponsiveMode}
                                            getSettingsPropertyNoResponsive={this.props.getSettingsPropertyNoResponsive}
                                            getDefaultSettingsPropertyNoResponsive={this.props.getDefaultSettingsPropertyNoResponsive}
                                            getStoreSettingsPropertyNoResponsive={this.props.getStoreSettingsPropertyNoResponsive}
                                            updateSettingsNoResponsive={this.props.updateSettingsNoResponsive}
                                />
                                <Choices>
                                    <Column/>
                                    <Column>
                                        <Padding hidden={false}
                                                 padding={this.props.getSettingsByProperty('basis', 'padding')}
                                                 storeValuePadding={this.props.getStoreSettingsByProperty('basis', 'padding')}
                                                 defaultPadding={this.props.getDefaultSettingsByProperty('basis', 'padding')}
                                                 updateStateProps={this.updateBasis}
                                        />
                                    </Column>
                                </Choices>
                                <BorderSystem
                                    label={null}
                                    propertyName={'border'}
                                    getSettingsByProperty={this.props.getSettingsByProperty}
                                    getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                    getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                    updateSettingsProperty={this.props.updateSettingsProperty}
                                />
                            </Settings>
                            : null
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Text));
export default WrappedComponent;
export const TextForSection = FieldWrapperOfSection(connect(mapStateToProps)(Text));

