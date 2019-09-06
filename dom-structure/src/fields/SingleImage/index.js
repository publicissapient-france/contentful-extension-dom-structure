import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentExtension } from '../../actions';

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

import { Icon } from '../../style/styledComponents';
import { Banner, Field } from '../../style/styledComponentsFields';
import { ChoiceItemsConfirm, Content, Settings, Choices, Column } from './styled';

class SingleImage extends Component {
    componentDidMount () {};

    componentDidUpdate (prevProps) {}

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

    render () {
        const { name } = this.props;

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
                            <AssetPreview
                                locale={this.props.extensionInfo.extension.locales ? this.props.extensionInfo.extension.locales.default : null}
                                asset={this.getAssetToPreview()}
                            />
                            <Column>
                                <Size size={this.props.getSettingsProperty('size')}
                                    storeValueSize={this.props.getStoreSettingsProperty('size')}
                                    defaultSize={this.props.getDefaultSettingsProperty('size')}
                                    updateStateProps={this.props.updateSettings}
                                />
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
