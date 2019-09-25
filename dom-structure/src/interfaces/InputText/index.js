import React, { Component } from 'react';
import { Container } from './styled';
import PropTypes from 'prop-types';

class InputText extends Component {
    render () {
        const { action, targetProperty, defaultValue } = this.props;
        return (<Container>
            <input type={'text'} maxLength={140}
                value={defaultValue}
                onChange={e => {
                    action(e.target.value, targetProperty);
                }}/>
            <span>{140} characters</span>
        </Container>);
    }
}

InputText.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string
};

export default InputText;
