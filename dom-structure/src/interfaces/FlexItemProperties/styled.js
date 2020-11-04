import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
  padding : 10px 5px;
  position : relative;
`;

export const Field = styled.div`
    display : flex; 
    flex-wrap : wrap;
`;

export const FlexProperty = styled.div`
    width : 100%;
    padding : 10px 0;
    
    display : flex;
    
    &>label {
        line-height : 30px;
        width : 100px;
        color : ${ extensionTheme.grey80};
    }
`;

export const ContainerProperty = styled.div`
   display : flex;
   flex-wrap : wrap;
   width : calc(100% - 100px);
           
   &>div{
       border: 1px solid ${ extensionTheme.grey20} ;
       width : auto;
       padding-top : 5px;
       padding-left : 5px;
       padding-right : 5px;
       margin-bottom : 10px;
       background : rgb(255,255,255, 0.5);
   }
        
   &>div:not(last-child){
       margin-right: 20px;
   }
`;

export const Preview = styled.div`
   display : flex;
   position : absolute;
   width : 200px;
   min-height : 100px;
   border: 1px solid ${ extensionTheme.grey20} ;
   background : ${ extensionTheme.white};
   right : 10px;
   top : 10px;
   
   &>div{
    width : 20%;
    margin : 5px;
    min-height : 10px;
    background : ${ extensionTheme.grey50};
   } 
`;
export const FlexElement = styled.div.attrs(props => ({
    order: props.flex.order,
    grow: props.flex.grow,
    alignSelf: props.flex.alignSelf
}))`
 background-color ${extensionTheme.grey60 } !important;
    ${ props => `
   order: ${ props.order };
   flex-grow: ${props.grow };
   align-self: ${ props.alignSelf };
   `
    };    
`;