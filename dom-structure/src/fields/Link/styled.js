import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';
import { ChoiceConfirm } from '../../style/styledComponentsFields';

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 20px;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
`;



export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };  
    box-sizing : border-box;
`;



export const LinkSettings = styled.div`
   display : flex;
   justify-content : space-between;
   
   &>div{
    display : flex;
    flex-direction : column;
    & label{
       display : flex;
        & input[type=checkbox]{
            width : 20px;
            height: 20px;
            margin-right : 5px;
            align-self : center;
        }
       }
   }
`;


export const Choices = styled.div`
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   
`;



export const Settings = styled.div`
  
`;

export const ChoicesContent = styled(Choices)`
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   &>${Column}{
       &:nth-child(1){
            width : 75%;
       }
       &:nth-child(2){
            width : 25%;
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
