import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };  
    box-sizing : border-box;
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


export const Choices = styled.div`
   
`;


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

