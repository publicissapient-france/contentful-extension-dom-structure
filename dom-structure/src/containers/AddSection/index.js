import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    addSection,
    addSectionToTop,
    toggleFormAddSectionToTop,
    toggleFormAddSectionToBottom
} from '../../actions/index';
import {Container} from '../../style/styledComponents';
import {FormSection, Information} from './styled';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import sectionConfig from '../../config/sections/*.js';

const AddSection = ({dispatch, open, onTop}) => {
    const [section, setSection] = useState({
        type: 'sections',
        components: [],
        fields: {}
    })

    const updateName = name => {
        setSection(prev => ({
            ...prev,
            name: name
        }))
    }

    const updateModel = model => {
        let fields = {};
        sectionConfig[model].default.fields.map(field => {
            fields[field.nameProperty] = {
                active: true,
                content: field.content.defaultValue,
                settings: field.settings.defaultValue,
                responsiveSettings: field.settings.responsive,
                responsiveContent: field.content.responsive
            };
        });
        setSection(prev => ({
            ...prev,
            model: model,
            fields: fields
        }))
    }

    const clearForm = () => {
        setSection(prev => ({
            ...prev,
            type: 'sections',
            components: [],
            name : null,
            model  : null
        }))
    }

    const isComplete = () => (section.name && section.model)

    let inputName, selectModel;

    return (
        <Container className={!open ? 'hidden' : ''}>
            <FormSection
                onSubmit={e => {
                    e.preventDefault();
                    if (!isComplete()) {
                        return;
                    }
                    if (onTop) {
                        dispatch(addSectionToTop(section));
                        dispatch(toggleFormAddSectionToTop());
                    } else {
                        dispatch(addSection(section));
                        dispatch(toggleFormAddSectionToBottom());
                    }
                    inputName.value = '';
                    selectModel.value = '';
                    clearForm();
                }}
            >
                <div>
                    <label>Model</label>
                    <select ref={node => (selectModel = node)} defaultValue={''}
                            onChange={e => {
                                updateModel(e.target.value);
                            }}>
                        <option value={null}></option>
                        {
                            Object.keys(sectionConfig).map((key, i) => {
                                return <option value={key} key={i}>{key}</option>;
                            })}
                    </select>
                </div>
                <div>
                    <label>Section Name</label>
                    <input ref={node => (inputName = node)} type={'text'}
                           onChange={e => {
                               updateName(e.target.value);
                           }}/>
                    <Information>
                        this name will be used to generate the section id.<br/> It may be useful for creating
                        anchors.</Information>
                </div>

                <div className={'buttons'}>
                    <ButtonBasic
                        label={'Cancel'}
                        disabled={false}
                        action={(e) => {
                            e.preventDefault();
                            clearForm();
                            inputName.value = '';
                            selectModel.value = '';
                            if (onTop) {
                                dispatch(toggleFormAddSectionToTop());
                            } else {
                                dispatch(toggleFormAddSectionToBottom());
                            }
                        }}
                    />
                    <ButtonValidate label={'Add'} type={'submit'} disabled={!isComplete()}/>
                </div>
            </FormSection>
        </Container>
    );
}

AddSection.propTypes = {
    open: PropTypes.bool,
    onTop: PropTypes.bool
};

export default connect()(AddSection);
