import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Banner} from '../../style/styledComponentsFields'
import {Icon} from '../../style/styledComponents';
import ActiveCheckBox from "../ActiveCheckBox";
import LanguageToggle from "../../containers/LanguageToggle";
import ResponsiveToggle from '../ResponsiveToggle';
import isEmpty from "lodash/isEmpty";
import SvgContent from '../svg/SvgContent';
import SvgSetting from '../svg/SvgSetting';

class FieldBanner extends Component {

    render() {
        const {name, active, openContent, openSettings, currentResponsiveMode} = this.props
        return (<Banner>
            <div>
                <ActiveCheckBox active={active} action={this.props.toggleActive}/>
                <p>{name}</p>
            </div>
            <div>
                <LanguageToggle hidden={(!openContent && !openSettings) || openSettings}/>
                <ResponsiveToggle responsive={this.props.getResponsiveChoices()}
                                  currentMode={currentResponsiveMode}
                                  action={this.props.setResponsiveMode}/>
                {
                    !isEmpty(this.props.defaultContent) ?
                        <Icon className={openContent ? 'active' : ''}
                              onClick={() => {
                                  this.props.toggleContent();
                              }}>
                            <SvgContent/>
                        </Icon>
                        : null
                }
                {this.props.editorOnly ? null :
                    <Icon className={openSettings ? 'active' : ''}
                          onClick={() => {
                              this.props.toggleSettings();
                          }}>
                        <SvgSetting/>
                    </Icon>
                }
            </div>
        </Banner>);
    }
}

FieldBanner.propTypes = {};

export default FieldBanner;
