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
   
`;

export const IconContainer = styled.div`

 cursor : pointer;
 
 & svg{
   
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
export const Actions = styled.nav`
 display : flex;
 flex-direction : column;
 
`;


export const ViewPort = styled.div`
  border :2px dashed #ccc
  width : 150px;
  height : 150px;
  display : flex;
  flex-direction : column; 
  align-items : center;
  justify-content : center;
  
  & svg{
   width : 50px;
   height : 50px;
   
   & g path {
    fill : ${extensionTheme.grey30};
   }
  } 
 `