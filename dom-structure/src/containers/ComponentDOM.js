import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { extensionTheme } from '../style/theme';
import SvgContent from '../components/SvgContent';
import SvgSpecs from '../components/SvgSpecs';
import SvgRange from '../components/SvgRange';
import SvgTrash from '../components/SvgTrash';
import SvgArrowDouble from '../components/SvgArrowDouble';
import Boxes from './Boxes';
import { getCountryISO } from '../utils/functions';

import {
    Container,
    OptionsBlock,
    Form,
    ButtonGreen,
    ButtonBasic,
    ButtonDelete,
    Icon,
    Range,
    SafeDelete
} from '../style/styledComponents';
import { CheckBox } from '../style/styledComponentsBoxes';
import components from '../config/components';
import {
    moveComponentToTop,
    moveComponentToDown,
    removeComponent,
    updateComponent,
    toggleComponentActive
    , getCurrentExtension, getCurrentLanguage, toggleLanguage
} from '../actions/index';
import update from 'react-addons-update';
import PropTypes from 'prop-types';

const ContainerComponent = styled(Container)`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blueM }; 
  width : 100%;
  padding-right :0px;
  margin-top :0px;
  margin-left : 10px;
  background : ${ extensionTheme.white };
  border-radius : 0px 20px 20px 0px;
  overflow : hidden;
  
 
`;

const TopBar = styled.div`
  width : 100%;
  display : flex;
  justify-content: space-between;
`;

const Description = styled.div`
  display : flex;
  width : fit-content
  padding-left:10px;
`;
const Actions = styled.div`
  display : flex;
  width : fit-content;
  padding-right: 3px;
`;

const Languages = styled.div`
  display : flex;
  height : auto;
  align-items : center;
  width : fit-content;
  justify-content : space-between;
`;

const ToogleLanguage = styled.div`
  display : flex;
  border-width : 1px;
  border-style : solid;
  border-color :  ${ extensionTheme.white }; 
  color :  ${ extensionTheme.white }; 
  border-radius : 3px;
  padding : 3px;
  font-size : 11px;
  letter-spacing:1px;
  cursor : pointer;
  background : ${ extensionTheme.blueM }; 
  transition: background 0.6s ease, color 0.6s ease;
  margin 0 8px;
  
  &.active{
    color :  ${ extensionTheme.blueM }; 
    background : ${ extensionTheme.white }; 

  }
`;

const Banner = styled.div`
  display : flex;
  align-items : center;
  justify-content: space-between;
  width : 100%;
  background : ${ extensionTheme.blueM }; 
  color :  ${ extensionTheme.white }; 
  padding-right : 3px;
  
  & p{
    padding-left : 10px;
    text-transform : uppercase;
    font-weight : 300;
  }
  
  & ${ Icon }{
    height : 34px;
    & svg{
    width : 40px;
    height : 40px;
  }
    
    & svg g path, & svg  path, & svg rect {
        fill : ${ extensionTheme.white };   
    }
    
    &:hover{
        & svg g path, & svg  path {
            fill : ${ extensionTheme.grey10 };   
        }
    }
  }
`;

const FormComponent = styled(Form)`
  padding : 10px;
`;

export const Active = styled(CheckBox)`
    &.active{
        background:  ${ extensionTheme.blueM }; 
    }
`;

const Toggle = styled.div`
  display : flex;
`;

const Content = styled(OptionsBlock)`
 
  & ${Banner} ${Toggle} ${Icon}{
    &:hover{
         & svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
`;
const Settings = styled(OptionsBlock)`
  & ${Banner} ${Toggle} ${Icon}{
    &:hover{
         & svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
`;
class ComponentDOM extends Component {
    constructor (props) {
        super(props);

        this.state = {
            openBoxes: false,
            semiOpenBoxes: false,
            openSettings: false,
            openContent: false,
            openContentField: true,
            component: null,
            openSafeDelete: false,
            language: 0
        };
    }

    // content = require('../boxes/content/Title').default;

    componentDidMount = () => {
        this.setState({ component: this.props.component });
    }

