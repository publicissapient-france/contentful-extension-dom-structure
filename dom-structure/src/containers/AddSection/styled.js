import styled from 'styled-components';
import { Form } from '../../style/styledComponents';
import {extensionTheme} from "../../style/theme";

export const FormSection = styled(Form)`
    padding-left : 8px;
`;

export const Information = styled.p`
    font-size : 11px;
    color : ${ extensionTheme.grey50};
    padding-top : 5px;
`;
