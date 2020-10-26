import React, {Component} from 'react';
import {connect} from 'react-redux';
import SvgAddElement from '../../components/svg/SvgAddElement';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgSpec from '../../components/svg/SvgSpec';
import SvgRange from '../../components/svg/SvgRange';
import SvgCheck from '../../components/svg/SvgCheck';
import SvgTrash from '../../components/svg/SvgTrash';
import SvgHorizontalThreeDots from '../../components/svg/SvgHorizontalThreeDots';
import SvgDuplicateSection from '../../components/svg/SvgDuplicateSection';
import SvgCopyAllComponents from '../../components/svg/SvgCopyAllComponents';
import SvgCopySection from '../../components/svg/SvgCopySection';
import SvgPastAllComponents from '../../components/svg/SvgPastAllComponents';
import SvgPastSection from '../../components/svg/SvgPastSection';
import isEqual from 'lodash/isEqual';
import ComponentDOM from '../ComponentDOM/index';

import {
    Icon,
    Range,
    SafeDelete,
} from '../../style/styledComponents';
import {
    ContainerSection,
    Settings,
    TopBar,
    Active,
    Description,
    FormSection,
    AddChild,
    Children,
    Fields,
    FieldsContainer, PanelActions, Actions, ChoiceOptions, Buttons
} from './styled';
import {
    updateSection,
    removeSection,
    moveSectionToTop,
    moveSectionToDown,
    toggleSectionActive, duplicateSection, getCurrentExtension, getVisibility
} from '../../actions/index';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonDelete from '../../components/ui/ButtonDelete';
import update from 'react-addons-update';
import AddComponent from '../AddComponent/index';
import ButtonValidate from '../../components/ui/ButtonValidate';
import PropTypes from 'prop-types';
import FieldsListOfSection from "../../components/FieldsListOfSection";
import sectionConfig from '../../config/sections/*.js';
import {getAccessLocalStorageAvailable, getVersionStorage, incrementVersionStorage} from "../../actions";

const ALERT = {
    ERROR_COPY_SECTION: "ERREUR : Impossible de copier la section. Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé.",
    ERROR_COPY_COMPONENTS: "ERREUR : Impossible de copier les composants. Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé.",
    ERROR_MEMORY_SECTION: "ERREUR : Pas de section en mémoire. \n Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé. ",
    ERROR_MEMORY_COMPONENTS: "ERREUR : Pas de composants en mémoire. \n Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé. ",
    SUCCESS_PAST_SECTION: "Section importée. Appuyer sur UPDATE pour enregistrer.",
    SUCCESS_PAST_COMPONENTS: "Composants importés. Appuyer sur UPDATE pour enregistrer.",
    SUCCESS_COPY_SECTION: "Section copiée.",
    SUCCESS_COPY_COMPONENTS: "Composants copiés.",
    SUCCESS_DUPLICATION: "Section dupliquée."
}

