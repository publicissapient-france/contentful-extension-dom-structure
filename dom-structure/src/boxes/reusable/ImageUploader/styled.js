import styled from "styled-components";
import {extensionTheme} from "../../../style/theme";

export const ChoiceImage = styled.div`
   display : flex;
   padding: 10px 0;
`;

export const Field = styled.div`
    display : flex;  
`;
export const RefreshMessage = styled.div`
   display : flex;
   flex-direction : column;
   padding-left : 20px;
   width : auto;
   justify-content : center;
   
   & button{
    align-self : flex-start;
    margin-top : 10px;
   }
   
`;

export const IconContainer = styled.div`

 cursor : auto;
 
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
 align-items : center;
 padding : 0 10px;
 
`;


export const ViewPort = styled.div`
  border :2px dashed #ccc
  width : 120px;
  height : 120px;
  display : flex;
  flex-direction : column; 
  align-items : center;
  justify-content : center;
  
  $  ${IconContainer}{
    cursor: auto;
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


export const ReloadView = styled.div`
   display : flex;
   
   & ${Actions}  ${IconContainer}{
        cursor: auto;
        width : 20px;
        height : 20px;
        margin-bottom : 20px;
 
        & svg{
            & path, & g, & rect{
                fill : ${extensionTheme.grey20};
            }
        
        }
   }
   
`;
