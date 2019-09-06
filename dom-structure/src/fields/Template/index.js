import React, { Component } from 'react';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import ColorPicker from '../../interfaces/ColorPicker';

import { Icon } from '../../style/styledComponents';
import { Banner, Field } from '../../style/styledComponentsFields';
import { ChoiceItemsConfirm, Settings, Choices } from './styled';

class Template extends Component {
    constructor (props) {
        super(props);

        this.state = {
            openColorView: false
        };
    }

    componentDidMount () {};

    componentDidUpdate (prevProps) {}

    toggleOpenView = () => this.setState(prevState => ({ openColorView: !prevState.openColorView }));

    render () {
        const { name } = this.props;

        if (!this.props.settings) return null;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            active={this.props.active}
                            action={this.props.toggleActive}>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <div>
                        <LanguageToggle
                            hidden={(!this.props.openContent && !this.props.openSettings) || this.props.openSettings}/>
                        <ResponsiveToggle responsive={this.props.getResponsiveChoices()}
                            currentMode={this.props.currentResponsiveMode}
                            action={this.props.setResponsiveMode}/>
                        <Icon className={this.props.openSettings ? 'active' : ''}
                            onClick={() => {
                                this.props.toggleSettings();
                            }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <ColorPicker hidden={false}
                                color={this.props.getSettingsProperty('color')}
                                opacity={this.props.getSettingsProperty('opacity')}
                                storeValueColor={this.props.getStoreSettingsProperty('color')}
                                storeValueOpacity={this.props.getStoreSettingsProperty('opacity')}
                                defaultColor={this.props.getDefaultSettingsProperty('color')}
                                defaultOpacity={this.props.getDefaultSettingsProperty('opacity')}
                                openView={this.state.openColorView}
                                updateStateProps={this.props.updateSettings}
                                toggleOpenView={this.toggleOpenView}
                            />
                        </Choices>
                    </Settings>
                </Field>
                <ChoiceItemsConfirm className={!this.props.updated ? 'hidden' : ''}>
                    <ButtonBasic label={'Cancel'} disabled={!this.props.updated} action={this.props.cancelStateValue}/>
                    <ButtonValidate label={'Update'} disabled={!this.props.updated} action={this.props.updateField}/>
                </ChoiceItemsConfirm>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper(Template);
export default WrappedComponent;
