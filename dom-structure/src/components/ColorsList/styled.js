import styled from "styled-components";
import {contentfulTheme, extensionTheme} from "../../style/theme";

export const List = styled.div`

`;

export const BoxColor = styled.div`
    width : 20px;
    height: 20px;
    background : white;
    border: 1px solid ${ extensionTheme.grey20 };
    position : relative;
    cursor : pointer;

    &.null{
        overflow : hidden;
        background : white;
        &:before {
            content: '';
            position: absolute;
            left: -22%;
            right: 0;
            top: 48%;
            bottom: 0px;
            background : red;
            width : 150%;
            height : 2px;
            transform : rotate(-45deg);
        }
    }
    
    &.undefined{
    overflow : hidden;
        background : white !important;
        &:before {
            content: '';
            position: absolute;
            left: -22%;
            right: 0;
            top: 48%;
            bottom: 0px;
            background : ${ extensionTheme.lightGrey };;
            width : 150%;
            height : 2px;
            transform : rotate(-45deg);
        }
        &:after {
            content: '';
            position: absolute;
            left: -22%;
            right: 0;
            top: 48%;
            bottom: 0px;
            background : ${ extensionTheme.lightGrey };;
            width : 150%;
            height : 2px;
            transform : rotate(45deg);
        }
    }
`;

export const NameColor = styled.p`
    font-weight : 400;
    font-size : 12px;
    line-height : 20px;
    color : ${ extensionTheme.black };
    font-family :${ contentfulTheme.basicFont };

`;
export const HexColor = styled.p`
    font-weight : 200;
    font-size : 12px;
    line-height : 12x;
    color : ${ contentfulTheme.grey };
    font-family :${ contentfulTheme.basicFont };

`;
export const BlockColor = styled.div`
    width : auto;
    height : fit-content;
    border-width : 1px;
    border-style: solid;
    border-color: ${ extensionTheme.grey20 };
    cursor : pointer;
    
    &.selected{
      border-color:  black;
      
      & ${ BoxColor }{
        border-color : white;
      }
    }
    
`;
