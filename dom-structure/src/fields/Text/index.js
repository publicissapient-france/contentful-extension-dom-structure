import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isEmpty from "lodash/isEmpty"
import {
    getCurrentLanguage,
    getCurrentStyle
} from '../../actions';

import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import TextPreview from '../../components/TextPreview';
import ResponsiveToggle from "../../components/ResponsiveToggle";
import LanguageToggle from '../../containers/LanguageToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import InputText from '../../interfaces/InputText'
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker'
import Seo from '../../interfaces/Seo'

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column} from './styled'
import FieldWrapper from "../../HOC/FieldWrapper";


class Text extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openPreview: false,
        }
    }

    componentDidMount() {
        console.log('props on moount text', this.props);
        if (isEmpty(this.props.content)) this.initContent()
        if (isEmpty(this.props.settings) && this.props.themes) this.initSettings()
    };

    componentDidUpdate(prevProps, prevState) {}

    initContent = () => {
        const initialContent = {
            text : {}
        }
        this.props.initContent(initialContent);
    }
    initSettings = () => {
        let initValue = this.props.defaultSettings;

        new Promise( (resolve, reject) => {

            this.props.responsiveSettings.map((mode) => {
                let selectedTheme = this.getThemeValue(this.props.themes, initValue.font[mode].theme);
                if(selectedTheme){
                    initValue.font[mode].family = selectedTheme.family;
                    initValue.font[mode].typeface = selectedTheme.typeface;
                    initValue.font[mode].weight = selectedTheme.weight;
                    initValue.font[mode].size = selectedTheme.fontsize[mode];
                    initValue.font[mode].lineHeight = selectedTheme.lineheight[mode];
                }
            })
            resolve();
        }).then(() => {
            this.props.initSettings(initValue)
        })
    }

    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return
        return themes.find(theme => theme.name === selectedTheme);
    }

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));

    getText = () => this.props.content.text && this.props.content.text[this.props.indexLanguage] ? this.props.content.text[this.props.indexLanguage] : '';

    render() {
        const {name} = this.props;

        if (!this.props.settings) return null
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
                                          action={this.props.toggleResponsiveMode}/>
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
                            <Column className={this.state.openPreview ? 'full-width' : ''}>
                                <TextPreview hidden={this.state.openColorView}
                                             color={this.props.getSettingsProperty('color')}
                                             font={this.props.getSettingsProperty('font')}
                                             text={this.props.getSettingsProperty('text')}
                                             opacity={this.props.getSettingsProperty('opacity')}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}
                                />
                                <ColorPicker hidden={this.state.openPreview}
                                             color={this.props.getSettingsProperty('color')}
                                             opacity={this.props.getSettingsProperty('opacity')}
                                             storeValueColor={this.props.getStoreSettingsProperty('color')}
                                             storeValueOpacity={this.props.getStoreSettingsProperty('opacity')}
                                             defaultColor={this.props.getDefaultSettingsProperty('color')}
                                             defaultOpacity={this.props.getDefaultSettingsProperty('opacity')}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.props.updateSettings}
                                             toggleOpenView={this.toggleOpenView}
                                />
                                <Seo hidden={this.state.openPreview || this.state.openColorView}
                                     seo={this.props.getSettingsPropertyNoResponsive('seo')}
                                     defaultSeo={this.props.getDefaultSettingsPropertyNoResponsive('seo')}
                                     storeValueSeo={this.props.getStoreSettingsPropertyNoResponsive('seo')}
                                     updateStateProps={this.props.updateSettingsNoResponsive}
                                />
                            </Column>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                                <Typography font={this.props.getSettingsProperty('font')}
                                            text={this.props.getSettingsProperty('text')}
                                            defaultFont={this.props.getDefaultSettingsProperty('font')}
                                            defaultText={this.props.getDefaultSettingsProperty('text')}
                                            storeValueFont={this.props.getStoreSettingsProperty('font')}
                                            storeValueText={this.props.getStoreSettingsProperty('text')}
                                            updateStateProps={this.props.updateSettings}
                                            currentMode={this.props.currentResponsiveMode}
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

Text.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nameProperty: PropTypes.string.isRequired,
    typeField: PropTypes.string.isRequired,
    language: PropTypes.number,
    responsiveContent: PropTypes.array,
    responsiveSettings: PropTypes.array,
    defaultSettings: PropTypes.object
};
const mapStateToProps = state => ({
    indexLanguage: getCurrentLanguage(state).language,
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Text))
export default WrappedComponent;
