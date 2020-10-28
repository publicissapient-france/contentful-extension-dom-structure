import styled from 'styled-components';
import { contentfulTheme, extensionTheme } from '../../../style/theme';

export const Button = styled.button`
   background :  ${ extensionTheme.grey25 };
   color : ${ extensionTheme.grey70};
   font-family:${ contentfulTheme.basicFont };
   font-size : 14px;
   cursor : auto;
   border : 1px solid  ${ extensionTheme.grey35 };
   border-radius : 4px;
   padding : 10px;
   line-height : 11px;
   font-weight : 300;
   height : 33px;
   transition : background .2s ease, background-image .2s ease,opacity .2s ease-in-out,border-color .2s ease;
   width : fit-content;
   align-self : flex-end;
   opacity : 0.5;
   
   &.active{
   cursor : pointer;
    background : ${ extensionTheme.greenM };
    background-size : 100% 200%;
    border : 1px solid  ${ extensionTheme.greenM };
    color : white;
    opacity : 1;
    
        &:hover{
          background : ${ extensionTheme.greenXL };
          background-image : transparent;
          cursor : pointer !important;
        }
    
    }
   
    &:focus {outline:0;}
`;
