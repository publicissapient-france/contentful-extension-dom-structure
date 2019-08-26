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

import ImageUploader from '../../interfaces/ImageUploader';
import Padding from '../../interfaces/Padding';
import Size from '../../interfaces/Size';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, ImagesSettings} from './styled';


class MultipleImages extends Component {
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
            if (!this.state.content.images) this.initContentImages()
            if (isEmpty(this.state.settings)) this.initSettings()
        });
    }

    initField = () => {
        console.log('init field')
        return new Promise((resolve, reject) => {
            this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
        }).then(() => {
            this.initState();
        });
    }

    initContentImages = () => {
        console.log('init content')
        const length = this.props.parametersContent.multiple;
        let assetStructure = {};

        this.props.responsiveContent.length ? this.props.responsiveContent.map((mode) => {
            assetStructure[mode] = {};
        }) : {};

        let images = new Array(length).fill({
            alt: {},
            asset: assetStructure
        });

        this.setState(prevState => ({
            content: {
                ...prevState.content,
                images: images
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

    updateTranlatedContentImage = (value, targetProperty, index) => {
        this.setState(prevState => ({
            content: update(prevState.content, {
                images: {
                    [index]: {
                        [targetProperty]: {
                            [this.props.indexLanguage]: {$set: value}
                        }
                    }
                }
            })
        }));
    }

    updateAsset = (value, index) => {
            this.setState(prevState => ({
                content: update(prevState.content, {
                    images: {
                        [index]: {
                            asset: {
                                [prevState.currentResponsiveMode]: {$set: value}
                            }
                        }
                    }
                })
            }));
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
    toggleOpenPreview = () => this.setState(prevState => ({openPreview: !prevState.openPreview}));

    toggleContent = () => this.setState(prevState => ({
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

    getAlt = (i) => this.state.content.images && this.state.content.images[i].alt && this.state.content.images[i].alt[this.props.indexLanguage] ? this.state.content.images[i].alt[this.props.indexLanguage] : '';

    getAsset = (i) => {
        let result = {};
        if (!this.state.content.images[i]) {
            result = {}
        }
        else{
            result = this.state.content.images[i].asset[this.state.currentResponsiveMode]
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

    getCurrentSettingsProperty = (property) => this.state.settings[property] ? this.state.settings[property][this.state.currentResponsiveMode] : null


    getCurrentDefaultSettingsProperty = (property) =>  this.props.defaultSettings[property][this.state.currentResponsiveMode]

    getCurrentStoreSettingsProperty = (property) => {
        const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];

        if (!FieldOnStore.settings[property]) return null;

        return FieldOnStore.settings[property][this.state.currentResponsiveMode]
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
                        {
                            this.state.content.images ?
                                this.state.content.images.map((image, i) => {
                                    return <ImageUploader asset={this.getAsset(i)}
                                                          alt={this.getAlt(i)}
                                                          index={i}
                                                          key={i}
                                                          updateStateAsset={this.updateAsset}
                                                          updateStateTranslatedProps={this.updateTranlatedContentImage}
                                    />
                                }) : null
                        }
                    </Content>
                    <Settings className={!this.state.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <Size size={this.getCurrentSettingsProperty('size')}
                                  storeValueSize={this.getCurrentStoreSettingsProperty('size')}
                                  defaultSize={this.getCurrentDefaultSettingsProperty('size')}
                                  updateStateProps={this.updateSettings}
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

MultipleImages.propTypes = {
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

export default connect(mapStateToProps)(MultipleImages);
