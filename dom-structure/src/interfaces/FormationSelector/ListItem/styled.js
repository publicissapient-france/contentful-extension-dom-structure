import styled from "styled-components";
import {extensionTheme} from "../../../style/theme";

export const Item = styled.div`
   display : flex;
   flex-direction : column;
   align-items : flex-start;
   width : 100%;
   font-size : 13px;
   margin-bottom : 10px;
   
   &>p{
    border : none;
    background : none;
    cursor : pointer;
    font-size : 12px;
    margin-left : 5px;
   }
   
   
  
   
`;


export const Contain = styled.div`
   display : flex;
   padding-left : 15px;
   padding-top : 5px;
   padding-bottom : 5px;
   
   &>p{
    cursor : pointer;
   }
   
   &>p.active{
        color : ${extensionTheme.blueM};
   }
`;

export const Icon = styled.div`
   display : flex;
   width : 20px;
   height : 20px;
   cursor : pointer;
   margin-right : 5px;
   
   & svg g , & svg rect , & svg path {
    fill: ${extensionTheme.grey40};
   }
    &:hover{
        & svg g , & svg rect , & svg path {
            fill: ${extensionTheme.redM};
       }
   } 
`;
