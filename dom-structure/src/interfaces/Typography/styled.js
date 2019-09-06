import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';
import { IconContainer } from '../../style/styledComponentsFields';

export const ChoiceFont = styled.div`
   display : flex;
   flex-direction : column;
    height : 100%;

`;

export const ContainerProps = styled.div`
    display : flex;
    
    &>div:nth-child(1){
       width : 50%;
       border-right : 1px solid ${ extensionTheme.grey20 }

    }
    &>div:nth-child(2){
       width : 50%;
    }
`;
export const FontProps = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    padding-right : 30px;   
    padding-bottom : 10px;   
    padding-top:10px;
    
    &>div{
        display : flex;
        flex-direction : column;
        margin-bottom:10px;

   }   
`;
export const TypoProps = styled.div`
    width : 100%;
    display : flex;
    flex-wrap : wrap;
    padding-right: 30px;
    padding-top: 34px;
    
    &>div{
        display : flex;
        height : 30px;
    
    & input{
        max-width : 50px;
        margin-left : 10px;
    }
   }
`;
export const AlignProps = styled.div`
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    padding : 10px 0;
    &>div{
        display : flex;
        
        &>${ IconContainer }:not(last-child){
            margin-right: 20px;
        }
    }
`;

export const TransformProps = styled.div`
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 }
    padding : 10px 0;

     &>div{
        display : flex;
        
        &>${ IconContainer }:not(last-child){
            margin-right: 20px;
        }
    }
`;
export const Field = styled.div`
    display : flex;
    
    select{
        width: 100%;
    }
`;
