import styled from 'styled-components';
import { Container, Form } from '../../style/styledComponents';
import { extensionTheme } from '../../style/theme';

export const ContainerForm = styled(Container)`
    padding-right : 0px;
    border-left : 5px solid ${ extensionTheme.blueM };
    margin-left : 15px;
    margin-right : 15px;
    width : calc(100% - 30px);

`;
export const FormComponent = styled(Form)`
    background :  ${ extensionTheme.white };
    padding-left : 15px;
    padding-right : 15px;
    box-sizing: border-box;
    
    &>div:nth-child(1) select{
        max-width : 205px; 
    }
`;
