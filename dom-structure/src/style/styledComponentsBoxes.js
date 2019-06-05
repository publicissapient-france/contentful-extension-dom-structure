import styled from 'styled-components';
import { Icon } from './styledComponents';
import { extensionTheme, contentfulTheme } from './theme';

export const Banner = styled.div`
  display : flex;
  width : 100%;
  background : ${ extensionTheme.grey20 }; 
  padding-left : 5px;
  box-sizing : border-box;
  font-weight : 300;
  border-bottom : 1px solid ${ extensionTheme.grey30 }; 
  justify-content: space-between;
  
  & p{
    padding-left : 10px;
    line-height : 34px;
  }
  
  & ${ Icon }{
    height : 34px;
    
  }
  
  & input[type='checkbox']{
    height : 34px;
    padding : 0;
    margin : 0;
    
    &:checked{
        background : ${ extensionTheme.blueM }; 
    }
  }
  
  &>div{
    display : flex;
  }
 
  
  
`;

export const Fields = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  padding :20px 30px 20px 15px;
  box-sizing : border-box;
  display: none;
  
  input{
    border : 1px solid  ${ extensionTheme.grey80 };
    width : 100%;
    padding-left: 10px;
  }
  
  label {
    font-size : 12px;
    font-weight : 300;
    color :  ${ extensionTheme.grey80 };
  }
  
  span {
    font-size : 11px;
    color :  ${ extensionTheme.grey80 };
  }
  
  
  &.open{
    display: flex;
  }
`;

export const CheckBox = styled.button`
    height  : 12px;
    width : 12px;
    color : white;
    background : transparent;
    display:flex;
    align-self : center;
    border-radius : 3px;
    cursor:pointer;
    padding : 0;
    
    &.active{
        background:  ${ extensionTheme.orange }; 
    }
`;

export const ActiveContent = styled(CheckBox)`
    &.active{
        background:  ${ extensionTheme.blueM }; 
    }
`;
export const BoxesContainer = styled.div`


    & div.error{
        padding-left : 8px;
        padding-bottom : 15px;
        padding-top : 15px;
        border-top : 1px solid ${ extensionTheme.grey30 }; 
        border-bottom : 1px solid ${ extensionTheme.grey30 }; 
        
    }
    
    &.closed{  
            height : 0 !important;
            overflow:hidden;
        &>div {
            
        }            
    }
    
    &.semiOpen{
      
    }
    
   
     
    
  
`;

export const BoxColor = styled.div`
    width : 20px;
    height: 20px;
    background : white;
    border: 2px solid ${ extensionTheme.grey30 };
    position : relative;
    cursor : pointer;
    align-self:center;

    &.null{
        overflow : hidden;
        background : white;
        &:before {
            content: '';
            position: absolute;
            left: -22%;
            right: 0;
            top: 48%;
            bottom: 0px;
            background : red;
            width : 150%;
            height : 2px;
            transform : rotate(-45deg);
        }
    }
    
    &.undefined{
    overflow : hidden;
        background : white !important;
        &:before {
            content: '';
            position: absolute;
            left: -22%;
            right: 0;
            top: 48%;
            bottom: 0px;
            background : ${ extensionTheme.lightGrey };;
            width : 150%;
            height : 2px;
            transform : rotate(-45deg);
        }
        &:after {
            content: '';
            position: absolute;
            left: -22%;
            right: 0;
            top: 48%;
            bottom: 0px;
            background : ${ extensionTheme.lightGrey };;
            width : 150%;
            height : 2px;
            transform : rotate(45deg);
        }
    }
`;

export const NameColor = styled.p`
    font-weight : 400;
    font-size : 12px;
    line-height : 20px;
    color : ${ extensionTheme.black };
    font-family :${ contentfulTheme.basicFont };

`;
export const HexColor = styled.p`
    font-weight : 200;
    font-size : 12px;
    line-height : 12x;
    color : ${ contentfulTheme.grey };
    font-family :${ contentfulTheme.basicFont };

