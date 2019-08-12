import React, {Component} from 'react';
import {connect} from 'react-redux';
import SvgContent from '../../components/svg/SvgContent';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgRange from '../../components/svg/SvgRange';
import SvgCheck from '../../components/svg/SvgCheck';
import SvgTrash from '../../components/svg/SvgTrash';
import SvgArrowDouble from '../../components/svg/SvgArrowDouble';
import BoxesContent from '../../components/BoxesContent/index';
import BoxesSettings from '../../components/BoxesSettings/index';
import FieldsList from '../../components/FieldsList';
import {getCountryISO} from '../../utils/functions';

import {
    Icon,
    Range,
    SafeDelete
} from '../../style/styledComponents';
import {
    ContainerComponent,
    FormComponent,
    Banner,
    ToogleLanguage,
    Description,
    Actions,
    Active,
    Content,
    Languages,
    Settings,
    Toggle,
    TopBar,
    FieldsContainer,
    Fields
} from './styled';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
import ButtonDelete from '../../components/ui/ButtonDelete';
import componentConfig from '../../config/components/*.js';

import {
    moveComponentToTop,
    moveComponentToDown,
    removeComponent,
    updateComponent,
    toggleComponentActive
    , getCurrentExtension, getCurrentLanguage, toggleLanguage
} from '../../actions/index';
import update from 'react-addons-update';
import PropTypes from 'prop-types';

class ComponentDOM extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.selectModel = React.createRef();

        this.state = {
            openBoxes: true,
            semiOpenBoxes: false,
            openSettings: false,
            openContent: false,
            component: null,
            openSafeDelete: false,
            config: {}
        };
    }

    componentDidMount() {}



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
    toggleActive = () => this.props.dispatch(toggleComponentActive(!this.props.component.active, this.props.index, this.props.indexParent));


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
        this.setState({openBoxes: !this.state.openBoxes}, () => {
            if (!this.state.openBoxes) {
                this.setState({semiOpenBoxes: true});
            }
        });
    }
    toggleBoxesSettings = () => {
        this.setState({openBoxesSettings: !this.state.openBoxesSettings}, () => {
            if (!this.state.openBoxesSettings) {
                this.setState({semiOpenBoxes: true});
            }
        });
    }

    toggleBoxesField = () => {
        this.setState({semiOpenBoxes: !this.state.semiOpenBoxes}, () => {
            if (!this.state.semiOpenBoxes) {
                this.setState({openBoxes: true});
            }
        });
    }

    isUpdated = () => {
        if(!this.inputName.current && !this.selectModel.current) return;
        if(this.inputName.current.value !== this.props.component.name ||
            this.selectModel.current.value !== this.props.component.model) return true
        return false

    }
    /*(this.inputName.current && (this.state.component.name !== this.props.component.name ||
        this.state.component.model !== this.props.component.model))
        //if(this.inputName.current && this.inputName.current.value !== this.props.component.name) return true

       /* (this.state.component && (this.state.component.name !== this.props.component.name ||
            this.state.component.model !== this.props.component.model))*/


    /* getSettingsComponent = () => {
         return componentConfig[this.props.component.model].default.settings;
     }

     getContentComponent = () => {
         return componentConfig[this.props.component.model].default.content;
     }*/

    getComponentFields = () => {
        return componentConfig[this.props.component.model].default.fields;
    }


    getComponentName = () => {
        if (!this.inputName.current) return
        return this.inputName.current.value;
    }
    getComponentModel = () => {
        if (!this.selectModel.current) return
        return this.selectModel.current.value;
    }

    render() {
        const {dispatch, component, index, indexParent, lengthParent} = this.props;
        let inputName, selectModel;

        if (!component) return null;

        return (
            <ContainerComponent>
                <TopBar>
                    <Description>
                        <Active
                            className={component.active ? 'active' : ''}
                            onClick={e => {
                                this.toggleActive();
                            }}>
                            <SvgCheck/>
                        </Active>
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
                            <SvgSetting/>
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
                        <ButtonBasic label={'Cancel'} action={this.toggleSafeSecure}/>
                        <ButtonDelete label={'Delete'} action={() => {
                            dispatch(removeComponent(index, indexParent));
                            this.setState({openSafeDelete: false});
                        }}/>
                    </div>
                </SafeDelete>
                <div className={!this.state.openSettings && !this.state.openContent ? 'hidden' : ''}>
                    <FormComponent onSubmit={e => {
                        e.preventDefault();
                        if (!this.isUpdated()) {
                            console.log('desactive !this.isUpdated :(')
                            return;
                        }
                        dispatch(updateComponent(this.getComponentName(), this.getComponentModel(), index, indexParent));
                    }}
                    >
                        <div>
                            <label>Component Name</label>
                            <input ref={this.inputName} type={'text'}
                                   defaultValue={component.name ? component.name : ''}
                                   onChange={e => {}}/>
                        </div>
                        <div>
                            <label>Model</label>
                            <select ref={this.selectModel}
                                    defaultValue={component.model ? component.model : null}
                                    onChange={e => {}}>
                                {
                                    Object.keys(componentConfig).map((key, i) => {
                                        return <option value={key} key={i}>{key}</option>;
                                    })
                                }

                            </select>
                        </div>
                        <div className={'buttons'}>
                            <ButtonBasic
                                label={'Cancel'}
                                disabled={!this.isUpdated()}
                                action={(e) => {
                                    e.preventDefault();
                                    inputName.value = component.name;
                                    selectModel.value = component.model;
                                }}/>
                            <ButtonValidate label={'Update'} type={'submit'} disabled={false/*!this.isUpdated()*/}/>
                        </div>
                    </FormComponent>
                </div>
                <FieldsContainer>
                    <Banner>
                        <p>Content & Specifications</p>
                        <Toggle>
                            <Icon className={!this.state.openBoxesSettings ? '' : 'rotate'}
                                  onClick={() => {
                                      console.log('Click on new Toggle Component Doms');
                                  }}><SvgArrowDouble/></Icon>
                        </Toggle>
                    </Banner>
                    <Fields>
                        <FieldsList fields={this.getComponentFields()} index={index} indexParent={indexParent}/>
                    </Fields>
                </FieldsContainer>




            </ContainerComponent>
        );
    }
};
/*<BoxesSettings open={this.state.openBoxesSettings} fields={this.getSettingsComponent()}
                                  index={index}
                                  indexParent={indexParent}/>*/
/*<BoxesContent open={this.state.openBoxes} fields={this.getContentComponent()} index={index}
                                  indexParent={indexParent}/>*/

/* <Settings className={!this.state.openSettings ? 'hidden' : ''}>

                    <Banner>
                        <p>settings</p>
                        <Toggle>
                            <Icon className={!this.state.openBoxesSettings ? '' : 'rotate'}
                                  onClick={() => {
                                      this.toggleBoxesSettings();
                                  }}><SvgArrowDouble/></Icon>
                        </Toggle>

                    </Banner>


                </Settings>
                <Content className={!this.state.openContent ? 'hidden' : ''}>
                    <Banner>
                        <p>content</p>
                        <Toggle>
                            <Languages>
                                {
                                    extensionInfo.extension.locales.available.map((language, i) => {
                                        return <ToogleLanguage
                                            key={i}
                                            className={currentLanguage.language === i ? 'active' : ''}
                                            onClick={e => {
                                                //this.setState({language: i});
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

                </Content> */

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
});
export default connect(mapStateToProps)(ComponentDOM);
