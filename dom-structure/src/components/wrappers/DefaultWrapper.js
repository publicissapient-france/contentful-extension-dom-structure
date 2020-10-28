import React from 'react';
import {extensionTheme} from "../../style/theme";
import styled from "styled-components";

const Wrapper = styled.div`
    padding : 20px;
    border : 1px solid ${ extensionTheme.grey30};
    width : fit-content;
`;

const DefaultWrapper = ({children}) => {
    return (
        <Wrapper>{children}</Wrapper>
    );
};

export default DefaultWrapper;