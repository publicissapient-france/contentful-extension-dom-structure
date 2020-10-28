import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styled';

const ButtonAction = ({label, active, action, type}) => {
    return (<Button type={type} className={active ? 'active' : ''} onClick={action}>{label}</Button>);
}

ButtonAction.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    action : PropTypes.func
};

export default ButtonAction;