import styled from 'styled-components';
import {Form, OptionsBlock, Container, SafeDelete} from '../../style/styledComponents';
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
  padding-right : 11px;
  
  ${props => props.borderBottom ? 
        `
        border-bottom : 1px solid ${extensionTheme.grey30};
        `
    : '' }
`;

export const Description = styled.div`
  display : flex;
  width : fit-content
  min-width : fit-content
  
`;
export const Children = styled.div`
  display : flex;
  flex-wrap : wrap;
  padding-right : 10px;

`;

export const FormSection = styled(Form)`
    padding-left : 15px;
    box-sizing: border-box;
    justify-content: flex-start;
    
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

export const ChoiceOptions = styled(SafeDelete)`
  background-color : ${extensionTheme.grey10};
  padding-left : 18px;
  
  & p{
    color: ${extensionTheme.black};  
  }
`;



export const Buttons = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-end;
    
    &.hidden{
        display : flex;
        opacity : 0;
    }
`;
