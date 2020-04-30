import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const Content = styled.div`
   display: flex;
   flex-wrap : wrap;
`;
export const Settings = styled.div`
   
`;


export const Row = styled.div`
   display : flex;
   //border-bottom : 1px solid ${ extensionTheme.grey20 };

   padding-bottom : 10px;

    
`;

export const Column = styled.div`
   display : flex;
    flex-direction : column;
    width : 100%;
    border-right : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
    
    &.full-width{
        width : 100%;
        
        ${Row}{
            height : auto;
        }
    }
`;

export const Choices = styled.div`
   display : flex;
   flex-wrap : wrap;
   width : 100%;
   
   & ${Column}{
    &:nth-child(1){
        width : 25%;
         border-bottom : 0px solid ${ extensionTheme.grey20 };
        &>${Row}{
            height : 189px;
        }  
    }
    &:nth-child(2){
        width :75%;
    }
    &:nth-child(3){
        width : 25%;
        
        &.full-width{
            width : 100%;
        }
       
    }
    &:nth-child(4){
        width :75%;
        flex-direction : row;
        //padding-bottom : 10px;
        border-top : 1px solid ${ extensionTheme.grey20 };
    }
    
    &:nth-child(5){
        width : 25%;
         border-top : 1px solid ${ extensionTheme.grey20 };
        
        &.full-width{
            width : 100%;
        }
       
    }
    &:nth-child(6){
        width :75%;
        flex-direction : row;
        border-top : 1px solid ${ extensionTheme.grey20 };
    }
    
    
   }
`;
