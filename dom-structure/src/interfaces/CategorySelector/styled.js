import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
   width : 100%;
   display : flex;
   padding-left : 20px;
   padding-top : 20px;
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

export const Element = styled.div`
  display : flex;
  position : relative;
  background : ${extensionTheme.white};
  border-left : 1px solid ${ extensionTheme.grey50 };
  border-right : 1px solid ${ extensionTheme.grey50 };
  border-top : 1px solid ${ extensionTheme.grey50 };
`;


export const PriorityList = styled.div`
    & ${ Element }:last-child{
        border-bottom : 1px solid ${ extensionTheme.grey50 };
    }
`;

export const Identity = styled.div`
  display : flex;
  width : 100%;
  height : 100%;
  align-items : center;
  justify-content : center;
  padding : 5px;
  font-size : 12px;
`;

export const Button = styled.div`
   width : 50%;
   opacity : 0;
   transition : opacity 0.25s ease;
   display :flex;
   justify-content : center;
   align-items : center;
   
   & svg{
    width : 8px;
   }
`;

export const ButtonsMove = styled.div`
    position : absolute;
    display : flex;
    width : 100%;
    height : 100%;
    
    &:hover{
        &>${Button}{
            opacity : 0.4;
            
            &:hover{
                background-color : ${ extensionTheme.blueM};
                opacity : 0.9;
            }
        }
    }
    
    &>${Button}{
       background-color : ${ extensionTheme.grey30};
        
        &:nth-child(1){
            transform : rotate(180deg);
        }
    }
`;
