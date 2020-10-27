import React from 'react';
import PropTypes from 'prop-types';
import {createSlug, hexToRgb, RGBtoString} from '../../utils/functions';

import {BoxColor, Specification, Property} from '../../style/styledComponentsFields';
import {Container, ChoiceColor, ChoiceShade, ChoiceName} from './styled';

const ColorView = ({display, color}) => {
    if (!color) return null;

    return (<Container className={!display ? 'hidden' : ''}>
        <Property>Color specification</Property>
        <Specification>
            <BoxColor className={color.name === 'Transparent' ? 'transparent' : ''}
                      style={{background: color.hex}}/>
            <ChoiceColor>
                <label>Color element</label>
                <p> {color.hex} </p>
                <span> {RGBtoString(hexToRgb(color.hex))}</span>
            </ChoiceColor>
            <ChoiceName>
                <label>Name</label>
                <p>{color.name}</p>
                <span> {createSlug(color.name, color.shade)}</span>
            </ChoiceName>
            <ChoiceShade className={'select'}>
                <label>Nuance</label>
                <p> {color.shade}</p>
            </ChoiceShade>
        </Specification>
    </Container>);
};

ColorView.propTypes = {
    display: PropTypes.bool,
    color: PropTypes.object
};

export default ColorView;
