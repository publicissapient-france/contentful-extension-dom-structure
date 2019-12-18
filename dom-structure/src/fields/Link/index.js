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
import IconPreview from '../../components/IconPreview';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import InputText from '../../interfaces/InputText';
import InputIcon from '../../interfaces/InputIcon';
import Typography from '../../interfaces/Typography';
import ColorPicker from '../../interfaces/ColorPicker';
import Margin from '../../interfaces/Margin';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';
import Radius from '../../interfaces/Radius';
import BorderWidth from '../../interfaces/BorderWidth';
import Alignment from '../../interfaces/Alignment';
import IconTypography from '../../interfaces/IconTypography';
import Shadow from '../../interfaces/Shadow';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {
    ChoiceItemsConfirm,
    Content,
    Settings,
    Column,
    LinkSettings,
    ChoicesContent
} from './styled';

class Link extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openColorViewBackground: false,
            openColorViewBorder: false,
            openColorViewIcon: false,
            openPreview: false,
            openPreviewIcon: false
        };
    }

    componentDidUpdate(prevProps) {

    }




    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenViewBackground = () => this.setState(prevState => ({openColorViewBackground: !prevState.openColorViewBackground}));
    toggleOpenViewBorder = () => this.setState(prevState => ({openColorViewBorder: !prevState.openColorViewBorder}));
    toggleOpenViewIcon = () => this.setState(prevState => ({openColorViewIcon: !prevState.openColorViewIcon}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));
    toggleOpenPreviewIcon = () => this.setState(prevState => ({openPreviewIcon: !prevState.openPreviewIcon}));
    toggleCurrentEvent = (event) => this.setState({currentEvent: event});

    getLink = () => this.props.content.link && this.props.content.link[this.props.indexLanguage] ? this.props.content.link[this.props.indexLanguage] : '';
    getExternal = () => this.props.getSettingsPropertyNoResponsive('state') ? this.props.getSettingsPropertyNoResponsive('state').external : false;
    getDisabled = () => this.props.getSettingsPropertyNoResponsive('state') ? this.props.getSettingsPropertyNoResponsive('state').disabled : false;



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
                    </div>
                </Banner>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <ChoicesContent>
                            <Column>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'link'}
                                           defaultValue={this.getLink()}/>
                            </Column>
                            <Column>
                                <LinkSettings>

                                    <div>
                                        <label>
                                            <input type={'checkbox'} defaultChecked={this.getExternal()}
                                                   onChange={(e) => {
                                                       this.props.updateSettingsNoResponsive('state', {external: !this.getExternal()})
                                                   }}/>
                                            external</label>
                                        <label>
                                            <input type={'checkbox'} defaultChecked={this.getDisabled()}
                                                   onChange={(e) => {
                                                       this.props.updateSettingsNoResponsive('state', {disabled: !this.getDisabled()})
                                                   }}/>
                                            disabled</label>
                                    </div>

                                </LinkSettings>
                            </Column>
                        </ChoicesContent>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>

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

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Link));
export default WrappedComponent;
