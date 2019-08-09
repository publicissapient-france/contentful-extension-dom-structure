import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateContentValue, getCurrentDOM, getCurrentLanguage} from '../../../actions/index';
import _ from 'lodash'
import {ChoiceItemsConfirm, FieldsTemplate, Choices} from './styled';
import {Icon} from '../../../style/styledComponents';
import {Banner, ActiveCheckBox, Toggle, ToogleResponsive, Responsive} from '../../../style/styledComponentsBoxes';
import SvgToggle from '../../../components/svg/SvgToggle';
import SvgCheck from '../../../components/svg/SvgCheck';
import CategoryImage from '../../reusable/CategoryImage';
import ButtonValidate from '../../../components/ui/ButtonValidate';
import {getResponsiveMode, toggleResponsiveMode} from "../../../actions/visibility";
import update from "react-addons-update";


//const LogoContext = React.createContext();

class Logo extends Component {
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
            value: componentStore.content.Logo ? componentStore.content.Logo.value : {},
            active: componentStore.content.Logo ? componentStore.content.Logo.active : true,
            currentResponsiveMode: this.props.responsive && this.props.responsiveMode ? this.props.responsiveMode : null,
            open: this.props.open
        }, () => {
            if (!this.state.value.image) {
                this.initImage();
            }
        });
    };

    initImage = () => {
        let assetStructure = {};
        this.props.responsive ? this.props.responsive.map((mode) => {
            assetStructure[mode] = {};
        }): {}

        let image = {
            alt: {},
            asset: assetStructure
        };

        this.setState(prevState => ({
            value: {
                ...prevState.value,
                image: image
            }
        }));
    }

    updateStateTranslatedProps = (props, value) => {
        const indexLanguage = this.props.indexLanguage;
        this.setState(prevState => ({
            value: update(prevState.value, {
                image: {
                    [props]: {
                        [indexLanguage]: {$set: value}
                    }
                }
            })
        }));
    }

    updateStateAsset = (value) => {
        if(this.props.responsive){
            this.setState(prevState => ({
                value: update(prevState.value, {
                    image: {
                        asset: {
                            [prevState.currentResponsiveMode] : {$set: value}
                        }
                    }
                })
            }));
        }else{
            this.setState(prevState => ({
                value: update(prevState.value, {
                    image: {
                        asset: {$set: value}
                    }
                })
            }));
        }
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoContent = componentStore.content.Logo;
        if (!_.isEqual(logoContent && logoContent.value, this.state.value)) return true;
        return false;
    }

    isValid = () => {
        const indexLanguage = this.props.indexLanguage;
        if(!this.state.value.image || !this.state.value.image.alt || !this.state.value.image.alt[indexLanguage] || this.state.value.image.alt[indexLanguage] === '' )return false
        return true;
    }

    render() {
        const {dispatch, dom, indexLanguage, responsiveMode, indexComponent, indexSection, name, contentType, responsive} = this.props;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(updateContentValue(contentType, this.state.value, this.state.active, indexComponent, indexSection));
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
                        <CategoryImage
                            image={this.state.value.image}
                            mode={this.state.currentResponsiveMode}
                            updateStateAsset={this.updateStateAsset}
                            updateStateTranslatedProps={this.updateStateTranslatedProps}
                        />

                    </Choices>
                </FieldsTemplate>
                <ChoiceItemsConfirm className={!this.isUpdated() || !this.isValid() ? 'hidden' : ''}>
                    <ButtonValidate
                        label={'Update'}
                        disabled={!this.isUpdated() && this.isValid()}
                        action={() => {
                            dispatch(updateContentValue(contentType, this.state.value, this.state.active, indexComponent, indexSection));
                        }}/>
                </ChoiceItemsConfirm>
            </div>
        );
    }
}

Logo.propTypes = {
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

export default connect(mapStateToProps)(Logo);
//export const LogoConsumer = LogoContext.Consumer;