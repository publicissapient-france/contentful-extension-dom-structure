import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
  padding : 10px 0;
`;

export const Field = styled.div`
    display : flex; 
    
    &>div>label{
        margin-left : 30px;
    } 
`;

export const Inputs = styled.div`
    display : flex; 
    
    & input{
        width : 40px;
        margin-right : 10px;
        
        &:nth-child(1){
            border-top : 3px solid ${ extensionTheme.blueM }
        }
        &:nth-child(2){
            border-right : 3px solid ${ extensionTheme.blueM }
        }
        &:nth-child(3){
            border-bottom : 3px solid ${ extensionTheme.blueM }
        }
        &:nth-child(4){
            border-left : 3px solid ${ extensionTheme.blueM }
        }
    } 
`;
