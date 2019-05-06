import React, {Component} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { extensionTheme} from "../style/theme";
import SvgAdd from './SvgAdd';
import SvgSpecs from './SvgSpecs';
import SvgRange from './SvgRange';
import SvgTrash from './SvgTrash';
import ComponentDOM from './ComponentDOM';
import SelectSectionModel from './SelectSectionModel';
import { Container, ButtonBasic, ButtonGreen, Form} from "../style/styledComponents";
import {updateSection, removeSection, addSection} from "../actions";
import {sections} from "../config/defaultConfig";
import update from "react-addons-update";


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
const Icon = styled.div`
  width : 40px;
  height : 40px;

  &.active{
    & svg g path, & svg  path {
        fill : ${ extensionTheme.greenM };
    }
  }
`;
const Range = styled.div`
  display : flex;
  flex-direction : column;
  width : 40px;
  
  & ${Icon}{
    height : 20px;
    
    &:nth-child(2){
        transform:rotate(180deg);
    }
  }
`;

const Children = styled.div`
  display : flex;
`;

const Specs = styled.div`
  display : flex;
  width : 100%;
 
`;


class Section extends Component {
    constructor (props) {
        super(props);

        this.state = {
            openSpec: false,
            openAdd: false,
            section : null,
            openSecureDelete : false
        };

    }

    componentDidMount = () => {
        this.setState({ section: this.props.section });
        console.log('state section :', this.state );
    }
    updateModel = (model) => {

        return new Promise((resolve, reject) => {
            this.setState(
                {
                    section: update(this.state.section, {
                        model: { $set: model },
                    })
                }
            );
            resolve();
        }).then(() => {
            console.log('UPDATE: this.state.section', this.state.section);
            console.log('UPDATE: this.props.section', this.props.section);
        });

    }

    updateName = (name) => {
        this.setState(
            {
                section: update(this.state.section, {
                    name: { $set: name },
                })
            }
        );
    }

    isUpdated = () => (this.state.section && (this.state.section.name != this.props.section.name  || this.state.section.model != this.props.section.model))


    render (){
        const { dispatch, parent, section, index } = this.props;
        let inputName, selectModel;
        let children = (section.components && section.components.length != 0 ) ? section.components.map((component, i) =>
            <ComponentDOM key={i} component={component}/>

        ): null

        return (
            <Container>
                <TopBar>
                    <Description>
                        <h3>{section.name} </h3>
                        <h4>{section.model} </h4>
                    </Description>
                    <Actions>
                        <Icon className={this.state.openAdd ? 'active' : ''} onClick={() => this.setState({ openAdd: !this.state.openAdd })}>
                            <SvgAdd/>
                        </Icon>
                        <Icon className={this.state.openSpec ? 'active' : ''} onClick={() => this.setState({ openSpec: !this.state.openSpec })}>
                            <SvgSpecs/>
                        </Icon>
                        <Range>
                            <Icon><SvgRange/></Icon>
                            <Icon><SvgRange/></Icon>
                        </Range>
                        <Icon onClick={() => {
                            return new Promise((resolve, reject) => {
                                dispatch(removeSection(index))
                                this.setState({ openSecureDelete: !this.state.openSecureDelete });
                                resolve();
                            }).then(() => {
                                parent.setFieldValue();
                            });
                        } }><SvgTrash/></Icon>
                    </Actions>


                </TopBar>
                <Specs className={!this.state.openSpec ? 'hidden' : ''}>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        if (!this.isUpdated()) { return }
                        return new Promise((resolve, reject) => {
                            dispatch(updateSection(this.state.section, index))
                            resolve();
                        }).then(() => {
                            parent.setFieldValue();
                        });
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
                            onClick={(e) => {
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
                <Children>
                    {
                        children
                    }
                </Children>
            </Container>
        );
    }
};

export default connect()(Section);