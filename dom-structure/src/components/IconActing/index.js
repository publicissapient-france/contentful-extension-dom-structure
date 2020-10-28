import React from 'react';
import {IconContainer} from '../../style/styledComponentsFields';
import PropTypes from 'prop-types';

const classByState = {
    NOT_SELECTED: '',
    NEWLY_SELECTED: 'updated',
    SELECTED: 'active',
};

const IconActing = ({children, objectA, objectB, targetProperty, value, nullAllowed, action}) => {

    const getClassName = () => {
        const state = getButtonState();
        return classByState[state];
    }

    const getButtonState = () => {
        const target = targetProperty;
        const propertyB = objectB[target];
        if (objectA && propertyB !== objectA[target] && propertyB === value) {
            return 'NEWLY_SELECTED';
        }
        if (propertyB === value) {
            return 'SELECTED';
        }
        return 'NOT_SELECTED';
    }

    return (
        <IconContainer
            className={getClassName()}
            onClick={() => {
                if (nullAllowed && objectB[targetProperty] === value) {
                    action(targetProperty, null);
                } else {
                    action(targetProperty, value);
                }
            }}>
            {children}
        </IconContainer>
    );
}

IconActing.propTypes = {
    objectA: PropTypes.object,
    objectB: PropTypes.object.isRequired,
    targetProperty: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    nullAllowed: PropTypes.bool,
    action: PropTypes.func
};

export default IconActing;
