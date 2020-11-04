import React, { useEffect, useState } from 'react';
import { Container, Field, CornerBottomLeft, CornerBottomRight, CornerTopRight, CornerTofLeft, InputsRadius } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

const Radius = ({ radius, storeValueRadius, defaultRadius, hidden, updateStateProps}) => {
    const [innerRadius, setInnerRadius] = useState(radius);

    useEffect(() => {
        setInnerRadius(radius);
    }, [radius]);

    useEffect(() => {
        updateStateProps('radius', innerRadius);
    }, [innerRadius]);

    const updateRadius = (prop, value) => {
        setInnerRadius(prev => ({
            ...prev,
            [prop]: String(value)
        }));
    }

    if (!innerRadius) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <label>radius</label>
                    <InputsRadius>
                        <Dot enabled={!isEqual(innerRadius, defaultRadius)}/>
                        <CornerTofLeft>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueRadius, radius, 'topLeft') ? 'updated' : ''}
                                value={innerRadius.topLeft}
                                onChange={e => updateRadius('topLeft', e.target.value)}/>
                        </CornerTofLeft>
                        <CornerTopRight>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueRadius, radius, 'topRight') ? 'updated' : ''}
                                value={innerRadius.topRight}
                                onChange={e => updateRadius('topRight', e.target.value)}/>
                        </CornerTopRight>
                        <CornerBottomRight>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueRadius, radius, 'bottomRight') ? 'updated' : ''}
                                value={innerRadius.bottomRight}
                                onChange={e => updateRadius('bottomRight', e.target.value)}/>
                        </CornerBottomRight>
                        <CornerBottomLeft>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueRadius, radius, 'bottomLeft') ? 'updated' : ''}
                                value={innerRadius.bottomLeft}
                                onChange={e => updateRadius('bottomLeft', e.target.value)}/>
                        </CornerBottomLeft>
                    </InputsRadius>
                </div>
            </Field>
        </Container>
    );
}


Radius.propTypes = {
    updateStateProps: PropTypes.func,
    radius: PropTypes.shape({
        topLeft: PropTypes.string,
        topRight: PropTypes.string,
        bottomRight: PropTypes.string,
        bottomLeft: PropTypes.string
    }),
    storeValueRadius: PropTypes.shape({
        topLeft: PropTypes.string,
        topRight: PropTypes.string,
        bottomRight: PropTypes.string,
        bottomLeft: PropTypes.string
    }),
    defaultRadius: PropTypes.shape({
        topLeft: PropTypes.string,
        topRight: PropTypes.string,
        bottomRight: PropTypes.string,
        bottomLeft: PropTypes.string
    }),
    hidden : PropTypes.bool,
    updateStateProps: PropTypes.func
};

export default Radius;
