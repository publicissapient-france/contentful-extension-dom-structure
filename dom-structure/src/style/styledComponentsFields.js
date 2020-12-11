import styled from 'styled-components';
import { Icon } from './styledComponents';
import { extensionTheme, contentfulTheme } from './theme';

export const Banner = styled.div`
  display : flex;
  width : 100%;
  background : ${ extensionTheme.grey10 }; 
  padding-left : 10px;
  box-sizing : border-box;
  font-weight : 300;
  border-top : 1px solid ${ extensionTheme.grey20 }; 
  border-bottom : 1px solid ${ extensionTheme.grey20 }; 
  justify-content: space-between;
  padding-right : 3px;
  height : 35px;
  
  & p{
    padding-left : 10px;
    line-height : 15px;
    align-self:center;
    font-size:13px;
    font-weight : 400;
    opacity:0.7;
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
  padding :20px 15px 20px 15px;
  box-sizing : border-box;
  display: none;
  
  input{
    border : 1px solid  ${ extensionTheme.grey80 };
    width : 100%;
    padding : 0;
    padding-left : 5px;
    box-sizing:border-box;
    line-height : 30px;
    
    &.updated{
        background : ${ extensionTheme.blueM };
        color :  ${ extensionTheme.white };
    }
  }
  
  select {
    &.updated{
            background : ${ extensionTheme.blueM };
            color : ${ extensionTheme.white }
        }
  }
  
  label {
    font-size : 12px;
    font-weight : 300;
    color :  ${ extensionTheme.grey80 };
    line-height : 30px;
  }
  
  span {
    font-size : 11px;
    color :  ${ extensionTheme.grey50 };
    margin-top:3px;
  }
  
  &.open{
    display: flex;
  }
`;

export const Field = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  box-sizing : border-box;
  
  input{
    border : 1px solid  ${ extensionTheme.grey80 };
    width : 100%;
    padding : 0;
    padding-left : 5px;
    box-sizing:border-box;
    line-height : 30px;
    
    &.updated{
        background : ${ extensionTheme.blueM };
        color :  ${ extensionTheme.white };
    }
  }
  
  select {
    &.updated{
            background : ${ extensionTheme.blueM };
            color : ${ extensionTheme.white }
        }
  }
  
  label {
    font-size : 12px;
    font-weight : 300;
    color :  ${ extensionTheme.grey80 };
  }
  
  span {
    font-size : 11px;
    color :  ${ extensionTheme.grey50 };
    margin-top:3px;
  }
  
  &.open{
    display: flex;
  }
`;

export const CheckBox = styled.button`
    height  : 15px;
    width : 15px;
    color : white;
    background :  ${ extensionTheme.white }; 
    display:flex;
    align-self : center;
    border-radius : 3px;
    border-color : ${ extensionTheme.grey40 };
    cursor:pointer;
    padding : 0;
    
    &.active{
        background:  ${ extensionTheme.orange }; 
        border : none;
    }
    
    &:focus{
        outline : 0;
    }
`;

export const ActiveCheckBox = styled(CheckBox)`
    & svg{
        width : 12px;
        height : 12px;
        margin : auto;
        display:none;
    }
    
    &.active{
        background:  ${ extensionTheme.grey50 }; 
        
        & svg{
            width : 12px;
            height : 12px;
            margin : auto;
            display:block;
        }
    }
`;
export const BoxesContainer = styled.div`

    & div.error{
        padding-left : 8px;
        padding-bottom : 15px;
        padding-top : 15px;
        border-top : 1px solid ${ extensionTheme.grey20 }; 
        border-bottom : 1px solid ${ extensionTheme.grey20 }; 
        
    }
   
`;

export const BoxColor = styled.div`
    width : 20px;
    height: 20px;
    background : white;
    border: 1px solid ${ extensionTheme.grey20 };
    position : relative;
    cursor : pointer;

     &.transparent{
        overflow : hidden;
        background : white !important;
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
    width : fit-content;
    height : fit-content;
    border-width : 1px;
    border-style: solid;
    border-color: ${ extensionTheme.grey20 };
    cursor : pointer;
    
    &.selected{
      border-color:  black;
      
      & ${ BoxColor }{
        border-color : white;
      }
    }
    
`;

export const IconAdd = styled.div`
    width : 22px;
    height: 22px;
    background :  ${ extensionTheme.grey20 };
    border-width : 1px;
    border-style: solid;
    border-color: ${ extensionTheme.grey20 };
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
  
    &.selected{
        border-color: ${ extensionTheme.black };

        :before {
           display: block;
           content: '';
           width : 100%;
           height: 100%;
           border-width : 1px 1px;
           border-style: solid;
           border-color: white;
           position : absolute
           box-sizing : border-box;
        }
    }
    
    
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
            border: 1px solid ${ extensionTheme.grey20 }

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
                border: 1px solid white;
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
export const IconContainer = styled.div`
  width:30px;
  height : 30px;
  cursor : pointer;
  color :  ${ extensionTheme.grey40 };
  
  &.updated{
    background : ${ extensionTheme.blueM };
    color : ${ extensionTheme.white };
     & svg{
        & g rect, & g path, & g polygon, & polygon{
            fill : ${ extensionTheme.white };
        }
      }
  }
  
  &.active{
    color : ${ extensionTheme.blueM };
      & svg{
        & g rect, & g path, & g polygon, & polygon{
            fill : ${ extensionTheme.blueM };
        }
      }
  }
  
    
`;

export const Specification = styled.div`
    height : auto;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
    width : 100%;
    align-items : flex-start;
    
    & label{
        font-weight : 300;
        font-size : 14px;
        color : ${ contentfulTheme.grey };
        font-family :${ contentfulTheme.basicFont };
    }
    & label{
        line-height : 30px;
    }
    & p{
        font-family :${ contentfulTheme.basicFont };
        line-height : 16.8px;
        font-weight : 400;
        font-size : 14px;
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
       width : 60px;
       height : 60px;
       margin-right : 30px;
       margin-top:5px;
    }
`;

export const Property = styled.label`
    margin-left : 30px;
`;

export const ChoiceConfirm = styled.div`
    display : flex;
    align-items : flex-end;
    justify-content : flex-end;
    
    & button:not(:first-child){
        margin-left : 10px;
    }
`;

export const Toggle = styled.div`
  display : flex;
`;

export const Responsive = styled.div`
  display : flex;
  height : auto;
  align-items : center;
  width : fit-content;
  justify-content : space-between;
`;

export const ToogleResponsive = styled.div`
  width : 20px;
  height : 20px;
  display : flex;
  justify-content : center;
  align-items : center;
  border-width : 1px;
  border-style : solid;
  border-color :  ${ extensionTheme.grey50 }; 
  color :  ${ extensionTheme.grey50 }; 
  border-radius : 3px;
  font-size : 11px;
  cursor : pointer;
  background : transparent; 
  transition: background 0.4s ease, color 0.4s ease;
  margin 0 8px;
  
  
  &.active{
    color :  ${ extensionTheme.black }; 
    border-color :  ${ extensionTheme.black }; 
    background : ${ extensionTheme.white }; 

  }
`;

export const ErrorMessage = styled.div`
  color : ${ extensionTheme.grey40 }; 
  margin-left : 30px;
  font-size : 12px;

`;

export const InfoText = styled.div`
  color : ${ extensionTheme.grey40 }; 
  padding : 30px;
`;
