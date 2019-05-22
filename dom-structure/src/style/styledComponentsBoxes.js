import styled from 'styled-components';
import { Icon } from './styledComponents';
import { extensionTheme } from './theme';

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
