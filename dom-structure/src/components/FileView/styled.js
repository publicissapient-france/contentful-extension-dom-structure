import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
    width : 100%;
    display  : flex;
    flex-direction:column;
    padding-right : 20px;
    
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

export const DataContainer = styled.div`
   display : flex;
   margin-bottom : 10px;
   
`;

export const IconContainer = styled.div`
    width : 20px;
    height : 20px;
    margin-bottom : 10px;
    cursor : pointer;
 
     & svg{
        & path, & rect, & circle{
           transition : fill .2s ease;
            fill : ${ extensionTheme.grey40 }
        }
     }
     
   
     &:hover{
        & svg{
            & path, & rect, & circle{
                fill : ${ extensionTheme.greenM }
            }
        }
        &.delete{
            & svg{
                 & path, & rect, & circle{
                    fill : ${ extensionTheme.redM };
            }
         }
     }
     
     &.informations:hover{
        & svg{
            & path, & rect, & circle{
                fill : ${ extensionTheme.blueM }
            }
        }
     }
     
     
     &.active{
        & svg{
             & path, & rect, & circle{
                fill : ${ extensionTheme.blueM }
        }
     } 
     
     
     
     
     
        
        
 }
 
`;

export const Actions = styled.nav`
    display:flex;
    flex-direction : column;
    justify-content : space-between; 
     padding : 0 10px;
    
`;

export const Warning = styled.div`
    background : ${ extensionTheme.redXS };
    padding : 15px;
    width : 100%;
    justify-content : center;
    color : ${ extensionTheme.redL };
    margin-bottom : 20px;
`;
