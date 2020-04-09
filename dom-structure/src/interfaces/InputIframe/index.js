import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container} from './styled';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";


class InputIframe extends Component {
    render () {
        const { action, targetProperty, defaultValue } = this.props;
        return (<Container>

            <textarea
                   value={defaultValue}
                   onChange={e => {
                       action(e.target.value, targetProperty);
                   }}/>
            <span>Iframe Html Code</span>
        </Container>);
    }
}

InputIframe.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    currentLanguage: PropTypes.number
};

export default InputIframe;
