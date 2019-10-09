import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';
import {IconContainer} from "../../style/styledComponentsFields";

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

export const Preview = styled.div.attrs(props => ({
    direction: props.flex.direction,
    wrap: props.flex.wrap,
    justify: props.flex.justify,
    alignItems: props.flex.alignItems,
    alignContent: props.flex.alignContent

}))`

${ props => `
   flex-direction: ${ props.direction };
   flex-wrap: ${props.wrap };
   justify-content: ${ props.justify };
   align-items: ${ props.alignItems };
   align-content: ${ props.alignContent };
            
            
            
   `
    };

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
    
    &:nth-child(2){ min-height : 18px;}
    &:nth-child(3){ min-height : 22px;}
   
   }
    
`;