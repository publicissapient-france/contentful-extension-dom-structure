import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import TextPreview from '../../components/TextPreview';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Margin from '../../interfaces/Margin';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Radius from '../../interfaces/Radius';
import BorderWidth from '../../interfaces/BorderWidth';
import Alignment from '../../interfaces/Alignment';
import {Field} from '../../style/styledComponentsFields';
import {
    Content,
    Settings,
    ChoicesTypography,
    Column,
    Row,
    ChoicesCustom,
    ButtonEvents
} from './styled';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class NavigationLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openColorViewBackground: false,
            openColorViewBorder: false,
            openColorViewIcon: false,
            openPreview: false,
            openPreviewIcon: false,
            events: ['basic', 'hover', 'active'],
            currentEvent: 'basic'
        };
    }

    componentDidUpdate(prevProps) {
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
    toggleOpenViewBackground = () => this.setState(prevState => ({openColorViewBackground: !prevState.openColorViewBackground}));
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));
    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    updateTypography = (property, value, event) => this.props.updateSettingsProperty('typography', property, value, event);
    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);
    updateBorder = (property, value, event) => this.props.updateSettingsProperty('border', property, value, event);

    render() {
        const {updated} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <ChoicesTypography>
                            <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
                                {
                                    this.state.events && this.state.events.length !== 0 ?
                                        <ButtonEvents>
                                            {
                                                this.state.events.map((event, i) => {
                                                    return <button
                                                        key={i}
                                                        className={event === this.state.currentEvent ? 'current' : ''}
                                                        onClick={() => {
                                                            this.toggleCurrentEvent(event)
                                                        }}>{event}</button>
                                                })
                                            }
                                        </ButtonEvents> : null

                                }
                                <TextPreview hidden={this.state.openColorView}
                                             color={this.props.getSettingsByProperty('typography', 'color', this.state.currentEvent)}
                                             font={this.props.getSettingsByProperty('typography', 'font')}
                                             text={this.props.getSettingsByProperty('typography', 'text')}
                                             opacity={this.props.getSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                                             open={this.state.openPreview}
                                             toggleOpenPreview={this.toggleOpenPreview}
                                />
                                <ColorPicker hidden={this.state.openPreview}
                                             color={this.props.getSettingsByProperty('typography', 'color', this.state.currentEvent)}
                                             opacity={this.props.getSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                                             storeValueColor={this.props.getStoreSettingsByProperty('typography', 'color', this.state.currentEvent)}
                                             storeValueOpacity={this.props.getStoreSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                                             defaultColor={this.props.getDefaultSettingsByProperty('typography', 'color', this.state.currentEvent)}
                                             defaultOpacity={this.props.getDefaultSettingsByProperty('typography', 'opacity', this.state.currentEvent)}
                                             openView={this.state.openColorView}
                                             updateStateProps={this.updateTypography}
                                             toggleOpenView={this.toggleOpenView}
                                             event={this.state.currentEvent}
                                />
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
                        </ChoicesTypography>

                        <ChoicesCustom>
                            <Column className={this.state.openColorViewBackground ? 'full-width' : ''}>
                                <Row>
                                    <ColorPicker hidden={false}
                                                 color={this.props.getSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                                 opacity={this.props.getSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                                                 storeValueColor={this.props.getStoreSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                                 storeValueOpacity={this.props.getStoreSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                                                 defaultColor={this.props.getDefaultSettingsByProperty('basis', 'color', this.state.currentEvent)}
                                                 defaultOpacity={this.props.getDefaultSettingsByProperty('basis', 'opacity', this.state.currentEvent)}
                                                 openView={this.state.openColorViewBackground}
                                                 updateStateProps={this.updateBasis}
                                                 toggleOpenView={this.toggleOpenViewBackground}
                                                 customName={'Backg.'}
                                                 event={this.state.currentEvent}
                                    />

                                </Row>
                            </Column>
                            <Column className={this.state.openColorViewBackground ? 'hidden' : ''}>
                                <Row>
                                    <Size size={this.props.getSettingsByProperty('basis', 'size')}
                                          storeValueSize={this.props.getStoreSettingsByProperty('basis', 'size')}
                                          defaultSize={this.props.getDefaultSettingsByProperty('basis', 'size')}
                                          updateStateProps={this.updateBasis}
                                    />
                                </Row>
                                <Row>
                                    <Padding padding={this.props.getSettingsByProperty('basis', 'padding')}
                                             storeValuePadding={this.props.getStoreSettingsByProperty('basis', 'padding')}
                                             defaultPadding={this.props.getDefaultSettingsByProperty('basis', 'padding')}
                                             updateStateProps={this.updateBasis}
                                    />
                                    <Margin margin={this.props.getSettingsByProperty('basis', 'margin')}
                                            storeValueMargin={this.props.getStoreSettingsByProperty('basis', 'margin')}
                                            defaultMargin={this.props.getDefaultSettingsByProperty('basis', 'margin')}
                                            updateStateProps={this.updateBasis}
                                    />
                                </Row>
                                <Row>
                                    <Alignment alignment={this.props.getSettingsByProperty('basis', 'alignment')}
                                               storeValueAlignment={this.props.getStoreSettingsByProperty('basis', 'alignment')}
                                               defaultAlignment={this.props.getDefaultSettingsByProperty('basis', 'alignment')}
                                               updateStateProps={this.updateBasis}/>

                                </Row>
                            </Column>
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
                                             event={this.state.currentEvent}
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
                        </ChoicesCustom>
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

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(NavigationLinks));
export default WrappedComponent;
