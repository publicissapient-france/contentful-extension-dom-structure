import React from 'react';
import PropTypes from 'prop-types';
import {ToogleResponsive, Responsive, Icon} from './styled';
import SvgDeviceMobile from '../svg/SvgDeviceMobile';
import SvgDeviceTablet from '../svg/SvgDeviceTablet';
import SvgDeviceDesktop from '../svg/SvgDeviceDesktop';

const getSvgMode = (mode) => {
    if (mode === 'M') {
        return <SvgDeviceMobile/>
    } else if (mode === 'T') {
        return <SvgDeviceTablet/>
    } else if (mode === 'D') {
        return <SvgDeviceDesktop/>
    }
}

const ResponsiveToggle = ({responsive, currentMode, action}) => {
    if (!responsive) return null
    return (
        <Responsive className={!responsive.length || responsive[0] === 'A' ? 'hidden' : ''}>
            {
                responsive.length
                    ? responsive.map((mode, i) => {
                        return <ToogleResponsive
                            key={mode}
                            onClick={() => action(mode)}>
                            <Icon className={currentMode === mode ? 'active' : ''}>
                                {getSvgMode(mode)}
                            </Icon>
                        </ToogleResponsive>;
                    }) : null
            }
        </Responsive>
    );
};

ResponsiveToggle.propTypes = {
    responsive: PropTypes.array,
    currentMode: PropTypes.string,
    action: PropTypes.func
};

export default ResponsiveToggle;
