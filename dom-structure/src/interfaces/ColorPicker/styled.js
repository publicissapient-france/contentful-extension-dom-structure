import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';
import { BoxColor, Fields } from '../../style/styledComponentsFields';
import { Icon } from '../../style/styledComponents';

export const SelectedColor = styled(BoxColor)`
    width : 30px;
    height : 30px;
    align-self:flex-start;
    
    
    &.updated{
        border : 2px solid ${ extensionTheme.blueM };
    }
`;

export const ChoiceColor = styled.div`
   display : flex;
   padding-bottom : 16px;
   border-bottom : 1px solid ${ extensionTheme.grey20 };
   width : 100%;
   
   &.full-width{
     width : 100%;
     padding-bottom : 0px;

   }
   
   &>div{
    padding-top :10px;
    padding-bottom :10px;
    display:flex;
    flex-direction:column;
   }
  
   &>div:nth-child(2){
       border-left:1px solid  ${ extensionTheme.grey20 };
       padding-left : 25px;
       display:flex;
       flex-direction : row;
       justify-content : space-between;
       width: inherit;
       margin-left : 30px;
       
       &>div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       }
       
       &.hidden{
        display : none;
       }
   }
`;
export const Close = styled(Icon)`
   align-self :flex-end;
   width : 40px;
`;

export const ChoiceOpacity = styled.div`
    display : flex;
    flex-direction:column;

   & input{
    width : 50px;
    max-width : 50px;
   }
`;
export const PaletteView = styled.div`
    width : 100%;
`;
export const PaletteContainer = styled.div`
    flex-direction : column;
`;

export const Field = styled.div`
    display : flex;
    
`;
export const FieldsError = styled(Fields)`
    display : block;
`;
