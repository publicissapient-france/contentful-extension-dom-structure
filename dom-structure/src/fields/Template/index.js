import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty'
import {getAlt, getAsset} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";
import ColorPicker from '../../interfaces/ColorPicker';
import Padding from '../../interfaces/Padding'
import Margin from '../../interfaces/Margin'
import Shadow from '../../interfaces/Shadow'
import Size from '../../interfaces/Size'
import ImageUploader from '../../interfaces/ImageUploader';
import Gradient from '../../interfaces/Gradient';
import BackgroundProperties from '../../interfaces/BackgroundProperties';

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Column, Row} from './styled';
import BorderSystem from "../../interfaces/system/BorderSystem";

class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false
        };
    }

    componentDidMount() {
        console.log('TEMPLATE');

    };

    componentDidUpdate(prevProps) {
        if (this.props.responsiveSettings !== prevProps.responsiveSettings) {
            this.props.setResponsiveMode(this.props.responsiveSettings[0]);
        }

        /*if (this.props.settings && this.props.settings.basis) {
            if (!Object.values(this.props.settings.basis)[0].shadow) {
                this.initShadow();
            }
        }

        if (this.props.settings && this.props.settings.basis) {
            if(Object.values(this.props.settings.basis)[0].color && !Object.values(this.props.settings.basis)[0].color.gradient && Object.values(this.props.settings.basis)[0].color.gradient !== '' ){
                if (!Object.values(this.props.settings.basis)[0].color.gradient) {
                    this.initGradient();
                }
            }

        }*/
    }

    /*initShadow = () => {
        let initBasis = this.props.settings.basis;
        let initShadow = { value : 'none'};
        new Promise((resolve, reject) => {
            this.props.responsiveSettings.map(mode => {
                    initBasis[mode].shadow = initShadow;
            });
            resolve();
        }).then(() => {
            this.props.initSettingsProperty('basis', initBasis);
        });
    }

    initGradient = () => {
        console.log('init gradient')
        let initBasis = this.props.settings.basis;
        let initGradient = '';
        new Promise((resolve, reject) => {
            this.props.responsiveSettings.map(mode => {
                    initBasis[mode].color.gradient = initGradient;
            });
            resolve();
        }).then(() => {
            this.props.initSettingsProperty('basis', initBasis);
        });
    }*/

    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));

    render() {
        const {updated, content, indexLanguage, currentResponsiveMode} = this.props;

        if (!this.props.settings) return null;

        return (
            <div className={this.props.editorOnly && isEmpty(this.props.defaultContent) ? 'hidden' : ''}>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.defaultContent) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <ImageUploader asset={getAsset(content, currentResponsiveMode)}
                                               alt={getAlt(content, indexLanguage)}
                                               index={0}
                                               updateStateAsset={this.props.updateContentSubProperty}
                                               updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                                />
                            </Content> : null
                    }

                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column className={this.state.openColorView ? 'full-width' : ''}>
                                <ColorPicker hidden={false}
                                             color={this.props.getSettingsByProperty('basis', 'color')}
                                             opacity={this.props.getSettingsByProperty('basis', 'opacity')}
                                             storeValueColor={this.props.getStoreSettingsByProperty('basis', 'color')}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('basis', 'color')}
                                             defaultColor={this.props.getDefaultSettingsByProperty('basis', 'color')}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('basis', 'opacity')}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateBasis}
                                             toggleOpenView={this.toggleOpenView}
                                />
                            </Column>
                            <Column className={this.state.openColorView ? 'hidden' : ''}>
                                <Row>
                                    <Gradient color={this.props.getSettingsByProperty('basis', 'color')}
                                              storeValue={this.props.getStoreSettingsByProperty('basis', 'color')}
                                              defaultValue={this.props.getDefaultSettingsByProperty('basis', 'color')}
                                              updateStateProps={this.updateBasis}/>
                                </Row>
                                <Row>
                                    <BackgroundProperties
                                        value={this.props.getSettingsByProperty('basis', 'background')}
                                        storeValue={this.props.getStoreSettingsByProperty('basis', 'background')}
                                        defaultValue={this.props.getDefaultSettingsByProperty('basis', 'background')}
                                        updateStateProps={this.updateBasis}/>
                                </Row>
                                <Row>
                                    <Size size={this.props.getSettingsByProperty('basis', 'size')}
                                          storeValueSize={this.props.getStoreSettingsByProperty('basis', 'size')}
                                          defaultSize={this.props.getDefaultSettingsByProperty('basis', 'size')}
                                          updateStateProps={this.updateBasis}
                                    />
                                </Row>
                                <Row>
                                    <Padding hidden={this.state.openColorView}
                                             padding={this.props.getSettingsByProperty('basis', 'padding')}
                                             storeValuePadding={this.props.getStoreSettingsByProperty('basis', 'padding')}
                                             defaultPadding={this.props.getDefaultSettingsByProperty('basis', 'padding')}
                                             updateStateProps={this.updateBasis}
                                    />
                                    <Margin hidden={this.state.openColorView}
                                            margin={this.props.getSettingsByProperty('basis', 'margin')}
                                            storeValueMargin={this.props.getStoreSettingsByProperty('basis', 'margin')}
                                            defaultMargin={this.props.getDefaultSettingsByProperty('basis', 'margin')}
                                            updateStateProps={this.updateBasis}
                                    />
                                </Row>
                                <Row></Row>
                            </Column>
                            <Column/>
                            <Column>
                                <Shadow shadow={this.props.getSettingsByProperty('basis', 'shadow')}
                                        storeValueShadow={this.props.getStoreSettingsByProperty('basis', 'shadow')}
                                        defaultShadow={this.props.getDefaultSettingsByProperty('basis', 'shadow')}
                                        updateStateProps={this.updateBasis}/>
                                <Shadow shadow={this.props.getSettingsByProperty('basis', 'shadow2')}
                                        storeValueShadow={this.props.getStoreSettingsByProperty('basis', 'shadow2')}
                                        defaultShadow={this.props.getDefaultSettingsByProperty('basis', 'shadow2')}
                                        updateStateProps={this.updateBasis}
                                        customTarget={'shadow2'}
                                />
                            </Column>
                            <BorderSystem
                                label={null}
                                propertyName={'border'}
                                getSettingsByProperty={this.props.getSettingsByProperty}
                                getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                updateSettingsProperty={this.props.updateSettingsProperty}
                                currentResponsiveMode={currentResponsiveMode}
                            />

                        </Choices>
                    </Settings>
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper(Template);
export default WrappedComponent;

export const TemplateForComponent = FieldWrapper(Template);
export const TemplateForSection = FieldWrapperOfSection(Template);

