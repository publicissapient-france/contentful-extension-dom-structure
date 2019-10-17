import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';
import { ChoiceConfirm } from '../../style/styledComponentsFields';

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 20px;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
`;
export const Settings = styled.div`
   
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
        height : auto;
        margin-right : 15px;
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
        
       
  
    }
    &:nth-child(1).full-width{
            width : 100%;
         
    }
    &:nth-child(2){
        width :75%;
    }
    
    &:not(.full-width){
        &>${Row}{
            height : 190px;
        }
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
