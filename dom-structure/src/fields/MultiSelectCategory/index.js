import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import CategoryMultiSelector from '../../interfaces/CategoryMultiSelector';
import TypeSystem from '../../interfaces/system/TypeSystem'
import ImageSystem from '../../interfaces/system/ImageSystem'

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices} from './styled';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class MultiSelectCategory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        ['tagline', 'title', 'text'].map(prop => {
            if (this.props.settings && this.props.getSettingsByProperty(prop, 'font')) {
                if (!Object.values(this.props.settings[prop])[0].font.family && this.props.themes) {
                    this.props.initFont(prop);
                }
            }
        })
    }

    getData = () => this.props.content.data ? this.props.content.data : [];
    getPriority = () => this.props.content.priority ? this.props.content.priority : [];

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

    render() {
        const { updated } = this.props
        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <Choices>
                            <CategoryMultiSelector updateContent={this.props.updateContent}
                                              categories={this.getData()}
                                              priority={this.getPriority()}
                                              toggleCurrentEvent={this.toggleCurrentEvent}
                                              multichoices
                            />


                        </Choices>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        {
                            ['tagline', 'title', 'text'].map(prop => {
                                return <TypeSystem key={prop}
                                                   label={prop}
                                                   propertyName={prop}
                                                   usePadding
                                                   getSettingsByProperty={this.props.getSettingsByProperty}
                                                   getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                                   getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                                   updateSettingsProperty={this.props.updateSettingsProperty}
                                                   currentResponsiveMode={this.props.currentResponsiveMode}
                                />
                            })
                        }

                        {
                            ['image'].map(prop => {
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
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(MultiSelectCategory));
export default WrappedComponent;
export const MultiSelectCategoryForComponent = WrappedComponent;
export const MultiSelectCategoryForSection = FieldWrapperOfSection(connect(mapStateToProps)(MultiSelectCategory));

