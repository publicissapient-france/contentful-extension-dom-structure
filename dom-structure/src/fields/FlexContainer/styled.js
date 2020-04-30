import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const Settings = styled.div`
   
`;

export const Choices = styled.div`
   display : flex;
`;


export const Field = styled.div`
    display : flex;
    
`;


export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
    
    &.full-width{
        width : 100%;
    }
`;
