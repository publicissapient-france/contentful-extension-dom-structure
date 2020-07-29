import React, {Component} from 'react';
import {extensionTheme} from "../../style/theme";
import styled from "styled-components";
import SvgElementImage from '../svg/SvgElementImage';

const Wrapper = styled.div`
    padding : 20px;
    border : 1px solid ${ extensionTheme.grey30};
    width : fit-content;
    position : relative;
`;

const Card = styled.div`
    display : flex;
    
`;
const Separator = styled.div`
    display : flex;
    border-left: 1px solid ${ extensionTheme.grey30};
    border-right: 1px solid ${ extensionTheme.grey30};
    justify-content : center;
`;
const FixedElement = styled.div`
   position : relative;
   width : 40px;
   overflow : hidden;
   border-top : 1px solid ${ extensionTheme.grey30};
   border-bottom : 1px solid ${ extensionTheme.grey30};
   border-left : 1px solid ${ extensionTheme.grey30};

`;
const ElementImage = styled.div`
    width : 40px;
    position absolute;
    top : 5px;
    right : 30px;
    &>svg{
        width : 100px;
        height : 20px;
   }

`;
const CustomOrder = styled.div`
    border-bottom : 1px solid ${ extensionTheme.grey80 };
`;

class CardDuoWrapper extends Component {

    render() {
        const {children} = this.props;
        return (
            <Wrapper>
                <Card>
                    <FixedElement>
                        <ElementImage>
                            <SvgElementImage/>
                        </ElementImage>
                    </FixedElement>
                    <CustomOrder>
                    {
                        children.props.children[0]
                    }
                    </CustomOrder>
                </Card>
                <Separator><label>separator</label></Separator>
                <Card>
                    <FixedElement>
                        <ElementImage>
                            <SvgElementImage/>
                        </ElementImage>
                    </FixedElement>
                    <CustomOrder>
                    {
                        children.props.children[1]
                    }</CustomOrder>
                </Card>
            </Wrapper>
        );
    }
};

export default CardDuoWrapper;