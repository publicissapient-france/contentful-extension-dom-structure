import React, {Component} from 'react';
import {connect} from "react-redux";
import isEmpty from "lodash/isEmpty";
import {getCurrentStyle} from "../../actions";
import { getHtml} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import TextPreview from '../../components/TextPreview';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

import InputMarkdown from '../../interfaces/InputMarkdown';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Padding from '../../interfaces/Padding';

import {Field} from '../../style/styledComponentsFields';
import {Content, Settings, Choices, Column, Row} from './styled';

class TextMarkdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openPreview: false
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

    updateTypography = (property, value) => this.props.updateSettingsProperty('typography', property, value);
    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

    render() {
        const {updated, indexLanguage, content} = this.props;
        if (!this.props.settings) return null;

        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.content) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <InputMarkdown currentLanguage={indexLanguage}
                                               action={this.props.updateTranlatedContent} targetProperty={'html'}
                                               defaultValue={getHtml(content, indexLanguage)}/>
                            </Content>
                            : null
                    }

                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
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
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
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
                    </Settings>
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});
const WrappedComponent = FieldWrapper(connect(mapStateToProps)(TextMarkdown));
export default WrappedComponent;
