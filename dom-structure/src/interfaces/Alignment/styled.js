import styled from 'styled-components';

export const Container = styled.div`
  padding : 10px 0;
`;

export const Field = styled.div`
    display : flex; 
    
    &>div{
        display : flex;
        flex-direction: row;
        & label{
            margin-left : 30px;
        }
        
        &>div:not(:first-child){
            margin-right : 10px;
        }
    } 
`;


