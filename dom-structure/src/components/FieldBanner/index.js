import React from 'react';
import PropTypes from 'prop-types';
import {Banner} from '../../style/styledComponentsFields'
import {Icon} from '../../style/styledComponents';
import ActiveCheckBox from "../ActiveCheckBox";
import LanguageToggle from "../../containers/LanguageToggle";
import ResponsiveToggle from '../ResponsiveToggle';
import isEmpty from "lodash/isEmpty";
import SvgContent from '../svg/SvgContent';
import SvgSetting from '../svg/SvgSetting';

const FieldBanner = ({
                         name,
                         active,
                         defaultContent,
                         openContent,
                         toggleContent,
                         defaultSettings,
                         openSettings,
                         toggleSettings,
                         currentResponsiveMode,
                         toggleActive,
                         getResponsiveChoices,
                         setResponsiveMode,
                         editorOnly,
                         children
                     }) => {

    return (<Banner>
        <div>
            <ActiveCheckBox active={active} action={toggleActive}/>
            <p>{name}</p>
        </div>
        <div>
            <LanguageToggle hidden={(!openContent && !openSettings) || openSettings}/>
            <ResponsiveToggle responsive={getResponsiveChoices()}
                              currentMode={currentResponsiveMode}
                              action={setResponsiveMode}/>
            {children}
            {
                !isEmpty(defaultContent) &&
                    <Icon className={openContent ? 'active' : ''}
                          onClick={() => toggleContent()}>
                        <SvgContent/>
                    </Icon>
            }
            {
                !(editorOnly || isEmpty(defaultSettings)) &&
                    <Icon className={openSettings ? 'active' : ''}
                          onClick={() => toggleSettings()}>
                        <SvgSetting/>
                    </Icon>
            }
        </div>
    </Banner>);
}

FieldBanner.propTypes = {
    name : PropTypes.string,
    active : PropTypes.bool,
    defaultContent : PropTypes.object,
    defaultSettings: PropTypes.object,
    openContent: PropTypes.bool,
    toggleContent: PropTypes.func,
    openSettings: PropTypes.bool,
    toggleSettings: PropTypes.func,
    currentResponsiveMode: PropTypes.string,
    toggleActive: PropTypes.func,
    getResponsiveChoices: PropTypes.func,
    setResponsiveMode: PropTypes.func,
    editorOnly: PropTypes.bool
};

export default FieldBanner;
