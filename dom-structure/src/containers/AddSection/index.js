import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import { addSection, addSectionToTop, closeFormAddSection, toggleFormAddSectionToTop, toggleFormAddSectionToBottom } from '../../actions/index';
import { Container } from '../../style/styledComponents';
import { FormSection, Information } from './styled';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import sectionConfig from '../../config/sections/*.js';


class AddSection extends Component {
    constructor (props) {
        super(props);

        this.state = {
            section: {
                type: 'sections',
                components: [],
                fields : {}
            }
        };
    }

    updateName = name => {
        this.setState({
            section: update(this.state.section, {
                name: { $set: name },
            })
        });
    }

    updateModel = model => {
        let fields = {};
        sectionConfig[model].default.fields.map(field => {
            fields[field.nameProperty] = {
                active: true, content: field.content.defaultValue, settings: field.settings.defaultValue, responsiveSettings: field.settings.responsive, responsiveContent: field.content.responsive };
        });
        this.setState(
            {
                section: update(this.state.section, {
                    model: { $set: model },
                    fields: { $set: fields }
                })
            });
    }

    clearForm = () => {
        this.setState({
            section: {
                type: 'sections',
                components: []
            }
        });
    }

    isComplete = () => (this.state.section.name && this.state.section.model)

    render () {
        const { dispatch, open, onTop } = this.props;
        let inputName, selectModel;

        return (
            <Container className={!open ? 'hidden' : ''}>
                <FormSection
                    onSubmit={e => {
                        e.preventDefault();
                        if (!this.isComplete()) { return; }
                        if (onTop) {
                            dispatch(addSectionToTop(this.state.section));
                            dispatch(toggleFormAddSectionToTop());
                        } else {
                            dispatch(addSection(this.state.section));
                            dispatch(toggleFormAddSectionToBottom());
                        }
                        inputName.value = '';
                        selectModel.value = '';
                        this.clearForm();
                    }}
                >
                    <div>
                        <label>Model</label>
                        <select ref={node => (selectModel = node)} defaultValue={''}
                            onChange={e => { this.updateModel(e.target.value); }}>
                            <option value={null}></option>
                            {
                                Object.keys(sectionConfig).map((key, i) => {
                                    return <option value={key} key={i}>{key}</option>;
                                }) }
                        </select>
                    </div>
                    <div>
                        <label>Section Name</label>
                        <input ref={node => (inputName = node)} type={'text'}
                            onChange={e => { this.updateName(e.target.value); }}/>
                        <Information>
                            this name will be used to generate the section id.<br/> It may be useful for creating anchors.</Information>
                    </div>

                    <div className={'buttons'}>
                        <ButtonBasic
                            label={'Cancel'}
                            disabled={false}
                            action={ e => {
                                this.clearForm();
                                inputName.value = '';
                                selectModel.value = '';
                                if (onTop) {
                                    dispatch(toggleFormAddSectionToTop());
                                } else {
                                    dispatch(toggleFormAddSectionToBottom());
                                }
                            }}
                        />
                        <ButtonValidate label={'Add'} type={'submit'} disabled={!this.isComplete()}/>
                    </div>
                </FormSection>
            </Container>
        );
    }
}

AddSection.propTypes = {
    open: PropTypes.bool
};

export default connect()(AddSection);
