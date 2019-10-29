import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';


export const IconContainer = styled.div`
    cursor : pointer;
    color : ${extensionTheme.grey80};
    
     &.show{         
        &:hover{
            background : ${extensionTheme.grey10};
        }
     }
     
     &.active{
        color : ${extensionTheme.blueM};
     }   
`;
