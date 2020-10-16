import styled from 'styled-components';
import { Form, OptionsBlock, Icon, Container } from '../../style/styledComponents';
import { extensionTheme } from '../../style/theme';
import { CheckBox } from '../../style/styledComponentsFields';

export const ContainerSection = styled(Container)`

`;
export const Settings = styled(OptionsBlock)`
  padding-right : 15px;
`;
export const TopBar = styled.div.attrs(props => ({
    borderBottom: props.borderBottom
}))`
  width : 100%;
  display : flex;
  justify-content: space-between;
  box-sizing : border-box;
  padding-right : 14px;
  
  ${props => props.borderBottom ? 
        `
        border-bottom : 1px solid ${extensionTheme.grey30};
        `
    : '' }
`;

export const Description = styled.div`
  display : flex;
  width : fit-content
  
`;
export const Children = styled.div`
  display : flex;
  flex-wrap : wrap;
  padding-right : 10px;

`;

export const AddChild = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
`;

export const FormSection = styled(Form)`
    padding-left : 15px;
    box-sizing: border-box;
    
    &>div:nth-child(1) select{
        max-width : 205px; 
    }
    
`;

export const Active = styled(CheckBox)`
    margin-left : 15px;
    & svg{
        width : 12px;
        height : 12px;
        margin : auto;
        display:none;
    }

    &.active{
        background:  ${ extensionTheme.orange }; 
        
        & svg{
            width : 12px;
            height : 12px;
            margin : auto;
            display:block;
        }
    }
`;



export const FieldsContainer = styled.div`
 padding-bottom : 10px;
`;

export const Fields = styled.div`

`;

export const PanelActions = styled.div`
     display : flex;
     padding-left : 5px;
     padding-right : 5px;
     
     &.options{
          padding : 0;
          background-color : ${extensionTheme.grey35};
          top : 0;
          right : 100%;
          height : 40px;
          
           & ${Icon}>svg g path, & ${Icon}>svg path, & ${Icon}>svg rect, & ${Icon}>svg g circle {
                fill : ${ extensionTheme.white };
           }
           
           & ${Icon}.trash:hover{
                &>svg g path, &>svg path, &>svg  rect {
                    fill : ${ extensionTheme.redM };
                }
              }
          & ${Icon}.trash.active{
            &>svg g path, &>svg path, &>svg  rect {
                fill : ${ extensionTheme.redM };
            }
          }
          
          &>div{
            display: flex;
            padding-left : 5px;
            padding-right : 5px;
          }
          &>div:not(:last-child){
            border-right : 1px solid ${extensionTheme.white};
          }
     }
`;


export const Actions = styled(Description)`
    
    & ${PanelActions}:not(:last-child){
        border-right : 1px solid ${extensionTheme.grey30};
    }
`;
