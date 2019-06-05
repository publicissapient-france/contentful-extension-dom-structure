import React, { Component } from 'react';
import { colorIsComplete, createSlug, hexToRgb, RGBtoString } from '../utils/functions';
import { baseColor } from '../config/defaultConfig'

import { BoxColor, Specification, ChoiceColor, ChoiceName, ChoiceShade,
  ButtonCreate } from '../style/styledComponents';

class AddColorForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            newColor : baseColor

        };
    }

  render () {
    const { open, newColor, parent, validSlug } = this.props;
  return null
    return (
      <section>
        <h2>Color specification</h2>
        <Specification>
          <BoxColor
            className={ newColor.hex == '#' || newColor.hex == '' ? 'undefined' : ''}
            style={{
              background: newColor.hex
            }}/>
          <ChoiceColor>
            <label>Color element</label>
            <input type={'text'} defaultValue={ newColor.hex }
              onChange={e => { parent.handleNewColorHex(parent, e.target.value); }}
            />
            <p> { RGBtoString(hexToRgb(newColor.hex)) }</p>
          </ChoiceColor>
          <ChoiceName>
            <label>Name (required)</label>
            <input type={'text'} defaultValue={ newColor.name }
              onChange={e => { parent.handleNewColorName(parent, e.target.value); }}
            />
            <p className={ !validSlug ? 'invalid' : ''}>
              { createSlug(newColor.name, newColor.shade) }
              <span>slug must be unique</span>
            </p>
          </ChoiceName>
          <ChoiceShade className={'select'}>
            <label>Nuance (required) </label>
            { parent.renderShadeSelect(newColor.shade) }
          </ChoiceShade>
          <ButtonCreate disabled={ !colorIsComplete(newColor) || !validSlug }
            className={ colorIsComplete(newColor) && validSlug ? 'active' : ''}
            onClick={e => { parent.addCustomColor(parent, newColor); }}>Create</ButtonCreate>
        </Specification>
      </section>
    );
  }
};

export default AddColorForm;
