import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
  padding : 10px 5px;
  display : flex;
`;


export const Field = styled.div`
    display : flex;
    width : fit-content;
    max-width : 100px;
 
    
    &>div{
        width : fit-content;
        &>input{
            max-width : 70px;
            border:1px solid ${ extensionTheme.grey80 } !important;
        }
    }
     
`;
