import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
  display : flex;
  margin-bottom : 10px;

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
        fill : ${extensionTheme.grey40}
    }
 }
 
 &:hover{
    & svg{
        & path, & rect{
            fill : ${extensionTheme.greenM}
        }
    }
 }
 &.delete{
    cursor : auto;
 
    & svg{
        & path, & rect{
            fill : ${extensionTheme.grey20}
        }
    }
 }
 
`;


export const Actions =  styled.nav`
    display:flex;
    flex-direction : column;
    justify-content : space-between; 
    padding : 0 10px;
    
`;

