import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`      
    ${ props => props.globalFontFaces };
`;
export default GlobalStyle;
