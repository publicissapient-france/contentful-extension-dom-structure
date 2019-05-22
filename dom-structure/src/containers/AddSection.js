import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSection, toggleFormAddSection } from '../actions';
import { Container, ButtonBasic, ButtonGreen, Form } from '../style/styledComponents';
import update from 'react-addons-update';
import sections from '../config/sections';
import styled from 'styled-components';

const FormSection = styled(Form)`
    padding-left : 8px;
`;

class AddSection extends Component {
    constructor (props) {
        super(props);

        this.state = {
            section: {
                type: 'section',
                specs: [],
                components: []
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
        this.setState(
            {
                section: update(this.state.section, {
                    model: { $set: model },
                })
            });
    }

    clearForm = () => {
        this.setState({
            section: {
                type: 'section',
                specs: [],
                components: []
            }
        });
    }

    isComplete = () => (this.state.section.name && this.state.section.model)

    render () {
        const { dispatch, open } = this.props;
        let inputName, selectModel;

        return (
            <Container className={!open ? 'hidden' : ''}>
                <FormSection
                    onSubmit={e => {
                        e.preventDefault();
                        if (!this.isComplete()) { return; }
                        dispatch(addSection(this.state.section));
                        inputName.value = '';
                        selectModel.value = '';
                        dispatch(toggleFormAddSection());
                        this.clearForm();
                    }}
                >
                    <div>
                        <label>Section Name</label>
                        <input ref={node => (inputName = node)} type={'text'}
                            onChange={e => { this.updateName(e.target.value); }}/>
                    </div>
                    <div>
                        <label>Model</label>
                        <select ref={node => (selectModel = node)} defaultValue={''}
                            onChange={e => { this.updateModel(e.target.value); }}>
                            <option value={null}></option>
                            {sections.map((model, i) => <option value={model.name} key={i}>{model.name}</option>)}
                        </select>
                    </div>
                    <div className={'buttons'}>
                        <ButtonBasic
                            onClick={e => {
                                this.clearForm();
                                inputName.value = '';
                                selectModel.value = '';
                                dispatch(toggleFormAddSection());
                            }}
                        >Cancel</ButtonBasic>
                        <ButtonGreen
                            disabled={!this.isComplete()}
                            className={this.isComplete() ? 'active' : ''} type="submit">Add</ButtonGreen>
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
