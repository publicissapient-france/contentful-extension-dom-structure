import styled from "styled-components";
import {extensionTheme} from "../../../style/theme";
import {Icon} from "../../../style/styledComponents";

export const Group = styled.div`
     display : flex;
     padding-left : 5px;
     padding-right : 5px;
     
     &.options{
          padding : 0;
          background-color : ${extensionTheme.grey35};
          top : 0;
          right : 100%;
          height : 40px;
          
          & ${Icon}.btn-options{
            background-color : ${extensionTheme.white};
            
            &>svg g path, &>svg path, &>svg rect, &>svg g circle {
                fill : ${ extensionTheme.grey35 };
            }
            
            &.active{
                &>svg g path, &>svg path, &>svg rect, &>svg g circle {
                    fill : ${ extensionTheme.greenM };
                }
            }
          }
          
          &>div{
            display: flex;
            
            &.hidden{
                display : none;
            }
            
            & ${Icon}:first-child{
              border-left-width : 5px;
              border-left-style : solid;
              border-left-color : ${extensionTheme.grey35};
              
              &:hover{
                border-left-color : ${extensionTheme.white};
                
                &.disabled{
                    border-left-color : ${extensionTheme.grey35};
                }
              }
            }
            & ${Icon}:last-child{
                border-right-width : 5px;
                border-right-style : solid;
                border-right-color : ${extensionTheme.grey35};
                
                &:hover{
                  border-right-color : ${extensionTheme.white};
                  
                    &.disabled{
                      border-left-color : ${extensionTheme.grey35};
                    }
                }
            }
          }
          
          &>div:not(:last-child){
            border-right : 1px solid ${extensionTheme.white};
          }
          
          
           & ${Icon}>svg g path, & ${Icon}>svg path, & ${Icon}>svg rect, & ${Icon}>svg g circle {
                fill : ${ extensionTheme.white };
           }
           
           
           & ${Icon}:hover, & ${Icon}.active {
                background-color : ${extensionTheme.white};
                border-color : ${extensionTheme.white} !important;
               &>svg path, &>svg g path, & &>svg path, &>svg rect, &>svg g circle {
                    fill : ${ extensionTheme.greenM };
               }
           }
           
           
           
           & ${Icon}.trash:hover{
                &>svg g path, &>svg path, &>svg  rect {
                    fill : ${ extensionTheme.redM };
                }
              }
          & ${Icon}.trash.active{
            &>svg g path, &>svg path, &>svg  rect {
                fill : ${ extensionTheme.redM };
            }
          }
          
          & ${Icon}.disabled{
               opacity : 0.5;
               cursor : auto;
               
               &:hover{
                    background-color : ${extensionTheme.grey35};
                    border-color : ${extensionTheme.grey35};
                    
                    &>svg g path, &>svg path, &>svg  rect {
                        fill : ${ extensionTheme.white };
                    }
               }
          }
     }
`;

export const Bar = styled.div`
  position : absolute;
  right : 0;  
  display : flex;
  width : fit-content;
  padding-right: 3px;
  
  & ${Group}:not(:last-child){
        border-right : 1px solid ${extensionTheme.grey30};
  }
`;