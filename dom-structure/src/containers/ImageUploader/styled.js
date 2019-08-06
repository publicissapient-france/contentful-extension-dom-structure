import styled from "styled-components";

export const Container = styled.div`
   display : flex;
   flex-direction : column;
   padding-right : 40px;
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
