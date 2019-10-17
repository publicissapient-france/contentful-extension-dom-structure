import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';


export const Row = styled.div`
   display : flex;
   flex-direction : column;
   border-bottom : 1px solid ${ extensionTheme.grey20 };

   box-sizing : content-box;
   
   &>label{
        margin-left : 30px;
   }

    
`;

export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };
    
    &.full-width{
        width : 100%;
        
        ${Row}{
            height : auto;
        }
    }
`;
export const Container = styled.div`
 
  display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   &>${Column}{
    &:nth-child(1){
        width : 25%;
        &.full-width{
            width : 100%;
        }  
    }
    &:nth-child(2){
        width :75%;
        flex-direction : row;
        
        &>${Row}{
            margin-top : 8px;
            padding-bottom : 5px;
        }
    }
   }
`;

export const Field = styled.div`
    display : flex;  
`;

export const Inputs = styled.div`
    display : flex; 
    
    & input{
        width : 40px;
        margin-right : 10px;
    } 
    
    & input[type=text]{
        border : 1px solid ${extensionTheme.grey80};
    
    }
`;


export const InputsBorder = styled(Inputs)`
    
    & input{
       
      
        &:nth-child(1){
            border-top : 3px solid ${ extensionTheme.blueM }
        }
        &:nth-child(2){
            border-right : 3px solid ${ extensionTheme.blueM }
        }
        &:nth-child(3){
            border-bottom : 3px solid ${ extensionTheme.blueM }
        }
        &:nth-child(4){
            border-left : 3px solid ${ extensionTheme.blueM }
        }
    } 
    
`;

export const InputsRadius = styled(Inputs)`
   
    & input{
        //width : 41px;
        border : none;
        position: relative;
        margin-right : 0px;
        
        
    } 
    
    
`;


const Corner = styled.div`
    position: relative;
    width : auto;
    margin-right : 10px;
   
   &:before{
    content : '';
    position : absolute;
    width : 0px;
    height : 0px;
    
    
   }
`;


export const CornerTofLeft = styled(Corner)`
   &:before{
    top : 0;
    left: 0;
    border-top : 10px solid ${ extensionTheme.blueM};
    border-right : 10px solid transparent;
   }
`;

export const CornerTopRight = styled(Corner)`
   &:before{
    top : 0;
    right: 0;
    border-top : 10px solid ${ extensionTheme.blueM};
    border-left : 10px solid transparent;
   }
`;

export const CornerBottomLeft = styled(Corner)`
   &:before{
    bottom : 0;
    left: 0;
    border-bottom : 10px solid ${ extensionTheme.blueM};
    border-right : 10px solid transparent;
   }
`;

export const CornerBottomRight = styled(Corner)`
   &:before{
    bottom : 0;
    right: 0;
    border-bottom : 10px solid ${ extensionTheme.blueM};
    border-left : 10px solid transparent;
   }
`;
