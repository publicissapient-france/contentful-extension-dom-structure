import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './styled';

export default class ButtonAction extends Component {
    render () {
        const { label, active, action, type } = this.props;
        return (
            <Button type={type} className={active ? 'active' : ''} onClick={action}
            >{ label }</Button>
        );
    }
}

ButtonAction.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string
};
