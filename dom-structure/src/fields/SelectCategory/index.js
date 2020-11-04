import React, {Component} from 'react';
import {getData} from "../../utils/Fields/getters";

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";
import CategorySelector from '../../interfaces/CategorySelector';

import {Field} from '../../style/styledComponentsFields';
import {Content, Choices} from './styled';

class SelectCategory extends Component {

    updateBasis = (property, value, event) => this.props.updateSettingsProperty('basis', property, value, event);

    render() {
        const {updated, content} = this.props;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    {
                        this.props.openContent &&
                        <Content>
                            <Choices>
                                <CategorySelector updateContent={this.props.updateContent}
                                                  category={getData(content)}/>
                            </Choices>
                        </Content>
                    }
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue}
                                 updating={this.props.updateField}/>
            </div>
        );
    }
}

const WrappedComponent = FieldWrapper((SelectCategory));
export default WrappedComponent;
export const SelectCategoryForSection = FieldWrapperOfSection((SelectCategory));

