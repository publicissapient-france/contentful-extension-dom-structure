import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
  padding : 10px 0px;
  display : flex;
  flex-direction : column;
`;

export const ContainerFields = styled.div`
  display : flex;
  margin-bottom : 5px;
`;

export const Field = styled.div`
    display : flex;
    flex-direction : column;
    width : fit-content;
    max-width : 100px;
    
    &>label{
        margin-left : 30px;
    }
 
    
    &>div{
        width : fit-content;
        display : flex;
        &>input[type='text']{
            max-width : 70px;
            border-width : 1px;
            border-style : solid;
            border-color: ${ extensionTheme.grey80 };
            border-image-source : none;
            
            &.invalid{
                background-color : ${ extensionTheme.redXS };
                color : ${ extensionTheme.redM };
            }
        }
    }
     
`;
