import styled from 'styled-components';
import { Form, OptionsBlock, Icon, Container } from '../../style/styledComponents';
import { extensionTheme } from '../../style/theme';
import { CheckBox } from '../../style/styledComponentsFields';

export const ContainerSection = styled(Container)`

`;
export const Settings = styled(OptionsBlock)`
  padding-right : 15px;
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
  padding-right : 15px;

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


export const Banner = styled.div`
  display : flex;
  align-items : center;
  justify-content: space-between;
  width : 100%;
  background : ${ extensionTheme.orange }; 
  color :  ${ extensionTheme.orange }; 
  padding-right : 3px;
  
  & p{
    padding-left : 10px;
    text-transform : uppercase;
    font-weight : 300;
  }
  
  & ${ Icon }{
    height : 40px;
    
  & svg{
    //width : 40px;
    //height : 40px;
  }
    
    & svg g path, & svg  path, & svg rect {
        fill : ${ extensionTheme.white };   
    }
    
    &:hover{
        & svg g path, & svg  path {
            fill : ${ extensionTheme.grey10 };   
        }
    }
  }
`;


export const Toggle = styled.div`
  display : flex;
`;

export const FieldsContainer = styled.div`
 padding-bottom : 10px;
`;

export const Fields = styled.div`

`;
