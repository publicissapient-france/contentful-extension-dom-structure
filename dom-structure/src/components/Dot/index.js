import React from 'react';
import {DotContainer} from './styled';
import PropTypes from 'prop-types';

const classByState = {
    ENABLED: 'active',
    DISABLED: ''
};

const Dot = ({enabled}) => {
    const getClassName = () => {
        const state = getElementState();
        return classByState[state];
    }

    const getElementState = () => {
        if (enabled) {
            return 'ENABLED';
        }
        return 'DISABLED';
    }

    return (<DotContainer className={getClassName()}/>);

}

Dot.propTypes = {
    enabled: PropTypes.bool
};

export default Dot;
