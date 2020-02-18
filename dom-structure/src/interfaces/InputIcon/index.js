import React, {Component} from 'react';
import {Container, SelectIcon, Message} from './styled';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon';

class InputIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*',
        };
    }

    renderIcons = (letters) => {
        const {font, action, targetProperty, defaultValue} = this.props;

        return letters.split("").map((char, i) => {
            return <Icon key={i}
                         clickAction={() => {
                             (defaultValue === char) ? action('', targetProperty) : action(char, targetProperty)
                         }}
                         font={font}
                         char={char}
                         currentValue={defaultValue}/>
        })
    }

    render() {
        const {font, letters} = this.props;

        if (!font || !font.family) return <Message>Please choose a font on settings</Message>
        return (<Container>
            <SelectIcon>
                {
                    letters ? this.renderIcons(letters) : this.renderIcons(this.state.alphabet)
                }
            </SelectIcon>
        </Container>);
    }
}

InputIcon.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    letters: PropTypes.string
};

export default InputIcon;

