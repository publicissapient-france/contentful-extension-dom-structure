import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import update from "react-addons-update";
import isEqual from 'lodash/isEqual'
import isEmpty from "lodash/isEmpty"
import {getCurrentDOM, getCurrentLanguage, initField, toggleFieldActive, updateField} from '../../actions';

import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from "../../components/ResponsiveToggle";
import LanguageToggle from '../../containers/LanguageToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import {Icon} from '../../style/styledComponents';
import {Banner, Field, InfoText} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices} from './styled'
import InputMarkdown from "../../interfaces/InputMarkdown";
import FieldWrapper from "../../HOC/FieldWrapper";


class TextMarkdown extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
       /* const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
        if (!FieldOnStore) {
            this.initField();
        } else {
            this.setState({
                content: FieldOnStore.content,
                settings: FieldOnStore.settings,
                active: FieldOnStore.active,
                storeContent : FieldOnStore.content,
                storeSettings : FieldOnStore.settings,
            }, () => {
                this.initResponsiveMode();
                if (isEmpty(this.state.content)) this.initContent()
                if (!this.state.content.markdown) this.initContentMarkdown()
                if (isEmpty(this.state.settings)) this.initSettings()
            });
        }*/
    };

    componentDidUpdate(prevProps) {
       /* if (this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]
            !== prevProps.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]) {

            const currentFieldStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
            this.setState({
                content :currentFieldStore.content,
                settings : currentFieldStore.settings,
                storeContent : currentFieldStore.content,
                storeSettings : currentFieldStore.settings,
            });
        }*/
    }

    /*initField = () => {
        this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
    }

    initContentMarkdown = () => {
        this.setState(prevState => ({
            content: {
                ...prevState.content,
                markdown: {}
            }
        }));
    }

    initContent = () => {
        const initValue = this.props.defaultContent;
        this.setState({
            content: initValue
        }, () => {
            this.props.dispatch(updateField(this.props.nameProperty, this.state.content, this.state.settings, this.props.indexComponent, this.props.indexSection));
        });
    }

    initSettings = () => {
        const initValue = this.props.defaultSettings;
        this.setState({
            settings: initValue
        }, () => {
            this.props.dispatch(updateField(this.props.nameProperty, this.state.content, this.state.settings, this.props.indexComponent, this.props.indexSection));
        });
    }

    initResponsiveMode = () => {
        const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
        this.setState({currentResponsiveMode: mode})
    }
*//*
    updateTranlatedContent = (value, targetProperty) => {
        this.setState(prevState => ({
            content: {
                ...prevState.content,
                [targetProperty]: {
                    ...prevState.content[targetProperty],
                    [this.props.indexLanguage]: value
                }
            }
        }));
    }*/


  /*  updateSettings = (targetProperty, value) => {
        this.setState(prevState => ({
            settings: update(prevState.settings, {
                [targetProperty]: {
                    [prevState.currentResponsiveMode]: {$set: value}
                }
            })
        }));

    }
*/
   /* toggleContent = () => this.setState(prevState => ({
        openContent: !prevState.openContent,
        openSettings: false,
        currentResponsiveMode: this.props.responsiveContent[0]
    }));

    toggleSettings = () => this.setState(prevState => ({
        openSettings: !prevState.openSettings,
        openContent: false,
        currentResponsiveMode: this.props.responsiveSettings[0]
    }));

    toggleResponsiveMode = (mode) => this.setState({
        currentResponsiveMode: mode
    });
*/

    getMarkdown = () => this.props.content.markdown && this.props.content.markdown[this.props.indexLanguage] ? this.props.content.markdown[this.props.indexLanguage] : '';

   // isUpdated = () => (!isEqual(this.state.content, this.state.storeContent) || !isEqual(this.state.settings,this.state.storeSettings ))


  /*  cancelStateValue = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            content:prevState.storeContent,
            settings: prevState.storeSettings
        }));
    }

    getCurrentSettingsProperty = (property) => this.state.settings[property] ? this.state.settings[property][this.state.currentResponsiveMode] : null

    getCurrentDefaultSettingsProperty = (property) => this.props.defaultSettings[property][this.state.currentResponsiveMode]

    getCurrentStoreSettingsProperty = (property) => {
        if (!this.state.storeSettings[property]) return null;
        return this.state.storeSettings[property][this.state.currentResponsiveMode]
    }

    getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))
*/
    render() {
        const {dispatch,indexLanguage, name, nameProperty, indexComponent, indexSection} = this.props;
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
                        <InputMarkdown currentLanguage={indexLanguage} action={this.props.updateTranlatedContent} targetProperty={'markdown'}
                                       defaultValue={this.getMarkdown()}/>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <InfoText>TextMarkdown field don't have settings</InfoText>
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

TextMarkdown.propTypes = {
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
    dom: getCurrentDOM(state),
    indexLanguage: getCurrentLanguage(state).language
});

//export default connect(mapStateToProps)(TextMarkdown);

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(TextMarkdown))
export default WrappedComponent;