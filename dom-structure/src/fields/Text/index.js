import React, {Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { getText} from "../../utils/Fields/getters";
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import TextPreview from '../../components/TextPreview';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

import InputText from '../../interfaces/InputText';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Seo from '../../interfaces/Seo';
import Padding from '../../interfaces/Padding';
import Radius from '../../interfaces/Radius';
import BorderWidth from '../../interfaces/BorderWidth';

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Column, Row} from './styled';

class Text extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openPreview: false,
            openColorViewBorder: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.settings && this.props.getSettingsByProperty('typography', 'font')) {
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
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));

    updateTypography = (property, value) => this.props.updateSettingsProperty('typography', property, value);
    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);
    updateBorder = (property, value, event) => this.props.updateSettingsProperty('border', property, value, event);

    render() {
        const {updated, content, indexLanguage} = this.props;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.content) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'text'}
                                           defaultValue={getText(content, indexLanguage)}/>
                            </Content>
                            : null
                    }
                    {
                        !isEmpty(this.props.settings) ?

                            <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                                <Choices>
                                    <Column
                                        className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
                                        <Row>
                                            <TextPreview hidden={this.state.openColorView}
                                                         color={this.props.getSettingsByProperty('typography', 'color')}
                                                         font={this.props.getSettingsByProperty('typography', 'font')}
                                                         text={this.props.getSettingsByProperty('typography', 'text')}
                                                         opacity={this.props.getSettingsByProperty('typography', 'opacity')}
                                                         open={this.state.openPreview}
                                                         toggleOpenPreview={this.toggleOpenPreview}
                                            />
                                            <ColorPicker hidden={this.state.openPreview}
                                                         color={this.props.getSettingsByProperty('typography', 'color')}
                                                         opacity={this.props.getSettingsByProperty('typography', 'opacity')}
                                                         storeValueColor={this.props.getStoreSettingsByProperty('typography', 'color')}
                                                         storeValueOpacity={this.props.getStoreSettingsByProperty('typography', 'opacity')}
                                                         defaultColor={this.props.getDefaultSettingsByProperty('typography', 'color')}
                                                         defaultOpacity={this.props.getDefaultSettingsByProperty('typography', 'opacity')}
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
                                    <Column
                                        className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                        <Typography font={this.props.getSettingsByProperty('typography', 'font')}
                                                    text={this.props.getSettingsByProperty('typography', 'text')}
                                                    defaultFont={this.props.getDefaultSettingsByProperty('typography', 'font')}
                                                    defaultText={this.props.getDefaultSettingsByProperty('typography', 'text')}
                                                    storeValueFont={this.props.getStoreSettingsByProperty('typography', 'font')}
                                                    storeValueText={this.props.getStoreSettingsByProperty('typography', 'text')}
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
                                <Choices>
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
                                </Choices>
                            </Settings>
                            : null
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Text));
export default WrappedComponent;
