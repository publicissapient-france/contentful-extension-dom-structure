import React, { Component } from 'react';
import sections from '../config/sections';
import update from 'react-addons-update'; // ES6

class SelectSectionModel extends Component {
  render () {
    const { parent, section } = this.props;
    return (
      <select defaultValue={ section.model ? section.model : null }
        onChange={ e => {
          parent.setState(
            {
              section: update(parent.state.section, {
                model: { $set: e.target.value }
              })
            }
          );
        }}>
        { sections.map((model, i) => <option value={model.name} key={i}>{ model.name }</option>) }
      </select>
    );
  }
};

export default SelectSectionModel;