    getLazyComponent = path => {
        return React.lazy(() => import(path));
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
    toggleActive = () => {
        this.setState({
            component: update(this.state.component, {
                active: { $set: !this.state.component.active },
            })
        }, () => {
            this.props.dispatch(toggleComponentActive(this.state.component.active, this.props.index, this.props.indexParent));
        });
    }
    toggleSafeSecure = () => this.setState({
        openSafeDelete: !this.state.openSafeDelete,
        openContent: false,
        openSettings: false
    })
    toggleOpenSettings = () => this.setState({
        openSettings: !this.state.openSettings,
        openContent: false,
        openSafeDelete: false
    })
    toggleOpenContent = () => this.setState({
        openContent: !this.state.openContent,
        openSettings: false,
        openSafeDelete: false
    })

    toggleBoxes = () => {
        this.setState({ openBoxes: !this.state.openBoxes }, () => {
            if (!this.state.openBoxes) {
                this.setState({ semiOpenBoxes: true });
            }
        });
    }
    toggleBoxesSettings = () => {
        this.setState({ openBoxesSettings: !this.state.openBoxesSettings }, () => {
            if (!this.state.openBoxesSettings) {
                this.setState({ semiOpenBoxes: true });
            }
        });
    }

    toggleBoxesField = () => {
        this.setState({ semiOpenBoxes: !this.state.semiOpenBoxes }, () => {
            if (!this.state.semiOpenBoxes) {
                this.setState({ openBoxes: true });
            }
        });
    }

    isUpdated = () => (this.state.component && (this.state.component.name !== this.props.component.name ||
        this.state.component.model !== this.props.component.model))

    getContentAvailable = () => components.find(c => c.name === this.props.component.model).content;
    getSettingsAvailable = () => components.find(c => c.name === this.props.component.model).settings;

    // TestC = React.lazy(() => import('../boxes/content/Title'));

    render () {
        const { dispatch, extensionInfo, currentLanguage, component, index, indexParent, lengthParent } = this.props;
        let inputName, selectModel;

        if (!this.state.component) return null;
        return (
            <ContainerComponent>
                <TopBar>
                    <Description>
                        <Active
                            className={this.state.component.active ? 'active' : ''}
                            onClick={e => {
                                this.toggleActive();
                            }}/>
                        <h3>{component.name} </h3>
                        <h4>{component.model} </h4>
                    </Description>
                    <Actions>
                        <Icon className={this.state.openContent ? 'active' : ''}
                            onClick={() => this.toggleOpenContent()}>
                            <SvgContent/>
                        </Icon>
                        <Icon className={this.state.openSettings ? 'active' : ''}
                            onClick={() => this.toggleOpenSettings()}>
                            <SvgSpecs/>
                        </Icon>
                        <Range>
                            <Icon className={index === 0 ? 'disable' : ''} onClick={() => {
                                if (index !== 0) {
                                    dispatch(moveComponentToTop(index, indexParent));
                                }
                            }}>
                                <SvgRange/>
                            </Icon>
                            <Icon className={index === (lengthParent - 1) ? 'disable' : ''} onClick={() => {
                                if (index !== (lengthParent - 1)) {
                                    dispatch(moveComponentToDown(index, indexParent));
                                }
                            }}>
                                <SvgRange/>
                            </Icon>

                        </Range>
                        <Icon className={'trash'} onClick={() => this.toggleSafeSecure()}><SvgTrash/></Icon>
                    </Actions>

                </TopBar>
                <SafeDelete className={!this.state.openSafeDelete ? 'hidden' : ''}>
                    <p>The deletion is final. Are you sure you want to delete this component?</p>
                    <div className={'buttons'}>
                        <ButtonBasic onClick={() => this.toggleSafeSecure()}>Cancel</ButtonBasic>
                        <ButtonDelete onClick={() => {
                            dispatch(removeComponent(index, indexParent));
                            this.setState({ openSafeDelete: false });
                        }}>
                            Delete
                        </ButtonDelete>
                    </div>
                </SafeDelete>
                <div className={!this.state.openSettings && !this.state.openContent ? 'hidden' : ''}>
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
                                className={this.isUpdated() ? '' : 'disable'}
                                onClick={e => {
                                    e.preventDefault();
                                    this.toggleOpenSettings();
                                    this.setState({ component: this.props.component });
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
                </div>
                <Settings className={!this.state.openSettings ? 'hidden' : ''}>

                    <Banner>
                        <p>settings</p>
                        <Toggle>
                            <Icon className={!this.state.openBoxesSettings ? '' : 'rotate'}
                                onClick={() => {
                                    this.toggleBoxesSettings();
                                }}><SvgArrowDouble/></Icon>
                        </Toggle>

                    </Banner>
                    <Boxes open={this.state.openBoxesSettings} fields={this.getSettingsAvailable()} index={index}
                        indexParent={indexParent}/>

                </Settings>
                <Content className={!this.state.openContent ? 'hidden' : ''}>
                    <Banner >
                        <p>content</p>
                        <Toggle>
                            <Languages>
                                {
                                    extensionInfo.extension.locales.available.map((language, i) => {
                                        return <ToogleLanguage
                                            className={currentLanguage.language === i ? 'active' : ''}
                                            onClick={e => {
                                                this.setState({ language: i });
                                                dispatch(toggleLanguage(i));
                                            }}>{getCountryISO(language)}</ToogleLanguage>;
                                    })
                                }
                            </Languages>
                            <Icon className={!this.state.openBoxes ? '' : 'rotate'}
                                onClick={() => {
                                    this.toggleBoxes();
                                }}><SvgArrowDouble/></Icon>
                        </Toggle>

                    </Banner>
                    <Boxes open={this.state.openBoxes} fields={this.getContentAvailable()} index={index}
                        indexParent={indexParent}/>
                </Content>

            </ContainerComponent>
        );
    }
};

ComponentDOM.propTypes = {
    component: PropTypes.shape({
        active: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number.isRequired,
    lengthParent: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state),
    currentLanguage: getCurrentLanguage(state)
});
export default connect(mapStateToProps)(ComponentDOM);
