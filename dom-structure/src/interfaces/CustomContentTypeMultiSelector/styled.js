import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
   width : 100%;
   display : flex;
   padding-left : 20px;
`;

export const SelectContentType = styled.div`
   width : 100%;
   padding : 20px;
   display : flex;
   flex-direction: column;
`;

export const Partners = styled.div`
   width : 70%;
   padding-right : 10px;
`;

export const List = styled.div`
   display : flex;
   flex-wrap : wrap;
`;

export const Select = styled.div`
   display : flex;
   align-items : flex-start;
   width : 50%;
   font-size : 13px;
   margin-bottom : 10px;
   
   & input{
        width : 20px;
        height : auto;
    
   }
   &>p{
    border : none;
    background : none;
    cursor : pointer;
   }
   &>p.active{
        color : ${extensionTheme.blueM};
   }
`;


export const Priority = styled.div`
  width : 30%;
  padding-right : 20px;
`;

export const PriorityList = styled.div`
    &>div:last-child{
        border-bottom : 1px solid ${ extensionTheme.grey50 };
    }
`;