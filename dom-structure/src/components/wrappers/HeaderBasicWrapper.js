import React, {Component} from 'react';
import {extensionTheme} from "../../style/theme";
import styled from "styled-components";
import SvgElementCTA from '../svg/SvgElementCTA'

const Element = styled.div`
   width : 100px;
   position : relative;
   height : 30px;
   display : flex;
   justify-content : center;
   align-items : center;
   border-left : 1px solid ${ extensionTheme.grey30 };
   border-right : 1px solid ${ extensionTheme.grey30 };
   border-top : 1px solid ${ extensionTheme.grey30 };
   
   &>svg{
        width : 100px;
        height : 20px;
   }
    
`;


const Wrapper = styled.div`
    padding : 20px;
    border : 1px solid ${ extensionTheme.grey30};
    width : fit-content;
    position : relative;
    
    & ${Element}:first-child{
        border-top : 0px solid ${ extensionTheme.grey30 };
    }
    & ${Element}:last-child{
        border-bottom : 1px solid ${ extensionTheme.grey30 };
    }
`;



class HeaderPicturesOnCornersWrapper extends Component {
    render() {
        const {children} = this.props;
        return (
            <Wrapper>
                {children}
                <Element>
                    <SvgElementCTA/>
                </Element>
                <Element>
                    <SvgElementCTA/>
                </Element>
            </Wrapper>
        );
    }
};

export default HeaderPicturesOnCornersWrapper;