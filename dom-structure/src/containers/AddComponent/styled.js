import styled from "styled-components";
import {Container, Form} from "../../style/styledComponents";
import {extensionTheme} from "../../style/theme";

export const ContainerForm = styled(Container)`
    padding-right : 0px;
    margin-left : 15px;
`;
export const FormComponent = styled(Form)`
    background :  ${ extensionTheme.white };
    padding-left : 15px;
    padding-right : 15px;
    box-sizing: border-box;
`;
