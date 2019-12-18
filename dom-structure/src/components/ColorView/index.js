import React, { Component } from 'react';
import { createSlug, hexToRgb, RGBtoString } from '../../utils/functions';

import {
    BoxColor, Specification, Property
} from '../../style/styledComponentsFields';
import { ChoiceColor, ChoiceShade, ChoiceName } from './styled';
import styled from 'styled-components';

const Container = styled.div`
    padding-top : 10px;
`;

class ColorView extends Component {
    render () {
        const { display, color } = this.props;
        if (!color) return null;

        return (<Container className={!display ? 'hidden' : ''}>
            <Property>Color specification</Property>
            <Specification>
                <BoxColor className={ color.name === 'Transparent' ? 'transparent' : ''}
                    style={{ background: color.hex }}/>
                <ChoiceColor>
                    <label>Color element</label>
                    <p> { color.hex } </p>
                    <span> { RGBtoString(hexToRgb(color.hex)) }</span>
                </ChoiceColor>
                <ChoiceName>
                    <label>Name</label>
                    <p>{ color.name }</p>
                    <span> { createSlug(color.name, color.shade) }</span>
                </ChoiceName>
                <ChoiceShade className={'select'}>
                    <label>Nuance</label>
                    <p> { color.shade }</p>
                </ChoiceShade>
            </Specification>
        </Container>);
    }
};

export default ColorView;
