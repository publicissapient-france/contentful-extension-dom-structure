import React, {Component} from 'react';
import {Field, BlockColor, BoxColor} from '../../style/styledComponentsFields';
import styled from "styled-components";
import {extensionTheme} from "../../style/theme";
import SvgFontSize from '../../components/svg/SvgFontSize'

export const Container = styled.div`
   display : flex;
   align-items : center;
   margin-top :20px;
   position : relative;
   cursor : pointer;
   
   & label{
    line-height : 12px;
    margin-left : 5px;
    
        &.selected{
            color : ${extensionTheme.black};
        }
   }
`;
export const SvgContainer = styled.div.attrs(props => ({
    color : props.color
}))`
    position : absolute;
    left : 2px;
    top : 2px;
    
     &>svg{
         
         width : 20px;
         height : 20px;
         
         
         & polygon{
            fill : ${ props => props.color}
         }
   } 

`;

export class Set extends Component {
    render() {
        const {label, property, view} = this.props;
        return (
            <Container>
                {
                    this.props.getSettingsByProperty(property, 'color') ?
                        <BlockColor
                            className={view === property ? 'selected' : ''}
                            onClick={e => {
                                view === property ? this.props.updateSelectedView('') : this.props.updateSelectedView(property)
                            }}>
                            <BoxColor
                                className={this.props.getSettingsByProperty(property, 'color').name === 'Transparent' ? 'transparent' : ''}
                                style={{background: this.props.getSettingsByProperty(property, 'color').hex}}/>
                        </BlockColor>
                        : null
                }
                <label
                    className={view === property ? 'selected' : ''}>{label}</label>
            </Container>
        );
    }
}

export class SetTypography extends Component {
    render() {
        const {label, property, view, propertyBkg} = this.props;
        return (
            <Container onClick={e => {
                view === property ? this.props.updateSelectedView('') : this.props.updateSelectedView(property)
            }}>
                {
                    this.props.getSettingsByProperty(property, 'color') && this.props.getSettingsByProperty(propertyBkg, 'color') ?
                        <BlockColor
                            className={view === property ? 'selected' : ''}
                            >
                            <BoxColor
                                className={this.props.getSettingsByProperty(propertyBkg, 'color').name === 'Transparent' ? 'transparent' : ''}
                                style={{background: this.props.getSettingsByProperty(propertyBkg, 'color').hex}}/>

                        </BlockColor>
                        : null
                }
                {
                    this.props.getSettingsByProperty(property, 'color') && this.props.getSettingsByProperty(propertyBkg, 'color') ?
                        <SvgContainer color={this.props.getSettingsByProperty(property, 'color').hex}>
                            <SvgFontSize/>
                        </SvgContainer>
                        : null
                }
                <label
                    className={view === property ? 'selected' : ''}>{label}</label>
            </Container>
        );
    }
}


