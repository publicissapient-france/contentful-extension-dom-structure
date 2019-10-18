import React, {Component} from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {
    getCurrentDOM,
    getCurrentLanguage,
    initField,
    updateField,
    toggleFieldActive,
    updateFieldContent,
    updateFieldSettings
} from '../actions';
import update from 'react-addons-update';
import PropTypes from 'prop-types';

const FieldWrapper = WrappedComponent => {
    class HOC extends Component {
        constructor(props) {
            super(props);

            this.state = {
                openContent: false,
                openSettings: false,
                currentResponsiveMode: null
            };
        }

        componentDidMount() {
            const FieldOnStore = this.getFieldOnStore(this.props);

            if (!FieldOnStore) {
                this.initField();
            } else {
                this.setState({
                    content: FieldOnStore.content,
                    settings: FieldOnStore.settings,
                    active: FieldOnStore.active,
                    storeContent: FieldOnStore.content,
                    storeSettings: FieldOnStore.settings,
                }, () => {
                    this.initResponsiveMode();
                    if (isEmpty(this.state.settings)) this.initSettings(this.props.defaultSettings);
                    if (isEmpty(this.state.content)) this.initContent(this.props.defaultContent);
                });
            }
        }

        componentDidUpdate(prevProps) {
            const currentFieldStore = this.getFieldOnStore(this.props);

            if (currentFieldStore !== this.getFieldOnStore(prevProps)) {
                this.setState({
                    content: currentFieldStore.content,
                    settings: currentFieldStore.settings,
                    storeContent: currentFieldStore.content,
                    storeSettings: currentFieldStore.settings,
                });
            }

            if (this.props.triggerOpening !== prevProps.triggerOpening) {
                this.toggleWithTrigger(this.props.triggerOpening);
            }


        }

        getFieldOnStore = ({dom, indexSection, indexComponent, nameProperty}) => {
            return dom.sections[indexSection].components[indexComponent].fields[nameProperty];
        }

        initField = () => {
            this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
        }

        initResponsiveMode = () => {
            const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
            this.setState({currentResponsiveMode: mode});
        }

        initContent = initialValue => {
            this.setState({
                content: initialValue
            }, () => {
                this.props.dispatch(updateFieldContent(this.props.nameProperty, this.state.content, this.props.indexComponent, this.props.indexSection));
            });
        }
        initSettings = initialValue => {
            this.setState({
                settings: initialValue
            }, () => {
                this.props.dispatch(updateFieldSettings(this.props.nameProperty, this.state.settings, this.props.indexComponent, this.props.indexSection));
            });
        }

        initSettingsProperty = (targetProperty, initialValue, event) => {
            if (event) {
                this.setState(prevState => ({
                    settings: {
                        ...prevState.settings,
                        [event]: {
                            ...prevState.settings[event],
                            [targetProperty]: initialValue
                        }
                    }
                }, () => {
                    this.props.dispatch(updateFieldSettings(this.props.nameProperty, this.state.settings, this.props.indexComponent, this.props.indexSection));
                }));
            } else {
                this.setState(prevState => ({
                    settings: {
                        ...prevState.settings,
                        [targetProperty]: initialValue
                    }
                }, () => {
                    this.props.dispatch(updateFieldSettings(this.props.nameProperty, this.state.settings, this.props.indexComponent, this.props.indexSection));
                }));
            }

        }

        toggleContent = () => {
            this.setState(prevState => ({
                openContent: !prevState.openContent,
                openSettings: false,
                currentResponsiveMode: this.props.responsiveContent[0]
            }));
        }

        toggleSettings = () => {
            this.setState(prevState => ({
                openSettings: !prevState.openSettings,
                openContent: false,
                currentResponsiveMode: this.props.responsiveSettings[0]
            }));
        }

        toggleWithTrigger = trigger => {
            this.setState({
                openSettings: trigger,
                openContent: false,
                currentResponsiveMode: this.props.responsiveSettings[0]
            });
        }

        setResponsiveMode = mode => this.setState({currentResponsiveMode: mode});

        toggleActive = () => {
            this.setState(prevState => ({
                active: !prevState.active
            }), () => {
                this.props.dispatch(toggleFieldActive(this.props.nameProperty, this.state.active, this.props.indexComponent, this.props.indexSection));
            });
        }

        getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))

        getSettingsProperty = ( property, event ) => {
            if(event){
                return this.state.settings[event] && this.state.settings[event][property] ? this.state.settings[event][property][this.state.currentResponsiveMode] : null
            }else{
                return this.state.settings[property] ? this.state.settings[property][this.state.currentResponsiveMode] : null
            }
        }

        getSettingsPropertyNoResponsive = property => this.state.settings[property]

        getDefaultSettingsProperty = (property, event) => {
            if(event){
                return this.props.defaultSettings[event] && this.props.defaultSettings[event][property] ? this.props.defaultSettings[event][property][this.state.currentResponsiveMode] : null
            }else{
                return this.props.defaultSettings[property] ? this.props.defaultSettings[property][this.state.currentResponsiveMode] : null
            }
        }

        getDefaultSettingsPropertyNoResponsive = property => this.props.defaultSettings[property]

        getStoreSettingsProperty = (property, event) => {
            if(event){
                return this.state.storeSettings[event] && this.state.storeSettings[event][property] ? this.state.storeSettings[event][property][this.state.currentResponsiveMode] : null
            }else{
                return this.state.storeSettings[property] ? this.state.storeSettings[property][this.state.currentResponsiveMode] : null
            }
        }

        getStoreSettingsPropertyNoResponsive = property => this.state.storeSettings[property] ? this.state.storeSettings[property] : null

        isUpdated = () => (!isEqual(this.state.content, this.state.storeContent) || !isEqual(this.state.settings, this.state.storeSettings))

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
        }

        updateContentSubProperty = (property, subProperty, value, index) => {
            this.setState(prevState => ({
                content: update(prevState.content, {
                    [property]: {
                        [index]: {
                            [subProperty]: {
                                [prevState.currentResponsiveMode]: {$set: value}
                            }
                        }
                    }
                })
            }));
        }

        updateSettingsSubProperty = (property, value, subProperty, event) => {
            console.log('this.setting on sub', this.state.settings);
            console.log('property on sub', property);
            console.log('value on sub', value);
            console.log('event on sub', event);
            if (event) {
                this.setState(prevState => ({
                    settings: update(prevState.settings, {
                        [event]: {
                            [property]: {
                                [this.state.currentResponsiveMode]: {
                                    [subProperty]: {$set: value}
                                }
                            }
                        }
                    })
                }));
            } else {
                this.setState(prevState => ({
                    settings: update(prevState.settings, {
                        [property]: {
                            [this.state.currentResponsiveMode]: {
                                [subProperty]: {$set: value}

                            }
                        }

                    })
                }));
            }
        }


        updateTranlatedContentSubProperty = (property, subProperty, value, index) => {
            this.setState(prevState => ({
                content: update(prevState.content, {
                    [property]: {
                        [index]: {
                            [subProperty]: {
                                [this.props.indexLanguage]: {$set: value}
                            }
                        }
                    }
                })
            }));
        }

        updateSettings = (targetProperty, value, event) => {
            if (event) {
                this.setState(prevState => ({
                    settings: update(prevState.settings, {
                        [event]: {
                            [targetProperty]: {
                                [this.state.currentResponsiveMode]: {$set: value}
                            }
                        }
                    })
                }));
            } else {
                this.setState(prevState => ({
                    settings: update(prevState.settings, {
                        [targetProperty]: {
                            [this.state.currentResponsiveMode]: {$set: value}
                        }
                    })
                }));
            }
        }


        updateSettingsNoResponsive = (targetProperty, value) => {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {$set: value}
                })
            }));
        }

        updateField = () => {
            const {dispatch, nameProperty, indexComponent, indexSection} = this.props;
            const {content, settings} = this.state;

            dispatch(updateField(nameProperty, content, settings, indexComponent, indexSection));
        }

        cancelStateValue = e => {
            e.preventDefault();
            this.setState(prevState => ({
                content: prevState.storeContent,
                settings: prevState.storeSettings
            }));
        }

        render() {
            return (
                <WrappedComponent
                    openContent={this.state.openContent}
                    openSettings={this.state.openSettings}
                    toggleContent={this.toggleContent}
                    toggleSettings={this.toggleSettings}
                    currentResponsiveMode={this.state.currentResponsiveMode}
                    setResponsiveMode={this.setResponsiveMode}
                    getResponsiveChoices={this.getResponsiveChoices}
                    toggleWithTrigger={this.toggleWithTrigger}
                    updated={this.isUpdated()}
                    content={this.state.content}
                    initContent={this.initContent}
                    updateTranlatedContent={this.updateTranlatedContent}
                    settings={this.state.settings}
                    initSettings={this.initSettings}
                    updateSettings={this.updateSettings}
                    updateSettingsNoResponsive={this.updateSettingsNoResponsive}
                    updateSettingsSubProperty={this.updateSettingsSubProperty}
                    tryTest={this.tryTest}
                    active={this.state.active}
                    toggleActive={this.toggleActive}
                    getSettingsProperty={this.getSettingsProperty}
                    getSettingsPropertyNoResponsive={this.getSettingsPropertyNoResponsive}
                    getDefaultSettingsProperty={this.getDefaultSettingsProperty}
                    getDefaultSettingsPropertyNoResponsive={this.getDefaultSettingsPropertyNoResponsive}
                    getStoreSettingsProperty={this.getStoreSettingsProperty}
                    getStoreSettingsPropertyNoResponsive={this.getStoreSettingsPropertyNoResponsive}
                    cancelStateValue={this.cancelStateValue}
                    updateField={this.updateField}
                    updateContentSubProperty={this.updateContentSubProperty}
                    updateTranlatedContentSubProperty={this.updateTranlatedContentSubProperty}
                    initSettingsProperty={this.initSettingsProperty}

                    {...this.props}
                />
            );
        }
    }

    return HOC;
};

FieldWrapper.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nameProperty: PropTypes.string.isRequired,
    typeField: PropTypes.string.isRequired,
    responsiveContent: PropTypes.array,
    responsiveSettings: PropTypes.array,
    defaultContent: PropTypes.object,
    defaultSettings: PropTypes.object
};

const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    indexLanguage: getCurrentLanguage(state).language
});

const composedFieldWrapper = compose(
    connect(mapStateToProps, null),
    FieldWrapper
);

export default composedFieldWrapper;
