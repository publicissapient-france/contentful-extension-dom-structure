import styled from 'styled-components';
import { extensionTheme, contentfulTheme } from '../../style/theme';

export const Button = styled.button`
   font-family:${ contentfulTheme.basicFont };
   font-size : 14px;
   border-radius : 4px;
   line-height : 11px;
   font-weight : 300;
   height : 40px;
   transition : background .2s ease, background-image .2s ease,opacity .2s ease-in-out,border-color .2s ease;
   width : 146px;
   cursor : pointer;
    background : ${ extensionTheme.greenM };
    background-size : 100% 200%;
    border : 1px solid  ${ extensionTheme.greenM };
    color : white;
    opacity : 1;
    display : flex;
    align-items :center;
    align-self : flex-end;
    margin-bottom : 20px;
    
    &:hover{
      background : ${ extensionTheme.greenXL };
      background-image : transparent;
      cursor : pointer !important;
    }
    
    
   
    &:focus {outline:0;}
`;
