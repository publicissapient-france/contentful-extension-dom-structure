import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';
import { getLink} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import InputText from '../../interfaces/InputText';
import DatePicker from '../../interfaces/DatePicker';
import {Field} from '../../style/styledComponentsFields';
import {Content, Column, LinkSettings, ChoicesContent} from './styled';
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

class InputDate extends Component {

    getDate = (content) => content.date ? content.date : '';

    render() {
        const {updated, content, indexLanguage} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        this.props.openContent &&
                        <Content>
                            <ChoicesContent>
                                <Column>
                                    <DatePicker updateContent={this.props.updateContent} targetProperty={'date'} defaultValue={this.getDate(content)}/>

                                </Column>
                            </ChoicesContent>
                        </Content>
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

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(InputDate));
export default WrappedComponent;
