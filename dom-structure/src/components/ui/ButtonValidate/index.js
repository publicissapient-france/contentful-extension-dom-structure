import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styled';

const ButtonValidate = ({label, disabled, action, type}) => {
    let className = !disabled ? 'active' : '';
    return (<Button type={type} disabled={disabled} className={className} onClick={action}>{label}</Button>);
}

ButtonValidate.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    action : PropTypes.func
};

export default ButtonValidate
