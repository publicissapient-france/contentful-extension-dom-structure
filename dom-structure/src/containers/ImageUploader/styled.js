import styled from "styled-components";

export const Container = styled.div`
   display : flex;
   flex-rirection : column;
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
