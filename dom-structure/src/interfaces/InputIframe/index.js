import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styled';

const InputIframe = ({action, targetProperty, defaultValue}) => {
    return (
        <Container>
            <textarea
                value={defaultValue}
                onChange={e => action(e.target.value, targetProperty)}/>
            <span>Iframe Html Code</span>
        </Container>
    );
}

InputIframe.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    currentLanguage: PropTypes.number
};

export default InputIframe;