class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openSettings: false,
            openAdd: false,
            openSafeDelete: false,
            openOption: false,
            section: null,
            triggerOpening: false,
            openOptionsPast: false,
            openOptionsReplace: false,
            sectionOnLocalStorage: false,
            componentsOnLocalStorage: false

        };
    }

    componentDidMount = () => {
        this.setState({section: this.props.section});
        this.checkLocalStorage();
    }

    componentDidUpdate(prevProps) {
        if (this.props.section !== prevProps.section) {
            this.setState({section: this.props.section});
        }
        if (this.props.versionStorage !== prevProps.versionStorage) {
            this.checkLocalStorage();
        }
    }

    checkLocalStorage = () => {
        try {
            if (localStorage && localStorage.getItem('copiedSection')) {
                this.setState({sectionOnLocalStorage: true});
            }
            if (localStorage && localStorage.getItem('copiedComponents')) {
                this.setState({componentsOnLocalStorage: true});
            }
        } catch (e) {
            console.log('private navigation');
        }
    }

    updateModel = model => {
        this.setState({
            section: update(this.state.section, {
                model: {$set: model},
            })
        });
    }

    updateName = name => {
        this.setState({
            section: update(this.state.section, {
                name: {$set: name},
            })
        });
    }

    toggleActive = () => {
        this.setState({
            section: update(this.state.section, {
                active: {$set: !this.state.section.active},
            })
        }, () => {
            this.props.dispatch(toggleSectionActive(this.state.section.active, this.props.index));
        });
    }
    toggleSafeSecure = () => this.setState({
        openSafeDelete: !this.state.openSafeDelete,
        openAdd: false,
        openSettings: false,
        openOptionsReplace: false,
        openOptionsAdd: false

    }, () => console.log(this.state));

    toggleOpenAdd = () => this.setState({openAdd: !this.state.openAdd, openSettings: false, openSafeDelete: false})
    toggleOptions = () => this.setState({
        openOption: !this.state.openOption,
        openAdd: false,
        openSafeDelete: false
    })
    toggleOpenSettings = () => this.setState({
        openSettings: !this.state.openSettings,
        openAdd: false,
        openSafeDelete: false
    }, () => {
        if (!this.state.openSettings) {
            this.setState({
                triggerOpening: false
            })
        }
    })
    toggleOpenOptionsPast = () => this.setState({
        openOptionsPast: !this.state.openOptionsPast,
        openOptionsReplace: false,
        openSettings: false,
        openSafeDelete: false,
        openAdd: false
    })
    toggleOpenOptionsReplace = () => this.setState({
        openOptionsReplace: !this.state.openOptionsReplace,
        openOptionsPast: false,
        openSettings: false,
        openSafeDelete: false,
        openAdd: false
    })

    triggerOpening = () => this.setState(prevState => ({
        triggerOpening: !prevState.triggerOpening
    }))

    isUpdated = () => (this.state.section && !isEqual(this.state.section, this.props.section))

    getSectionFields = () => {
        return sectionConfig[this.props.section.model].default.fields;
    }

    notifierError = (msg) => this.props.extensionInfo.extension.notifier.error(msg);
    notifierSuccess = (msg) => this.props.extensionInfo.extension.notifier.success(msg);

    copySectionToLocalStorage = () => {
        localStorage.setItem("copiedSection", JSON.stringify(this.state.section));
        if (localStorage.getItem('copiedSection') && localStorage.getItem('copiedSection') === JSON.stringify(this.state.section)) {
            this.props.dispatch(incrementVersionStorage());
            this.notifierSuccess(ALERT.SUCCESS_COPY_SECTION);
            this.setState({sectionOnLocalStorage: true});
        } else {
            this.notifierError(ALERT.ERROR_COPY_SECTION);
        }
    }

    pastSection = (withComponents = false) => {
        const sectionToPast = JSON.parse(localStorage.getItem('copiedSection'));
        if (!sectionToPast) {
            this.notifierError(ALERT.ERROR_MEMORY_SECTION);
        } else {
            if (withComponents) {
                this.setState(prevState => ({
                    openSettings: true,
                    section: update(prevState.section, {
                        name: {$set: sectionToPast.name},
                        model: {$set: sectionToPast.model},
                        fields: {$set: sectionToPast.fields},
                        components: {$set: [...prevState.section.components, ...sectionToPast.components]}
                    })
                }), () => {
                    this.notifierSuccess(ALERT.SUCCESS_PAST_SECTION);
                    this.setState({openOptionsPast: false, openOption: false});
                })
            } else {
                this.setState(prevState => ({
                    openSettings: true,
                    section: update(prevState.section, {
                        name: {$set: sectionToPast.name},
                        model: {$set: sectionToPast.model},
                        fields: {$set: sectionToPast.fields},
                    })
                }), () => {
                    this.notifierSuccess(ALERT.SUCCESS_PAST_SECTION);
                    this.setState({openOptionsPast: false, openOption: false});
                })
            }
        }
    }

    pastComponents = (replaceComponents = false) => {
        const elementsToPast = JSON.parse(localStorage.getItem('copiedComponents'));
        if (!elementsToPast) {
            this.notifierError(ALERT.ERROR_MEMORY_SECTION);
        } else {
            if (replaceComponents) {
                this.setState(prevState => ({
                    openSettings: true,
                    section: update(prevState.section, {
                        components: {$set: elementsToPast}
                    })
                }), () => {
                    this.notifierSuccess(ALERT.SUCCESS_PAST_COMPONENTS);
                    this.setState({openOptionsReplace: false, openOption: false});
                })
            } else {
                this.setState(prevState => ({
                    openSettings: true,
                    section: update(prevState.section, {
                        components: {$set: [...prevState.section.components, ...elementsToPast]}
                    })
                }), () => {
                    this.notifierSuccess(ALERT.SUCCESS_PAST_SECTION);
                    this.setState({openOptionsReplace: false, openOption: false});
                })
            }
        }
    }

    copyComponentsToLocalStorage = () => {
        console.log(this.state.section);
        localStorage.setItem("copiedComponents", JSON.stringify(this.state.section.components));
        if (localStorage.getItem('copiedComponents') && localStorage.getItem('copiedComponents') === JSON.stringify(this.state.section.components)) {
            this.props.dispatch(incrementVersionStorage());
            this.notifierSuccess(ALERT.SUCCESS_COPY_COMPONENTS);
        } else {
            this.notifierError(ALERT.ERROR_COPY_COMPONENTS)
        }
    }

    render() {
        const {dispatch, domLength, section, index} = this.props;
        let inputName, selectModel;
        let children = (section.components && section.components.length !== 0) ? section.components.map((component, i) =>
            <ComponentDOM key={i} component={component} index={i} indexParent={index}
                          lengthParent={section.components.length}/>
        ) : null;
        if (!this.state.section) return null;
        return (
            <ContainerSection>
                <TopBar
                    borderBottom={this.state.openSettings || this.state.openOptionsPast || this.state.openOptionsReplace || this.state.openSafeDelete}>
                    <Description>
                        <Active
                            className={this.state.section.active ? 'active' : ''}
                            onClick={() => {
                                this.toggleActive();
                            }}>
                            <SvgCheck/>
                        </Active>
                        <h3>{section.name} {this.props.versionStorage} </h3>
                        <h4>{section.model} </h4>
                    </Description>
                    <Actions>
                        <PanelActions className={this.state.openOption ? 'hidden' : ''}>
                            <Icon title={"add component"} className={this.state.openAdd ? 'active' : ''}
                                  onClick={() => this.toggleOpenAdd()}>
                                <SvgAddElement/>
                            </Icon>
                        </PanelActions>
                        <PanelActions className={this.state.openOption ? 'hidden' : ''}>
                            <Icon title={"presets"}
                                  className={this.state.openSettings && !this.state.triggerOpening ? 'active' : ''}
                                  onClick={() => this.toggleOpenSettings()}>
                                <SvgSetting/>
                            </Icon>
                        </PanelActions>
                        <PanelActions className={'options'}
                                      onMouseLeave={() => {
                                          if (!this.state.openOptionsReplace && !this.state.openOptionsPast && !this.state.openSafeDelete) {
                                              this.setState({openOption: false});
                                          }
                                      }}>
                            <div className={[!this.state.openOption ? 'hidden' : '']}>
                                <Icon title={"delete"} className={['trash', this.state.openSafeDelete ? 'active' : '']}
                                      onClick={() => this.toggleSafeSecure()}><SvgTrash/></Icon>
                            </div>
                            <div className={[!this.state.openOption ? 'hidden' : '']}>
                                <Icon title={"past components"}
                                      className={[!this.state.componentsOnLocalStorage ? 'disabled' : '', this.state.openOptionsReplace ? 'active' : '']}
                                      onClick={() => {
                                          if (this.state.componentsOnLocalStorage) {
                                              this.toggleOpenOptionsReplace();
                                          }
                                      }}>
                                    <SvgPastAllComponents/>
                                </Icon>
                                <Icon title={"copy components"}
                                      className={[this.state.section.components.length === 0 || !this.props.accessLocalStorage ? 'disabled' : '']}
                                      onClick={() => {
                                          if (this.state.section.components.length !== 0 && this.props.accessLocalStorage) {
                                              this.copyComponentsToLocalStorage();
                                              this.setState({componentsOnLocalStorage: true});
                                          }
                                      }}>
                                    <SvgCopyAllComponents/>
                                </Icon>
                            </div>
                            <div className={[!this.state.openOption ? 'hidden' : '']}>
                                <Icon title={"past section"}
                                      className={[!this.state.sectionOnLocalStorage || !this.props.accessLocalStorage ? 'disabled' : '', this.state.openOptionsPast ? 'active' : '']}
                                      onClick={() => {
                                          if (this.state.sectionOnLocalStorage && this.props.accessLocalStorage) {
                                              this.toggleOpenOptionsPast();
                                          }
                                      }}><SvgPastSection/></Icon>
                                <Icon title={"copy section"}
                                      className={!this.props.accessLocalStorage ? 'disabled' : ''} onClick={() => {
                                    if (this.props.accessLocalStorage) {
                                        this.copySectionToLocalStorage();
                                    }
                                }}><SvgCopySection/></Icon>
                            </div>
                            <div className={[!this.state.openOption ? 'hidden' : '']}>
                                <Icon title={"duplicate section"} className={''} onClick={() => {
                                    dispatch(duplicateSection(index));
                                    this.notifierSuccess(ALERT.SUCCESS_DUPLICATION);
                                }}>
                                    <SvgDuplicateSection/>
                                </Icon>
                            </div>
                            <Icon title={"options"} className={['btn-options', this.state.openOption ? 'active' : '']}
                                  onClick={() => this.toggleOptions()}>
                                <SvgHorizontalThreeDots/>
                            </Icon>
                        </PanelActions>
                        <PanelActions>
                            <Icon title={"open  / close fields"} className={this.state.triggerOpening ? 'active' : ''}
                                  onClick={() => {
                                      this.triggerOpening();
                                      if (!this.state.openSettings) {
                                          this.toggleOpenSettings();
                                      }
                                  }}>
                                <SvgSpec/>
                            </Icon>
                            <Range title={"range"}>
                                <Icon className={index === 0 ? 'disable' : ''} onClick={() => {
                                    if (index !== 0) dispatch(moveSectionToTop(index));
                                }}>
                                    <SvgRange/>
                                </Icon>
                                <Icon className={index === (domLength - 1) ? 'disable' : ''} onClick={() => {
                                    if (index !== (domLength - 1)) dispatch(moveSectionToDown(index));
                                }}>
                                    <SvgRange/>
                                </Icon>
                            </Range>
                        </PanelActions>
                    </Actions>
                </TopBar>
                <SafeDelete className={!this.state.openSafeDelete ? 'hidden' : ''}>
                    <p>The deletion is final. Are you sure you want to delete this section?</p>
                    <div className={'buttons'}>
                        <ButtonBasic label={'Cancel'} action={() => {
                            this.toggleSafeSecure();
                            this.setState({openOption: false});
                        }}/>
                        <ButtonDelete label={'Delete'} action={() => {
                            dispatch(removeSection(index));
                            this.setState({openSafeDelete: false, openOption: false});
                        }}/>
                    </div>
                </SafeDelete>
                <ChoiceOptions className={!this.state.openOptionsPast ? 'hidden' : ''}>
                    <p>What do you want to import ? </p>
                    <div className={'buttons'}>
                        <ButtonValidate label={'Section presets'} action={() => this.pastSection()}/>
                        <ButtonValidate label={'Section presets and Components'} action={() => this.pastSection(true)}/>
                        <ButtonBasic label={'Cancel'} action={() => {
                            this.toggleOpenOptionsPast();
                            this.setState({openOption: false});
                        }}/>
                    </div>
                </ChoiceOptions>
                <ChoiceOptions className={!this.state.openOptionsReplace ? 'hidden' : ''}>
                    <p>What do you want to import ? </p>
                    <div className={'buttons'}>
                        <ButtonValidate label={'Replace'} action={() => this.pastComponents(true)}/>
                        <ButtonValidate label={'Add'} action={() => this.pastComponents()}/>
                        <ButtonBasic label={'Cancel'} action={() => {
                            this.toggleOpenOptionsReplace();
                            this.setState({openOption: false});
                        }}/>
                    </div>
                </ChoiceOptions>
                <Settings className={!this.state.openSettings ? 'hidden' : ''}>
                    <FormSection onSubmit={e => {
                        e.preventDefault();
                        if (!this.isUpdated()) return;
                        dispatch(updateSection(this.state.section, index));
                    }}
                    >
                        <div>
                            <label>Model</label>
                            <select ref={node => (selectModel = node)}
                                    value={this.state.section.model || null}
                                    onChange={e => {
                                        this.updateModel(e.target.value);
                                    }}>
                                {
                                    Object.keys(sectionConfig).map((key, i) => {
                                        return <option value={key} key={i}>{key}</option>;
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label>Section Name</label>
                            <input ref={node => (inputName = node)} type={'text'}
                                   value={this.state.section.name || ''}
                                   onChange={e => this.updateName(e.target.value)}/>
                        </div>
                        <Buttons className={['buttons', this.isUpdated() ? '' : 'hidden']}>
                            <ButtonBasic
                                label={'Cancel'}
                                disabled={!this.isUpdated()}
                                action={e => {
                                    e.preventDefault();
                                    this.toggleOpenSettings();
                                    this.setState({section: this.props.section});
                                    inputName.value = section.name;
                                    selectModel.value = section.model;
                                }}/>
                            <ButtonValidate label={'Update'} disabled={!this.isUpdated()}/>
                        </Buttons>
                    </FormSection>
                </Settings>
                <AddChild>
                    <AddComponent index={index} open={this.state.openAdd} parent={this}/>
                </AddChild>

                <FieldsContainer className={!this.state.openSettings ? 'hidden' : ''}>
                    <Fields>
                        <FieldsListOfSection triggerOpening={this.state.triggerOpening} fields={this.getSectionFields()}
                                             index={index}/>
                    </Fields>
                </FieldsContainer>
                <Children>{children}</Children>
            </ContainerSection>
        );
    }
};

Section.propTypes = {
    section: PropTypes.shape({
        active: PropTypes.bool,
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
    domLength: PropTypes.number
};


const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state),
    accessLocalStorage: getAccessLocalStorageAvailable(state).accessLocalStorage,
    versionStorage: getVersionStorage(state).versionStorage,
});

export default connect(mapStateToProps)(Section);
