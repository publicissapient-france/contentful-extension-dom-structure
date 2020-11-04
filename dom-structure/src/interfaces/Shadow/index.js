import React, {useEffect, useState} from 'react';
import {Container, Field, Inputs, Preview} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';

const Shadow = ({shadow, storeValueShadow, defaultShadow, hidden, customTarget, event, updateStateProps}) => {
    const [innerShadow, setInnerShadow] = useState(shadow);

    useEffect(() => {
        setInnerShadow(shadow);
    }, [shadow]);

    useEffect(() => {
        updateStateProps(customTarget || 'shadow', innerShadow, event);
    }, [innerShadow]);

    const updateShadow = (prop, value) => {
        setInnerShadow(prev => ({
            ...prev,
            [prop]: value
        }));
    }

    if (!shadow || !innerShadow ) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <label>shadow</label>
                    <Inputs>
                        <Dot enabled={!isEqual(defaultShadow, shadow)}/>
                        <input type={'text'}
                               value={shadow.value}
                               className={hasNotSamePropertyValue(storeValueShadow, shadow, 'value') ? 'updated' : ''}
                               onChange={e => updateShadow('value', e.target.value)}/>
                    </Inputs>
                </div>
                <Preview shadow={shadow.value}>
                    <div/>
                </Preview>
            </Field>
        </Container>
    );
}

Shadow.propTypes = {
    updateStateProps: PropTypes.func,
    shadow: PropTypes.shape({
        value: PropTypes.string,
    }),
    storeShadow: PropTypes.shape({
        value: PropTypes.string,
    }),
    defaultShadow: PropTypes.shape({
        value: PropTypes.string,
    }),
    hidden : PropTypes.bool,
    customTarget : PropTypes.string,
    event: PropTypes.string
};

export default Shadow;
