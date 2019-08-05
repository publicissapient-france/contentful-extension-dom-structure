import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
  display : flex;
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

export const IconContainer = styled.div`
 width : 20px;
 height : 20px;
 margin-bottom : 10px;
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


export const Actions =  styled.nav`
    diplay:flex;
    flex-direction : column;
    
    padding : 0 10px;
    
`;

