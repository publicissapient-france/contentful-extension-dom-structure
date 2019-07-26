import styled from "styled-components";
import {ChoiceConfirm, Fields} from "../../../style/styledComponentsBoxes";
import {extensionTheme} from "../../../style/theme";

export const FieldsTemplate = styled(Fields)`
    padding :0px;
`;

export const Choices = styled.div`
    width : 100%;
    display : flex;
    
    &>div:nth-child(1){
       border-right : 1px solid ${ extensionTheme.grey20 }
        
    }
`;

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };

`;