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
import Border from '../../interfaces/Border';
import Margin from '../../interfaces/Margin';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Radius from '../../interfaces/Radius';
import BorderWidth from '../../interfaces/BorderWidth';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column, LinkSettings, Row, ChoicesContent, ChoicesCustom, ButtonEvents} from './styled';

class CTA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openColorViewBackground: false,
            openColorViewBorder: false,
            openPreview: false,
            events: ['basic', 'hover'],
            currentEvent : 'basic'
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.settings && this.props.settings.font) {
            if (!Object.values(this.props.settings.font)[0].family && this.props.themes) {
                this.initFont();
            }
        }
        if (this.state.events.length !== 0 && this.props.settings && this.props.settings[this.state.events[0]] && this.props.settings[this.state.events[0]].font) {
            if (!Object.values(this.props.settings[this.state.events[0]].font)[0].family && this.props.themes) {
                this.initFont();
            }
        }
    }

    initFont = () => {
        let initFont = this.props.defaultSettings.font;

        new Promise((resolve, reject) => {
            this.props.responsiveSettings.map(mode => {
                let selectedTheme = this.getThemeValue(this.props.themes, initFont[mode].theme);
                if (selectedTheme) {
                    initFont[mode].family = selectedTheme.family;
                    initFont[mode].typeface = selectedTheme.typeface;
                    initFont[mode].weight = selectedTheme.weight;
                    initFont[mode].size = selectedTheme.fontsize[mode];
                    initFont[mode].lineHeight = selectedTheme.lineheight[mode];
                }
            });
            resolve();
        }).then(() => {
            this.props.initSettingsProperty('font', initFont);
        });
    }


    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return;
        return themes.find(theme => theme.name === selectedTheme);
    }

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenViewBackground = () => this.setState(prevState => ({openColorViewBackground: !prevState.openColorViewBackground}));
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));
    toggleCurrentEvent = (event) => this.setState({ currentEvent : event});

    getText = () => this.props.content.text && this.props.content.text[this.props.indexLanguage] ? this.props.content.text[this.props.indexLanguage] : '';
    getLink = () => this.props.content.link && this.props.content.link[this.props.indexLanguage] ? this.props.content.link[this.props.indexLanguage] : '';
    getTarget = () => this.props.getSettingsPropertyNoResponsive('target') ? this.props.getSettingsPropertyNoResponsive('target').external : false;

    getBorder = (property, event) => this.props.getSettingsProperty('border', event) ? this.props.getSettingsProperty('border', event)[property] : null
    getBorderStore = (property, event) => this.props.getStoreSettingsProperty('border', event) ? this.props.getStoreSettingsProperty('border', event)[property] : null
    getBorderDefault = (property, event) => this.props.getDefaultSettingsProperty('border', event) ? this.props.getDefaultSettingsProperty('border', event)[property] : null

    updateBorderProperty = (property, value, event) => {
        this.props.updateSettingsSubProperty('border', value , property, event);
    }

    getBackground = (property, event) => this.props.getSettingsProperty('background', event) ? this.props.getSettingsProperty('background', event)[property] : null
    getBackgroundStore = (property, event) => this.props.getStoreSettingsProperty('background', event) ? this.props.getStoreSettingsProperty('background', event)[property] : null
    getBackgroundDefault = (property, event) => this.props.getDefaultSettingsProperty('background', event) ? this.props.getDefaultSettingsProperty('background', event)[property] : null

    updateBackgroundProperty = (property, value, event) => {
        this.props.updateSettingsSubProperty('background', value , property, event);
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
                        <ChoicesContent>
                            <Column>
                                <label>Label</label>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'text'}
                                           defaultValue={this.getText()}/>
                            </Column>
                            <Column>
                                <LinkSettings>
                                    <label>Link</label>
                                    <label>
                                        <input type={'checkbox'} defaultChecked={this.getTarget()}
                                               onChange={(e) => {
                                                   console.log('click')
                                                   console.log('e', e.target.value);
                                                   this.props.updateSettingsNoResponsive('target', {external: !this.getTarget()})
                                               }}/>
                                        external</label>
                                </LinkSettings>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'link'}
                                           defaultValue={this.getLink()}/>
                            </Column>
                        </ChoicesContent>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Column className={this.state.openColorViewBackground ? 'full-width' : ''}>
                                {
                                    this.state.events && this.state.events.length !== 0 ?
                                        <ButtonEvents>
                                            {
                                                this.state.events.map( (event) => {
                                                    return <button className={event === this.state.currentEvent ? 'current' : ''} onClick={ () => {this.toggleCurrentEvent(event)}}>{ event }</button>
                                                })
                                            }
                                        </ButtonEvents> : null

                                }
                                <ColorPicker hidden={false}
                                             color={this.getBackground('color', this.state.currentEvent)}
                                             opacity={this.getBackground('opacity', this.state.currentEvent)}
                                             storeValueColor={this.getBackgroundStore('color', this.state.currentEvent)}
                                             storeValueOpacity={this.getBackgroundStore('opacity', this.state.currentEvent)}
                                             defaultColor={this.getBackgroundDefault('color', this.state.currentEvent)}
                                             defaultOpacity={this.getBackgroundDefault('opacity', this.state.currentEvent)}
                                             openView={this.state.openColorViewBackground}
                                             updateStateProps={this.updateBackgroundProperty}
                                             toggleOpenView={this.toggleOpenViewBackground}
                                             customName={'Backg.'}
                                             event={this.state.currentEvent}
                                />


                            </Column>
                            <Column  className={this.state.openColorViewBackground ? 'hidden' : ''}>
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
                        </Choices>
                        <ChoicesCustom>
                            <Column className={this.state.openPreview  || this.state.openColorView ? 'full-width' : ''}>
                                <Row>
                                    <TextPreview hidden={this.state.openColorView}
                                                 color={this.props.getSettingsProperty('color', this.state.currentEvent)}
                                                 font={this.props.getSettingsProperty('font')}
                                                 text={this.props.getSettingsProperty('text')}
                                                 opacity={this.props.getSettingsProperty('opacity', this.state.currentEvent)}
                                                 open={this.state.openPreview}
                                                 toggleOpenPreview={this.toggleOpenPreview}
                                    />
                                    <ColorPicker hidden={this.state.openPreview}
                                                 color={this.props.getSettingsProperty('color', this.state.currentEvent)}
                                                 opacity={this.props.getSettingsProperty('opacity', this.state.currentEvent)}
                                                 storeValueColor={this.props.getStoreSettingsProperty('color', this.state.currentEvent)}
                                                 storeValueOpacity={this.props.getStoreSettingsProperty('opacity', this.state.currentEvent)}
                                                 defaultColor={this.props.getDefaultSettingsProperty('color', this.state.currentEvent)}
                                                 defaultOpacity={this.props.getDefaultSettingsProperty('opacity', this.state.currentEvent)}
                                                 openView={this.state.openColorView}
                                                 updateStateProps={this.props.updateSettings}
                                                 toggleOpenView={this.toggleOpenView}
                                                 event={this.state.currentEvent}
                                    />
                                </Row>
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
                            <Column>
                                <ColorPicker hidden={false}
                                             color={this.getBorder('color', this.state.currentEvent)}
                                             opacity={this.getBorder('opacity', this.state.currentEvent)}
                                             storeValueColor={this.getBorderStore('color', this.state.currentEvent)}
                                             storeValueOpacity={this.getBorderStore('opacity', this.state.currentEvent)}
                                             defaultColor={this.getBorderDefault('color', this.state.currentEvent)}
                                             defaultOpacity={this.getBorderDefault('opacity', this.state.currentEvent)}
                                             openView={this.state.openColorViewBorder}
                                             updateStateProps={this.updateBorderProperty}
                                             toggleOpenView={this.toggleOpenViewBorder}
                                             customName={'Border'}
                                             event={this.state.currentEvent}
                                />
                           </Column>
                            <Column>
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
                        </ChoicesCustom>
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

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(CTA));
export default WrappedComponent;
