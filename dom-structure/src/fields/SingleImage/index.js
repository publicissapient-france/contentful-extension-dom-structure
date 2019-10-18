import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentExtension} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';

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

    getBorder = (property, event) => this.props.getSettingsProperty('border', event) ? this.props.getSettingsProperty('border', event)[property] : null
    getBorderStore = (property, event) => this.props.getStoreSettingsProperty('border', event) ? this.props.getStoreSettingsProperty('border', event)[property] : null
    getBorderDefault = (property, event) => this.props.getDefaultSettingsProperty('border', event) ? this.props.getDefaultSettingsProperty('border', event)[property] : null

    updateBorderProperty = (property, value, event) => {
        this.props.updateSettingsSubProperty('border', value , property, event);
    }

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
                                    <Size size={this.props.getSettingsProperty('size')}
                                          storeValueSize={this.props.getStoreSettingsProperty('size')}
                                          defaultSize={this.props.getDefaultSettingsProperty('size')}
                                          updateStateProps={this.props.updateSettings}
                                    />
                                </Row>
                                <Row>
                                    <Padding padding={this.props.getSettingsProperty('padding')}
                                             storeValuePadding={this.props.getStoreSettingsProperty('padding')}
                                             defaultPadding={this.props.getDefaultSettingsProperty('padding')}
                                             updateStateProps={this.props.updateSettings}
                                    />
                                    <Margin margin={this.props.getSettingsProperty('margin')}
                                            storeValueMargin={this.props.getStoreSettingsProperty('margin')}
                                            defaultMargin={this.props.getDefaultSettingsProperty('margin')}
                                            updateStateProps={this.props.updateSettings}
                                    />

                                </Row>
                            </Column>

                            <Column className={this.state.openColorViewBorder ? 'full-width' : ''}>
                                <ColorPicker hidden={false}
                                             color={this.getBorder('color')}
                                             opacity={this.getBorder('opacity')}
                                             storeValueColor={this.getBorderStore('color')}
                                             storeValueOpacity={this.getBorderStore('opacity')}
                                             defaultColor={this.getBorderDefault('color')}
                                             defaultOpacity={this.getBorderDefault('opacity')}
                                             openView={this.state.openColorViewBorder}
                                             updateStateProps={this.updateBorderProperty}
                                             toggleOpenView={this.toggleOpenViewBorder}
                                             customName={'Border'}
                                />
                            </Column>
                            <Column  className={this.state.openColorViewBorder ? 'hidden' : ''}>
                                <Radius radius={this.getBorder('radius')}
                                        storeValueRadius={this.getBorderStore('radius')}
                                        defaultRadius={this.getBorderDefault('radius')}
                                        updateStateProps={this.updateBorderProperty}
                                />
                                <BorderWidth width={this.getBorder('width')}
                                             storeValueWidth={this.getBorderStore('width')}
                                             defaultWidth={this.getBorderDefault('width')}
                                             updateStateProps={this.updateBorderProperty}
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
