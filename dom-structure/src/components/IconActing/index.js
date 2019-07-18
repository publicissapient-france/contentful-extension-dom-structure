import React, {Component} from 'react';
import {IconContainer} from '../../style/styledComponentsBoxes';
import PropTypes from 'prop-types';


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getClassName = () => {
        const target = this.props.targetProperty;
        const propertyB = this.props.objectB[target];
        if (this.props.objectA && propertyB !== this.props.objectA[target] && propertyB === this.props.value) {
            return 'updated';
        }
        if (propertyB === this.props.value) {
            return 'active';
        }
        return '';
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


Index.propTypes = {
    objectA: PropTypes.object.isRequired,
    objectB: PropTypes.object.isRequired,
    targetProperty: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    nullAllowed: PropTypes.bool
};

export default Index;
