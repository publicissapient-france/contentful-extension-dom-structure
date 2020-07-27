import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

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

export const Grid = styled.div`
   display : flex;
   flex-direction : column;
   padding-top : 15px;
   padding-bottom : 15px;
   padding-left : 10px;
   
    & label{
       display : flex;
        & input[type=checkbox]{
            width : 15px;
            height: 15px;
            margin-right : 5px;
            align-self : center;
        }
    }
`;

export const ChoicesSpeakers = styled(Choices)``;

export const Settings = styled.div`
   & ${Choices}{
    &${Column}:nth-child(2){
        border-bottom : 1px solid ${extensionTheme.grey20};
    }
   }
   
   & ${Choices}:nth-child(1){
        & ${Column}:nth-child(1){
            border-bottom : 1px solid ${extensionTheme.grey20};
        }
   }
`;

export const ChoicesContent = styled(Choices)`
   &>${Column}{
        border-right : 0px solid transparent;
       &:nth-child(1), &:nth-child(2), &:nth-child(3){
            width : calc(100%/3);
       }
   }
`;


export const Content = styled.div`
   & ${Choices}{
        & ${Column}{
            padding : 10px;
            & label{
                padding-left : 5px;
            }
        }
   }
`;

export const ButtonEvents = styled.div`
   display : flex; 
   width  : 100%;
   justify-content : flex-start;
   border-bottom : 1px solid ${extensionTheme.grey30};
   background : ${extensionTheme.grey10};
   
   & button{
    padding: 5px 10px;
    background : ${extensionTheme.grey10};
    transition:  background 0.2s ease,  color 0.2s ease;
    border-width : 0 1px 0 0;
    border-color :  solid ${extensionTheme.grey30};
    border-style : solid;
    margin-bottom : -1px;
    color : ${extensionTheme.grey50};
    border-bottom : 1px solid ${extensionTheme.grey30};
    
    &.current{
        background : ${extensionTheme.white};
        color : ${extensionTheme.grey80};
        border-bottom : 1px solid ${extensionTheme.white};
    }
    
    &:focus{
        outline : none;
    }
    
    &:hover{
        background : ${extensionTheme.blueM};
        color : ${extensionTheme.white};
        
    }
   }
`;


export const Sets = styled.div`
   display : flex;
   border-top : 1px solid ${extensionTheme.grey30};
   border-bottom : 1px solid ${extensionTheme.grey30};
   
   &>div{
    width : calc(100%/3);
    
    &:not(:first-child){
        border-left : 1px solid ${extensionTheme.grey30};
    }
   }
`;

export const SetContainer = styled.div`
    padding: 10px;
    
   & h4{
    color : black;
    text-transform : uppercase;
    line-height : 20px;
    margin-top : 15px;
    padding-left : 0;
   }
   
   & label{
    line-height : 12px;
   }
`;

