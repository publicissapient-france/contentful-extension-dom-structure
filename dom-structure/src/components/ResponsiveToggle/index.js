import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ToogleResponsive, Responsive} from './styled';

class ResponsiveToggle extends Component {
    render() {
        const {responsive, currentMode, action} = this.props;
        return (
            <Responsive className={!responsive.length || responsive[0] === 'A' ? 'hidden' : ''}>
                {
                    responsive.length ?
                        responsive.map((mode, i) => {
                            return <ToogleResponsive
                                key={mode}
                                className={currentMode === mode ? 'active' : ''}
                                onClick={e => {
                                    action(mode)
                                }}>{mode}</ToogleResponsive>;
                        }) : null
                }
            </Responsive>
        );
    }
};

ResponsiveToggle.propTypes = {
    responsive : PropTypes.array,
    currentMode : PropTypes.string,
    action : PropTypes.func
}

export default ResponsiveToggle;
