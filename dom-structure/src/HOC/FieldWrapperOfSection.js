import React, {Component} from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {
    getCurrentDOM,
    getCurrentLanguage,
    initFieldOfSection,
    updateFieldOfSection,
    toggleFieldActiveOfSection,
    updateFieldContentOfSection,
    updateFieldSettingsOfSection, updateFieldSettings, getInterfaceMode, getCurrentStyle
} from '../actions';
import update from 'react-addons-update';
import PropTypes from 'prop-types';

const FieldWrapperOfSection = WrappedComponent => {
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

            if (currentFieldStore !== this.getFieldOnStore(prevProps)){
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

        getFieldOnStore = ({dom, indexSection, nameProperty }) => {
            return dom.sections[indexSection].fields ? dom.sections[indexSection].fields[nameProperty] : null;
        }

        initField = () => {
            this.props.dispatch(initFieldOfSection(this.props.nameProperty, this.props.indexSection,this.props.defaultContent, this.props.defaultSettings));

        }

        initResponsiveMode = () => {
            const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
            this.setState({currentResponsiveMode: mode});
        }

        initContent = initialValue => {
            this.setState({
                content: initialValue
            }, () => {
                this.props.dispatch(updateFieldContentOfSection(this.props.nameProperty, this.state.content, this.props.indexSection));
            });
        }

        initFont = (property) => {
            let initFont = this.state.settings[property];

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
                this.initSettingsProperty(property, initFont);
            });
        }

        getThemeValue = (themes, selectedTheme) => {
            if (!themes || !selectedTheme) return;
            return themes.find(theme => theme.name === selectedTheme);
        }

        initSettings = initialValue => {
            this.setState({
                settings: initialValue
            }, () => {
                this.props.dispatch(updateFieldSettingsOfSection(this.props.nameProperty, this.state.settings, this.props.indexSection));
            });
        }

        initSettingsProperty = (targetProperty, initialValue) => {
            this.setState(prevState => ({
                settings: {
                    ...prevState.settings,
                    [targetProperty]: initialValue
                }
            }, () => {
                this.props.dispatch(updateFieldSettingsOfSection(this.props.nameProperty, this.state.settings, this.props.indexSection));
            }));
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
                this.props.dispatch(toggleFieldActiveOfSection(this.props.nameProperty, this.state.active, this.props.indexSection));
            });
        }

        getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))

        getSettingsByProperty = (property, subProperty, event) => {
            if (event) {
                return this.state.settings[property] && this.state.settings[property][this.state.currentResponsiveMode] ? this.state.settings[property][this.state.currentResponsiveMode][subProperty][event] : null
            } else {
                return this.state.settings[property] && this.state.settings[property][this.state.currentResponsiveMode] ? this.state.settings[property][this.state.currentResponsiveMode][subProperty] : null
            }
        }
        getDefaultSettingsByProperty = (property, subProperty, event) => {
            if (event) {
                return this.props.defaultSettings[property] && this.props.defaultSettings[property][this.state.currentResponsiveMode] ? this.props.defaultSettings[property][this.state.currentResponsiveMode][subProperty][event] : null

            } else {
                return this.props.defaultSettings[property] && this.props.defaultSettings[property][this.state.currentResponsiveMode] ? this.props.defaultSettings[property][this.state.currentResponsiveMode][subProperty] : null

            }
        }
        getStoreSettingsByProperty = (property, subProperty, event) => {
            if (event) {
                return this.state.storeSettings[property] && this.state.storeSettings[property][this.state.currentResponsiveMode] ? this.state.storeSettings[property][this.state.currentResponsiveMode][subProperty][event] : null
            } else {
                return this.state.storeSettings[property] && this.state.storeSettings[property][this.state.currentResponsiveMode] ? this.state.storeSettings[property][this.state.currentResponsiveMode][subProperty] : null
            }
        }

        getSettingsPropertyNoResponsive = property => this.state.settings[property]
        getDefaultSettingsPropertyNoResponsive = property => this.props.defaultSettings[property]
        getStoreSettingsPropertyNoResponsive = property => this.state.storeSettings[property] ? this.state.storeSettings[property] : null
        updateSettingsNoResponsive = (targetProperty, value) => {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {$set: value}
                })
            }));
        }

        isUpdated = () => (!isEqual(this.state.content, this.state.storeContent) || !isEqual(this.state.settings, this.state.storeSettings))

        updateContent = (value, targetProperty) => {
            this.setState(prevState => ({
                content: {
                    ...prevState.content,
                    [targetProperty]: value
                }
            }));
        }
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
        updateSettingsProperty = (property, subProperty, value, event) => {
            if (event) {
                this.setState(prevState => ({
                    settings: update(prevState.settings, {
                        [property]: {
                            [this.state.currentResponsiveMode]: {
                                [subProperty]: {
                                    [event]: {$set: value}
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

        updateSettingsEachResponsiveMode = (property, subProperty, value, event)  => {
            if (event) {
                this.props.responsiveSettings.forEach( mode => {
                    this.setState(prevState => ({
                        settings: update(prevState.settings, {
                            [property]: {
                                [mode]: {
                                    [subProperty]: {
                                        [event]: {$set: value}
                                    }
                                }
                            }
                        })
                    }));
                })
            } else {
                this.props.responsiveSettings.forEach( mode => {
                    this.setState(prevState => ({
                        settings: update(prevState.settings, {
                            [property]: {
                                [mode]: {
                                    [subProperty]: {$set: value}
                                }
                            }
                        })
                    }));
                })
            }
        }


        /* updateSettingsProperty = (property, subProperty, value) => {
             this.setState(prevState => ({
                 settings: update(prevState.settings, {
                     [property]: {
                         [this.state.currentResponsiveMode]: {
                            [subProperty]: { $set: value }
                         }
                     }
                 })
             }));
         }*/

      /*  updateSettingsNoResponsive = (targetProperty, value) => {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {$set: value}
                })
            }));
        }*/

        updateField = () => {
            const {dispatch, nameProperty, indexSection} = this.props;
            const {content, settings} = this.state;

            dispatch(updateFieldOfSection(nameProperty, content, settings, indexSection));
        }

        cancelStateValue = e => {
            e.preventDefault();
            console.log('BAFORE STATE', this.state.content);

            this.setState(prevState => ({
                content: prevState.storeContent,
                settings: prevState.storeSettings
            }), () => {
                console.log('AFTER BEFORE', this.state.content);

            });
        }

        render() {
            return (
                <WrappedComponent
                    openContent={this.state.openContent}
                    openSettings={this.state.openSettings}
                    toggleContent={this.toggleContent}
                    toggleSettings={this.toggleSettings}
                    toggleWithTrigger={this.toggleWithTrigger}

                    active={this.state.active}
                    toggleActive={this.toggleActive}

                    currentResponsiveMode={this.state.currentResponsiveMode}
                    setResponsiveMode={this.setResponsiveMode}
                    getResponsiveChoices={this.getResponsiveChoices}

                    updated={this.isUpdated()}
                    updateField={this.updateField}
                    cancelStateValue={this.cancelStateValue}
                    content={this.state.content}
                    initContent={this.initContent}
                    initFont={this.initFont}
                    settings={this.state.settings}
                    initSettings={this.initSettings}
                    initSettingsProperty={this.initSettingsProperty}

                    updateContent={this.updateContent}
                    updateTranlatedContent={this.updateTranlatedContent}
                    updateContentSubProperty={this.updateContentSubProperty}
                    updateTranlatedContentSubProperty={this.updateTranlatedContentSubProperty}

                    getSettingsByProperty={this.getSettingsByProperty}
                    getStoreSettingsByProperty={this.getStoreSettingsByProperty}
                    getDefaultSettingsByProperty={this.getDefaultSettingsByProperty}
                    updateSettingsProperty={this.updateSettingsProperty}
                    updateSettingsEachResponsiveMode={this.updateSettingsEachResponsiveMode}

                    getSettingsPropertyNoResponsive={this.getSettingsPropertyNoResponsive}
                    getDefaultSettingsPropertyNoResponsive={this.getDefaultSettingsPropertyNoResponsive}
                    getStoreSettingsPropertyNoResponsive={this.getStoreSettingsPropertyNoResponsive}
                    updateSettingsNoResponsive={this.updateSettingsNoResponsive}

                    {...this.props}
                />
            );
        }
    }

    return HOC;
};

FieldWrapperOfSection.propTypes = {
    indexSection: PropTypes.number.isRequired,
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
    indexLanguage: getCurrentLanguage(state).language,
    editorOnly : getInterfaceMode(state).editorOnly,
    themes: getCurrentStyle(state).style.themes
});

const composedFieldWrapper = compose(
    connect(mapStateToProps, null),
    FieldWrapperOfSection
);

export default composedFieldWrapper;
