import styled from 'styled-components';
import { contentfulTheme, extensionTheme } from '../../../style/theme';

export const Button = styled.button`
   background :  ${ extensionTheme.grey25 };
   color : ${ extensionTheme.grey70};
   font-family:${ contentfulTheme.basicFont };
   font-size : 14px;
   cursor : pointer;
   height : fit-content;
   border : 1px solid  ${ extensionTheme.grey35 };
   border-radius : 4px;
   padding : 10px;
   line-height : 11px;
   font-weight : 300;
   height : 33px;
   transition : background .2s ease, background-image .2s ease,opacity .2s ease-in-out,border-color .2s ease;
   opacity : 1;
   
   &:hover{
    background :  ${ extensionTheme.grey45 };
   }
   
   &.disable{
   cursor : auto;
       opacity : 0.5;
       background :  ${ extensionTheme.grey25 };
       color : ${ extensionTheme.grey70};
       border : 1px solid  ${ extensionTheme.grey35 };
   }
   
   &:focus {outline:0;}
   
   
  
`;
