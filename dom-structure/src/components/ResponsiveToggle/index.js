import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {ToogleResponsive, Responsive} from './styled';

class ResponsiveToggle extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {responsive, currentMode, action} = this.props;

        return (
            <Responsive className={!responsive ? 'hidden' : ''}>
                {
                    responsive ?
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

}


export default ResponsiveToggle;
