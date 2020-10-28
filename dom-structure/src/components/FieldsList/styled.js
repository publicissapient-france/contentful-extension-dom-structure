import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const FieldContainer = styled.div`
   & div.error{
        padding-left : 8px;
        padding-bottom : 15px;
        padding-top : 15px;
        border-top : 1px solid ${ extensionTheme.grey20 }; 
        border-bottom : 1px solid ${ extensionTheme.grey20 }; 
        
    }
`;
