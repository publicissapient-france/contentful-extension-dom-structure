import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComponent} from '../../actions/index';
import componentConfig from '../../config/components/*.js';

import {ContainerForm, FormComponent} from './styled';

import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';

const AddComponent = ({dispatch, index, updateView}) => {

    const [component, setComponent] = useState({
        type: 'components'
    })

    const updateName = name => {
        setComponent(prev => ({
            ...prev,
            name: name
        }));
    }

    const updateModel = model => {
        let fields = {};
        componentConfig[model].default.fields.map(field => {
            fields[field.nameProperty] = {
                active: true, content: {}, settings: {}, responsiveSettings: field.settings.responsive
            };
        });
        let order = componentConfig[model].default.order;
        setComponent(prev => ({
            ...prev,
            model: model,
            fields: fields,
            order: order
        }));
    }

    const clearForm = () => {
        setComponent(prev => ({
            ...prev,
            type: 'component',
            name: null,
            model: null
        }));
    }

    const isComplete = () => (component && component.name && component.model)

    let inputName, selectModel;
    return (
        <ContainerForm>
            <FormComponent
                onSubmit={e => {
                    e.preventDefault();
                    if (!isComplete()) {
                        return;
                    }
                    dispatch(addComponent(component, index));
                    inputName.value = '';
                    selectModel.value = '';
                    updateView('formAddComponent');
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
                            Object.keys(componentConfig).map((key, i) => {
                                return <option value={key} key={i}>{key}</option>;
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Component Name</label>
                    <input ref={node => (inputName = node)} type={'text'}
                           onChange={e => {
                               updateName(e.target.value);
                           }}/>
                </div>

                <div className={'buttons'}>
                    <ButtonBasic
                        disabled={false}
                        label={'Cancel'}
                        action={e => {
                            e.preventDefault();
                            clearForm();
                            inputName.value = '';
                            selectModel.value = '';
                            updateView('formAddComponent');
                        }}
                    />
                    <ButtonValidate type={'submit'} label={'Add'} disabled={!isComplete()}/>
                </div>
            </FormComponent>
        </ContainerForm>
    );

}

AddComponent.propTypes = {
    index: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    updateView : PropTypes.func
};

export default connect()(AddComponent);
