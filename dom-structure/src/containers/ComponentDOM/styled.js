import styled from "styled-components";
import {Container, Form, Icon, OptionsBlock} from "../../style/styledComponents";
import { CheckBox} from "../../style/styledComponentsBoxes";
import {extensionTheme} from "../../style/theme";

export const ContainerComponent = styled(Container)`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blueM }; 
  width : 100%;
  padding-right :0px;
  margin-top :0px;
  margin-left : 15px;
  background : ${ extensionTheme.white };
  border-radius : 0px 20px 20px 0px;
  overflow : hidden;
`;

export const TopBar = styled.div`
  width : 100%;
  display : flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  display : flex;
  width : fit-content
  padding-left:10px;
`;
export const Actions = styled.div`
  display : flex;
  width : fit-content;
  padding-right: 3px;
`;

export const Languages = styled.div`
  display : flex;
  height : auto;
  align-items : center;
  width : fit-content;
  justify-content : space-between;
`;

export const ToogleLanguage = styled.div`
  display : flex;
  border-width : 1px;
  border-style : solid;
  border-color :  ${ extensionTheme.white }; 
  color :  ${ extensionTheme.white }; 
  border-radius : 3px;
  padding : 3px;
  font-size : 11px;
  letter-spacing:1px;
  cursor : pointer;
  background : ${ extensionTheme.blueM }; 
  transition: background 0.6s ease, color 0.6s ease;
  margin 0 8px;
  
  &.active{
    color :  ${ extensionTheme.blueM }; 
    background : ${ extensionTheme.white }; 

  }
`;

export const Banner = styled.div`
  display : flex;
  align-items : center;
  justify-content: space-between;
  width : 100%;
  background : ${ extensionTheme.blueM }; 
  color :  ${ extensionTheme.white }; 
  padding-right : 3px;
  
  & p{
    padding-left : 10px;
    text-transform : uppercase;
    font-weight : 300;
  }
  
  & ${ Icon }{
    height : 34px;
    & svg{
    width : 40px;
    height : 40px;
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

export const FormComponent = styled(Form)`
  padding : 15px;
`;

export const Active = styled(CheckBox)`
    & svg{
        width : 12px;
        height : 12px;
        margin : auto;
        display:none;
    }

    &.active{
        background:  ${ extensionTheme.blueM }; 
        
        & svg{
            width : 12px;
            height : 12px;
            margin : auto;
            display:block;
        }
    }
    
`;

export const Toggle = styled.div`
  display : flex;
`;

export const Content = styled(OptionsBlock)`
 
  & ${ Banner } ${ Toggle } ${ Icon }{
    &:hover{
         & svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
`;
export const Settings = styled(OptionsBlock)`
  & ${ Banner } ${ Toggle } ${ Icon }{
    &:hover{
         & svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
`;
