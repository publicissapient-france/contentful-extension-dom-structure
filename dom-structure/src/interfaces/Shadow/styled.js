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
        width : 260px;
        margin-right : 20px;
    } 
`;

export const Preview = styled.div.attrs(props => ({
    shadow: props.shadow
}))`
    display : flex; 
    padding : 20px;
    border : 1px solid ${ extensionTheme.grey10 };
    
    &>div{
        border : 1px solid ${ extensionTheme.grey50 };
        width : 50px;
        height : 50px;
        box-shadow : ${ props =>  `${ props.shadow ? `${props.shadow}` : ''};`
    };
    } 
`;
