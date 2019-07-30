import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const ChoiceImage = styled.div`
   display : flex;
   padding: 10px 0;
`;

export const Field = styled.div`
    display : flex;  
`;
export const ReloadView = styled.div`
   display : flex;
   flex-direction : column;
   align-items : center;
   align-content : center;
   margin : auto;
   
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