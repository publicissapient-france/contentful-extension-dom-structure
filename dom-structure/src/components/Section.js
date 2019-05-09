import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { extensionTheme } from '../style/theme';
import SvgAdd from './SvgAdd';
import SvgSpecs from './SvgSpecs';
import SvgRange from './SvgRange';
import SvgTrash from './SvgTrash';
import ComponentDOM from './ComponentDOM';
import { Container, ButtonBasic, ButtonGreen, Form, Specs, Icon, Range } from '../style/styledComponents';
import { updateSection, removeSection } from '../actions';
import { sections } from '../config/defaultConfig';
import update from 'react-addons-update';
import AddComponent from '../containers/AddComponent';

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
  width : fit-content;
  
`;


const Children = styled.div`
  display : flex;
  flex-wrap : wrap;
`;

const AddChild = styled.div`
  display : flex;
  width : 100%;
 
`;



class Section extends Component {
  constructor (props) {
    super(props);

    this.state = {
      openSpec: false,
      openAdd: false,
      section: null,
      openSecureDelete: false
    };
  }

    componentDidMount = () => {
      this.setState({ section: this.props.section });
    }

    updateModel = model => {
      this.setState({
        section: update(this.state.section, {
          model: { $set: model },
        })
      });
    }

    updateName = name => {
      this.setState({
        section: update(this.state.section, {
          name: { $set: name },
        })
      });
    }

    isUpdated = () => (this.state.section && (this.state.section.name != this.props.section.name || this.state.section.model != this.props.section.model))

    render () {
      const { dispatch, section, index } = this.props;
      let inputName, selectModel;
      let children = (section.components && section.components.length != 0) ? section.components.map((component, i) =>
        <ComponentDOM key={i} component={component} index={i} indexParent={index}/>

      ) : null;

      return (
        <Container>
          <TopBar>
            <Description>
              <h3>{section.name} </h3>
              <h4>{section.model} </h4>
            </Description>
            <Actions>
              <Icon className={this.state.openAdd ? 'active' : ''} onClick={() => this.setState({ openAdd: !this.state.openAdd,  openSpec: false })}>
                <SvgAdd/>
              </Icon>
              <Icon className={this.state.openSpec ? 'active' : ''} onClick={() => this.setState({ openSpec: !this.state.openSpec,  openAdd: false  })}>
                <SvgSpecs/>
              </Icon>
              <Range>
                <Icon><SvgRange/></Icon>
                <Icon><SvgRange/></Icon>
              </Range>
              <Icon onClick={() => {
                dispatch(removeSection(index));
                this.setState({ openSecureDelete: !this.state.openSecureDelete });
              } }><SvgTrash/></Icon>
            </Actions>

          </TopBar>
          <Specs className={!this.state.openSpec ? 'hidden' : ''}>
            <Form onSubmit={e => {
              e.preventDefault();
              if (!this.isUpdated()) { return; }
              dispatch(updateSection(this.state.section, index));
            }}
            >
              <div>
                <label>Section Name</label>
                <input ref={node => (inputName = node)} type={'text'}
                  defaultValue={ section.name ? section.name : '' }
                  onChange={e => { this.updateName(e.target.value); }}/>
              </div>
              <div>
                <label>Model</label>
                <select ref={node => (selectModel = node)} defaultValue={section.model ? section.model : null}
                  onChange={e => { this.updateModel(e.target.value); }}>
                  { sections.map((model, i) => <option value={model.name} key={i}>{ model.name }</option>) }
                </select>
              </div>
              <div className={'buttons'}>
                <ButtonBasic
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      openSpec: !this.state.openSpec,
                      section: this.props.section
                    });
                    inputName.value = section.name;
                    selectModel.value = section.model;
                  }}
                >Cancel</ButtonBasic>
                <ButtonGreen
                  disabled={!this.isUpdated()}
                  className={ this.isUpdated() ? 'active' : ''}>Update</ButtonGreen>
              </div>
            </Form>
          </Specs>
          <AddChild>
                <AddComponent index={index} open={this.state.openAdd} parent={this}/>
          </AddChild>
          <Children>{ children }</Children>
        </Container>
      );
    }
};

export default connect()(Section);
