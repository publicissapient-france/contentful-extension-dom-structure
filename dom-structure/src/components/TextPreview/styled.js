import {IconContainer} from "../../style/styledComponentsBoxes";
import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const PreviewContainer = styled.div`
    display : flex;
`;
export const TextContainer = styled.div`
    max-height : 97px;
    overflow : hidden;
    display : flex;
    
    &.is-open{
        height : 240px;
        max-height : none;
    }
    
    &.on-dark{
        background : black;
        color : white;
    }
    
    & p{
        margin:0;
        padding :10px;
        word-break : break-all;
    }
    
`;
export const Options = styled.div`
    padding-top : 10px;
    padding-right : 10px;    
    
    & ${ IconContainer }{
        background : white;
        border : 1px solid ${ extensionTheme.grey30 }; 
        border-radius : 4px;
        width : 22px;
        height : 22px;
        margin-bottom : 5px;
        
        
    }
`;
