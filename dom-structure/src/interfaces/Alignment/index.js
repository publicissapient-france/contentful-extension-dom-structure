import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {Container, Field} from './styled';
import PropTypes from 'prop-types';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';
import IconActing from '../../components/IconActing';
import SvgAlignToStart from '../../components/svg/SvgAlignToStart';
import SvgAlignToEnd from '../../components/svg/SvgAlignToEnd';
import SvgAlignToCenter from '../../components/svg/SvgAlignToCenter';
import { usePrevValues} from "../../utils/hooks";

const Alignment = ({alignment, storeValueAlignment, defaultAlignment, hidden, updateStateProps, event}) => {
    const [state, setState] = useState({alignment: alignment});

    useEffect(() => {
        setState({alignment: alignment});
    }, [])

    usePrevValues(
        useMemo(() => ({
            alignment
        }), [alignment]),
        useCallback(prevValues => {
            if (prevValues.alignment !== alignment) {
                setState({alignment: alignment});
            }
        }, [alignment])
    );

    usePrevValues(
        useMemo(() => ({
            state
        }), [state]),
        useCallback(prevValues => {
            if (prevValues.state.alignment !== state.alignment) {
                updateStateProps('alignment', state.alignment, event);
            }
        }, [state])
    );

    const updateAlignment = (prop, value) => {
        setState(prev => ({
            ...prev,
            alignment: {
                ...prev.alignment,
                [prop]: value
            }
        }))
    }


    if (!state || !state.alignment || !alignment) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <Dot enabled={hasNotSamePropertyValue(defaultAlignment, alignment, 'horizontal')}/>
                    <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                value={'flex-start'} action={updateAlignment} nullAllowed>
                        <SvgAlignToStart/>
                    </IconActing>
                    <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                value={'center'} action={updateAlignment} nullAllowed>
                        <SvgAlignToCenter/>
                    </IconActing>
                    <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                value={'flex-end'} action={updateAlignment} nullAllowed>
                        <SvgAlignToEnd/>
                    </IconActing>
                </div>
            </Field>
        </Container>
    );

}

Alignment.propTypes = {
    updateStateProps: PropTypes.func,
    alignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    storeValueAlignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    defaultAlignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    hidden : PropTypes.bool,
    event : PropTypes.string
};

export default Alignment;