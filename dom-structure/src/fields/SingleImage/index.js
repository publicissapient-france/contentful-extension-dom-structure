import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentExtension} from '../../actions';
import { getAlt, getAsset, getAssetToPreview} from "../../utils/Fields/getters";
import isEmpty from "lodash/isEmpty";

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';
import AssetPreview from '../../components/AssetPreview';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

import ImageUploader from '../../interfaces/ImageUploader';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Margin from '../../interfaces/Margin';
import BorderWidth from '../../interfaces/BorderWidth';
import Radius from '../../interfaces/Radius';
import ColorPicker from '../../interfaces/ColorPicker';
import Alignment from '../../interfaces/Alignment';

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Column, Row} from './styled';

class SingleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorViewBorder: false
        };
    }

    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));

    updateBorder = (property, value) => this.props.updateSettingsProperty('border', property, value);
    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

    render() {
        const {updated, content, indexLanguage, currentResponsiveMode, responsiveContent} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.content) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <ImageUploader asset={getAsset(content, currentResponsiveMode)}
                                               alt={getAlt(content, indexLanguage)}
                                               index={0}
                                               updateStateAsset={this.props.updateContentSubProperty}
                                               updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                                />
                            </Content>
                            : null
                    }
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column>
                                <Row>
                                    <AssetPreview
                                        locale={this.props.extensionInfo.extension.locales ? this.props.extensionInfo.extension.locales.default : null}
                                        asset={getAssetToPreview(content, currentResponsiveMode, responsiveContent)}
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
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
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
