import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Check } from './styled';
import SvgCheck from '../svg/SvgCheck';

class ActiveCheckBox extends Component {
    render () {
        const { active, action } = this.props;
        return (
            <Check
                className={active ? 'active' : ''}
                onClick={e => {
                    action();
                }}>
                <SvgCheck/>
            </Check>
        );
    }
};

ActiveCheckBox.propTypes = {
    active: PropTypes.bool,
    action: PropTypes.func
};

export default ActiveCheckBox;
