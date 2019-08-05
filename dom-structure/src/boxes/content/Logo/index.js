import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateContentValue, getCurrentDOM, getCurrentLanguage} from '../../../actions/index';
import _ from 'lodash'

import {ChoiceItemsConfirm, FieldsTemplate, Choices} from './styled';
import {Icon} from '../../../style/styledComponents';
import {Banner, ActiveCheckBox} from '../../../style/styledComponentsBoxes';
import SvgToggle from '../../../components/svg/SvgToggle';
import SvgCheck from '../../../components/svg/SvgCheck';
import ImageUploader from '../../reusable/ImageUploader';
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
        this.setState({
            value: {
                ...this.state.value,
                asset: value
            }
        });
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

    render() {
        const {dispatch, dom, currentLanguage, indexComponent, indexSection, name} = this.props;
        const indexLanguage = currentLanguage.language;
        const componentStore = dom.sections[indexSection].components[indexComponent];
        const logoContent = componentStore.content.Logo;

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
                    <Icon className={this.state.open ? '' : 'rotate'}
                          onClick={() => {
                              this.setState({open: !this.state.open});
                          }}><SvgToggle/></Icon>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>
                    <Choices>
                        <ImageUploader
                            alt={this.state.value.alt ? this.state.value.alt[indexLanguage] : ''}
                            asset={this.state.value.asset}
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
                            dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
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