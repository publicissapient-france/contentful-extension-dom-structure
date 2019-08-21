import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import update from "react-addons-update";
import isEqual from 'lodash/isEqual'
import isEmpty from "lodash/isEmpty"
import {
    getCurrentDOM,
    getCurrentExtension,
    getCurrentLanguage,
    initField,
    toggleFieldActive,
    updateField
} from '../../actions';

import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from "../../components/ResponsiveToggle";
import LanguageToggle from '../../containers/LanguageToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';
import AssetPreview from '../../components/AssetPreview';

import ImageUploader from '../../interfaces/ImageUploader';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsBoxes';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column} from './styled';


class SingleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            openPreview: false,
            openSettings: false,
            openContent: false
        }
    }

    componentDidMount() {
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
        if (!FieldOnStore) {
            this.initField();
        } else {
            this.initState()
        }
    };

    initState = () => {

        console.log('init state')
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];

        this.setState({
            content: FieldOnStore.content,
            settings: FieldOnStore.settings,
            active: FieldOnStore.active,
        }, () => {
            this.initResponsiveMode();
            if (isEmpty(this.state.content)) this.initContent()
            if (!this.state.content.image) this.initContentImage()
            if (isEmpty(this.state.settings)) this.initSettings()
        });
    }

    initField = () => {
        console.log('init field')
        this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
        this.initState();
    }

    initContentImage = () => {
        console.log('init content')

        const initValue = this.props.defaultContent;
        let assetStructure = {};

        this.props.responsiveContent.length ? this.props.responsiveContent.map((mode) => {
            assetStructure[mode] = {};
        }) : {};

        let image = {
            alt: {},
            asset: assetStructure
        };

        this.setState(prevState => ({
            content: {
                ...prevState.content,
                image: image
            }
        }), () => {
            console.log('after init content', this.state);
        });
    }
    initContent = () => {
        const initValue = this.props.defaultContent;
        this.setState({
            content: initValue
        });
    }
    initSettings = () => {
        const initValue = this.props.defaultSettings;
        this.setState({
            settings: initValue
        });
    }

    initResponsiveMode = () => {
        const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
        this.setState({currentResponsiveMode: mode})
    }

    updateTranlatedContent = (value, targetProperty) => {
        this.setState(prevState => ({
            content: update(prevState.content, {
                [targetProperty]: {
                    [this.props.indexLanguage]: value
                }
            })
        }));
    }

    updateTranlatedContentImage = (value, targetProperty) => {
        this.setState(prevState => ({
            content: update(prevState.content, {
                image: {
                    [targetProperty]: {
                        [this.props.indexLanguage]: {$set: value}
                    }
                }
            })
        }));
    }

    updateAsset = (value) => {
        if (this.state.currentResponsiveMode && this.props.responsiveContent.length) {
            this.setState(prevState => ({
                content: update(prevState.content, {
                    image: {
                        asset: {
                            [prevState.currentResponsiveMode]: {$set: value}
                        }
                    }
                })
            }));
        } else {
            this.setState(prevState => ({
                content: update(prevState.content, {
                    image: {
                        asset: {$set: value}
                    }
                })
            }));
        }
    }

    updateSettings = (targetProperty, value) => {
        if (this.state.currentResponsiveMode && this.props.responsiveSettings.length) {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {
                        [prevState.currentResponsiveMode]: {$set: value}

                    }
                })
            }));
        } else {
            this.setState(prevState => ({
                settings: update(prevState.settings, {
                    [targetProperty]: {$set: value}

                })
            }));
        }
    }

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));

    toggleContent = () => this.setState(prevState => ({
        openContent: !prevState.openContent,
        openSettings: false
    }));
    toggleSettings = () => this.setState(prevState => ({
        openSettings: !prevState.openSettings,
        openContent: false
    }));

    toggleResponsiveMode = (mode) => this.setState({
        currentResponsiveMode: mode
    });

    getAlt = () => this.state.content.image && this.state.content.image.alt && this.state.content.image.alt[this.props.indexLanguage] ? this.state.content.image.alt[this.props.indexLanguage] : '';

    getAsset = () => {
        let result = {};
        if (!this.state.content.image) {
            result = {}
        }
        else if (this.props.responsiveContent.length) {
            result = this.state.content.image.asset[this.state.currentResponsiveMode]
        } else {
            result = this.state.content.image.asset
        }
        return result;
    }

    isUpdated = () => {
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
        return (!isEqual(this.state.content, FieldOnStore.content) || !isEqual(this.state.settings, FieldOnStore.settings))
    }

    cancelStateValue = (e) => {
        e.preventDefault();
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
        this.setState({
            content: FieldOnStore.content,
            settings: FieldOnStore.settings
        });
    }

    getCurrentSettingsProperty = (property) => {
        if (this.state.currentResponsiveMode && this.props.responsiveSettings.length) {
            console.log('property', property)
            return this.state.settings[property][this.state.currentResponsiveMode]
        } else {
            return this.state.settings[property];
        }
    }


    getCurrentDefaultSettingsProperty = (property) => (this.state.currentResponsiveMode && this.props.responsiveSettings.length) ?
        this.props.defaultSettings[property][this.state.currentResponsiveMode]
        : this.props.defaultSettings[property]


    getCurrentStoreSettingsProperty = (property) => {
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];

        if (!FieldOnStore.settings[property]) return null;

        return (this.state.currentResponsiveMode) ?
            FieldOnStore.settings[property][this.state.currentResponsiveMode]
            : FieldOnStore.settings[property]
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
                        <Icon className={this.state.openContent ? 'active' : ''}
                              onClick={() => {
                                  this.toggleContent();
                              }}><SvgContent/></Icon>
                        <Icon className={this.state.openSettings ? 'active' : ''}
                              onClick={() => {
                                  this.toggleSettings();
                              }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Content className={!this.state.openContent ? 'hidden' : ''}>
                        <ImageUploader asset={this.getAsset()}
                                       alt={this.getAlt()}
                                       index={null}
                                       updateStateAsset={this.updateAsset}
                                       updateStateTranslatedProps={this.updateTranlatedContentImage}
                        />
                    </Content>
                    <Settings className={!this.state.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <AssetPreview
                                locale={this.props.extensionInfo.extension.locales.default}
                                asset={this.getAsset()}
                            />
                            <Column>
                                <Size size={this.getCurrentSettingsProperty('size')}
                                      storeValueSize={this.getCurrentStoreSettingsProperty('size')}
                                      defaultSize={this.getCurrentDefaultSettingsProperty('size')}
                                      updateStateProps={this.updateSettings}
                                />
                                <Padding padding={this.getCurrentSettingsProperty('padding')}
                                         storeValuePadding={this.getCurrentStoreSettingsProperty('padding')}
                                         defaultPadding={this.getCurrentDefaultSettingsProperty('padding')}
                                         updateStateProps={this.updateSettings}
                                />
                            </Column>
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

SingleImage.propTypes = {
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
    extensionInfo: getCurrentExtension(state),
    indexLanguage: getCurrentLanguage(state).language
});

export default connect(mapStateToProps)(SingleImage);
