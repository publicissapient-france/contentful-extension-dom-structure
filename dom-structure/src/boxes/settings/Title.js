import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, ButtonGreen, ButtonBasic, Error} from '../../style/styledComponents';
import {
    Banner,
    Fields,
    ActiveCheckBox,
    BoxColor,
    Palette,
    Property,
    ChoiceConfirm
} from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import SvgCross from '../../components/SvgCross';
import SvgCheck from '../../components/SvgCheck';
import {connect} from 'react-redux';
import {updateSettingsValue, getCurrentDOM, getColors, getCurrentStyle} from '../../actions';
import Palettes from '../../components/Palettes';
import CategoryText from '../reusable/CategoryText';
import CategoryColor from '../reusable/CategoryColor';
import {extensionTheme} from '../../style/theme';
import styled from 'styled-components';
import _ from 'lodash';
import sections from "../../config/sections";
import { seoTag } from '../../config/defaultConfig'

export const FieldsTemplate = styled(Fields)`
    padding : 20px 0px 20px 15px;

   /* &.open{
        flex-direction : row;
        
    }*/
`;
export const FieldsError = styled(Fields)`
    display : block;
`;

export const SelectedColor = styled(BoxColor)`
    width : 30px;
    height : 30px;
    align-self:flex-start;
`;

export const ChoiceColor = styled.div`
   display : flex;
   &.full-width{
     width : 100%;
   }
   
   &>div{
    padding-bottom : 20px;
    display:flex;
    flex-direction:column;
    
   }
   
   &>div:nth-child(1){
       margin-right : 20px;
   }
   
   &>div:nth-child(2){
       border-left:1px solid  ${ extensionTheme.grey20 };
       padding-left : 25px;
       display:flex;
       flex-direction : row;
       justify-content : space-between;
       width: inherit;
       
       &>div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       }
       
       &.hidden{
        display : none;
       }
       
   }
`;
export const Close = styled(Icon)`
   align-self :flex-end;
   width : 40px;
`;

export const ChoiceOpacity = styled.div`
    display : flex;
    flex-direction:column;

   &>input{
    width : 60px;
   }
`;
export const ChoiceFont = styled.div`
   display : flex;
   
   &>div{
    display : flex;
    flex-direction : column;
    padding : 0 10px;
   }   
`;
export const ChoiceSize = styled.div`
   display : flex;
   margin-top:20px;
  
   &>div{
    display : flex;
    flex-direction : column;
    padding : 0 10px;
    
    & input{
        max-width : 60px;
    }
   }
`;
export const ChoiceSEO = styled.div`
   display : flex;
   
   &>div{
    display : flex;
    flex-direction : column;
    padding : 0 10px;
   }
`;

export const PaletteView = styled.div`
    width : 100%;
`;
export const Choices = styled.div`
    width : 100%;
    display : flex;
`;
export const Category = styled.div`    
    &.color{
        flex-grow : 1;
        width : fit-content;
        display : flex;
    }    
    &.font{
        flex-grow : 3;
    }    
    &.seo{
        flex-grow : 1;
    }
`;
export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding-right : 15px;
    width : 100%;

`;


class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true,
            colors: null,
            openView: false,
        };

        this.updateFontFamily = this.updateFontFamily.bind(this)
        this.updateFontWeight = this.updateFontWeight.bind(this)
        this.updateFontSize = this.updateFontSize.bind(this)
        this.updateLineHeight = this.updateLineHeight.bind(this)
        this.updateOpacity = this.updateOpacity.bind(this)
        this.updateColor = this.updateColor.bind(this)
        this.reinitColor = this.reinitColor.bind(this)
        this.toggleOpenView = this.toggleOpenView.bind(this)
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

    updateFontSize = (value) => {
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
    updateLineHeight = (value) => {
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
    updateFontFamily = (value) => {
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
    updateFontWeight = (value) => {
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
    updateOpacity = (value) => {
        this.setState({
            value: {
                ...this.state.value,
                color: {
                    ...this.state.value.color,
                    opacity: value
                }
            }
        }, () => {
            console.log('new state: ', this.state)
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
        }, () => {
            console.log('new state: ', this.state)
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
            (componentStore.settings.Title.value.hex === this.state.value.hex
                && componentStore.settings.Title.value.name === this.state.value.name
                && componentStore.settings.Title.value.shade === this.state.value.shade
            )
        ) {
            return false;
        }
        return true;
    }


    render() {
        const {dispatch, dom, colors, indexComponent, indexSection, name} = this.props;
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
                                  this.setState({open: !this.state.open});
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
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
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
                        <Category className={'color'}>
                            <CategoryColor openView={this.state.openView}
                                           toggleOpenView={this.toggleOpenView}
                                           color={this.state.value.color ? this.state.value.color : null}
                                           colorHex={this.state.value.color && this.state.value.color.hex ? this.state.value.color.hex : '' }
                                           updateOpacity={this.updateOpacity}
                                           updated={this.isUpdated()}
                                           updateColor={this.updateColor}
                                           reinitColor={this.reinitColor}
                            />
                        </Category>

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

                        <Category  className={['seo', this.state.openView ? 'hidden' : '']}>
                            <ChoiceSEO>
                                <div>
                                    <Property>SEO</Property>
                                    <select
                                        value={this.state.value.seo && this.state.value.seo ? this.state.value.seo : 'h1'}
                                        onChange={e => {
                                            this.setState({
                                                value: {
                                                    ...this.state.value,
                                                    seo:  e.target.value
                                                }
                                            });

                                        }}>
                                        <option></option>
                                        {seoTag.map(tag => <option value={tag} key={tag}>{tag}</option>)}

                                    </select>
                                </div>
                            </ChoiceSEO>
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
