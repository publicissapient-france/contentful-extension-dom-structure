import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styled';

const ButtonBasic = ({label, disabled, action}) => {
    let className = disabled ? 'disable' : '';
    return (<Button disabled={disabled} className={className} onClick={action}>{label}</Button>);
}

ButtonBasic.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    action : PropTypes.func
};

export default ButtonBasic;