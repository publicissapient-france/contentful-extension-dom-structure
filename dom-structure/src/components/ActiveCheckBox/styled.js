import styled from "styled-components";
import {extensionTheme} from "../../style/theme";
import {CheckBox} from "../../style/styledComponentsBoxes";

export const Check = styled(CheckBox)`
    & svg{
        width : 12px;
        height : 12px;
        margin : auto;
        display:none;
    }
    
    &.active{
        background:  ${ extensionTheme.grey50 }; 
        
        & svg{
            width : 12px;
            height : 12px;
            margin : auto;
            display:block;
        }
    }
`;