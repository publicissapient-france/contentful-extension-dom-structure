import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {extensionTheme} from '../style/theme';
import SvgContent from '../components/SvgContent';
import SvgSpecs from '../components/SvgSpecs';
import SvgRange from '../components/SvgRange';
import SvgTrash from '../components/SvgTrash';
import Boxes from './Boxes';
import {
    Container,
    Settings,
    Form,
    ButtonGreen,
    ButtonBasic,
    ButtonDelete,
    Icon,
    Range,
    SafeDelete
} from '../style/styledComponents';
import {CheckBox} from '../style/styledComponentsBoxes';
import components from '../config/components';
import {moveComponentToTop, moveComponentToDown, removeComponent, updateComponent} from '../actions/index';
import update from 'react-addons-update';
import {updateContentTitle, toogleComponentActive, removeSection} from "../actions";

// const TC = React.lazy(() => import('../boxes/content/Title'));

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
  padding : 8px 0px;
  
  & p{
    padding-left : 10px;
  }
  
`;

const FormComponent = styled(Form)`
  padding : 10px;
`;

export const Active = styled(CheckBox)`
    margin-left : 5px;
    &.active{
        background:  ${ extensionTheme.blueM }; 
    }
`;

class ComponentDOM extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openSettings: false,
            openContent: true,
            openContentField: true,
            component: null,
            openSafeDelete: false,
        };
    }

    // content = require('../boxes/content/Title').default;

    componentDidMount = () => {
        this.setState({component: this.props.component});
    }

    getLazyComponent = path => {
        return React.lazy(() => import(path));
    }

    updateModel = model => {
        this.setState({
            component: update(this.state.component, {
                model: {$set: model},
            })
        });
    }

    updateName = name => {
        this.setState({
            component: update(this.state.component, {
                name: {$set: name},
            })
        });
    }
    toogleActive = () => {
        this.setState({
            component: update(this.state.component, {
                active: {$set: !this.state.component.active},
            })
        });
    }
    toogleSafeSecure = () => this.setState({
        openSafeDelete: !this.state.openSafeDelete,
        openContent: false,
        openSettings: false
    })
    toogleOpenSettings = () => this.setState({
        openSettings: !this.state.openSettings,
        openContent: false,
        openSafeDelete: false
    })
    toogleOpenContent = () => this.setState({
        openContent: !this.state.openContent,
        openSettings: false,
        openSafeDelete: false
    })


    isUpdated = () => (this.state.component && (this.state.component.name != this.props.component.name ||
        this.state.component.model != this.props.component.model))

    getContentAvailable = () => components.find(c => c.name == this.props.component.model).content;

    // TestC = React.lazy(() => import('../boxes/content/Title'));

    render() {
        const {dispatch, component, index, indexParent, lengthParent} = this.props;
        let inputName, selectModel;
        if (!this.state.component) return null
        return (
            <ContainerComponent>
                <TopBar>
                    <Description>
                        <Active
                            className={this.state.component.active ? 'active' : ''}
                            onClick={e => {
                                return new Promise((resolve, reject) => {
                                    this.toogleActive();
                                    resolve();
                                }).then(() => {
                                    dispatch(toogleComponentActive(this.state.component.active, index, indexParent));
                                });
                            }}/>
                        <h3>{component.name} </h3>
                        <h4>{component.model} </h4>
                    </Description>
                    <Actions>
                        <Icon className={this.state.openContent ? 'active' : ''} onClick={() => this.toogleOpenContent()}>
                            <SvgContent/>
                        </Icon>
                        <Icon className={this.state.openSettings ? 'active' : ''} onClick={() => this.toogleOpenSettings()}>
                            <SvgSpecs/>
                        </Icon>
                        <Range>
                            <Icon className={index == 0 ? 'disable' : ''} onClick={() => {
                                if (index != 0) {
                                    dispatch(moveComponentToTop(index, indexParent));
                                }
                            }}>
                                <SvgRange/>
                            </Icon>
                            <Icon className={index == (lengthParent - 1) ? 'disable' : ''} onClick={() => {
                                if (index != (lengthParent - 1)) {
                                    dispatch(moveComponentToDown(index, indexParent));
                                }
                            }}>
                                <SvgRange/>
                            </Icon>
                        </Range>
                        <Icon className={'trash'} onClick={() => this.toogleSafeSecure()}><SvgTrash/></Icon>
                    </Actions>

                </TopBar>
                <SafeDelete className={!this.state.openSafeDelete ? 'hidden' : ''}>
                    <p>The deletion is final. Are you sure you want to delete this component?</p>
                    <div className={'buttons'}>
                        <ButtonBasic onClick={() => this.toogleSafeSecure()}>Cancel</ButtonBasic>
                        <ButtonDelete onClick={() => {
                            dispatch(removeComponent(index, indexParent));
                            this.setState({openSafeDelete: false});
                        }}>
                            Delete
                        </ButtonDelete>
                    </div>
                </SafeDelete>
                <Settings className={!this.state.openSettings ? 'hidden' : ''}>
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
                                {components.map((model, i) => <option value={model.name} key={i}>{model.name}</option>)}
                            </select>
                        </div>
                        <div className={'buttons'}>
                            <ButtonBasic
                                onClick={e => {
                                    e.preventDefault();
                                    this.toogleOpenSettings();
                                    this.setState({component: this.props.component});
                                    inputName.value = component.name;
                                    selectModel.value = component.model;
                                }}>
                                Cancel
                            </ButtonBasic>
                            <ButtonGreen
                                disabled={!this.isUpdated()}
                                className={this.isUpdated() ? 'active' : ''}>Update</ButtonGreen>
                        </div>
                    </FormComponent>
                </Settings>
                <Content className={!this.state.openContent ? 'hidden' : ''}>
                    <Banner><p>Content</p></Banner>
                    <Boxes fields={this.getContentAvailable()} index={index} indexParent={indexParent}/>
                </Content>

            </ContainerComponent>
        );
    }
};

export default connect()(ComponentDOM);
