import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComponent } from '../../actions/index';
import {ContainerForm, FormComponent } from './styled';
import update from 'react-addons-update';
import componentConfig from '../../config/components/*.js';
import ButtonBasic from '../../components/ui/ButtonBasic'

import PropTypes from 'prop-types';
import ButtonValidate from "../../components/ui/ButtonValidate";

class AddComponent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            component: {
                type: 'components',
                settings: [],
            }
        };
    }

    updateName = name => {
        this.setState({
            component: update(this.state.component, {
                name: { $set: name },
            })
        });
    }

    updateModel = model => {
        this.setState(
            {
                component: update(this.state.component, {
                    model: { $set: model },
                })
            });
    }

    clearForm = () => {
        this.setState({
            component: {
                type: 'component',
                name: null,
                model: null,
                settings: [],
            }
        });
    }

    isComplete = () => (this.state.component && this.state.component.name && this.state.component.model)

    render () {
        const { dispatch, index, open, parent } = this.props;
        let inputName, selectModel;
        return (
            <ContainerForm className={!open ? 'hidden' : ''}>
                <FormComponent
                    onSubmit={e => {
                        e.preventDefault();
                        if (!this.isComplete()) { return; }
                        dispatch(addComponent(this.state.component, index));
                        inputName.value = '';
                        selectModel.value = '';
                        parent.setState({ openAdd: !parent.state.openAdd });
                        this.clearForm();
                    }}
                >
                    <div>
                        <label>Component Name</label>
                        <input ref={node => (inputName = node)} type={'text'}
                            onChange={e => { this.updateName(e.target.value); }}/>
                    </div>
                    <div>
                        <label>Model</label>
                        <select ref={node => (selectModel = node)} defaultValue={''}
                            onChange={e => { this.updateModel(e.target.value); }}>
                            <option value={null}></option>
                            {
                                Object.keys(componentConfig).map((key, i) => {
                                    return <option value={key} key={i}>{key}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div className={'buttons'}>
                        <ButtonBasic
                            label={'Cancel'}
                            action={ (e) => {
                                e.preventDefault();
                                this.clearForm();
                                inputName.value = '';
                                selectModel.value = '';
                                parent.setState({ openAdd: !parent.state.openAdd });
                            }}
                        />
                        <ButtonValidate type={'submit'} label={'Add'} disabled={!this.isComplete()}/>
                    </div>
                </FormComponent>
            </ContainerForm>
        );
    }
}

AddComponent.propTypes = {
    index: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired
};

export default connect()(AddComponent);
