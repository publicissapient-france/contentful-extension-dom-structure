import React, { Component } from 'react';
import styled from 'styled-components';
import { contentfulTheme } from "../style/theme";

const Button = styled.button`
  border : none;
  background:transparent;
  padding: 0px 10px;
  width : fit-content;
  height : 33px;
  cursor : pointer;
  align-self : flex-end;
  
  &:hover{
    color :  ${ contentfulTheme.grey };
  }
  
  &:focus{
     outline : none;
  }  
  
`;


class ButtonAddSection extends Component {
  render () {
    const { parent, basic, currentColor, currentAction } = this.props;

    return (<Button>+ Add section</Button>);
  }
};

export default ButtonAddSection;
