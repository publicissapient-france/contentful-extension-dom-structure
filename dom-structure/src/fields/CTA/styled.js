import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';
import { ChoiceConfirm } from '../../style/styledComponentsFields';

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 20px;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
`;


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
`;



export const LinkSettings = styled.div`
   display : flex;
   justify-content : space-between;
   
   &>label:nth-child(2){
    display : flex;
    width : auto;
    &>input[type=checkbox]{
        width : 20px;
         height: 20px;
        margin-right : 5px;
        align-self : center;
    }
   }
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
    }
    &:nth-child(1).full-width{
            width : 100%;
    }
    &:nth-child(2){
        width :75%;
    }
    &:nth-child(3){
        width :25%;
        border-top : 1px solid ${extensionTheme.grey20};
    }
    &:nth-child(4){
        border-top : 1px solid ${extensionTheme.grey20};
        width :75%;
        flex-direction : row;
    }
    
    &:not(.full-width){
        &>${Row}{
            height : 190px;
        }
    }
   }
`;


export const Settings = styled.div`
   & ${Choices}{
   
    & ${Column}:nth-child(2){
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

export const ChoicesContent = styled(Choices)`
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   &>${Column}{
       &:nth-child(1){
            width : 50%;
       }
       &:nth-child(2){
            width : 50%;
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
    padding: 5px;
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
