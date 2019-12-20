import React, {Component} from 'react';
import {Container, SelectIcon, Message} from './styled';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon';

class InputIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            light: true,
            alphabet: true,
            text: {
                alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*',
            }
        };
    }

    render() {
        const {font, action, targetProperty, defaultValue} = this.props;

        //if (!font) return null
        if (!font || !font.family) return <Message>Please choose a font on settings</Message>
        return (<Container>
            <SelectIcon>
                {
                    this.state.text.alphabet.split("").map((char, i) => {
                        return <Icon key={i}
                                     clickAction={() => action(char, targetProperty)}
                                     font={font}
                                     char={char}
                                     currentValue={defaultValue}/>
                    })
                }
            </SelectIcon>

            <input type={'text'}
                   value={defaultValue}
                   onChange={e => {
                       action(e.target.value, targetProperty);
                   }}/>
        </Container>);
    }
}

InputIcon.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string
};

export default InputIcon;

