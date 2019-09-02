import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import update from "react-addons-update";
import isEqual from "lodash/isEqual"
import isEmpty from "lodash/isEmpty"
import {getCurrentDOM, getCurrentLanguage, initField, toggleFieldActive, updateField} from '../../actions';

import SvgSetting from '../../components/svg/SvgSetting';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from "../../components/ResponsiveToggle";
import LanguageToggle from '../../containers/LanguageToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import ColorPicker from '../../interfaces/ColorPicker'

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Settings, Choices} from './styled'



class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openSettings: false
        }
    }

    componentDidMount() {
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
        if (!FieldOnStore) {
            this.initField();
        } else {
            this.setState({
                content: {},
                settings: FieldOnStore.settings,
                active: FieldOnStore.active,
                storeContent : FieldOnStore.content,
                storeSettings : FieldOnStore.settings,
            }, () => {
                this.initResponsiveMode();
                if (isEmpty(this.state.settings)) this.initSettings()
            });
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]
            !== prevProps.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]) {

            const currentFieldStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
            this.setState({
                content :currentFieldStore.content,
                settings : currentFieldStore.settings,
                storeContent : currentFieldStore.content,
                storeSettings : currentFieldStore.settings,
            });
        }

        if(this.props.triggerOpening != prevProps.triggerOpening){
            this.setState(prevState => ({
                openSettings: this.props.triggerOpening,
                openContent: false,
                currentResponsiveMode: this.props.responsiveSettings[0]
            }));
        }
    }

    initField = () => {
        this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
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
        const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] ;
        this.setState({currentResponsiveMode: mode})
    }

    updateSettings = (targetProperty, value) => {
        this.setState(prevState => ({
            settings: update(prevState.settings, {
                [targetProperty]: {
                    [prevState.currentResponsiveMode]: {$set: value}

                }
            })
        }));
    }


    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));

    toggleSettings = () => this.setState(prevState => ({
        openSettings: !prevState.openSettings,
        openContent: false,
        currentResponsiveMode: this.props.responsiveSettings[0]
    }));

    toggleResponsiveMode = (mode) => this.setState({
        currentResponsiveMode: mode
    });


    isUpdated = () => !isEqual(this.state.settings, this.state.storeSettings)


    cancelStateValue = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            settings: prevState.storeSettings
        }));
    }

    getCurrentSettingsProperty = (property) => this.state.settings[property] ? this.state.settings[property][this.state.currentResponsiveMode] : null


    getCurrentDefaultSettingsProperty = (property) =>  this.props.defaultSettings[property][this.state.currentResponsiveMode]


    getCurrentStoreSettingsProperty = (property) => {
        if (!this.state.storeSettings[property]) return null;
        return this.state.storeSettings[property][this.state.currentResponsiveMode]
    }

    getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))


    render() {
        const {dispatch, name, nameProperty, indexComponent, indexSection} = this.props;

        if (!this.state.settings) return null

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            active={this.state.active}
                            action={() => {
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(toggleFieldActive(nameProperty, this.state.active, indexComponent, indexSection))
                                });
                            }}>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <div>
                        <LanguageToggle
                            hidden={(!this.state.openContent && !this.state.openSettings) || this.state.openSettings}/>
                        <ResponsiveToggle responsive={this.getResponsiveChoices()}
                                          currentMode={this.state.currentResponsiveMode}
                                          action={this.toggleResponsiveMode}/>
                        <Icon className={this.state.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Settings className={!this.state.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <ColorPicker hidden={false}
                                         color={this.getCurrentSettingsProperty('color')}
                                         opacity={this.getCurrentSettingsProperty('opacity')}
                                         storeValueColor={this.getCurrentStoreSettingsProperty('color')}
                                         storeValueOpacity={this.getCurrentStoreSettingsProperty('opacity')}
                                         defaultColor={this.getCurrentDefaultSettingsProperty('color')}
                                         defaultOpacity={this.getCurrentDefaultSettingsProperty('opacity')}
                                         openView={this.state.openColorView}
                                         updateStateProps={this.updateSettings}
                                         toggleOpenView={this.toggleOpenView}
                            />
                        </Choices>
                    </Settings>
                </Field>
                <ChoiceItemsConfirm className={!this.isUpdated() ? 'hidden' : ''}>
                    <ButtonBasic label={'Cancel'} disabled={!this.isUpdated()} action={this.cancelStateValue}/>
                    <ButtonValidate label={'Update'} disabled={!this.isUpdated()} action={() => {
                        dispatch(updateField(nameProperty, this.state.content, this.state.settings, indexComponent, indexSection));
                    }}/>
                </ChoiceItemsConfirm>
            </div>
        );
    }
}

Template.propTypes = {
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
    indexLanguage: getCurrentLanguage(state).language,
});


/*const WrappedComponent = HocField(connect(mapStateToProps)(Template))
export default WrappedComponent;*/
export default connect(mapStateToProps)(Template);
