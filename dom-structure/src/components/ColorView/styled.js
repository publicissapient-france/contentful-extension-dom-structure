import styled from "styled-components";
import {extensionTheme} from "../../style/theme";

export const ChoiceColor = styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 30px;
  
`;

export const ChoiceShade = styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 30px;
`;

export const ChoiceName = styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 30px;
  
  & p{
    & span{
        display : none;
    }
  
    &.invalid{
        color : ${ extensionTheme.red };
        
         & span{
            display : block;
        }
    }
  }
`;