import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
   width : 100%;
   display : flex;
   flex-direction: column;
   padding-top : 20px;
`;

export const Formations = styled.div`
   width : 70%;
   padding-right : 10px;
   
   &>label{
       padding-left : 20px;
   }
`;

export const List = styled.div`
   display : flex;
   flex-wrap : wrap;
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

export const Drop = styled.div`
   display : flex;
   width : 100%;
   margin-bottom : 30px;
   padding-left : 20px;

   &>div{
    display : flex;
    flex-direction : column;
    margin-right : 20px;
    &>button{
        margin-top : 22px;
    }
    
    & select:disabled{
        opacity : 0.3;
    }
    
    &:nth-child(1){
        & select{
            width : 180px;
            padding-right : 20px;
        }
    }
    &:nth-child(2){
        & select{
            width : 270px;
            padding-right : 20px;
        }
    }
   }
`;
export const FormationsContainer = styled.div`
   display : flex;  
`;
