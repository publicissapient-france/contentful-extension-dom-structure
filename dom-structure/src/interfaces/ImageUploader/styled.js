import styled from "styled-components";

export const Container = styled.div`
   display : flex;
   flex-direction : column;
   padding: 20px 20px 0;
   
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
