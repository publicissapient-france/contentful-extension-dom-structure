import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../style/styledComponents';
import { Banner, Fields } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';

class Title extends Component {
  render () {
    const { } = this.props;
    const maxLength = 140;
    return (
      <div>
        <Banner>
          <div>
            <input type={'checkbox'}/>
            <p>Title</p>
          </div>
          <Icon><SvgArrow/></Icon>
        </Banner>
        <Fields>
          <input type={'text'} maxLength={maxLength}/>
          <span>{maxLength} characters</span>
        </Fields>
      </div>
    );
  }
};

Title.propTypes = {

};

export default Title;
