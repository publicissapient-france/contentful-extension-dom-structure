import React, {Component} from 'react';
import {extensionTheme} from "../../style/theme";
import styled from "styled-components";

const Wrapper = styled.div`
    padding : 20px;
    border : 1px solid ${ extensionTheme.grey30};
    width : fit-content;
    position : relative;
`;
const Corner = styled.div`
    position : absolute;
    display : inline-block;
    height : 0;
    width : 0;
`
const CornerTopLeft = styled(Corner)`
    top : 0;
    left: 0;
    border-top : 20px solid ${ extensionTheme.grey30};
    border-right : 20px solid transparent;
`

const CornerTopRight = styled(Corner)`
    top : 0;
    right: 0;
    border-top : 20px solid ${ extensionTheme.grey30};
    border-left : 20px solid transparent;
`

const CornerBottomLeft = styled(Corner)`
    bottom : 0;
    left: 0;
    border-bottom : 20px solid ${ extensionTheme.grey30};
    border-right : 20px solid transparent;
`

const CornerBottomRight = styled(Corner)`
    bottom : 0;
    right: 0;
    border-bottom : 20px solid ${ extensionTheme.grey30};
    border-left : 20px solid transparent;
`
class HeaderPicturesOnCornersWrapper extends Component {
    render() {
        const {children} = this.props;
        return (
            <Wrapper>
                <CornerTopLeft/>
                <CornerTopRight/>
                <CornerBottomLeft/>
                <CornerBottomRight/>
                {children}
            </Wrapper>
        );
    }
};

export default HeaderPicturesOnCornersWrapper;