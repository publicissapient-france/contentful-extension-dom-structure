import styled from "styled-components";
import {contentfulTheme} from "../../style/theme";

export const Button = styled.button`
  border : none;
  background:transparent;
  padding: 0px 10px;
  width : fit-content;
  height : 33px;
  cursor : pointer;
  align-self : flex-end;
  
  &:hover{
    color :  ${ contentfulTheme.grey };
  }
  
  &:focus{
     outline : none;
  }  
  
`;