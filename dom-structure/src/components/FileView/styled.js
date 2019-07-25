import styled from "styled-components";
import {extensionTheme} from "../../style/theme";
import {ChoiceConfirm} from "../../style/styledComponentsBoxes";

export const Container = styled.div`
   
`;
export const DataContainer = styled.div`
   display : flex;
   margin-bottom : 10px;
   
   
    &.image-file {
        grid-template-columns: 1fr minmax(40%, 1fr);
        grid-column-gap: 2rem;
    }

    &.image-file header {
        background:#f2f2f2 no-repeat center center;
        background-size: contain;
    }
    
    &.non-image-file header .file-type-icon svg {
        width: var(--file-icon-size);
        height: var(--file-icon-size);
    }
    
    & header {
        width : 300px;
        height : 300px;
    }
    & img {
        height: 100%;
    }

   
`;

export const IconContainer = styled.div`
 width : 40px;
 height : 40px;
 cursor : pointer;
 
 & svg{
    width : 40px;
    height : 40px;
    & path, & rect{
       transition : fill .2s ease;
        fill : ${extensionTheme.black}
    }
 }
 
 &:hover{
    & svg{
        & path, & rect{
            fill : ${extensionTheme.greenM}
        }
    }
 }
 
`;


export const Actions =  styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;
    justify-content : flex-start;
`;

export const Warning =  styled.div`
    background : ${extensionTheme.redXS};
    padding : 15px;
    width : 100%;
    justify-content : center;
    color : ${ extensionTheme.redL};
    margin-bottom : 20px;
`;

export const Details =  styled.div`
    padding: 0 15px;
    max-width : 50%;
    & strong {
        font-weight: 700;
    }
    
    overflow-wrap: break-word;
   
`;
