import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateContentValue, getCurrentDOM, getCurrentLanguage} from '../../../actions/index';
import _ from 'lodash'

import {ChoiceItemsConfirm, FieldsTemplate, Choices, Toggle, Responsive, ToogleResponsive} from './styled';
import {Icon} from '../../../style/styledComponents';
import {Banner, ActiveCheckBox} from '../../../style/styledComponentsBoxes';
import SvgToggle from '../../../components/svg/SvgToggle';
import SvgCheck from '../../../components/svg/SvgCheck';
import CategoryImage from '../../reusable/CategoryImage';
import ButtonValidate from '../../../components/ui/ButtonValidate';

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
            currentResponsiveMode : this.props.responsive ? this.props.responsive[0] : null,
            open: this.props.open
        });
    };


    updateStateTranslatedProps = (props, value) => {
        const indexLanguage = this.props.currentLanguage.language;
        this.setState({
            value: {
                ...this.state.value,
                [props]: {
                    ...this.state.value[props],
                    [indexLanguage]: value
                }
            }
        });
    }

    updateStateAsset = (value) => {
        if(this.props.responsive){
            this.setState({
                value: {
                    ...this.state.value,
                    asset: {
                        ...this.state.value.asset,
                        [this.state.currentResponsiveMode] : value
                    }
                }
            });
        }else{
            this.setState({
                value: {
                    ...this.state.value,
                    asset: value
                }
            });
        }

    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoContent = componentStore.content.Logo;
        if (!_.isEqual(logoContent && logoContent.value, this.state.value)) return true;
        return false;
    }

    isValid = () => {
        const indexLanguage = this.props.currentLanguage.language;

        if (!this.state.value.alt || !this.state.value.alt[indexLanguage] || this.state.value.alt[indexLanguage] === '') return false
        return true;
    }

    getCurrentAsset = (mode) => {
        console.log('RESPONSIVE MODE ON CURRENTASSET',mode);
        console.log('VALUE ON CURRENTASSET',this.state.value);
        if(mode){
            return this.state.value.asset && this.state.value.asset[mode] ? this.state.value.asset[mode] : null
        }else{
           return  this.state.value.asset ? this.state.value.asset : null
        }
    }

    render() {
        const {dispatch, dom, currentLanguage, indexComponent, indexSection, name, contentType, responsive} = this.props;
        const indexLanguage = currentLanguage.language;

        console.log('responsive on logo >>>>>>', responsive)

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
                                                console.log('CURRENT RESPONSIVE MODE', this.state.currentResponsiveMode);
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
                            alt={this.state.value.alt ? this.state.value.alt[indexLanguage] : ''}
                            asset={this.getCurrentAsset(this.state.currentResponsiveMode)}
                            index={null}
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
    currentLanguage: getCurrentLanguage(state)
});

export default connect(mapStateToProps)(Logo);
//export const LogoConsumer = LogoContext.Consumer;