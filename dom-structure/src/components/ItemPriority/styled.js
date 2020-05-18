import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
  display : flex;
  position : relative;
  background : ${extensionTheme.white};
  border-left : 1px solid ${ extensionTheme.grey50 };
  border-right : 1px solid ${ extensionTheme.grey50 };
  border-top : 1px solid ${ extensionTheme.grey50 };
`;

export const Text = styled.div`
  display : flex;
  width : 100%;
  height : 100%;
  align-items : center;
  justify-content : center;
  padding : 5px;
  font-size : 12px;
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