`;
export const BlockColor = styled.div`
    width : auto;
    height : fit-content;
    border-width : 2px 1px;
    border-style: solid;
    border-color:  transparent;
    cursor : pointer;
    
    &.selected{
      border-color:  black;
      
      & ${ BoxColor }{
        border-color : white;
      }
    }
    
`;

export const IconAdd = styled.div`
    width : 28px;
    height: 28px;
    background :  ${ extensionTheme.lightGrey };
    display: flex;
    align-items: center;
    justify-content: center;
    cursor : pointer;
    position: relative;
    
    & svg.add{
        cursor : pointer;
        margin-right : 2px;
        
        & path.b{
            fill : white};
        }
        & rect, & path.c {
            fill : none;
        }
        & path {
           stroke:gray;
           stroke-miterlimit:10;
        }
    }
  
    &.selected:before {
       display: block;
       content: '';
       width : 100%;
       height: 100%;
       border-width : 2px 1px;
       border-style: solid;
       border-color: black;
       position : absolute
       box-sizing : border-box;
    }
`;

export const ColorList = styled.div`
    width : auto;
    display : flex;  
    flex-wrap:wrap;
`;
export const Palette = styled.div`
    width : fit-content;
    height : auto;
    display : flex;
    
    & ${ BlockColor }{
        & ${ NameColor }, & ${ HexColor }{
            display : none;
        }
    }
    
    &.open{
        & ${ IconAdd }{
            width : 80px;
            height : 80px;
            margin : 0 12px;
            border: 1px solid ${ extensionTheme.grey20}

        }
       
      & ${ BlockColor }{
        border-width : 0;
        margin : 0 12px;
        border-style :  solid;
        border-color : transparent;
        margin-bottom : 10px;
        
        &.selected{          
          & ${ BoxColor }{
            border-color :  black;
            
            &:not(.null):before {
                display: block;
                content: '';
                width : 100%;
                height: 100%;
                border: 2px solid white;
                position : absolute
                
                box-sizing : border-box;
            }
          }
        }
        
        & ${ BoxColor }{
            width : 76px;
            height : 76px;
        }
        & ${ NameColor }, & ${ HexColor }{
            display : block;
        }
        }
     }
    
  
`;
export const IconExtend = styled.div`
  
    & svg.extend{
        cursor : pointer;
        margin-right : 2px;
        
        & path{
            fill : ${ contentfulTheme.grey };
        }
        & rect {
            fill : none;
        }
    }
`;


export const Specification = styled.div`
    height : auto;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
    width : 100%;
    margin-top : 20px;
    align-items : flex-start;
    
    & label, p{
        font-weight : 300;
        font-size : 14px;
        color : ${ contentfulTheme.grey };
        font-family :${ contentfulTheme.basicFont };
    }
    & label{
        line-height : 30px;
    }
    & p{
        line-height : 16.8px;
        margin-top : 10px;
    }
    
    & div>input {
        width : 100px;
    }
    
    
   /* & button{
        background :  ${ extensionTheme.extraLightGrey };
        color : ${ contentfulTheme.grey };
        font-family:${ contentfulTheme.basicFont };
        font-size : 14px;
        cursor : pointer;
        height : fit-content;
        border : 1px solid  ${ contentfulTheme.lightGrey };
        border-radius : 4px;
        padding : 10px;
        line-height : 11px;
        font-weight : 300;
        height : 33px;
    }*/
    
   & ${ BoxColor }{
       width : 56px;
       height : 56px;
       margin-right : 30px;
    }
`;

export const ChoiceColor = styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 30px;
`;
export const ChoiceName = styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 30px;
  
  & p{
    & span{
        display : none;
    }
  
    &.invalid{
        color : ${ extensionTheme.red };
        
         & span{
            display : block;
        }
    }
  }
`;

export const ChoiceShade = styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 30px;
`;

export const Buttons = styled.div`
  align-self : flex-start;
  margin-top:30px;
  
`;
