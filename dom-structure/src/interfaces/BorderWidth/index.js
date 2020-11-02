import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Field, InputsBorder } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';
import { usePrevValues} from "../../utils/hooks";

const BorderWidth = ({width, storeValueWidth, defaultWidth, hidden , updateStateProps}) => {
    const [state, setState] = useState({width: width});

    useEffect(() => {
        setState({width: width});
    }, []);

    usePrevValues(
        useMemo(() => ({
            width
        }), [width]),
        useCallback(prevValues => {
            if (prevValues.width !== width) {
                setState({width: width});
            }
        }, [width])
    );

    usePrevValues(
        useMemo(() => ({
            state
        }), [state]),
        useCallback(prevValues => {
            if (prevValues.state.width !== state.width) {
                updateStateProps('width', state.width);
            }
        }, [state.width])
    );

    const updateWidth = (prop, value) => {
        setState(prev => ({
            ...prev,
            width: {
                ...prev.width,
                [prop]: value
            }
        }));
    }

    if(!state.width) return null

    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <label>border width</label>
                <div>
                    <InputsBorder>
                        <Dot enabled={!isEqual(state.width, defaultWidth)}/>
                        {
                            ['top', 'right','bottom', 'left' ].map(edge => {
                                return (
                                    <input
                                        type={'number'}
                                        min={0}
                                        className={hasNotSamePropertyValue(storeValueWidth, width, edge) ? 'updated' : ''}
                                        value={parseInt(state.width[edge])}
                                        onChange={e => {
                                            updateWidth(edge, e.target.value);
                                        }}/>
                                )
                            })
                        }
                    </InputsBorder>
                </div>
            </Field>
        </Container>
    );
}

BorderWidth.propTypes = {
    updateStateProps: PropTypes.func,
    width: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValueWidth: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultWidth: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
};

export default BorderWidth;
