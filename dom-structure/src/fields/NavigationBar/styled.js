import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';
import { ChoiceConfirm } from '../../style/styledComponentsFields';

export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 20px;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
`;
export const Content = styled.div`
   display: flex;
   flex-wrap : wrap;
`;
export const Settings = styled.div`
   
`;


export const Row = styled.div`
   display : flex;
   flex-direction : column;
   //height : 190px;
   //background : blue;
   border-bottom : 1px solid ${ extensionTheme.grey20 };

   box-sizing : content-box;

    
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
    &:nth-child(1), &:nth-child(3){
        width : 25%;
        &.full-width{
            width : 100%;
        }  
    }
    &:nth-child(2){
        width :75%;
        //flex-direction : row;
        //padding-bottom : 10px;
        
        & ${Row}{
            &:nth-child(2){
                flex-direction : row;
                border-bottom : 0px solid transparent;
            }
        }
    }
   }
`;

export const AdditionalChoices = styled(Choices)`
    position : relative;
    
    
    
`;

export const Separator = styled.div`
    padding: 10px;
    background-color :  ${extensionTheme.grey10};
    border-top : 1px solid ${extensionTheme.grey30};
    border-bottom : 1px solid ${extensionTheme.grey30};
    
    & p{
        font-size : 12px;
        color : ${extensionTheme.grey80};
    }
`



export const ButtonEvents = styled.div`
   display : flex; 
   width  : 100%;
   justify-content : flex-start;
   border-bottom : 1px solid ${extensionTheme.grey30};
   background : ${extensionTheme.grey10};
   
   & button{
    padding: 5px 10px;
    background : ${extensionTheme.grey10};
    transition:  background 0.2s ease,  color 0.2s ease;
    border-width : 0 1px 0 0;
    border-color :  solid ${extensionTheme.grey30};
    border-style : solid;
    margin-bottom : -1px;
    color : ${extensionTheme.grey50};
    border-bottom : 1px solid ${extensionTheme.grey30};
    
    &.current{
        background : ${extensionTheme.white};
        color : ${extensionTheme.grey80};
        border-bottom : 1px solid ${extensionTheme.white};
    }
    
    &:focus{
        outline : none;
    }
    
    &:hover{
        background : ${extensionTheme.blueM};
        color : ${extensionTheme.white};
        
    }
   }
`;
