import {ChoiceConfirm, Fields} from "../../../style/styledComponentsBoxes";
import styled from "styled-components";
import {extensionTheme} from "../../../style/theme";


export const FieldsTemplate = styled(Fields)`
`;

export const Choices = styled.div`
    width : 100%;
    display : flex;

`;

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };

`;