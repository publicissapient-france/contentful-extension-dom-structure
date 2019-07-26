import styled from "styled-components";

export const ChoiceSize = styled.div`
   display : flex;
   padding: 10px 0;
   padding-right : 30px;
   
   
`;

export const Field = styled.div`
    display : flex; 
    
    &>div{
        display : flex;
        flex-direction : column;
    }
    
    & input{
        max-width : 60px;
    } 
`;