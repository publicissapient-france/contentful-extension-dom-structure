import React, { Component } from 'react';
import { DotContainer } from './styled';
import PropTypes from 'prop-types';

const classByState = {
    ENABLED: 'active',
    DISABLED: ''
};

class Dot extends Component {
    getClassName = () => {
        const state = this.getElementState();
        return classByState[state];
    }

    getElementState = () => {
        if (this.props.enabled) {
            return 'ENABLED';
        }
        return 'DISABLED';
    }

    render () {
        return (<DotContainer className={this.getClassName()}/>);
    }
}

Dot.propTypes = {
    enabled: PropTypes.bool
};

export default Dot;
