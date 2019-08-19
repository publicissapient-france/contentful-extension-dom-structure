import styled from "styled-components";

export const Container = styled.div`
   width : min-content;
   display : flex;
   flex-direction : column;
   padding-left : 20px;
   padding-top : 20px;
   
`;
export const Field = styled.div`
   margin-bottom : 20px;   
   
   & label{
    font-size : 14px;
   }
   
   & input{
    padding-left : 0px;
   }
`;
