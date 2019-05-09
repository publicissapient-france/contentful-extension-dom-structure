import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { extensionTheme } from '../style/theme';
import SvgContent from './SvgContent';
import SvgSpecs from './SvgSpecs';
import SvgRange from './SvgRange';
import SvgTrash from './SvgTrash';
import { Container, Specs, Form, ButtonGreen, ButtonBasic, Icon, Range } from '../style/styledComponents';
import {components} from "../config/defaultConfig";
import {removeComponent, removeSection, updateComponent} from "../actions";
import update from "react-addons-update";

const ContainerComponent = styled(Container)`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blue }; 
  width : 100%;
  padding-right :0px;
  margin-top :0px;
  background : ${ extensionTheme.white };
  
  & div.buttons{
    padding-right : 10px;
  }

`;

const TopBar = styled.div`
  width : 100%;
  display : flex;
  justify-content: space-between;
  
`;

const Description = styled.div`
  display : flex;
  width : fit-content
  
`;
const Actions = styled.div`
  display : flex;
  width : fit-content
  
`;
class ComponentDOM extends Component {
    constructor (props) {
        super(props);

        this.state = {
            openSpec: false,
            openContent: false,
            component: null,
            openSecureDelete: false
        };
    }

    componentDidMount = () => {
        this.setState({ component: this.props.component });
    }

    updateModel = model => {
        this.setState({
            component: update(this.state.component, {
                model: { $set: model },
            })
        });
    }

    updateName = name => {
        this.setState({
            component: update(this.state.component, {
                name: { $set: name },
            })
        });
    }

    isUpdated = () => (this.state.component && (this.state.component.name != this.props.component.name || this.state.component.model != this.props.component.model))

    render () {
    const { dispatch, component, index, indexParent } = this.props;
    let inputName, selectModel;

        return (
      <ContainerComponent>
        <TopBar>
          <Description>
            <h3>{component.name} </h3>
            <h4>{component.model} </h4>
          </Description>
          <Actions>
            <Icon><SvgContent/></Icon>
            <Icon className={this.state.openSpec ? 'active' : ''} onClick={() => this.setState({ openSpec: !this.state.openSpec,  openContent: false  })}><SvgSpecs/></Icon>
            <Range>
              <Icon><SvgRange/></Icon>
              <Icon><SvgRange/></Icon>
            </Range>
            <Icon onClick={() => {
                dispatch(removeComponent(index, indexParent));
                this.setState({ openSecureDelete: !this.state.openSecureDelete });
            } }><SvgTrash/></Icon>
          </Actions>

        </TopBar>
        <Specs className={!this.state.openSpec ? 'hidden' : ''}>
              <Form onSubmit={e => {
                  e.preventDefault();
                  if (!this.isUpdated()) { return; }
                  dispatch(updateComponent( this.state.component, index , indexParent));
              }}
              >
                  <div>
                      <label>Component Name</label>
                      <input ref={node => (inputName = node)} type={'text'}
                             defaultValue={ component.name ? component.name : '' }
                             onChange={e => { this.updateName(e.target.value); }}/>
                  </div>
                  <div>
                      <label>Model</label>
                      <select ref={node => (selectModel = node)} defaultValue={component.model ? component.model : null}
                              onChange={e => { this.updateModel(e.target.value); }}>
                          { components.map((model, i) => <option value={model.name} key={i}>{ model.name }</option>) }
                      </select>
                  </div>
                  <div className={'buttons'}>
                      <ButtonBasic
                          onClick={e => {
                              e.preventDefault();
                              this.setState({
                                  openSpec: !this.state.openSpec,
                                  component: this.props.component
                              });
                              inputName.value = component.name;
                              selectModel.value = component.model;
                          }}
                      >Cancel</ButtonBasic>
                      <ButtonGreen
                          disabled={!this.isUpdated()}
                          className={ this.isUpdated() ? 'active' : ''}>Update</ButtonGreen>
                  </div>
              </Form>
        </Specs>

      </ContainerComponent>
    );
  }
};

export default connect()(ComponentDOM);
