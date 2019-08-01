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
import CategoryMultipleImage from '../../reusable/CategoryMultipleImage'

class HeaderImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true
        };

        this.updateStateAsset = this.updateStateAsset.bind(this);
        this.updateStateTranslatedProps = this.updateStateTranslatedProps.bind(this);
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.HeaderImages ? componentStore.content.HeaderImages.value : {},
            active: componentStore.content.HeaderImages ? componentStore.content.HeaderImages.active : true,
            open: this.props.open
        }, () => {
            console.log('MOUNT ON LOGO CONTENT', this.state)
        });

        console.log('language on Logo', this.props.currentLanguage);
    };


    updateStateTranslatedProps = (props, value, index) => {
        const indexLanguage = this.props.currentLanguage.language;
        this.setState({
            value: {
                ...this.state.value,
                [index]: {
                    ...this.state.value[index],
                    [props]: {
                        ...this.state.value[props],
                        [indexLanguage]: value
                    }
                }
            }
        }, () => {
            console.log('STATE AFTER UPDATE updateStateTranslatedPropsupdateStateTranslatedPropsupdateStateTranslatedProps:', this.state)
        });
    }

    updateStateAsset = (value, index) => {
        this.setState({
            value: {
                ...this.state.value,
                [index]: {
                    ...this.state.value[index],
                    asset: value
                }
            }
        }, () => {
            console.log('STATE AFTER UPDATE updateStateAssetupdateStateAssetupdateStateAssetupdateStateAsset :', this.state)
        });
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const logoContent = componentStore.content.HeaderImages;
        if (!_.isEqual(logoContent && logoContent.value, this.state.value)) return true;
        return false;
        return true
    }

    isValid = () => {
        const indexLanguage = this.props.currentLanguage.language;
        let valid = true;
        Object.keys(this.state.value).forEach(key => {
            console.log('e on valid', this.state.value[key]);
            const currentAlt = this.state.value[key].alt;
            console.log('current alt', currentAlt)
            if( !currentAlt || !currentAlt[indexLanguage] || currentAlt[indexLanguage] === '' ) {
                console.log('no alt exist')
                valid = false;
            }
        });
        console.log('VALID', valid);
        return valid;

    }

    render() {
        const {dispatch, dom, currentLanguage, indexComponent, indexSection, name} = this.props;
        const indexLanguage = currentLanguage.language;
        const componentStore = dom.sections[indexSection].components[indexComponent];
        const headerContent = componentStore.content.HeaderImages;

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
                        <CategoryMultipleImage
                            multiple={3}
                            indexLanguage={indexLanguage}
                            value={this.state.value}
                            updateStateAsset={this.updateStateAsset}
                            updateStateTranslatedProps={this.updateStateTranslatedProps}
                        />
                    </Choices>
                </FieldsTemplate>
                <ChoiceItemsConfirm className={!this.isUpdated() || !this.isValid() ? 'hidden' : ''}>
                    <ButtonGreen
                        disabled={!this.isUpdated()}
                        className={this.isUpdated() ? 'active' : ''}
                        onClick={() => {
                            console.log('CLICK ON BUTTON UPDTE CONTENT HeaderImages', this.state.value)
                            dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                        }}>
                        Update
                    </ButtonGreen>
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
    currentLanguage: getCurrentLanguage(state)
});

export default connect(mapStateToProps)(HeaderImages);
