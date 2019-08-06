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
} from '../../../style/styledComponentsBoxes';
import CategorySize from '../../reusable/CategorySize';
import CategoryMargin from '../../reusable/CategoryMargin';
import SvgArrow from '../../../components/svg/SvgArrow';
import SvgCheck from '../../../components/svg/SvgCheck';
import ButtonBasic from '../../../components/ui/ButtonBasic';
import ButtonValidate from '../../../components/ui/ButtonValidate';


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
            open: this.props.open
        });
    };

    updateStateProps = (props, value) => {
        this.setState({
            value: {
                ...this.state.value,
                [props]: value
            }
        });
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

    render() {
        const {dispatch, dom, indexComponent, indexSection, name, contentType, responsive, defaultValue} = this.props;
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
                    <Icon className={this.state.open ? '' : 'rotate'}
                          onClick={() => {
                              this.setState({open: !this.state.open});
                          }}><SvgArrow/></Icon>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>
                    <Choices>
                        <CategorySize
                            storeValueSize={logoSettings && logoSettings.value.size ? logoSettings.value.size : null}
                            defaultSize={defaultValue.size}
                            size={this.state.value.size}
                            updateStateProps={this.updateStateProps}
                        />
                        <CategoryMargin
                            storeValueMargin={logoSettings && logoSettings.value.margin ? logoSettings.value.margin : null}
                            defaultMargin={defaultValue.margin}
                            margin={this.state.value.margin}
                            updateStateProps={this.updateStateProps}
                        />
                    </Choices>

                    <ChoiceItemsConfirm className={ !this.isUpdated() ? 'hidden' : ''}>
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
});

export default connect(mapStateToProps)(Logo);
