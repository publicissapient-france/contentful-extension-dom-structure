import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
   width : 100%;
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
    width : 120px;
   }
`;

export const Choice = styled.div`
   display : flex;
   
   & input{
    width : 20px;
    height : 20px;
   }
`;

export const Selector = styled.div`
   display : flex;
   flex-wrap : wrap;
   
   & ${Choice}{
    width : calc(100% / 3);
   }
`;


export const Display = styled.div`
  margin-top : 20px; 
  
`;

export const ButtonEvents = styled.div`
   display : flex; 
   width  : 100%;
   justify-content : flex-start;
   border-bottom : 1px solid ${extensionTheme.grey30};
   background : ${extensionTheme.grey10};
   
   & button{
    padding: 5px 10px;
    background : ${extensionTheme.grey10};
    transition:  background 0.2s ease,  color 0.2s ease;
    border-width : 0 1px 0 0;
    border-color :  solid ${extensionTheme.grey30};
    border-style : solid;
    margin-bottom : -1px;
    color : ${extensionTheme.grey50};
    border-bottom : 1px solid ${extensionTheme.grey30};
    
    &.current{
        background : ${extensionTheme.white};
        color : ${extensionTheme.grey80};
        border-bottom : 1px solid ${extensionTheme.white};
    }
    
    &:focus{
        outline : none;
    }
    
    &:hover{
        background : ${extensionTheme.blueM};
        color : ${extensionTheme.white};
        
    }
   }
`;
