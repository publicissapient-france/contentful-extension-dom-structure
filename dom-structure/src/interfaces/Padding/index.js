import React, {useState, useEffect} from 'react';
import {Container, Field, Inputs} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';

const Padding = ({padding, storeValuePadding, defaultPadding, hidden, updateStateProps, event}) => {
    const [innerPadding, setInnerPadding] = useState(padding);

    useEffect(() => {
        setInnerPadding(padding);
    }, [padding]);

    useEffect(() => {
        updateStateProps('padding', innerPadding, event);
    }, [innerPadding]);

    const updatePadding = (prop, value) => {
        setInnerPadding(prev => ({
            ...prev,
            [prop]: String(value)
        }))
    }

    if (!innerPadding) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <label>padding</label>
                    <Inputs>
                        <Dot enabled={!isEqual(defaultPadding, padding)}/>
                        {
                            ['top', 'right', 'bottom', 'left'].map((edge, i) => {
                                return (
                                    <input key={i} type={'number'} min={0}
                                           className={hasNotSamePropertyValue(storeValuePadding, padding, edge) ? 'updated' : ''}
                                           value={innerPadding[edge]}
                                           onChange={e => updatePadding(edge, e.target.value)}/>)
                            })
                        }
                    </Inputs>
                </div>
            </Field>
        </Container>
    );
}

Padding.propTypes = {
    updateStateProps: PropTypes.func,
    padding: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValuePadding: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultPadding: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    hidden: PropTypes.bool,
    updateStateProps: PropTypes.func,
    event: PropTypes.string
};

export default Padding;
