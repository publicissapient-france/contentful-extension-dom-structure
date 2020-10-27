import React from 'react';
import PropTypes from 'prop-types';
import {Check} from './styled';
import SvgCheck from '../svg/SvgCheck';

const ActiveCheckBox = ({active, action}) => {
    return (
        <Check
            className={active ? 'active' : ''}
            onClick={() => action()}>
            <SvgCheck/>
        </Check>
    );
};

ActiveCheckBox.propTypes = {
    active: PropTypes.bool,
    action: PropTypes.func
};

export default ActiveCheckBox;
