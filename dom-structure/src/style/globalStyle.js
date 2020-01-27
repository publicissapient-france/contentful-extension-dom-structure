import { createGlobalStyle } from 'styled-components';
import {getAssetsUrlById} from "../utils/getters";

const GlobalStyle = createGlobalStyle`      
    ${ props => props.globalFontFaces };
    
    
    .jodit_dialog_box .jodit_dialog{
        background : red !important;
        width : 80%;
        margin-left : 10%;
        left : 0 !important;
        
        ${ props => 
            `top : ${props.scrollYPosition }px !important;`
        }
        
        
      }
`;
export default GlobalStyle;
