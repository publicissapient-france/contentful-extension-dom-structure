import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {updateSettingsValue, getCurrentDOM} from '../../../actions/index';

import {ChoiceItemsConfirm, Choices, FieldsTemplate} from './styled'
import {Icon} from '../../../style/styledComponents';
import {
    Banner,
    ActiveCheckBox,
    Toggle,
    ToogleResponsive,
    Responsive
} from '../../../style/styledComponentsBoxes';
import CategorySize from '../../reusable/CategorySize';
import CategoryMargin from '../../reusable/CategoryMargin';
import SvgToggle from '../../../components/svg/SvgToggle';
import SvgCheck from '../../../components/svg/SvgCheck';
import ButtonBasic from '../../../components/ui/ButtonBasic';
import ButtonValidate from '../../../components/ui/ButtonValidate';
import {getResponsiveMode, toggleResponsiveMode} from "../../../actions/visibility";


class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true,
        };

    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoSettings = componentStore.settings.Logo;

        this.setState({
            value: logoSettings ? logoSettings.value : this.props.defaultValue,
            active: logoSettings ? logoSettings.active : true,
            currentResponsiveMode : this.props.responsive && this.props.responsiveMode ? this.props.responsiveMode : null,
            open: this.props.open
        });
    };

    updateStateProps = (props, value) => {
        if (this.props.responsive) {
            this.setState({
                value: {
                    ...this.state.value,
                    [props]: {
                        ...this.state.value[props],
                        [this.state.currentResponsiveMode]: value
                    }
                }
            });
        } else {
            this.setState({
                value: {
                    ...this.state.value,
                    [props]: value
                }
            });
        }

    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoSettings = componentStore.settings.Logo;

        if (_.isEqual(logoSettings && logoSettings.value, this.state.value)) return false;
        return true;
    }

    cancelStateValue = (e) => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoSettings = componentStore.settings.Logo;
        e.preventDefault();
        if (logoSettings.value) {
            this.setState({
                value: logoSettings.value
            });
        }
    }

    getCurrentSize = (mode) => {
        if(mode){
            return this.state.value.size && this.state.value.size[mode] ? this.state.value.size[mode] : null
        }else{
            return  this.state.value.size ? this.state.value.size : null
        }
    }
    getDefaultSize = (mode) => {
        if(mode){
            return this.props.defaultValue.size && this.props.defaultValue.size[mode] ? this.props.defaultValue.size[mode] : null
        }else{
            return  this.props.defaultValue.size ? this.props.defaultValue.size : null
        }
    }

    render() {
        const {dispatch, dom, responsiveMode, indexComponent, indexSection, name, contentType, responsive, defaultValue} = this.props;
        const componentStore = dom.sections[indexSection].components[indexComponent];
        const logoSettings = componentStore.settings.Logo;


        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(updateSettingsValue(contentType, this.state.value, this.state.active, indexComponent, indexSection));
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
                                                    console.log('CURRENT RESPONSIVE MODE LOGO SETTINGS', this.state.currentResponsiveMode);
                                                    if(responsiveMode !== mode){dispatch(toggleResponsiveMode(mode))}
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
                        <CategorySize
                            storeValueSize={logoSettings && logoSettings.value.size ? logoSettings.value.size : null}
                            defaultSize={this.getDefaultSize(this.state.currentResponsiveMode)}
                            size={this.getCurrentSize(this.state.currentResponsiveMode)}
                            updateStateProps={this.updateStateProps}
                        />
                        <CategoryMargin
                            storeValueMargin={logoSettings && logoSettings.value.margin ? logoSettings.value.margin : null}
                            defaultMargin={defaultValue.margin}
                            margin={this.state.value.margin}
                            updateStateProps={this.updateStateProps}
                        />
                    </Choices>

                    <ChoiceItemsConfirm className={!this.isUpdated() ? 'hidden' : ''}>
                        <ButtonBasic
                            label={'Cancel'}
                            disabled={!this.isUpdated()}
                            action={this.cancelStateValue}
                        />
                        <ButtonValidate
                            label={'Update'}
                            disabled={!this.isUpdated()}
                            action={() => {
                                dispatch(updateSettingsValue(contentType, this.state.value, this.state.active, indexComponent, indexSection));
                            }}>
                            Update
                        </ButtonValidate>
                    </ChoiceItemsConfirm>
                </FieldsTemplate>
            </div>
        );
    }
}

Logo.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.object,
    open: PropTypes.bool
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    responsiveMode: getResponsiveMode(state).mode
});

export default connect(mapStateToProps)(Logo);
