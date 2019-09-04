import React, {Component} from 'react';
import isEqual from "lodash/isEqual";
import {connect} from 'react-redux';
import {compose} from 'redux';

import {
    getCurrentDOM,
    getCurrentLanguage,
    initField,
    updateField,
    toggleFieldActive
} from "../actions";
import update from "react-addons-update";
import PropTypes from "prop-types";


const FieldWrapper = (WrappedComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                openContent: false,
                openSettings: false,
                currentResponsiveMode: null
            };

            this.toggleContent = this.toggleContent.bind(this);
            this.toggleSettings = this.toggleSettings.bind(this);
            this.toggleResponsiveMode = this.toggleResponsiveMode.bind(this);
            this.getResponsiveChoices = this.getResponsiveChoices.bind(this);
            this.toggleWithTrigger = this.toggleWithTrigger.bind(this);
        }


        componentDidMount() {
            const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
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
                });
            }
        }

        componentDidUpdate(prevProps) {
            if (this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]
                !== prevProps.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]) {

                const currentFieldStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
                this.setState({
                    content: currentFieldStore.content,
                    settings: currentFieldStore.settings,
                    storeContent: currentFieldStore.content,
                    storeSettings: currentFieldStore.settings,
                });
            }

            if (this.props.triggerOpening != prevProps.triggerOpening) {
                this.toggleWithTrigger(this.props.triggerOpening);
            }
        }

        initField = () => {
            this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
        }

        initResponsiveMode = () => {
            const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
            this.setState({currentResponsiveMode: mode})
        }

        initContent = (initialValue) => {
            this.setState({
                content: initialValue
            }, () => {
                this.props.dispatch(updateField(this.props.nameProperty, this.state.content, this.state.settings, this.props.indexComponent, this.props.indexSection));
            });
        }
        initSettings = (initialValue) => {
            this.setState({
                settings: initialValue
            }, () => {
                this.props.dispatch(updateField(this.props.nameProperty, this.state.content, this.state.settings, this.props.indexComponent, this.props.indexSection));
            });
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

        toggleWithTrigger = (trigger) => {
            this.setState({
                openSettings: trigger,
                openContent: false,
                currentResponsiveMode: this.props.responsiveSettings[0]
            });
        }

        toggleResponsiveMode = (mode) => this.setState({
            currentResponsiveMode: mode
        });

        toggleActive = () => {
            this.setState(prevState => ({
                active: !prevState.active
            }), () => {
                this.props.dispatch(toggleFieldActive(this.props.nameProperty, this.state.active, this.props.indexComponent, this.props.indexSection))
            });
        }

        getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))

        getSettingsProperty = (property) => this.state.settings[property] ? this.state.settings[property][this.state.currentResponsiveMode] : null

        getSettingsPropertyNoResponsive = (property) => this.state.settings[property]

        getDefaultSettingsProperty = (property) => this.props.defaultSettings[property][this.state.currentResponsiveMode]

        getDefaultSettingsPropertyNoResponsive = (property) => this.props.defaultSettings[property]

        getStoreSettingsProperty = (property) => {
            if (!this.state.storeSettings[property]) return null;
            return this.state.storeSettings[property][this.state.currentResponsiveMode]
        }
        getStoreSettingsPropertyNoResponsive = (property) => {
            if (!this.state.storeSettings[property]) return null;
            return this.state.storeSettings[property]
        }

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

        updateSettings = (targetProperty, value) => {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {
                        [this.state.currentResponsiveMode]: {$set: value}
                    }
                })
            }));

        }

        updateSettingsNoResponsive = (targetProperty, value) => {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {$set: value}
                })
            }));

        }

        updateField = () => {
            this.props.dispatch(updateField(this.props.nameProperty, this.state.content, this.state.settings, this.props.indexComponent, this.props.indexSection));
        }

        cancelStateValue = (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                content: prevState.storeContent,
                settings: prevState.storeSettings
            }));
        }

        render() {
            return (
                <WrappedComponent
                    secretToLife={42}
                    openContent={this.state.openContent}
                    openSettings={this.state.openSettings}
                    toggleContent={this.toggleContent}
                    toggleSettings={this.toggleSettings}
                    currentResponsiveMode={this.state.currentResponsiveMode}
                    toggleResponsiveMode={this.toggleResponsiveMode}
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

const mapStateToProps = (state) => ({
    dom: getCurrentDOM(state),
    indexLanguage: getCurrentLanguage(state).language
});

const composedFieldWrapper = compose(
    connect(mapStateToProps, null),
    FieldWrapper
)

export default composedFieldWrapper;