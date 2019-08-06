import {ChoiceConfirm, Fields} from "../../../style/styledComponentsBoxes";
import styled from "styled-components";
import {extensionTheme} from "../../../style/theme";


export const FieldsTemplate = styled(Fields)`
`;

export const Choices = styled.div`
    width : 100%;
    display : flex;

`;

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };

`;


export const Toggle = styled.div`
  display : flex;
`;

export const Responsive = styled.div`
  display : flex;
  height : auto;
  align-items : center;
  width : fit-content;
  justify-content : space-between;
`;


export const ToogleResponsive = styled.div`
  width : 20px;
  height : 20px;
  display : flex;
  justify-content : center;
  align-items : center;
  border-width : 1px;
  border-style : solid;
  border-color :  ${ extensionTheme.grey50 }; 
  color :  ${ extensionTheme.grey50 }; 
  border-radius : 3px;
  font-size : 11px;
  cursor : pointer;
  background : transparent; 
  transition: background 0.4s ease, color 0.4s ease;
  margin 0 8px;
  
  
  &.active{
    color :  ${ extensionTheme.black }; 
    border-color :  ${ extensionTheme.black }; 
    background : ${ extensionTheme.white }; 

  }
`;

