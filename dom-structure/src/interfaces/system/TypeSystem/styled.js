import styled from 'styled-components';
import { extensionTheme } from '../../../style/theme';

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
   border-bottom : 1px solid ${ extensionTheme.grey20 };
   
   &>${Column}{
    &:nth-child(1), &:nth-child(2){
        width : 25%;
        
        &.full-width{
            width : 100%;
        }
    }
   
    &:nth-child(3){
        width :75%;
    }
    &:nth-child(4){
        width :25%;
    }
    &:nth-child(5){
        width :75%;
         border-top : 1px solid ${ extensionTheme.grey20 };
    }
   }
`;

export const ElementName = styled.div`
   display : flex; 
   width  : 100%;
   justify-content : flex-start;
   padding-left : 10px;
   background : rgba(255,255,255,0.5);
   border-bottom : 1px solid ${ extensionTheme.grey20 };
   
   &>label{
    text-transform: capitalize;
   }
`;

export const NoName = styled.div`
   display : flex; 
   width  : 100%;
   height : 0;
`;
