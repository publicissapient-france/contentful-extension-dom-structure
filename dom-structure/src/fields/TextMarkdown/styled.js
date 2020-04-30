import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const Content = styled.div``;

export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };
       box-sizing : border-box;

    
    &.full-width{
        width : 100%;
    }
`;

export const Choices = styled.div`
   display : flex;
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   &>${Column}{
    &:nth-child(1){
        width : 25%;
         
        &.full-width{
            width : 100%;
        } 
    }
    &:nth-child(2){
        width :75%;
    }
   }
`;


export const Settings = styled.div`
   & ${Choices}:nth-child(2){
    border-top : 1px solid ${ extensionTheme.grey20 };
   }
`;
