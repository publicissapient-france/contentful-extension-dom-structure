import React, {Component} from 'react';
import {} from './styled';
import PropTypes from 'prop-types';

class InputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { action, targetProperty, defaultValue } = this.props;
        return ( <div>
            <input type={'text'} maxLength={140}
                   defaultValue={defaultValue}
                   onChange={e => {
                       console.log('e', e.target.value)
                       action(e.target.value, targetProperty)
                   }}/>
            <span>{140} characters</span>
        </div> )
    }
}


InputText.propTypes = {
    action : PropTypes.func,
    targetProperty : PropTypes.string.isRequired,
    defaultValue : PropTypes.string
};

export default InputText;