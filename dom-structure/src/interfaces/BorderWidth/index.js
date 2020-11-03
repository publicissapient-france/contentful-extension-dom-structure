import React, { useState, useEffect } from 'react';
import { Container, Field, InputsBorder } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

const BorderWidth = ({width, storeValueWidth, defaultWidth, hidden , updateStateProps}) => {
    const [innerWidth, setInnerWidth] = useState(width);

    useEffect(() => {
        setInnerWidth(width);
    }, [width]);

    useEffect(() => {
        if (innerWidth) {
            updateStateProps('width', innerWidth);
        }
    }, [innerWidth]);

    const updateWidth = (prop, value) => {
        setInnerWidth(prev => ({
            ...prev,
            [prop]: value
        }));
    }

    if(!innerWidth) return null

    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <label>border width</label>
                <div>
                    <InputsBorder>
                        <Dot enabled={!isEqual(innerWidth, defaultWidth)}/>
                        {
                            ['top', 'right','bottom', 'left' ].map(edge => {
                                return (
                                    <input
                                        type={'number'}
                                        min={0}
                                        className={hasNotSamePropertyValue(storeValueWidth, width, edge) ? 'updated' : ''}
                                        value={parseInt(innerWidth[edge])}
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
