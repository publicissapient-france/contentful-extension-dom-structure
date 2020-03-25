import React, {Component} from 'react';

import isEmpty from 'lodash/isEmpty'

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';

import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import ColorPicker from '../../interfaces/ColorPicker';
import Padding from '../../interfaces/Padding'
import Margin from '../../interfaces/Margin'
import Shadow from '../../interfaces/Shadow'
import Size from '../../interfaces/Size'
import ImageUploader from '../../interfaces/ImageUploader';
import Radius from '../../interfaces/Radius';
import BorderWidth from '../../interfaces/BorderWidth';


import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column, Row} from './styled';

class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openColorViewBorder: false
        };
    }

    componentDidMount() {

    };

    componentDidUpdate(prevProps) {
        if (this.props.responsiveSettings !== prevProps.responsiveSettings) {
            this.props.setResponsiveMode(this.props.responsiveSettings[0]);
        }

        if (this.props.settings && this.props.settings.basis) {
            if (!Object.values(this.props.settings.basis)[0].shadow) {
                this.initShadow();
            }
        }



    }

    initShadow = () => {
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

    getAlt = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].alt && this.props.content.images[0].alt[this.props.indexLanguage] ? this.props.content.images[0].alt[this.props.indexLanguage] : '';

    getAsset = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].asset ? this.props.content.images[0].asset[this.props.currentResponsiveMode] : null

    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);
    updateBorder = (property, value, event) => this.props.updateSettingsProperty('border', property, value, event);

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));

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
                        {!isEmpty(this.props.defaultContent) ?
                            <Icon className={this.props.openContent ? 'active' : ''}
                                  onClick={() => {
                                      this.props.toggleContent();
                                  }}><SvgContent/></Icon>
                            : null
                        }

                        <Icon className={this.props.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    {
                        !isEmpty(this.props.defaultContent) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <ImageUploader asset={this.getAsset()}
                                               alt={this.getAlt()}
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
                                <Row>

                                </Row>

                            </Column>
                            <Column className={this.state.openColorViewBorder ? 'full-width' : ''}>
                                <ColorPicker hidden={false}
                                             color={this.props.getSettingsByProperty('border', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('border', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('border', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('border', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('border', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('border', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorViewBorder}
                                             updateStateProps={this.updateBorder}
                                             toggleOpenView={this.toggleOpenViewBorder}
                                             customName={'Border'}
                                />
                            </Column>
                            <Column className={this.state.openColorViewBorder ? 'hidden' : ''}>
                                <Radius radius={this.props.getSettingsByProperty('border', 'radius')}
                                        storeValueRadius={this.props.getStoreSettingsByProperty('border', 'radius')}
                                        defaultRadius={this.props.getDefaultSettingsByProperty('border', 'radius')}
                                        updateStateProps={this.updateBorder}
                                />
                                <BorderWidth width={this.props.getSettingsByProperty('border', 'width')}
                                             storeValueWidth={this.props.getStoreSettingsByProperty('border', 'width')}
                                             defaultWidth={this.props.getDefaultSettingsByProperty('border', 'width')}
                                             updateStateProps={this.updateBorder}
                                />

                            </Column>
                            <Column/>
                            <Column>
                                <Shadow shadow={this.props.getSettingsByProperty('basis', 'shadow') }
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
                        </Choices>
                    </Settings>
                </Field>
                < ChoiceItemsConfirm
                    className={
                        !this.props.updated ? 'hidden' : ''
                    }>
                    <
                        ButtonBasic
                        label={'Cancel'}
                        disabled={
                            !this.props.updated
                        }
                        action={this.props.cancelStateValue
                        }
                    />
                    <ButtonValidate label={'Update'} disabled={!this.props.updated} action={this.props.updateField}/>
                    </ChoiceItemsConfirm>
            </div>
    );
    }
    }

    const WrappedComponent = FieldWrapper(Template);
    export default WrappedComponent;

    export const TemplateForComponent = FieldWrapper(Template);
    export const TemplateForSection = FieldWrapperOfSection(Template);


