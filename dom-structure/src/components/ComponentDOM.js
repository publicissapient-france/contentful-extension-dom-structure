import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { extensionTheme } from '../style/theme';
import SvgContent from './SvgContent';
import SvgSpecs from './SvgSpecs';
import SvgRange from './SvgRange';
import SvgTrash from './SvgTrash';
import { Container, Specs, Form, ButtonGreen, ButtonBasic, Icon, Range } from '../style/styledComponents';
import components from '../config/components';
import { moveComponentToTop, moveComponentToDown, removeComponent, updateComponent } from '../actions';
import update from 'react-addons-update';
//import Title from '../boxes/content/Title';

const TC = React.lazy(() => import('../boxes/content/Title'));


const ContainerComponent = styled(Container)`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blueM }; 
  width : 100%;
  padding-right :0px;
  margin-top :0px;
  margin-left : 8px;
  background : ${ extensionTheme.white };
  border-radius : 0px 20px 20px 0px;
  overflow : hidden;
  
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
const Content = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  
`;
const Banner = styled.div`
  display : flex;
  width : 100%;
  background : ${ extensionTheme.blueM }; 
  color :  ${ extensionTheme.white }; 
  padding : 5px 0px;
  
  & p{
    padding-left : 10px;
  }
  
`;
const Boxes = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  
`;
const FormComponent = styled(Form)`
  padding : 10px;
  
`;



class ComponentDOM extends Component {
  constructor (props) {
    super(props);

    this.state = {
      openSpec: false,
      openContent: true,
      component: null,
      openSecureDelete: false
    };
  }

  // content = require('../boxes/content/Title').default;

    componentDidMount = () => {
      this.setState({ component: this.props.component });

      console.log('component : ', this.props.component);
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

    TC = React.lazy(() => import('../boxes/content/Title'));


    render () {
      const { dispatch, component, index, indexParent, lengthParent } = this.props;
      let inputName, selectModel;

      console.log('components : ', components);
      console.log('model : ', component.model );
      console.log('content : ', components.find(c => c.name == component.model ) );




      return (
        <ContainerComponent>
          <TopBar>
            <Description>
              <h3>{component.name} </h3>
              <h4>{component.model} </h4>
            </Description>
            <Actions>
              <Icon className={this.state.openContent ? 'active' : ''} onClick={() => this.setState({
                openContent: !this.state.openContent,
                openSpec: false
              })}><SvgContent/></Icon>
              <Icon className={this.state.openSpec ? 'active' : ''} onClick={() => this.setState({
                openSpec: !this.state.openSpec,
                openContent: false
              })}><SvgSpecs/></Icon>
              <Range>
                <Icon className={index == 0 ? 'disable' : ''} onClick={() => {
                  if (index != 0) {
                    dispatch(moveComponentToTop(index, indexParent));
                  }
                }}><SvgRange/>
                </Icon>
                <Icon className={index == (lengthParent - 1) ? 'disable' : ''} onClick={() => {
                  if (index != (lengthParent - 1)) {
                    dispatch(moveComponentToDown(index, indexParent));
                  }
                }}><SvgRange/>
                </Icon>
              </Range>
              <Icon onClick={() => {
                dispatch(removeComponent(index, indexParent));
                this.setState({ openSecureDelete: !this.state.openSecureDelete });
              }}><SvgTrash/>
              </Icon>
            </Actions>

          </TopBar>
          <Specs className={!this.state.openSpec ? 'hidden' : ''}>
            <FormComponent onSubmit={e => {
              e.preventDefault();
              if (!this.isUpdated()) {
                return;
              }
              dispatch(updateComponent(this.state.component, index, indexParent));
            }}
            >
              <div>
                <label>Component Name</label>
                <input ref={node => (inputName = node)} type={'text'}
                  defaultValue={component.name ? component.name : ''}
                  onChange={e => {
                    this.updateName(e.target.value);
                  }}/>
              </div>
              <div>
                <label>Model</label>
                <select ref={node => (selectModel = node)}
                  defaultValue={component.model ? component.model : null}
                  onChange={e => {
                    this.updateModel(e.target.value);
                  }}>
                  { components.map((model, i) => <option value={model.name} key={i}>{model.name}</option>) }
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
                  className={this.isUpdated() ? 'active' : ''}>Update</ButtonGreen>
              </div>
            </FormComponent>
          </Specs>
          <Content className={!this.state.openContent ? 'hidden' : ''}>
            <Banner><p>Content</p></Banner>
            <Boxes>
            </Boxes>
              <React.Suspense fallback={<div>Loading Component...</div>}>
                  <TC/>
                  { React.createElement(this.TC, {  })}
              </React.Suspense>



          </Content>

        </ContainerComponent>
      );
    }
};

export default connect()(ComponentDOM);
