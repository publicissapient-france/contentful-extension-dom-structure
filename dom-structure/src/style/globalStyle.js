import { createGlobalStyle } from 'styled-components';
import {getAssetsUrlById} from "../utils/getters";

const GlobalStyle = createGlobalStyle`      
    ${ props => props.globalFontFaces };
`;
export default GlobalStyle;
