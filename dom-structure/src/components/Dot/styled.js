import {extensionTheme} from "../../style/theme";
import styled from "styled-components";

export const DotContainer = styled.div`
   width : 30px;
   min-width : 30px;
   height : 30px;
   display:flex;
   justify-content:center;
   align-items : center;
   
   &::before{
       content: '';
       display: inline-block;
       width: 8px;
       height: 8px;
       -moz-border-radius: 50%;
       -webkit-border-radius: 50%;
       border-radius: 50%;
       background-color: ${ extensionTheme.blueM};
       display : none;
    }
    
    &.active{
        &::before{
          display : block;
        }
    }
`;