import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Content = styled.div``;
export const Settings = styled.div``;

export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
    
`;


export const Choices = styled.div`
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   & ${Column}{
    &:nth-child(1), &:nth-child(3), &:nth-child(5){
        width : 25%;
        &.full-width{
            width : 100%;
        }  
    }
    &:nth-child(2){
        width :75%;
    }
    
    &:nth-child(4){
        width :75%;
        flex-direction : column;
        
    }
    &:nth-child(6){
        width :75%;
        flex-direction : column;
        
    }
   }
`;
