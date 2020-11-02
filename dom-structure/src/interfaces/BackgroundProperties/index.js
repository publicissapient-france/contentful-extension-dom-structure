import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Field, Inputs } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';
import {usePrevValues} from "../../utils/hooks";

const BackgroundProperties = ({value, storeValue, defaultValue, hidden ,event,  updateStateProps}) => {
    const [state, setState] = useState({background: value});

    useEffect(() => {
        setState({background: value});
    }, [])

    usePrevValues(
        useMemo(() => ({
            value
        }), [value]),
        useCallback(prevValues => {
            if (prevValues.value !== value) {
                setState({background: value});
            }
        }, [value])
    );

    usePrevValues(
        useMemo(() => ({
            state
        }), [state]),
        useCallback(prevValues => {
            if (prevValues.state.background !== state.background) {
                updateStateProps('background', state.background, event);
            }
        }, [state.background])
    );

    const updateBackground = (prop, value) => {
        setState(prev => ({
            ...prev,
            background: {
                ...prev.background,
                [prop]: String(value)
            }
        }));
    }

    if (!state.background) return null;
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
                            value={state.background.top}
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
    }),
};

export default BackgroundProperties;
