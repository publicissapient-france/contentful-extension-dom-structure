import React, {Component} from 'react';
import {IconContainer} from '../style/styledComponentsBoxes';
import PropTypes from 'prop-types';


class IconActing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, objectA, objectB, targetProperty, value, nullAllowed} = this.props;

        const getClassName = () => {
            const property = objectB[targetProperty];
            if (objectA && property !== objectA[targetProperty] && property === value) {
                return 'updated';
            }
            if (property === value) {
                return 'active';
            }
            return '';
        }

        return (
            <IconContainer
                className={getClassName()}
                onClick={e => {
                    if (nullAllowed && objectB[targetProperty] === value) {
                        this.props.action(targetProperty, null);
                    } else {
                        this.props.action(targetProperty, value);
                    }
                }}>
                {children}
            </IconContainer>
        )
    }
}


IconActing.propTypes = {
    objectA: PropTypes.object.isRequired,
    objectB: PropTypes.object.isRequired,
    targetProperty: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    nullAllowed: PropTypes.bool
};

export default IconActing;
