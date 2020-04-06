import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentExtension} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';
import AssetPreview from '../../components/AssetPreview';

import ImageUploader from '../../interfaces/ImageUploader';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Margin from '../../interfaces/Margin';
import BorderWidth from '../../interfaces/BorderWidth';
import Radius from '../../interfaces/Radius';
import ColorPicker from '../../interfaces/ColorPicker';
import Alignment from '../../interfaces/Alignment';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column, Row} from './styled';

class SingleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorViewBorder: false
        };
    }

    componentDidMount() {
    };

    componentDidUpdate(prevProps) {
    }

    getAlt = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].alt && this.props.content.images[0].alt[this.props.indexLanguage] ? this.props.content.images[0].alt[this.props.indexLanguage] : '';

    getAsset = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].asset ? this.props.content.images[0].asset[this.props.currentResponsiveMode] : null

    getAssetToPreview = () => {
        if (!this.props.content.images || !this.props.content.images[0] || !this.props.content.images[0].asset) return null;
        if (this.props.responsiveContent.includes(this.props.currentResponsiveMode)) {
            return this.props.content.images[0].asset[this.props.currentResponsiveMode];
        } else {
            return this.props.content.images[0].asset[this.props.responsiveContent[0]];
        }
    }
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));

    updateBorder = (property, value) => this.props.updateSettingsProperty('border', property, value);
    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

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
                        <ImageUploader asset={this.getAsset()}
                                       alt={this.getAlt()}
                                       index={0}
                                       updateStateAsset={this.props.updateContentSubProperty}
                                       updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                        />
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column>
                                <Row>
                                    <AssetPreview
                                        locale={this.props.extensionInfo.extension.locales ? this.props.extensionInfo.extension.locales.default : null}
                                        asset={this.getAssetToPreview()}
                                    />
                                </Row>
                            </Column>
                            <Column>
                                <Row>
                                    <Size size={this.props.getSettingsByProperty('basis','size')}
                                          storeValueSize={this.props.getStoreSettingsByProperty('basis','size')}
                                          defaultSize={this.props.getDefaultSettingsByProperty('basis','size')}
                                          updateStateProps={this.updateBasis}
                                    />
                                </Row>
                                <Row>
                                    <Padding padding={this.props.getSettingsByProperty('basis','padding')}
                                             storeValuePadding={this.props.getStoreSettingsByProperty('basis','padding')}
                                             defaultPadding={this.props.getDefaultSettingsByProperty('basis','padding')}
                                             updateStateProps={this.updateBasis}
                                    />
                                    <Margin margin={this.props.getSettingsByProperty('basis','margin')}
                                            storeValueMargin={this.props.getStoreSettingsByProperty('basis','margin')}
                                            defaultMargin={this.props.getDefaultSettingsByProperty('basis','margin')}
                                            updateStateProps={this.updateBasis}
                                    />

                                </Row>
                            </Column>

                            <Column></Column>
                            <Column  className={this.state.openColorViewBorder ? 'hidden' : ''}>
                                <Alignment alignment={this.props.getSettingsByProperty('basis','alignment')}
                                           storeValueAlignment={this.props.getStoreSettingsByProperty('basis','alignment')}
                                           defaultAlignment={this.props.getDefaultSettingsByProperty('basis','alignment')}
                                           updateStateProps={this.updateBasis}  />
                            </Column>

                            <Column className={this.state.openColorViewBorder ? 'full-width' : ''}>
                                <ColorPicker hidden={false}
                                             color={this.props.getSettingsByProperty('border','color')}
                                             opacity={this.props.getSettingsByProperty('border','opacity')}
                                             storeValueColor={this.props.getStoreSettingsByProperty('border','color')}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('border','opacity')}
                                             defaultColor={this.props.getDefaultSettingsByProperty('border','color')}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('border','opacity')}
                                             openView={this.state.openColorViewBorder}
                                             updateStateProps={this.updateBorder}
                                             toggleOpenView={this.toggleOpenViewBorder}
                                             customName={'Border'}
                                />
                            </Column>
                            <Column  className={this.state.openColorViewBorder ? 'hidden' : ''}>
                                <Radius radius={this.props.getSettingsByProperty('border','radius')}
                                        storeValueRadius={this.props.getStoreSettingsByProperty('border','radius')}
                                        defaultRadius={this.props.getDefaultSettingsByProperty('border','radius')}
                                        updateStateProps={this.updateBorder}
                                />
                                <BorderWidth width={this.props.getSettingsByProperty('border','width')}
                                             storeValueWidth={this.props.getStoreSettingsByProperty('border','width')}
                                             defaultWidth={this.props.getDefaultSettingsByProperty('border','width')}
                                             updateStateProps={this.updateBorder}
                                />
                            </Column>
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

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state),
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(SingleImage));
export default WrappedComponent;
export const SingleImageForSection = FieldWrapperOfSection(connect(mapStateToProps)(SingleImage));
