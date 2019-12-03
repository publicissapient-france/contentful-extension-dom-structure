import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';
import {IconContainer} from "../../style/styledComponentsFields";

export const Container = styled.div`
  padding : 10px 5px;
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

export const MainProperties = styled.div`
    width : 100%;    
    display : flex;
    
    &>div:nth-child(1){
        width : calc(100% - 100px);
        
        & ${FlexProperty}{
            &>label{
                min-width : 100px;
            }
        }
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
   
   &>input[type=number]{
     width : 60px;
     padding-left : 10px;
     border: 1px solid ${ extensionTheme.grey80} ;
     
     &.updated{
        background :  ${ extensionTheme.blueM};
        color :  ${ extensionTheme.white};
     }
   }
   
`;

export const ContainerMainProperty = styled(ContainerProperty)`
    display : flex;
    flex-direction : column;
    width : auto;
    margin-right : 20px;

`


export const Grid = styled.ul`
    position : absolute;
    width : 100%;
    height : 100%;
    background : transparent;
    display : flex;
    margin: 0;
    padding : 0;
    border : 1px solid ${ extensionTheme.blueM};
    
    
    &>div{
        ${ props => `
           width: calc(100% / ${ props.columns });     
       `};
        height : 100%;
        
        &:not(:first-child) {
            &:after
                {
                   content: "";
                    width: 1px;
                    height: 100%;
                    background-color: ${ extensionTheme.blueM};
                    right: 0;
                    position: relative;
                    display: block;
                    top: 0;
                }
        }
    }

`

export const Preview = styled.div.attrs(props => ({
    columns : props.flex.columns,
    gutterHorizontal : props.flex.gutterHorizontal,
    gutterVertical : props.flex.gutterVertical,
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
   position : relative;
   display : flex;
   min-width : 200px;
   max-width : 250px;
   min-height : 100px;
   border: 1px solid ${ extensionTheme.grey20} ;
   background : ${ extensionTheme.white};
   margin-right : 5px;
   margin-top : 5px;
   background : ${ extensionTheme.blueXS};
   
   
   &>div{
        ${ props => `
           width: calc(100% / ${ props.columns } - ${   (( props.columns - 1 ) * props.gutterHorizontal ) / props.columns }px );
           margin-bottom : ${ props.gutterVertical }px;
           
       `};

    display : flex;
    align-items : center;
    justify-content : center;
    min-height : 30px;
    background : ${ extensionTheme.white};
    color : ${ extensionTheme.grey80};
    text-align : center;
    font-size : 10px;
    line-height : 14px;
    border : 1px solid ${ extensionTheme.blueS};
    box-sizing : border-box;
    
    &:nth-child(2){ min-height : 18px;}
    &:nth-child(3){ min-height : 34px;}
    
    &:nth-child(2n){
        background : ${ extensionTheme.grey20};
    }
    
    ${ props => props.justify === 'flex-start' ? `
                    &:not(:nth-child(${ props.columns }n) ){
                        margin-right : ${props.gutterHorizontal}px;
                    }
                    
                    `  : ''
                }
     ${ props => props.justify === 'flex-end' ? `
        &:not(:nth-child(${ props.columns }n + 1)){
           margin-left : ${props.gutterHorizontal}px;
        }
        `  : ''
     }
    
              
     ${ props => props.justify === 'center' ? `
        &:not(:nth-child(${ props.columns }n + 1)) {
           margin-left : ${props.gutterHorizontal}px;
        }
        `  : ''
     }
    
    
    
   
   }
    
`;