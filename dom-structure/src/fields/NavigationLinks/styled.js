import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';
import {ChoicesContent} from "../Link/styled";

export const Row = styled.div`
   display : flex;
   flex-direction : column;
   //background : blue;
   border-bottom : 1px solid ${ extensionTheme.grey20 };

   box-sizing : content-box;

    
`;

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


export const ChoicesCustom = styled(Choices)`
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   &>${Column}{
    &:nth-child(1){
        width : 25%;
        
        & ${Row}{
            border-bottom-width : 0px;
        }
        
        
    }
    &:nth-child(1).full-width{
            width : 100%;
            
    }
    &:nth-child(2){
        width :75%;
        
        & ${Row}{
            flex-direction : row;
            
            &:nth-child(3){
                border-bottom-width : 0px;
            }
            
        }
        
       
    }
    &:nth-child(3){
        width :25%;
        border-top : 1px solid ${extensionTheme.grey20};
        
        &.full-width{
            width : 100%;
        }
    }
    &:nth-child(4){
        border-top : 1px solid ${extensionTheme.grey20};
        width :75%;
        flex-direction : row;
    }
    
    &:nth-child(5){
        width :25%;
        border-top : 1px solid ${extensionTheme.grey20};
        
        &.full-width{
            width : 100%;
        }
    }
    &:nth-child(6){
        border-top : 1px solid ${extensionTheme.grey20};
        width :75%;
        flex-direction : column;
        
        & ${Row}{
            &:nth-child(2){
                border-bottom-width : 0px;
            }
            
        }
    }
    
    &:not(.full-width){
        &>${Row}{
           // height : 190px;
        }
    }
    
   }
`;


export const Settings = styled.div`
   & ${Choices}{
   
    &${Column}:nth-child(2){
        border-bottom : 1px solid ${extensionTheme.grey20};
        & ${Row}:nth-child(2){
           flex-direction : row; 
        }
    }
   }
   
   & ${Choices}:nth-child(1){
        & ${Column}:nth-child(1){
            border-bottom : 1px solid ${extensionTheme.grey20};
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


export const Content = styled.div`
   
`;


export const LinkSettings = styled.div`
   display : flex;
   flex-direction : column;
   border-bottom : 1px solid ${extensionTheme.grey20};
   padding : 6px;
   
   &>div{
    display : flex;
    flex-direction : column;
    & label{
       display : flex;
        & input[type=checkbox]{
            width : 15px;
            height: 15px;
            margin-right : 5px;
            align-self : center;
        }
       }
   }
`;
