import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
    width : fit-content;
    display  : flex;
    flex-direction:column;
    padding: 20px 0 20px 20px;
    
   &.image-file {
        grid-template-columns: 1fr minmax(40%, 1fr);
        grid-column-gap: 2rem;
    }

    &.image-file header {
        background:#f2f2f2 no-repeat center center;
        background-size: contain;
    }
    
    &.non-image-file header .file-type-icon svg {
        width: 4rem;
        height: 4rem;
    }
    
   
    & img {
        height: 100%;
    }
    
    p{
        line-height : 20px;
    }
`;
export const Preview = styled.header`
   width : 120px;
   height : 120px;
`;

export const ViewPort = styled.div`
  border :2px dashed #ccc
  width : 120px;
  height : 120px;
  display : flex;
  flex-direction : column; 
  align-items : center;
  justify-content : center;
  
  & svg{
   width : 50px;
   height : 50px;
   
   & g path {
    fill : ${ extensionTheme.grey30 };
   }
  } 
 `;
