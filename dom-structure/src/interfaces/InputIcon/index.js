import React from 'react';
import {Container, SelectIcon, Message} from './styled';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon';

const InputIcon = ({font, letters, action, targetProperty, defaultValue}) => {
    const alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*';

    const renderIcons = (letters) => {
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

    if (!font || !font.family) return <Message>Please choose a font on settings</Message>
    return (<Container>
        <SelectIcon>
            {
                letters ? renderIcons(letters) : renderIcons(alphabet)
            }
        </SelectIcon>
    </Container>);
}

InputIcon.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    letters: PropTypes.string,
    font: PropTypes.object
};

export default InputIcon;

