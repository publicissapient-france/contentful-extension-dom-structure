import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComponent, addChild} from '../../actions/index';
import {ContainerForm, FormComponent, SelectTypeChild, Type, SelectType, FormChildren} from './styled';
import update from 'react-addons-update';
import componentConfig from '../../config/components/*.js';
import ButtonBasic from '../../components/ui/ButtonBasic';

import PropTypes from 'prop-types';
import ButtonValidate from '../../components/ui/ButtonValidate';

class AddChildren extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            component: {
                type: 'components'
            }
        };
    }

    updateType = (type) => {
        this.setState({
            type : type
        }, () => {
            console.log('this.state', this.state)
        });
    }

    updateName = name => {
        this.setState({
            component: update(this.state.component, {
                name: {$set: name},
            })
        });
    }

    updateModel = model => {
        let fields = {};
        componentConfig[model].default.fields.map(field => {
            fields[field.nameProperty] = {
                active: true, content: {}, settings: {}, responsiveSettings: field.settings.responsive
            };
        });
        let order = componentConfig[model].default.order;
        this.setState({
            component: update(this.state.component, {
                model: {$set: model},
                fields: {$set: fields},
                order: {$set: order}
            })
        });
    }

    clearForm = () => {
        this.setState({
            component: {
                type: 'component',
                name: null,
                model: null
            }
        });
    }

    isComplete = () => (this.state.component && this.state.component.name && this.state.component.model)

    render() {
        const {dispatch, index, open, parent, tree} = this.props;
        console.log('TREE ON ADD CHILDREN', tree)
        let inputName, selectModel;
        return (
            <ContainerForm className={!open ? 'hidden' : ''}>
                <SelectTypeChild className={this.state.type}>
                    <Type>
                        <label>Sub-section</label>
                        <SelectType>
                            <input type="checkbox" onChange={() => {
                                this.updateType(this.state.type === 'section' ? '' : 'section')
                            }} checked={this.state.type === 'section' ? true : false}/>
                            <p>add Sub-section</p>
                        </SelectType>
                    </Type>
                    <Type>
                        <label>Component</label>
                        <SelectType>
                            <input type="checkbox" onChange={() => {
                                this.updateType(this.state.type === 'component' ? '' : 'component')
                            }} checked={this.state.type === 'component' ? true : false}/>
                            <p>add Component</p>
                        </SelectType>
                    </Type>
                </SelectTypeChild>
                    {
                        this.state.type === 'section' ? <p>section</p> : null
                    }
                    {
                        this.state.type === 'component' ? <FormComponent
                            onSubmit={e => {
                                e.preventDefault();
                                if (!this.isComplete()) { return; }
                                dispatch(addChild(this.state.component, tree));
                                inputName.value = '';
                                selectModel.value = '';
                                this.props.toggleOpeningForm();
                                this.clearForm();
                            }}
                        >
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
                            <div>
                                <label>Component Name</label>
                                <input ref={node => (inputName = node)} type={'text'}
                                       onChange={e => { this.updateName(e.target.value); }}/>
                            </div>

                            <div className={'buttons'}>
                                <ButtonBasic
                                    disabled={!this.isComplete()}
                                    label={'Cancel'}
                                    action={ e => {
                                        e.preventDefault();
                                        this.clearForm();
                                        inputName.value = '';
                                        selectModel.value = '';
                                        parent.setState({ openAdd: !parent.state.openAdd });
                                    }}
                                />
                                <ButtonValidate type={'submit'} label={'Add'} disabled={!this.isComplete()}/>
                            </div>
                        </FormComponent> : null
                    }

            </ContainerForm>
        );
    }
}

AddChildren.propTypes = {
    //index: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired
};

export default connect()(AddChildren);
