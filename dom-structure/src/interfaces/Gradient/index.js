import React, {useState, useEffect} from 'react';
import {Container, Field, Inputs, Preview} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import Dot from '../../components/Dot';

const Gradient = ({color, storeValue, defaultValue, hidden, updateStateProps, event, customTargetColor}) => {
    const [innerColor, setInnerColor] = useState(color);

    useEffect(() => {
        setInnerColor(color)
    }, [color]);

    useEffect(() => {
        updateStateProps(customTargetColor || 'color', innerColor, event);
    }, [innerColor]);

    const updateGradient = (value) => {
        setInnerColor(prev => ({
            ...prev,
            gradient: value
        }))
    }

    if (!color || !innerColor) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <label>gradient</label>
                    <Inputs>
                        <Dot enabled={!isEqual(defaultValue, color)}/>
                        <input type={'text'}
                               value={color.gradient}
                               onChange={e => updateGradient(e.target.value)}/>
                    </Inputs>
                </div>
                <Preview gradient={color.gradient}>
                    <div/>
                </Preview>
            </Field>
        </Container>
    );
}

Gradient.propTypes = {
    updateStateProps: PropTypes.func,
    color: PropTypes.shape({
        value: PropTypes.string,
    }),
    storeValue: PropTypes.shape({
        value: PropTypes.string,
    }),
    defaultValue: PropTypes.shape({
        value: PropTypes.string,
    }),
    hidden : PropTypes.bool,
    updateStateProps : PropTypes.func,
    event : PropTypes.string,
    customTargetColor : PropTypes.string
};

export default Gradient;
