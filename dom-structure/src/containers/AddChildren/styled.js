import styled from 'styled-components';
import { Container, Form } from '../../style/styledComponents';
import { extensionTheme } from '../../style/theme';

export const ContainerForm = styled(Container)`
    padding-right : 0px;
    margin-left : 15px;
    border-left : 0px;
    width : calc(100% - 30px);
    
`;
export const FormComponent = styled(Form)`
    box-sizing: border-box;
    border-left : 5px solid ${ extensionTheme.blueM};
    padding-left : 10px;
    padding-right : 10px;

`;

export const SelectTypeChild = styled.div`
    display : flex;
    padding : 10px;
    border-left : 5px solid ${ extensionTheme.grey40};
    
    &.component{
        border-left : 5px solid ${ extensionTheme.blueM};
    }
    
    &.section{
        border-left : 5px solid ${ extensionTheme.orange};
    }
    
`;

export const FormChildren = styled.div`
    display : flex;
    padding : 10px;
    
`;

export const Type = styled.div`
    display : flex;
    flex-direction : column;
    width : 30%;
`;

export const SelectType = styled.div`
    display : flex;
    align-items : center;
    height : 25px;
    
    &>input{
        margin-right : 5px;
    }
    
    &>p{
        font-size : 12px;
    }
   
`;
