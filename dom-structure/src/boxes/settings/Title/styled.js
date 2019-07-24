import styled from "styled-components";
import {ChoiceConfirm, Fields} from "../../../style/styledComponentsBoxes";
import {extensionTheme} from "../../../style/theme";

export const FieldsTemplate = styled(Fields)`
    padding :0px;
`;

export const Choices = styled.div`
    width : 100%;
    display : flex;
`;
export const Category = styled.div`    
    border : 1px solid ${ extensionTheme.grey20 };
    border-left : 0px 
    border-bottom : 0px 
`;
export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };

`;
export const Column = styled.div`
    display : flex;
    flex-direction : column;
    
    &.full-width{
        width : 100%;
        
        & ${Category}{
            width : 100%;
            padding-top : 0;
        }
    }

`;