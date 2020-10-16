import styled from 'styled-components';
import { Container, Form, Icon } from '../../style/styledComponents';
import { CheckBox } from '../../style/styledComponentsFields';
import { extensionTheme } from '../../style/theme';

export const ContainerComponent = styled(Container)`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blueM }; 
  width : 100%;
  margin-top :0px;
  margin-left : 15px;
  background : ${ extensionTheme.white };
  border-radius : 0px 20px 20px 0px;
  overflow : hidden;
`;

export const TopBar = styled.div.attrs(props => ({
    borderBottom: props.borderBottom
}))`
  width : 100%;
  display : flex;
  justify-content: space-between;
  
  ${props => props.borderBottom ?
    `
        border-bottom : 1px solid ${extensionTheme.grey30};
        `
    : '' }
`;

export const Description = styled.div`
  display : flex;
  width : fit-content
  padding-left:10px;
`;

export const Languages = styled.div`
  display : flex;
  height : auto;
  align-items : center;
  width : fit-content;
  justify-content : space-between;
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

export const FormComponent = styled(Form)`
    flex-wrap : wrap;
    align-items : space-between;
`;

export const Column = styled.div`
  width : calc(50% - 10px);
  padding : 15px;
  flex-direction : column;
  box-sizing : border-box;
  
  &>div{
    padding-bottom : 10px;
    display : flex;
    flex-direction:column;
    
    
  }
`;

export const Buttons = styled.div`
  width : 100%;
  display : flex;
  justify-content : flex-end;
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

// STYLE REFONT
export const FieldsContainer = styled.div`
 
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

export const Actions = styled.div`
  display : flex;
  width : fit-content;
  padding-right: 3px;
  
  & ${PanelActions}:not(:last-child){
        border-right : 1px solid ${extensionTheme.grey30};
    }
`;
