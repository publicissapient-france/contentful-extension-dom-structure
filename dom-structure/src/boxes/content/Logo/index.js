import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateContentValue, getCurrentDOM, getCurrentLanguage} from '../../../actions/index';
import _ from 'lodash'

import {ChoiceItemsConfirm, FieldsTemplate, Choices} from './styled';
import {Icon, ButtonGreen} from '../../../style/styledComponents';
import {Banner, Fields, ActiveCheckBox, Property} from '../../../style/styledComponentsBoxes';
import SvgToggle from '../../../components/svg/SvgToggle';
import SvgCheck from '../../../components/svg/SvgCheck';
import ImageUploader from '../../../containers/ImageUploader/index';
import CategoryImage from '../../reusable/CategoryImage'

class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true
        };

        //this.updateStateAsset = this.updateStateAsset.bind(this);
        this.updateStateProps = this.updateStateProps.bind(this);
        this.updateStateTranslatedProps = this.updateStateTranslatedProps.bind(this);
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.Logo ? componentStore.content.Logo.value : {},
            active: componentStore.content.Logo ? componentStore.content.Logo.active : true,
            open: this.props.open
        }, () => {
            console.log('MOUNT ON LOGO CONTENT', this.state)
        });

        console.log('language on Logo', this.props.currentLanguage);
    };

    /*updateStateAsset = (value) => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoContent = componentStore.content.Logo;

        this.setState({
            value: {
                ...this.state.value,
                asset: value
            }
        }, () => {
            console.log('STATE AFTER UPDATE :', this.state)
            console.log('LOGO CONTENT AFTER UPDATE :', logoContent)
        });
    }*/

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
        }, () => {
            console.log('STATE AFTER UPDATE updateStateTranslatedPropsupdateStateTranslatedPropsupdateStateTranslatedProps:', this.state)
        });
    }
/*
    updateStateTranslatedContent = (props, value, indexLanguage) => {
        this.setState({
            value: {
                ...this.state.value,
                [props]: {
                    ...this.state.value[props],
                    [indexLanguage]: value
                }
            }
        });
    }*/
    updateStateProps = (props, value) => {
        this.setState({
            value: {
                ...this.state.value,
                [props]: value
            }
        }, () => {
            console.log('STATE AFTER UPDATE updateStateAssetupdateStateAssetupdateStateAssetupdateStateAsset :', this.state)
        });
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoContent = componentStore.content.Logo;
        if (!_.isEqual(logoContent && logoContent.value, this.state.value)) return true;
        return false;
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
                <FieldsTemplate>
                    <Choices>
                        <CategoryImage
                            alt={this.state.value.alt ? this.state.value.alt[indexLanguage] : ''}
                            description={this.state.value.description ? this.state.value.description[indexLanguage] : ''}
                            asset={this.state.value.asset}
                            updateStateProps={this.updateStateProps}
                            updateStateTranslatedProps={this.updateStateTranslatedProps}
                        />
                    </Choices>
                </FieldsTemplate>
                <ChoiceItemsConfirm className={!this.isUpdated() ? 'hidden' : ''}>
                    <ButtonGreen
                        disabled={!this.isUpdated()}
                        className={this.isUpdated() ? 'active' : ''}
                        onClick={() => {
                            console.log('CLICK ON BUTTON UPDTE CONTENT LOGO', this.state.value)
                            dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                        }}>
                        Update
                    </ButtonGreen>
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
