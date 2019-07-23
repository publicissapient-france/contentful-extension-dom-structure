import styled from "styled-components";
import {contentfulTheme, extensionTheme} from "../../style/theme";
import { Palette } from '../../style/styledComponentsBoxes';

export const List = styled(Palette)`
     width : auto;
    display : flex;  
    flex-wrap:wrap;
`;


export const IconExtend = styled.div`
  
    & svg.extend{
        cursor : pointer;
        margin-right : 2px;
        
        & path{
            fill : ${ contentfulTheme.grey };
        }
        & rect {
            fill : none;
        }
    }
`;