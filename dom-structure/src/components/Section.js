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
import {addSection, removeSection} from "../actions";


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
  
  &>div{
    display : flex;
    flex-direction : column;
    padding : 0 5px;
  }
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

    isUpdated = () => (this.state.section != this.props.section)


    render (){
        const { dispatch, parent, section, index } = this.props;
        console.log('section on props',section);

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
                        <Icon className={this.state.openAdd ? 'active' : ''}
                              onClick={() => this.setState({ openAdd: !this.state.openAdd })}>
                            <SvgAdd/>
                        </Icon>
                        <Icon className={this.state.openSpec ? 'active' : ''}
                              onClick={() => this.setState({ openSpec: !this.state.openSpec })}>
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
                    }}
                    >
                    <div>
                        <label>Section Name</label>
                        <input type={'text'} defaultValue={ section.name ? section.name : '' }/>
                    </div>
                    <div>
                        <label>Model</label>
                        <SelectSectionModel parent={this} section={section}/>
                    </div>
                    <div className={'buttons'}>
                        <ButtonBasic>Cancel</ButtonBasic>
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