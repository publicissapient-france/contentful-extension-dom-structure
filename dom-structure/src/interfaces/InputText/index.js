import React from 'react';
import { Container } from './styled';
import PropTypes from 'prop-types';

const InputText = ({action, targetProperty, defaultValue}) => {
    return (<Container>
        <input type={'text'} maxLength={140}
               value={defaultValue}
               onChange={e => {
                   action(e.target.value, targetProperty);
               }}/>
        <span>{140} characters</span>
    </Container>);
}

InputText.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string
};

export default InputText;
