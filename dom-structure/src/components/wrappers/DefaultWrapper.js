import React, { Component } from 'react';
import {extensionTheme} from "../../style/theme";
import styled from "styled-components";

const Wrapper = styled.div`
    padding : 20px;
    border : 1px solid ${ extensionTheme.grey30};
    width : fit-content;
`;

class DefaultWrapper extends Component {
    render() {
        const {children} = this.props;
        return(
            <Wrapper>
            {children}
        </Wrapper>
        );
    }
};

export default DefaultWrapper;