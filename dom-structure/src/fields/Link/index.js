import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';
import { getLink} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import InputText from '../../interfaces/InputText';
import {Field} from '../../style/styledComponentsFields';
import {Content, Column, LinkSettings, ChoicesContent} from './styled';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class Link extends Component {

    getExternal = () => this.props.getSettingsPropertyNoResponsive('state') ? this.props.getSettingsPropertyNoResponsive('state').external : false;
    getDisabled = () => this.props.getSettingsPropertyNoResponsive('state') ? this.props.getSettingsPropertyNoResponsive('state').disabled : false;

    render() {
        const {updated, content, indexLanguage} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>
                        <ChoicesContent>
                            <Column>
                                <InputText action={this.props.updateTranlatedContent} targetProperty={'link'}
                                           defaultValue={getLink(content, indexLanguage)}/>
                            </Column>
                            <Column>
                                <LinkSettings>
                                    <div>
                                        <label>
                                            <input type={'checkbox'} defaultChecked={this.getExternal()}
                                                   onChange={(e) => {
                                                       this.props.updateSettingsNoResponsive('state', {external: !this.getExternal()})
                                                   }}/>
                                            external</label>
                                        <label>
                                            <input type={'checkbox'} defaultChecked={this.getDisabled()}
                                                   onChange={(e) => {
                                                       this.props.updateSettingsNoResponsive('state', {disabled: !this.getDisabled()})
                                                   }}/>
                                            disabled</label>
                                    </div>
                                </LinkSettings>
                            </Column>
                        </ChoicesContent>
                    </Content>
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Link));
export default WrappedComponent;
