import styled from "styled-components";

export const Choices = styled.div`
   display : flex;
   flex-wrap : wrap;
   padding: 10px 0;
   width : 100%; 
       
   &>div{
    display : flex;
    margin-top : 20px;
    width : calc(100% / 3 - 10px);
    
   }
   
  
`;
