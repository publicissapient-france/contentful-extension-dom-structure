import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCurrentExtension} from "../../actions";
import {getAltByIndex, getAssetByIndex, getAssetToPreviewByIndex} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from '../../HOC/FieldWrapperOfSection';
import AssetPreview from '../../components/AssetPreview';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";
import ImageUploader from '../../interfaces/ImageUploader';
import Size from '../../interfaces/Size';
import Position from '../../interfaces/Position';

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Row} from './styled';

class MultipleImages extends Component {
    updateBasis = (property, value, i) => this.props.updateSettingsProperty('basis', property, value, i);

    render() {
        const {updated, content, indexLanguage, currentResponsiveMode, responsiveContent} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        this.props.openContent &&
                        <Content>
                            {
                                this.props.content.images
                                    ? this.props.content.images.map((image, i) => {
                                        return <ImageUploader index={i} key={i}
                                                              currentResponsiveMode={currentResponsiveMode}
                                                              asset={getAssetByIndex(content, currentResponsiveMode, i)}
                                                              alt={getAltByIndex(content, indexLanguage, i)}
                                                              updateStateAsset={this.props.updateContentSubProperty}
                                                              updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                                        />;
                                    }) : null
                            }
                        </Content>
                    }
                    {
                        this.props.openSettings &&
                        <Settings>
                            <Choices>
                                {
                                    this.props.content.images
                                        ? this.props.content.images.map((image, i) => {
                                            return <Row key={i}>
                                                <AssetPreview
                                                    locale={this.props.extensionInfo.extension.locales ? this.props.extensionInfo.extension.locales.default : null}
                                                    asset={getAssetToPreviewByIndex(content, currentResponsiveMode, responsiveContent, i)}
                                                />
                                                <Size size={this.props.getSettingsByProperty('basis', 'size', i + 1)}
                                                      storeValueSize={this.props.getStoreSettingsByProperty('basis', 'size', i + 1)}
                                                      defaultSize={this.props.getDefaultSettingsByProperty('basis', 'size', i + 1)}
                                                      updateStateProps={this.updateBasis}
                                                      event={i + 1}

                                                />
                                                    {
                                                        this.props.settings.basis && this.props.settings.basis[currentResponsiveMode]&& this.props.settings.basis[currentResponsiveMode].position ?
                                                            <Position
                                                                position={this.props.getSettingsByProperty('basis', 'position', i + 1)}
                                                                storeValuePosition={this.props.getStoreSettingsByProperty('basis', 'position', i + 1)}
                                                                defaultPosition={this.props.getDefaultSettingsByProperty('basis', 'position', i + 1)}
                                                                updateStateProps={this.updateBasis}
                                                                event={i + 1}
                                                            /> : null
                                                    }

                                            </Row>;
                                        }) : null
                                }
                            </Choices>
                        </Settings>
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue}
                                 updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state),
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(MultipleImages));
export default WrappedComponent;

export const MultipleImagesForComponent = FieldWrapper(connect(mapStateToProps)(MultipleImages));
export const MultipleImagesForSection = FieldWrapperOfSection(connect(mapStateToProps)(MultipleImages));
