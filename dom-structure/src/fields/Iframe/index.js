import React, {Component} from 'react';
import FieldWrapper from '../../HOC/FieldWrapper';
import InputIframe from '../../interfaces/InputIframe';
import { Field} from '../../style/styledComponentsFields';
import { Content} from './styled';
import {getCurrentStyle} from "../../actions";
import {connect} from "react-redux";
import isEmpty from "lodash/isEmpty";
import { getHtml} from "../../utils/Fields/getters";
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class Iframe extends Component {

    render() {
        const {indexLanguage, content, updated} = this.props;
        if (!this.props.settings) return null;

        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        !isEmpty(this.props.content) ?
                            <Content className={!this.props.openContent ? 'hidden' : ''}>
                                <InputIframe currentLanguage={indexLanguage}
                                               action={this.props.updateTranlatedContent} targetProperty={'html'}
                                               defaultValue={getHtml(content, indexLanguage)}/>
                            </Content>
                            : null
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue} updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});
const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Iframe));
export default WrappedComponent;
