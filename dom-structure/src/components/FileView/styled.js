import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
`;

export const IconContainer = styled.div`
 width : 40px;
 height : 40px;
 cursor : pointer;
 
 & svg{
    width : 40px;
    height : 40px;
    & path, & rect{
       transition : fill .2s ease;
        fill : ${extensionTheme.black}
    }
 }
 
 &:hover{
    & svg{
        & path, & rect{
            fill : ${extensionTheme.greenM}
        }
    }
 }
 
`;
