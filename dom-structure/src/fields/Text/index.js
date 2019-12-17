import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import TextPreview from '../../components/TextPreview';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import InputText from '../../interfaces/InputText';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Seo from '../../interfaces/Seo';
import Padding from '../../interfaces/Padding';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column, Row} from './styled';

class Text extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openPreview: false,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.settings && this.props.getSettingsByProperty('typography','font')) {
            if (!Object.values(this.props.settings.typography)[0].font.family && this.props.themes) {
                this.initFont();
            }
        }
    }

    initFont = () => {
        let initFont = this.props.settings.typography;

        new Promise((resolve, reject) => {
            this.props.responsiveSettings.map(mode => {
                let selectedTheme = this.getThemeValue(this.props.themes, initFont[mode].font.theme);
                if (selectedTheme) {
                    initFont[mode].font.family = selectedTheme.family;
                    initFont[mode].font.typeface = selectedTheme.typeface;
                    initFont[mode].font.weight = selectedTheme.weight;
                    initFont[mode].font.size = selectedTheme.fontsize[mode];
                    initFont[mode].font.lineHeight = selectedTheme.lineheight[mode];
                }
            });
            resolve();
        }).then(() => {
            this.props.initSettingsProperty('typography', initFont);
        });
    }


    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return;
        return themes.find(theme => theme.name === selectedTheme);
    }

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));

    getText = () => this.props.content.text && this.props.content.text[this.props.indexLanguage] ? this.props.content.text[this.props.indexLanguage] : '';

    updateTypography = (property, value) => this.props.updateSettingsProperty('typography', property, value);
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
                        <InputText action={this.props.updateTranlatedContent} targetProperty={'text'}
                                   defaultValue={this.getText()}/>
                    </Content>

                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
                                <Row>
                                    <TextPreview hidden={this.state.openColorView}
                                                 color={this.props.getSettingsByProperty('typography','color')}
                                                 font={this.props.getSettingsByProperty('typography','font')}
                                                 text={this.props.getSettingsByProperty('typography','text')}
                                                 opacity={this.props.getSettingsByProperty('typography','opacity')}
                                                 open={this.state.openPreview}
                                                 toggleOpenPreview={this.toggleOpenPreview}
                                    />
                                    <ColorPicker hidden={this.state.openPreview}
                                                 color={this.props.getSettingsByProperty('typography','color')}
                                                 opacity={this.props.getSettingsByProperty('typography','opacity')}
                                                 storeValueColor={this.props.getStoreSettingsByProperty('typography','color')}
                                                 storeValueOpacity={this.props.getStoreSettingsByProperty('typography','opacity')}
                                                 defaultColor={this.props.getDefaultSettingsByProperty('typography','color')}
                                                 defaultOpacity={this.props.getDefaultSettingsByProperty('typography','opacity')}
                                                 openView={this.state.openColorView}
                                                 updateStateProps={this.updateTypography}
                                                 toggleOpenView={this.toggleOpenView}
                                    />
                                </Row>
                                <Seo hidden={this.state.openPreview || this.state.openColorView}
                                     seo={this.props.getSettingsPropertyNoResponsive('seo')}
                                     defaultSeo={this.props.getDefaultSettingsPropertyNoResponsive('seo')}
                                     storeValueSeo={this.props.getStoreSettingsPropertyNoResponsive('seo')}
                                     updateStateProps={this.props.updateSettingsNoResponsive}
                                />
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                <Typography font={this.props.getSettingsByProperty('typography','font')}
                                            text={this.props.getSettingsByProperty('typography','text')}
                                            defaultFont={this.props.getDefaultSettingsByProperty('typography','font')}
                                            defaultText={this.props.getDefaultSettingsByProperty('typography','text')}
                                            storeValueFont={this.props.getStoreSettingsByProperty('typography','font')}
                                            storeValueText={this.props.getStoreSettingsByProperty('typography','text')}
                                            updateStateProps={this.updateTypography}
                                            currentMode={this.props.currentResponsiveMode}
                                />
                            </Column>
                        </Choices>
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
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Text));
export default WrappedComponent;
