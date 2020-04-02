import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
   width : 100%;
   display : flex;
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

export const Formations = styled.div`
   width : 60%;
   padding-right : 10px;
   
`;

export const List = styled.div`
   display : flex;
   flex-wrap : wrap;
   
`;

export const Select = styled.div`
   display : flex;
   align-items : flex-start;
   width : 100%;
   font-size : 13px;
   margin-bottom : 10px;
   
   & input{
        width : 20px;
    
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
  width : 40%;
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

export const Display = styled.div`
  display : flex;
  margin-top : 20px;
  
  &>div{
    width : 100%;
    display : flex;
    flex-direction : column;
    
    & input{
        margin-left : 0;
    }
    
    
  }
`;


export const Identity = styled.div`
  display : flex;
  width : 100%;
  height : 100%;
  align-items : center;
  justify-content : center;
    padding : 5px;

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
