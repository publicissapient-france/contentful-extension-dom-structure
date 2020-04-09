import React, {Component} from 'react';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import TextPreview from '../../components/TextPreview';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import InputIframe from '../../interfaces/InputIframe';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Padding from '../../interfaces/Padding';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column, Row} from './styled';
import {getCurrentStyle} from "../../actions";
import {connect} from "react-redux";
import isEmpty from "lodash/isEmpty";

class Iframe extends Component {
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

    getHtml = () => this.props.content.html &&  this.props.content.html[this.props.indexLanguage]  ? this.props.content.html[this.props.indexLanguage] : '';

    updateTypography = (property, value) => this.props.updateSettingsProperty('typography', property, value);
    updateBasis = (property, value) => this.props.updateSettingsProperty('basis', property, value);

    render() {
        const {indexLanguage, name} = this.props;
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
                        {
                            !isEmpty(this.props.content) ?
                                <Icon className={this.props.openContent ? 'active' : ''}
                                      onClick={() => {
                                          this.props.toggleContent();
                                      }}><SvgContent/></Icon>
                                : null
                        }
                    </div>
                </Banner>
                <Field>
                    {
                        !isEmpty(this.props.content) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <InputIframe currentLanguage={indexLanguage}
                                               action={this.props.updateTranlatedContent} targetProperty={'html'}
                                               defaultValue={this.getHtml()}/>
                            </Content>
                            : null
                    }
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
const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Iframe));
export default WrappedComponent;
