import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

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

export const ChoicesContent = styled.div`
   display : flex;
   flex-wrap : wrap;
   flex-direction :  column;
   width : 100%;
   
   
   
`;

export const Content = styled.div`
   & ${ChoicesContent}{
        & ${Column}{
            padding : 10px;
            & label{
                padding-left : 5px;
            }
        }
   }
`;
