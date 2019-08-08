import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateContentValue, getCurrentDOM, getCurrentLanguage} from '../../../actions/index';
import _ from 'lodash'
import update from 'react-addons-update';

import {ChoiceItemsConfirm, FieldsTemplate, Choices} from './styled';
import {Icon} from '../../../style/styledComponents';
import {Banner, ActiveCheckBox, Toggle, ToogleResponsive, Responsive} from '../../../style/styledComponentsBoxes';
import SvgToggle from '../../../components/svg/SvgToggle';
import SvgCheck from '../../../components/svg/SvgCheck';
import CategoryMultipleImage from '../../reusable/CategoryMultipleImage';
import ButtonValidate from '../../../components/ui/ButtonValidate';
import {getResponsiveMode, toggleResponsiveMode} from "../../../actions/visibility";


class HeaderImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true
        };
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.HeaderImages ? componentStore.content.HeaderImages.value : {},
            active: componentStore.content.HeaderImages ? componentStore.content.HeaderImages.active : true,
            currentResponsiveMode: this.props.responsive && this.props.responsiveMode ? this.props.responsiveMode : null,
            open: this.props.open
        }, () => {
            if (!this.state.value.images) {
                this.initImages();
            }
        });
    };

    initImages = () => {
        const length = this.props.defaultValue.numberImages || 2;
        let assetStructure = {};
        this.props.responsive ? this.props.responsive.map((mode) => {
            assetStructure[mode] = {};
        }) : {}

        const images = new Array(length).fill({
            alt: {},
            asset: assetStructure
        });

        this.setState(prevState => ({
            value: {
                ...prevState.value,
                images: images
            }
        }))
    }


    updateStateTranslatedProps = (props, value, index) => {
        const indexLanguage = this.props.indexLanguage;
        this.setState(prevState => ({
            value: update(prevState.value, {
                images: {
                    [index]: {
                        [props]: {
                            [indexLanguage]: {$set: value}
                        }
                    }
                }

            })
        }));
    }

    updateStateAsset = (value, index) => {
        if (this.props.responsive) {
            this.setState(prevState => ({
                value: update(prevState.value, {
                    images: {
                        [index]: {
                            asset: {
                                [prevState.currentResponsiveMode]: {$set: value}
                            }
                        }
                    }
                })
            }));
        } else {
            this.setState(prevState => ({
                value: update(prevState.value, {
                    images: {
                        [index]: {
                            asset: {$set: value}
                        }
                    }
                })
            }));
        }
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoContent = componentStore.content.HeaderImages;
        if (!_.isEqual(logoContent && logoContent.value, this.state.value)) return true;
        return false;
    }

    isValid = () => {
        /*if(!this.state.value.images) return
        const indexLanguage = this.props.indexLanguage;
        let valid = true;
        Object.keys(this.state.value.images).forEach(key => {
            const currentAlt = this.state.value.images[key].alt;
            if (!currentAlt || !currentAlt[indexLanguage] || currentAlt[indexLanguage] === '') {
                valid = false;
            }
        });
        return valid;*/
        return true

    }

    render() {
        const {dispatch, dom, indexLanguage, responsiveMode, indexComponent, indexSection, name, contentType, defaultValue, responsive} = this.props;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}>
                            <SvgCheck/>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <Toggle>
                        <Responsive>
                            {
                                responsive ?
                                    responsive.map((mode, i) => {
                                        return <ToogleResponsive
                                            key={mode}
                                            className={this.state.currentResponsiveMode === mode ? 'active' : ''}
                                            onClick={e => {
                                                this.setState({currentResponsiveMode: mode}, () => {
                                                    if (responsiveMode !== mode) {
                                                        dispatch(toggleResponsiveMode(mode))
                                                    }
                                                });
                                            }}>{mode}</ToogleResponsive>;
                                    }) : null
                            }
                        </Responsive>
                        <Icon className={this.state.open ? '' : 'rotate'}
                              onClick={() => {
                                  this.setState({open: !this.state.open});
                              }}><SvgToggle/>
                        </Icon>
                    </Toggle>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>
                    <Choices>
                        <CategoryMultipleImage
                            images={this.state.value.images}
                            mode={this.state.currentResponsiveMode}
                            updateStateAsset={this.updateStateAsset}
                            updateStateTranslatedProps={this.updateStateTranslatedProps}
                        />
                    </Choices>
                </FieldsTemplate>
                <ChoiceItemsConfirm className={!this.isUpdated() || !this.isValid() ? 'hidden' : ''}>
                    <ButtonValidate label={'Update'} disabled={!this.isUpdated()} action={() => {
                        dispatch(updateContentValue(contentType, this.state.value, this.state.active, indexComponent, indexSection));
                    }}/>
                </ChoiceItemsConfirm>
            </div>
        );
    }
}

HeaderImages.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.number
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    indexLanguage: getCurrentLanguage(state).language,
    responsiveMode: getResponsiveMode(state).mode
});

export default connect(mapStateToProps)(HeaderImages);
