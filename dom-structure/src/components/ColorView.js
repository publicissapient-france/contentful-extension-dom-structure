import React, { Component } from 'react';
import { createSlug, hexToRgb, RGBtoString } from '../utils/functions';

import {
    BoxColor, Specification, ChoiceColor, ChoiceName, ChoiceShade
} from '../style/styledComponentsBoxes';




class ColorView extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { color } = this.props;

        if(!color) return null;
        console.log('current COLOR', color);
        return (<section>
            <h2>Color specification</h2>
            <Specification>
                <BoxColor className={ color.name == 'None' ? 'null' : ''}
                          style={{ background: color.hex }}/>
                <ChoiceColor>
                    <label>Color element</label>
                    <input disabled type={'text'} value={ color.hex } />
                    <p> { RGBtoString(hexToRgb(color.hex)) }</p>
                </ChoiceColor>
                <ChoiceName>
                    <label>Name</label>
                    <input disabled type={'text'} value={ color.name }/>
                    <p> { createSlug(color.name, color.shade) }</p>
                </ChoiceName>
                <ChoiceShade className={'select'}>
                    <label>Nuance</label>
                    <input disabled type={'text'} value={ color.shade }/>
                </ChoiceShade>
            </Specification>
        </section>);
    }
};

export default ColorView;
