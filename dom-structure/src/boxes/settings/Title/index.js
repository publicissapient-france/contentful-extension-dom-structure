import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {updateSettingsValue, getCurrentDOM} from '../../../actions/index';

import {Category, ChoiceItemsConfirm, Choices, Column, FieldsTemplate} from './styled'
import {Icon} from '../../../style/styledComponents';
import {
    Banner,
    ActiveCheckBox,
} from '../../../style/styledComponentsBoxes';
import SvgArrow from '../../../components/svg/SvgArrow';
import SvgCheck from '../../../components/svg/SvgCheck';
import CategoryText from '../../reusable/CategoryText/index';
import CategoryColor from '../../reusable/CategoryColor/index';
import CategorySeo from '../../reusable/CategorySeo/index';
import TextPreview from '../../../components/TextPreview';
import ButtonBasic from '../../../components/ui/ButtonBasic';
import ButtonValidate from '../../../components/ui/ButtonValidate'


class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true,
            openView: false,
            openPreview: false
        };

    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const titleSettings = componentStore.settings.Title;

        this.setState({
            value: titleSettings ? titleSettings.value : this.props.defaultValue,
            active: titleSettings ? titleSettings.active : true,
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

    toggleOpenView = () => this.setState({openView: !this.state.openView});
    toggleOpenPreview = () => this.setState({openPreview: !this.state.openPreview});
    viewIsOpen = () => (this.state.openView || this.state.openPreview);


    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const titleSettings = componentStore.settings.Title;

        if (_.isEqual(titleSettings && titleSettings.value, this.state.value)) return false;
        return true;
    }

    cancelStateValue = (e) => {
        e.preventDefault();

        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        const titleSettings = componentStore.settings.Title;
        if (titleSettings.value) {
            this.setState({
                value: titleSettings.value
            });
        }
    }

    render() {
        const {dispatch, dom, indexComponent, indexSection, name, contentType, defaultValue} = this.props;
        const componentStore = dom.sections[indexSection].components[indexComponent];
        const titleSettings = componentStore.settings.Title;

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
                        <Column className={this.state.openView ? 'full-width' : ''}>
                            <Category>
                                <TextPreview
                                    color={this.state.value.color}
                                    font={this.state.value.font}
                                    text={this.state.value.text}
                                    opacity={this.state.value.opacity}
                                    open={this.state.openPreview}
                                    toggleOpenPreview={this.toggleOpenPreview}
                                />
                            </Category>
                            <Category  className={this.state.openPreview ? 'hidden' : ''}>
                                <CategoryColor openView={this.state.openView}
                                               toggleOpenView={this.toggleOpenView}
                                               storeValueColor={titleSettings && titleSettings.value.color ? titleSettings.value.color : null}
                                               storeValueOpacity={titleSettings && titleSettings.value.opacity ? titleSettings.value.opacity : null}
                                               color={this.state.value.color}
                                               opacity={this.state.value.opacity}
                                               defaultColor={defaultValue.color}
                                               defaultOpacity={defaultValue.opacity}
                                               updateStateProps={this.updateStateProps}
                                />
                            </Category>

                            <Category className={this.viewIsOpen() ? 'hidden' : ''}>
                                <CategorySeo
                                    storeValueSeo={titleSettings && titleSettings.value.seo ? titleSettings.value.seo : null}
                                    seo={this.state.value.seo}
                                    defaultSeo={defaultValue.seo}
                                    updateStateProps={this.updateStateProps}/>
                            </Category>
                        </Column>

                        <Category className={this.viewIsOpen() ? 'hidden' : ''}>
                            <CategoryText
                                storeValueFont={titleSettings && titleSettings.value.font ? titleSettings.value.font : null}
                                storeValueText={titleSettings && titleSettings.value.text ? titleSettings.value.text : null}
                                font={this.state.value.font}
                                text={this.state.value.text}
                                defaultFont={defaultValue.font}
                                defaultText={defaultValue.text}
                                updateStateProps={this.updateStateProps}
                            />
                        </Category>
                    </Choices>

                    <ChoiceItemsConfirm className={this.viewIsOpen() || !this.isUpdated() ? 'hidden' : ''}>
                        <ButtonBasic
                            label={'Cancel'}
                            disaled={!this.isUpdated()}
                            action={this.cancelStateValue}/>
                        <ButtonValidate label={'Update'} disabled={!this.isUpdated()} action={() => {
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

Title.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.object,
    open: PropTypes.bool
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
});

export default connect(mapStateToProps)(Title);
