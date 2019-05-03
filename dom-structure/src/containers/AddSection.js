import React, {Component} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { addSection } from '../actions'
import { Container, ButtonBasic, ButtonGreen} from "../style/styledComponents";
import update from "react-addons-update";
import {sections} from "../config/defaultConfig";

const Form = styled.form`
  display : flex;
  justify-content: space-between;
  padding : 10px 0;
  
  button:not(:first-child){
    margin-left : 10px;
  }
  
  &>div{
    display: flex;
    flex-direction : column;
    
    &.buttons{
        flex-direction : row;
       align-items : flex-end;
    }
    
  }
`;

class AddSection extends Component {

    constructor (props) {
        super(props);

        this.state = {
            section : {
                type : 'section',
                specs : [],
                components : []
            }
        };

    }

    updateName = (name) => {
        this.setState(
            {
                section: update(this.state.section, {
                    name: { $set: name },
                })
            }
        );
        console.log('state on addSection : ', this.state);
    }


    updateModel = (model) => {
        this.setState(
            {
                section: update(this.state.section, {
                    model: { $set: model },
                })
            }
        );
        console.log('state on addSection : ', this.state);
    }

    isComplete = () => (this.state.section.name && this.state.section.model)

    render(){
        const { dispatch, open, parent } = this.props;
        console.log('parent : ', parent);
        let inputName, selectModel;

        return (
            <Container className={ !open ? 'hidden' : ''}>
                <Form
                    onSubmit={e => {
                        e.preventDefault()
                        console.log('inputName.value : ', inputName.value );
                        console.log('selectModel.value : ', selectModel.value );
                        if (!this.isComplete()) {
                            return
                        }
                        dispatch(addSection(this.state.section))
                        inputName.value = ''
                        selectModel.value = ''
                        parent.setState({ openAddSectionTop: !parent.state.openAddSectionTop });
                    }}
                >
                    <div>
                        <label>Section Name</label>
                        <input ref={node => (inputName = node)} type={'text'}
                               onChange={e => { this.updateName(e.target.value); }}
                        />
                    </div>
                    <div>
                        <label>Model</label>
                        <select ref={node => (selectModel = node)} defaultValue={''}
                                onChange={e => { this.updateModel(e.target.value); }}>
                            <option value={null}></option>
                            { sections.map((model, i) => <option value={model.name} key={i}>{ model.name }</option>) }
                        </select>
                    </div>
                    <div className={'buttons'}>
                        <ButtonBasic>Cancel</ButtonBasic>
                        <ButtonGreen
                            disabled={!this.isComplete()}
                            className={ this.isComplete() ? 'active' : ''} type="submit">Add Todo</ButtonGreen>
                    </div>
                </Form>
            </Container>
        )

    }
}

export default connect()(AddSection)