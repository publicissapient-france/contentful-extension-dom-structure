import React, {useState, useEffect} from 'react';
import {Container, Field, Inputs} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';

const Margin = ({margin, storeValueMargin, defaultMargin, hidden, updateStateProps, event}) => {
    const [innerMargin, setInnerMargin] = useState(margin);

    useEffect(() => {
        setInnerMargin(margin);
    }, [margin]);

    useEffect(() => {
        updateStateProps('margin', innerMargin, event);
    }, [innerMargin]);

    const updateMargin = (prop, value) => {
        setInnerMargin(prev => ({
            ...prev,
            [prop]: String(value)
        }))
    }

    if (!innerMargin) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <label>margin</label>
                    <Inputs>
                        <Dot enabled={!isEqual(defaultMargin, margin)}/>
                        {
                            ['top', 'right', 'bottom', 'left'].map((edge, i) => {
                                return (
                                    <input key={i} type={'number'} min={0}
                                           className={hasNotSamePropertyValue(storeValueMargin, margin, edge) ? 'updated' : ''}
                                           value={innerMargin[edge]}
                                           onChange={e => {
                                               updateMargin(edge, e.target.value);
                                           }}/>)
                            })
                        }
                    </Inputs>
                </div>

            </Field>
        </Container>
    );
}

Margin.propTypes = {
    updateStateProps: PropTypes.func,
    margin: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValueMargin: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultMargin: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    hidden : PropTypes.bool,
    updateStateProps : PropTypes.func,
    event : PropTypes.string
};

export default Margin;
