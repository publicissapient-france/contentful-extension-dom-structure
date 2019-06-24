import React, { Component } from 'react';
import styled from 'styled-components';
import { contentfulTheme } from '../style/theme';
import { connect } from 'react-redux';
import { toggleFormAddSection, toggleFormAddSectionToTop } from '../actions';

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
        const { dispatch, onTop } = this.props;
        if (onTop) return <Button onClick={() => dispatch(toggleFormAddSectionToTop())}>+ Add section</Button>;
        else return <Button onClick={() => dispatch(toggleFormAddSection())}>+ Add section</Button>;
    }
}

export default connect()(ButtonAddSection);
