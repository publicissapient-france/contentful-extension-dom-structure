import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Responsive = styled.div`
  display : flex;
  height : auto;
  align-items : center;
  width : fit-content;
  justify-content : space-between;
  border-right : 1px solid ${ extensionTheme.grey30 }; 
  padding-right : 15px;
`;

export const ToogleResponsive = styled.div`
   width : 40px;
  height : 34px;
  display : flex; 
  color :  ${ extensionTheme.grey40 }; 
  font-size : 11px;
  letter-spacing:1px;
  justify-content : center;
  align-items : center;
  cursor : pointer;
  transition: background 0.6s ease, color 0.6s ease;  
  
  &.active{
    color :  ${ extensionTheme.white }; 
    background : ${ extensionTheme.blueM }; 
    border-color :  ${ extensionTheme.blueM }; 
  }
`;

export const Icon = styled.div`
   width : 40px;
  height : 34px;
  cursor  : pointer;
  display :flex;
  align-items : center;
  transition : transform 0.3s ease; 
  
  & svg{
    width : 40px;
    height : 34px;
  }
  
  & svg path, & svg g path, & svg path, & svg rect {
    fill : ${ extensionTheme.grey40 };
  }

  &.active{
    & svg path,& svg g path, & svg path, & svg rect {
        fill : ${ extensionTheme.blueM };
    }
  }
  
  &.disable{
    & svg path, & svg g path, & svg  path {
        fill : ${ extensionTheme.grey20 };
    }
  }
  
  &:not(.disable):hover{
    & svg path,& svg g path, & svg  path, & svg rect {
        fill : ${ extensionTheme.blueM };
    }
  }
  &.rotate{
    transform : rotate(180deg);
  }
  
  &.toggleAll{
    & svg path,& svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.white };
    }
    
    &:hover{
        & svg path,& svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
`;
