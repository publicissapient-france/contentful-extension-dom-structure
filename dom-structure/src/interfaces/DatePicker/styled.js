import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
  //padding : 10px 5px;
  
  & input{
    width : auto !important;
    border : 0px solid transparent;
  }
  
  .react-datetime-picker__clock{
    display : none;
  }
  
  .react-datetime-picker__clear-button:enabled:hover svg line{
    stroke : ${ extensionTheme.redM };
  }
`;



export const Icon = styled.div`
  width : 40px;
  height : 40px;
  cursor  : pointer;
  display :flex;
  align-items : center;
  justify-content : center;
  transition : transform 0.3s ease; 
  
  & svg g path, & svg path, & svg rect {
        fill : ${ extensionTheme.grey40 };
    }

  &.active{
    & svg g path, & svg path, & svg rect {
        fill : ${ extensionTheme.greenM };
    }
  }
  
  &.disable{
    & svg g path, & svg  path {
        fill : ${ extensionTheme.grey20 };
    }
  }
  
  &:not(.disable):hover{
    & svg g path, & svg  path, & svg rect {
        fill : ${ extensionTheme.greenM };
    }
  }
  
   &.trash:hover{
    & svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.redM };
    }
  }
  &.trash.active{
    & svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.redM };
    }
  }
  
  &.rotate{
    transform : rotate(180deg);
  }
  
  &.toggleAll{
    & svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.white };
    }
    
    &:hover{
        & svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
  
`;


export const DateBox = styled.div`
   display : flex;
   flex-direction : column;
   align-items : flex-end;
   position : absolute;
   background-color : ${extensionTheme.blueM};
   border : 1px solid ${extensionTheme.grey50};
   border-radius : 2px;
   overflow : hidden;
   z-index : 30;
   
   
   &>div:nth-child(2){
    background-color : ${extensionTheme.white};
   }

   & *{
    outline : none;
   }
   
`;


export const CloseBox = styled.div`
   width : 30px;
   height : 25px;
   position : relative;
   z-index : 40;
   cursor : pointer;
   margin-top : 10px;
   
   &:before, &:after {
        position: absolute;
        left: 4px;
        top:7px;
        content: ' ';
        height: 2px;
        width: 20px;
        background-color: ${extensionTheme.white};
    }
    
     &:before{
        transform : rotate(45deg);
     }
     &:after{
        transform : rotate(-45deg);
     }
   
`;

export const InputDate = styled.div`
   width : 140px;
   height : 28px;
   margin-right : 10px;
   display : flex;
   align-items : center;
   //overflow : hidden;
   //border-radius : 2px;
   border : 1px solid ${extensionTheme.grey50};
   cursor : pointer;
   position : relative;
   background : ${extensionTheme.white};
   
   &>p{
      min-width : 90px;
   }
   
 
   
   & ${Icon}{
        width : 30px;
        height :30px;
       background-color : ${extensionTheme.blueM};
       margin-right : 10px;
       border-radius : 2px 0 0 2px;
       overflow : hidden;
       
       & svg g path, & svg path, & svg rect, & svg circle {
            fill : ${ extensionTheme.white };
       }
       
       &:hover{
            & svg g path, & svg path, & svg rect, & svg circle {
                fill : ${ extensionTheme.white };
           }
       }
   }
   
   &.passed{
       & ${Icon}{
           background-color : ${extensionTheme.redM};
       }
   }
   
`;