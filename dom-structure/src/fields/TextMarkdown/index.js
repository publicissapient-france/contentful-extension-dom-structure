import React, { Component } from 'react';

import FieldWrapper from '../../HOC/FieldWrapper';

import LanguageToggle from '../../containers/LanguageToggle';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgContent from '../../components/svg/SvgContent';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ResponsiveToggle from '../../components/ResponsiveToggle';
import ActiveCheckBox from '../../components/ActiveCheckBox';

import InputMarkdown from '../../interfaces/InputMarkdown';

import { Icon } from '../../style/styledComponents';
import { Banner, Field, InfoText } from '../../style/styledComponentsFields';
import { ChoiceItemsConfirm, Content, Settings, Choices } from './styled';

class TextMarkdown extends Component {
    getMarkdown = () => this.props.content.markdown && this.props.content.markdown[this.props.indexLanguage] ? this.props.content.markdown[this.props.indexLanguage] : '';

    render () {
        const { indexLanguage, name } = this.props;
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
                        <Icon className={this.props.openContent ? 'active' : ''}
                            onClick={() => {
                                this.props.toggleContent();
                            }}><SvgContent/></Icon>
                        <Icon className={this.props.openSettings ? 'active' : ''}
                            onClick={() => {
                                this.props.toggleSettings();
                            }}><SvgSetting/></Icon>
                    </div>
                </Banner>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <InputMarkdown currentLanguage={indexLanguage} action={this.props.updateTranlatedContent} targetProperty={'markdown'}
                            defaultValue={this.getMarkdown()}/>
                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Choices>
                            <InfoText>TextMarkdown field don't have settings</InfoText>
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

const WrappedComponent = FieldWrapper(TextMarkdown);
export default WrappedComponent;
