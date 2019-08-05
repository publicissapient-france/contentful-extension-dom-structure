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
import {getCountryISO} from '../../utils/functions';

import {
    ButtonDelete,
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
    TopBar
} from './styled';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonValidate from '../../components/ui/ButtonValidate';
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

        this.state = {
            openBoxes: true,
            semiOpenBoxes: false,
            openSettings: false,
            openContent: false,
            openContentField: true,
            component: null,
            openSafeDelete: false,
            language: 0,
            config: {}
        };
    }

    componentDidMount = async () => {
        this.setState({component: this.props.component}, async () => {
        });
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
    toggleActive = () => {
        this.setState({
            component: update(this.state.component, {
                active: {$set: !this.state.component.active},
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

    isUpdated = () => (this.state.component && (this.state.component.name !== this.props.component.name ||
        this.state.component.model !== this.props.component.model))

    getSettingsComponent = () => {
        return componentConfig[this.props.component.model].default.settings;
    }

    getContentComponent = () => {
        return componentConfig[this.props.component.model].default.content;
    }


    render() {
        const {dispatch, extensionInfo, currentLanguage, component, index, indexParent, lengthParent} = this.props;
        let inputName, selectModel;

        if (!this.state.component || !extensionInfo.extension.locales) return null;

        this.getSettingsComponent()
        return (
            <ContainerComponent>
                <TopBar>
                    <Description>
                        <Active
                            className={this.state.component.active ? 'active' : ''}
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
                        <ButtonDelete onClick={() => {
                            dispatch(removeComponent(index, indexParent));
                            this.setState({openSafeDelete: false});
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
                                    this.setState({component: this.props.component});
                                    inputName.value = component.name;
                                    selectModel.value = component.model;
                                }}/>
                            <ButtonValidate label={'Update'} type={'submit'} disabled={!this.isUpdated()}/>
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
                    <BoxesSettings open={this.state.openBoxesSettings} fields={this.getSettingsComponent()}
                                   index={index}
                                   indexParent={indexParent}/>

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
                                                this.setState({language: i});
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
                    <BoxesContent open={this.state.openBoxes} fields={this.getContentComponent()} index={index}
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
