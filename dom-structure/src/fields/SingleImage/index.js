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
import Margin from '../../interfaces/Margin';

import {Icon} from '../../style/styledComponents';
import {Banner, Field} from '../../style/styledComponentsFields';
import {ChoiceItemsConfirm, Content, Settings, Choices, Column} from './styled';
import FieldWrapper from "../../HOC/FieldWrapper";


class SingleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        /*const FieldOnStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty];
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
                if (!this.state.content.image) this.initContentImage()
                if (isEmpty(this.state.settings)) this.initSettings()
            });
        }*/
        //if (isEmpty(this.props.content) || !this.props.content.images) this.initContent()

    };

    componentDidUpdate(prevProps) {
        /*if (this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent].fields[this.props.nameProperty]
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
        }*/
    }


   /* initField = () => {
        this.props.dispatch(initField(this.props.nameProperty, this.props.indexComponent, this.props.indexSection));
    }*/


    initContent = () => {
        console.log('init content props content', this.props.content)
        let assetStructure = {};

        this.props.responsiveContent.length ? this.props.responsiveContent.map((mode) => {
            assetStructure[mode] = {};
        }) : {};

        let images = new Array(1).fill({
            alt: {},
            asset: assetStructure
        });

        const initialContent = {
            images : images
        }

        this.props.initContent(initialContent);
        console.log('init content singe image', initialContent);


        /*this.setState(prevState => ({
            content: {
                ...prevState.content,
                image: image
            }
        }));*/
    }

   /* initSettings = () => {
        const initValue = this.props.defaultSettings;
        this.setState({
            settings: initValue
        }, () => {
            this.props.dispatch(updateField(this.props.nameProperty, this.state.content, this.state.settings, this.props.indexComponent, this.props.indexSection));
        });
    }*/

   /* initResponsiveMode = () => {
        const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
        this.setState({currentResponsiveMode: mode})
    }*/

    /*updateTranlatedContent = (value, targetProperty) => {
        this.setState(prevState => ({
            content: update(prevState.content, {
                [targetProperty]: {
                    [this.props.indexLanguage]: value
                }
            })
        }));
    }*/

  /*  updateTranlatedContentImage = (value, targetProperty) => {
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

    /*updateAsset = (value) => {
        this.setState(prevState => ({
            content: update(prevState.content, {
                image: {
                    asset: {
                        [prevState.currentResponsiveMode]: {$set: value}
                    }
                }
            })
        }));
    }*/

   /* updateSettings = (targetProperty, value) => {
        this.setState(prevState => ({
            settings: update(prevState.settings, {
                [targetProperty]: {
                    [prevState.currentResponsiveMode]: {$set: value}

                }
            })
        }));

    }*/


    /*toggleContent = () => this.setState(prevState => ({
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
    });*/

    getAlt = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].alt && this.props.content.images[0].alt[this.props.indexLanguage] ? this.props.content.images[0].alt[this.props.indexLanguage] : '';

    getAsset = () => this.props.content.images && this.props.content.images[0] && this.props.content.images[0].asset ? this.props.content.images[0].asset[this.props.currentResponsiveMode] : null

    getAssetToPreview = () => {
        if(!this.props.content.images || !this.props.content.images[0] || !this.props.content.images[0].asset) return null
        if(this.props.responsiveContent.includes(this.props.currentResponsiveMode)){
            return this.props.content.images[0].asset[this.props.currentResponsiveMode]
        }else{
            return this.props.content.images[0].asset[this.props.responsiveContent[0]]
        }
    }

    //isUpdated = () => (!isEqual(this.state.content, this.state.storeContent) || !isEqual(this.state.settings, this.state.storeSettings))

    /*cancelStateValue = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            content:prevState.storeContent,
            settings: prevState.storeSettings
        }));
    }*/

   /* getCurrentSettingsProperty = (property) => this.state.settings[property] ? this.state.settings[property][this.state.currentResponsiveMode] : null

    getCurrentDefaultSettingsProperty = (property) => this.props.defaultSettings[property][this.state.currentResponsiveMode]

    getCurrentStoreSettingsProperty = (property) => {
        if (!this.state.storeSettings[property]) return null;
        return this.state.storeSettings[property][this.state.currentResponsiveMode]
    }

    getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))
*/
    render() {
        const {dispatch, name, nameProperty, indexComponent, indexSection} = this.props;

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
                        <ImageUploader asset={this.getAsset()}
                                       alt={this.getAlt()}
                                       index={0}
                                       updateStateAsset={this.props.updateContentSubProperty}
                                       updateStateTranslatedProps={this.props.updateTranlatedContentSubProperty}
                        />
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <AssetPreview
                                locale={this.props.extensionInfo.extension.locales ? this.props.extensionInfo.extension.locales.default : null}
                                asset={this.getAssetToPreview()}
                            />
                            <Column>
                                <Size size={this.props.getSettingsProperty('size')}
                                      storeValueSize={this.props.getStoreSettingsProperty('size')}
                                      defaultSize={this.props.getDefaultSettingsProperty('size')}
                                      updateStateProps={this.props.updateSettings}
                                />
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
                            </Column>
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

//export default connect(mapStateToProps)(SingleImage);

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(SingleImage))
export default WrappedComponent;