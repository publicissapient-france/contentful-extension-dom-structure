import React, {useState, useEffect} from 'react';
import {Container, Field, Inputs} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';

const BackgroundProperties = ({value, storeValue, defaultValue, hidden, event, updateStateProps}) => {
    const [innerBackground, setInnerBackground] = useState(value);

    useEffect(() => {
        setInnerBackground(value);
    }, [value])

    useEffect(() => {
        if (innerBackground) {
            updateStateProps('background', innerBackground, event);
        }
    }, [innerBackground])

    const updateBackground = (prop, value) => {
        setInnerBackground(prev => ({
            ...prev,
            [prop]: String(value)
        }));
    }

    if (!innerBackground) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <label>backg.top</label>
                    <Inputs>
                        <Dot enabled={!isEqual(defaultValue, value)}/>
                        <input
                            type={'number'}
                            className={hasNotSamePropertyValue(storeValue, value, 'top') ? 'updated' : ''}
                            value={innerBackground.top}
                            onChange={e => {
                                updateBackground('top', e.target.value);
                            }}/>
                    </Inputs>
                </div>
            </Field>
        </Container>
    );
}

BackgroundProperties.propTypes = {
    updateStateProps: PropTypes.func,
    value: PropTypes.shape({
        top: PropTypes.string
    }),
    storeValue: PropTypes.shape({
        top: PropTypes.string
    }),
    defaultValue: PropTypes.shape({
        top: PropTypes.string
    })
};

export default BackgroundProperties;
