import styled from "styled-components";
import {Form, OptionsBlock} from "../../style/styledComponents";
import {extensionTheme} from "../../style/theme";
import { CheckBox } from '../../style/styledComponentsFields';

export const Settings = styled(OptionsBlock)`
  
`;
export const TopBar = styled.div`
  width : 100%;
  display : flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  display : flex;
  width : fit-content
  
`;
export const Actions = styled(Description)`
    padding-right : 3px;
`;

export const Children = styled.div`
  display : flex;
  flex-wrap : wrap;
`;

export const AddChild = styled.div`
  display : flex;
  width : 100%;
`;

export const FormSection = styled(Form)`
    padding-left : 15px;
    box-sizing: border-box;
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
