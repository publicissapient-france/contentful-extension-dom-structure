import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styled';

const ButtonDelete = ({label, action}) => {
    return (<Button onClick={action}>{label}</Button>);
}

ButtonDelete.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func
};

export default ButtonDelete;
