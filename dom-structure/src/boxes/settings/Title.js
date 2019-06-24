import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, ButtonGreen, ButtonBasic, Error } from '../../style/styledComponents';
import {
    Banner,
    Fields,
    ActiveCheckBox,
    ChoiceConfirm
} from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/svg/SvgArrow';
import SvgCheck from '../../components/svg/SvgCheck';
import { connect } from 'react-redux';
import { updateSettingsValue, getCurrentDOM, getColors } from '../../actions';
import CategoryText from '../reusable/CategoryText';
import CategoryColor from '../reusable/CategoryColor';
import CategorySeo from '../reusable/CategorySeo';
import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const FieldsTemplate = styled(Fields)`
    padding :0px;

   /* &.open{
        flex-direction : row;
        
    }*/
`;
export const FieldsError = styled(Fields)`
    display : block;
`;

export const Choices = styled.div`
    width : 100%;
    display : flex;
`;
export const Category = styled.div`    
    border : 1px solid ${ extensionTheme.grey20 };
    border-left : 0px
    
    &.color{
        flex-grow : 1;
        width : fit-content;
        display : flex;
        padding-right: 30px;
        padding-top: 20px;

    }    
    
`;
export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;

`;
export const Column = styled.div`
    display : flex;
    flex-direction : column;

`;

class Title extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true,
            colors: null,
            openView: false,
        };

        this.updateFontFamily = this.updateFontFamily.bind(this);
        this.updateFontWeight = this.updateFontWeight.bind(this);
        this.updateFontSize = this.updateFontSize.bind(this);
        this.updateLineHeight = this.updateLineHeight.bind(this);
        this.updateOpacity = this.updateOpacity.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.reinitColor = this.reinitColor.bind(this);
        this.toggleOpenView = this.toggleOpenView.bind(this);
        this.updateSeo = this.updateSeo.bind(this);
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.settings.Title ? componentStore.settings.Title.value : {},
            active: componentStore.settings.Title ? componentStore.settings.Title.active : true,
            colors: this.props.colors ? this.props.colors : null,
            open: this.props.open
        });
    };

    updateSeo = value => {
        this.setState({
            value: {
                ...this.state.value,
                seo: value
            }
        });
    }
    updateFontSize = value => {
        this.setState({
            value: {
                ...this.state.value,
                font: {
                    ...this.state.value.font,
                    size: value
                }
            }
        });
    }
    updateLineHeight = value => {
        this.setState({
            value: {
                ...this.state.value,
                font: {
                    ...this.state.value.font,
                    lineheight: value
                }
            }
        });
    }
    updateFontFamily = value => {
        this.setState({
            value: {
                ...this.state.value,
                font: {
                    ...this.state.value.font,
                    family: value
                }
            }
        });
    }
    updateFontWeight = value => {
        this.setState({
            value: {
                ...this.state.value,
                font: {
                    ...this.state.value.font,
                    weight: value
                }
            }
        });
    }
    updateOpacity = value => {
        this.setState({
            value: {
                ...this.state.value,
                color: {
                    ...this.state.value.color,
                    opacity: value
                }
            }
        });
    }
    updateColor = (hex, name, shade) => {
        this.setState({
            value: {
                ...this.state.value,
                color: {
                    ...this.state.value.color,
                    hex: hex,
                    name: name,
                    shade: shade
                }
            }
        });
    }
    reinitColor = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        this.setState({
            value: {
                ...this.state.value,
                color: {
                    ...this.state.value.color,
                    hex: componentStore.settings.Title.value.color.hex,
                    name: componentStore.settings.Title.value.color.name,
                    shade: componentStore.settings.Title.value.color.shade,
                }
            }
        });
    }
    toggleOpenView = () => {
        this.setState({ openView: !this.state.openView });
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.settings.Title && componentStore.settings.Title.value === this.state.value) {
            return false;
        }
        return true;
    }

    colorIsUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.settings.Title &&
            (componentStore.settings.Title.value.hex === this.state.value.hex &&
                componentStore.settings.Title.value.name === this.state.value.name &&
                componentStore.settings.Title.value.shade === this.state.value.shade
            )
        ) {
            return false;
        }
        return true;
    }

    render () {
        const { dispatch, dom, colors, indexComponent, indexSection, name } = this.props;
        const componentStore = dom.sections[indexSection].components[indexComponent];
        if (!colors) {
            return (
                <div>
                    <Banner>
                        <div>
                            <p>{name}</p>
                        </div>
                        <Icon className={this.state.open ? '' : 'rotate'}
                            onClick={() => {
                                this.setState({ open: !this.state.open });
                            }}><SvgArrow/></Icon>
                    </Banner>
                    <FieldsError>
                        <Error>
                            <h2>Error</h2>
                            <p>To use this option, you must have selected a reference style guide in your project.</p>
                            <p>Please check that a style guide has been selected.</p>
                        </Error>
                    </FieldsError>
                </div>
            );
        }
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({ active: !this.state.active }, () => {
                                    dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}>
                            <SvgCheck/>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'}
                        onClick={() => {
                            this.setState({ open: !this.state.open });
                        }}><SvgArrow/></Icon>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>
                    <Choices>
                        <Column>
                            <Category className={'color'}>
                                <CategoryColor openView={this.state.openView}
                                    toggleOpenView={this.toggleOpenView}
                                    color={this.state.value.color ? this.state.value.color : null}
                                    updateOpacity={this.updateOpacity}
                                    updateColor={this.updateColor}
                                    reinitColor={this.reinitColor}
                                />
                            </Category>

                            <Category className={['seo', this.state.openView ? 'hidden' : '']}>
                                <CategorySeo
                                    seo={this.state.seo}
                                    updateSeo={this.updateSeo}/>
                            </Category>
                        </Column>

                        <Category className={['font', this.state.openView ? 'hidden' : '']}>
                            <CategoryText fontFamily={this.state.value.font && this.state.value.font.family ? this.state.value.font.family : ''}
                                updateFontFamily={this.updateFontFamily}
                                fontWeight={this.state.value.font && this.state.value.font.weight ? this.state.value.font.weight : ''}
                                updateFontWeight={this.updateFontWeight}
                                fontSize={this.state.value.font && this.state.value.font.size ? this.state.value.font.size : 24}
                                updateFontSize={this.updateFontSize}
                                lineHeight={this.state.value.font && this.state.value.font.lineheight ? this.state.value.font.lineheight : 32}
                                updateLineHeight={this.updateLineHeight}
                            />
                        </Category>

                    </Choices>

                    <ChoiceItemsConfirm className={this.state.openView ? 'hidden' : ''}>
                        <ButtonBasic
                            className={this.isUpdated() ? '' : 'disable'}
                            onClick={e => {
                                e.preventDefault();
                                this.setState({
                                    value: componentStore.settings.Title.value
                                });
                            }}>
                            Cancel
                        </ButtonBasic>
                        <ButtonGreen
                            disabled={!this.isUpdated()}
                            className={this.isUpdated() ? 'active' : ''}
                            onClick={() => {
                                dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                            }}>
                            Update
                        </ButtonGreen>
                    </ChoiceItemsConfirm>
                </FieldsTemplate>
            </div>
        );
    }
}

Title.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    colors: getColors(state).value
});

export default connect(mapStateToProps)(Title);
