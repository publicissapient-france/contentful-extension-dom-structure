import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const IconContainer = styled.div`
 
 
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
    display:flex;
    flex-direction : column;
    
    padding : 0 10px;
    
`;

export const View =  styled.div`
    display:flex;
        
`;


export const ViewPort = styled.div`
  border :2px dashed #ccc
  width : 150px;
  height : 150px;
  display : flex;
  flex-direction : column; 
  align-items : center;
  justify-content : center;
  
  $  ${IconContainer}{
    cursor: auto;
        width : auto;
        height : auto;
        margin-bottom : 0;
  }
  
  & svg{
   width : 50px;
   height : 50px;
   
   & g path {
    fill : ${extensionTheme.grey30};
   }
   
   &:hover{
       & path, & rect{
           fill : ${extensionTheme.grey30}
       }
        
     }
   
  } 
  
 `


export const Container = styled.div`
   display : flex;
   flex-direction : column;
   
   & ${Actions}  ${IconContainer}{
      width : 20px;
     height : 20px;
     margin-bottom : 10px;
     cursor : pointer;
 
        & svg{
            & path, & g, & rect{
                fill : ${extensionTheme.grey20};
            }
        
        }
   }
   
`;


export const RefreshMessage = styled.div`
   display : flex;
   flex-direction : column;
   padding-top : 20px;
   width : auto;
   justify-content : center;
   
   & button{
    align-self : flex-start;
    margin-top : 10px;
   }
   
`;