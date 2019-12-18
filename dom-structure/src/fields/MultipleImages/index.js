import React, { Component } from 'react';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import ImageUploader from '../../interfaces/ImageUploader';
import Size from '../../interfaces/Size';

import { Icon } from '../../style/styledComponents';
import { Banner, Field } from '../../style/styledComponentsFields';
import { ChoiceItemsConfirm, Content, Settings, Choices } from './styled';

class MultipleImages extends Component {
    componentDidMount () {};

    componentDidUpdate (prevProps) {}

    getAlt = i => this.props.content.images && this.props.content.images[i].alt && this.props.content.images[i].alt[this.props.indexLanguage] ? this.props.content.images[i].alt[this.props.indexLanguage] : '';

    getAsset = i => this.props.content.images[i] ? this.props.content.images[i].asset[this.props.currentResponsiveMode] : null;
    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

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
                        {
                            this.props.content.images
                                ? this.props.content.images.map((image, i) => {
                                    return <ImageUploader asset={this.getAsset(i)}
                                        alt={this.getAlt(i)}
                                        index={i}
                                        key={i}
                                        updateStateAsset={this.props.updateContentSubProperty}
                                        updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                                    />;
                                }) : null
                        }
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Size size={this.props.getSettingsByProperty('basis','size')}
                                  storeValueSize={this.props.getStoreSettingsByProperty('basis','size')}
                                  defaultSize={this.props.getDefaultSettingsByProperty('basis','size')}
                                  updateStateProps={this.updateBasis}
                            />
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

const WrappedComponent = FieldWrapper(MultipleImages);
export default WrappedComponent;
