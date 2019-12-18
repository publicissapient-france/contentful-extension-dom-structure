import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
  padding : 10px 0;
`;

export const Field = styled.div`
    display : flex; 
    
    &>div{
        display : flex;
        flex-direction: row;
        & label{
            margin-left : 30px;
        }
        
        &>div:not(:first-child){
            margin-right : 10px;
        }
    } 
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


export const InputsRadius = styled(Inputs)`
    & input{
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
