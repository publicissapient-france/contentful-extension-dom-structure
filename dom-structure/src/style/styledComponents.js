import styled from 'styled-components';
import { contentfulTheme , extensionTheme} from "./theme";

export const Extension = styled.div`
    width : auto;
    height : auto;
    p {
        margin : 0;
    }
`;
export const Container = styled.div`
    border-radius : 2px;
    box-shadow : 0 1px 3px rgba(0,0,0,0.08);
    padding-bottom : 20px;
    margin-bottom : 20px;
    padding-top : 20px;
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    height : auto;
    font-family :${ contentfulTheme.basicFont };
    font-size : 14px;
    font-weight : 400;

    
    h2{
       font-weight : 300; 
       font-size : 14px;
       color : ${ contentfulTheme.grey };
    }
    
    select{
        height : 33px;
        box-sizing : border-box;
        padding-top : 6px;
        padding-bottom : 7px;
        padding-left : 1ex;
        padding-right : 8ex;
        border : 1px solid  ${ contentfulTheme.grey };
        border-radius : 2px;
        background : none;
         appearance : none;
        -webkit-appearance : none;
        text-overflow : ellipsis;
        overflow : hidden;
        white-space : nowrap;
        background-color : white;
        background-image : url('https://static.contentful.com/app/svg/dd-arrow-down-9ca5518bcf.svg'), none;
        background-position:center right 0.8em;
        background-repeat : no-repeat, repeat;
        background-size : 10px, 100%;
    }

    input {
        font-size : 14px;
        color : ${ contentfulTheme.black };
        border-width : 0 0 1px 0;
        border-style : solid;
        border-color : transparent;
        border-image-width : 0 0 1px 0;
        border-image-source :url("https://static.contentful.com/app/svg/dotted-border.svg");
        border-image-repeat : round;
        border-image-slice : 1.1; 
        max-width : 80px;
        height : 25px;
    }
    
    label{
        font-size : 14px;
        line-height : 24px;
        color : ${ contentfulTheme.grey };
        font-family :${ contentfulTheme.basicFont };

    }
    
    section{
      width : 100%;
      margin-bottom : 15px;
    }
    
    section.reset{
        width : 100%;
        display : flex;
        justify-content:flex-end;
        align-items : center;
        padding-top : 10px;
        
        button {
            cursor : pointer;
            height : fit-content;
            border : 1px solid  ${ contentfulTheme.grey };
            background : transparent;
            border-radius : 4px;
            padding : 6px;
            font-size : 11px;
            line-height : 11px;
            opacity : 0.8;
        }
    }
    
    section.field{
        display : flex;
        flex-direction : column;
        width : fit-content;
        
        p{
            margin : 0;
            font-family:${ contentfulTheme.basicFont };
            font-size : 14px;
            font-weight : 100;
        }
    }
   
    section.textPreview{
        width : 100%;
    }

    p.subtext{
        font-size : 12px !important;
        font-family :${ contentfulTheme.basicFont };
        padding-top : 10px;
        color : ${ contentfulTheme.black };
        opacity : 0.6;
    }
    
    
`;

