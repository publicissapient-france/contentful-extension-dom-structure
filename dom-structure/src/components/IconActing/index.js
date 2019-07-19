import React, {Component} from 'react';
import {IconContainer} from '../../style/styledComponentsBoxes';
import PropTypes from 'prop-types';

const classByState = {
    NOT_SELECTED: '',
    NEWLY_SELECTED: 'updated',
    SELECTED: 'active',
};

class IconActing extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getClassName = () => {
        const state = this.getButtonState();
        return classByState[state];
    }

    getButtonState = () => {
        const target = this.props.targetProperty;
        const propertyB = this.props.objectB[target];
        if (this.props.objectA && propertyB !== this.props.objectA[target] && propertyB === this.props.value) {
            return 'NEWLY_SELECTED';
        }
        if (propertyB === this.props.value) {
            return 'SELECTED';
        }
        return 'NOT_SELECTED';
    }

    render() {
        const {children, objectA, objectB, targetProperty, value, nullAllowed} = this.props;

        return (
            <IconContainer
                className={this.getClassName()}
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
    ]).isRequired,
    nullAllowed: PropTypes.bool
};

export default IconActing;
