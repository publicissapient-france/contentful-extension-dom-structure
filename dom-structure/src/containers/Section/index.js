import React, {Component} from 'react';
import {connect} from 'react-redux';
import update from 'react-addons-update';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import sectionConfig from '../../config/sections/*.js';

import {SafeDelete,} from '../../style/styledComponents';
import {
    ContainerSection,
    Settings,
    TopBar,
    Active,
    Description,
    FormSection,
    Children,
    Fields,
    FieldsContainer,ChoiceOptions, Buttons
} from './styled';
import {updateSection, removeSection, toggleSectionActive, getCurrentExtension, getAccessLocalStorageAvailable, getVersionStorage} from '../../actions/index';
import {notifierError, notifierSuccess, ALERT} from "../../utils/Notifier";

import ComponentDOM from '../ComponentDOM/index';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonDelete from '../../components/ui/ButtonDelete';
import AddComponent from '../AddComponent/index';
import ButtonValidate from '../../components/ui/ButtonValidate';
import FieldsListOfSection from "../../components/FieldsListOfSection";
import ActionsBarSection from './ActionsBarSection';
import SvgCheck from '../../components/svg/SvgCheck';


class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: '',
            openOption: false,
            section: null,
            triggerOpening: false,
            sectionOnLocalStorage: false,
            componentsOnLocalStorage: false
        };
    }

    componentDidMount = () => {
        this.setState({section: this.props.section});
        this.checkLocalStorage();
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(this.props.section,prevProps.section)) {
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

    toggleOptions = () => this.setState({
        openOption: !this.state.openOption,
        currentView: ''
    })

    triggerOpening = () => this.setState(prevState => ({
        triggerOpening: !prevState.triggerOpening
    }))

    isUpdated = () => (this.state.section && !isEqual(this.state.section, this.props.section) || (this.state.section && !isEqual(this.state.section.components, this.props.section.components)))

    getSectionFields = () => {
        return sectionConfig[this.props.section.model].default.fields;
    }

    pastSection = (withComponents = false) => {
        const sectionToPast = JSON.parse(localStorage.getItem('copiedSection'));
        if (!sectionToPast) {
            notifierError(this.props.extensionInfo.extension, ALERT.ERROR_MEMORY_SECTION);
        } else {
            if (withComponents) {
                this.setState(prevState => ({
                    currentView: 'presets',
                    section: update(prevState.section, {
                        name: {$set: sectionToPast.name},
                        model: {$set: sectionToPast.model},
                        fields: {$set: sectionToPast.fields},
                        components: {$set: [...prevState.section.components, ...sectionToPast.components]}
                    })
                }), () => {
                    notifierSuccess(this.props.extensionInfo.extension, ALERT.SUCCESS_PAST_SECTION);
                    this.closeOption();
                })
            } else {
                this.setState(prevState => ({
                    currentView: 'presets',
                    section: update(prevState.section, {
                        name: {$set: sectionToPast.name},
                        model: {$set: sectionToPast.model},
                        fields: {$set: sectionToPast.fields},
                    })
                }), () => {
                    notifierSuccess(this.props.extensionInfo.extension, ALERT.SUCCESS_PAST_SECTION);
                    this.closeOption();
                })
            }
        }
    }

    pastComponents = (replaceComponents = false) => {
        const elementsToPast = JSON.parse(localStorage.getItem('copiedComponents'));
        if (!elementsToPast) {
            notifierError(this.props.extensionInfo.extension, ALERT.ERROR_MEMORY_SECTION);
        } else {
            if (replaceComponents) {
                this.setState(prevState => ({
                    currentView: 'presets',
                    section: update(prevState.section, {
                        components: {$set: elementsToPast}
                    })
                }), () => {
                    notifierSuccess(this.props.extensionInfo.extension, ALERT.SUCCESS_PAST_COMPONENTS);
                    this.closeOption();
                })
            } else {
                this.setState(prevState => ({
                    currentView: 'presets',
                    section: update(prevState.section, {
                        components: {$set: [...prevState.section.components, ...elementsToPast]}
                    })
                }), () => {
                    notifierSuccess(this.props.extensionInfo.extension, ALERT.SUCCESS_PAST_SECTION);
                    this.closeOption();

                })
            }
        }
    }

    updateView = (view) => this.setState(prevState => ({currentView: prevState.currentView === view ? '' : view}));

    closeOption = () => this.setState({openOption: false});

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
                    borderBottom={this.state.currentView === 'presets' ||
                    this.state.currentView === 'formPastComponents' ||
                    this.state.currentView === 'formPastSection' ||
                    this.state.currentView === 'formDelete'}>
                    <Description>
                        <Active
                            className={this.state.section.active ? 'active' : ''}
                            onClick={() => {
                                this.toggleActive();
                            }}>
                            <SvgCheck/>
                        </Active>
                        <h3>{section.name}</h3>
                        <h4>{section.model} </h4>
                    </Description>
                    <ActionsBarSection currentView={this.state.currentView}
                                       openOption={this.state.openOption}
                                       triggerOpening={this.state.triggerOpening}
                                       toggleTrigger={this.triggerOpening}
                                       updateView={this.updateView}
                                       closeOption={this.closeOption}
                                       toggleOptions={this.toggleOptions}
                                       nbrComponentsOfSection={this.state.section.components.length}
                                       section={this.state.section}
                                       index={index}
                                       domLength={domLength}
                    />
                </TopBar>
                {
                    this.state.currentView === 'formDelete' &&
                    <SafeDelete>
                        <p>The deletion is final. Are you sure you want to delete this section?</p>
                        <div className={'buttons'}>
                            <ButtonBasic label={'Cancel'} action={() => {
                                this.updateView('');
                                this.closeOption();
                            }}/>
                            <ButtonDelete label={'Delete'} action={() => {
                                dispatch(removeSection(index));
                                this.updateView('');
                                this.closeOption();
                            }}/>
                        </div>
                    </SafeDelete>
                }
                {
                    this.state.currentView === 'formPastSection' &&
                    <ChoiceOptions>
                        <p>What do you want to import ? </p>
                        <div className={'buttons'}>
                            <ButtonValidate label={'Section presets'} action={() => this.pastSection()}/>
                            <ButtonValidate label={'Section presets and Components'}
                                            action={() => this.pastSection(true)}/>
                            <ButtonBasic label={'Cancel'} action={() => {
                                this.updateView('');
                                this.closeOption();
                            }}/>
                        </div>
                    </ChoiceOptions>
                }
                {
                    this.state.currentView === 'formPastComponents' &&
                    <ChoiceOptions>
                        <p>What do you want to import ? </p>
                        <div className={'buttons'}>
                            <ButtonValidate label={'Replace'} action={() => this.pastComponents(true)}/>
                            <ButtonValidate label={'Add'} action={() => this.pastComponents()}/>
                            <ButtonBasic label={'Cancel'} action={() => {
                                this.updateView('');
                                this.closeOption();
                            }}/>
                        </div>
                    </ChoiceOptions>
                }
                {
                    this.state.currentView === 'presets' || this.isUpdated()  ? <Settings>
                        <FormSection onSubmit={e => {
                            e.preventDefault();
                            if (!this.isUpdated()) return;
                            console.log('section3 ---- ', this.state.section)
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
                                        this.updateView('')
                                        this.setState({section: this.props.section});
                                        inputName.value = section.name;
                                        selectModel.value = section.model;
                                    }}/>
                                <ButtonValidate label={'Update'}  type={'submit'} disabled={!this.isUpdated()}/>
                            </Buttons>
                        </FormSection>
                    </Settings> : null
                }
                {
                    this.state.currentView === 'formAddComponent' &&
                    <AddComponent index={index} open={true} updateView={this.updateView}/>
                }
                {
                    this.state.currentView === 'presets' &&
                    <FieldsContainer>
                        <Fields>
                            <FieldsListOfSection triggerOpening={this.state.triggerOpening}
                                                 fields={this.getSectionFields()}
                                                 index={index}/>
                        </Fields>
                    </FieldsContainer>
                }
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




/*


//FIRST TRY TO PASS CLASS TO FUNCTIONNAL

import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import update from 'react-addons-update';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import sectionConfig from '../../config/sections/*.js';
import {
    updateSection,
    removeSection,
    toggleSectionActive,
    getCurrentExtension,
    getVersionStorage
} from '../../actions/index';
import {notifierError, notifierSuccess, ALERT} from "../../utils/Notifier";

import {SafeDelete} from '../../style/styledComponents';
import {
    ContainerSection,
    Settings,
    TopBar,
    Active,
    Description,
    FormSection,
    Children,
    Fields,
    FieldsContainer, ChoiceOptions, Buttons
} from './styled';

import ComponentDOM from '../ComponentDOM/index';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonDelete from '../../components/ui/ButtonDelete';
import AddComponent from '../AddComponent/index';
import ButtonValidate from '../../components/ui/ButtonValidate';
import FieldsListOfSection from "../../components/FieldsListOfSection";
import ActionsBarSection from './ActionsBarSection';
import SvgCheck from '../../components/svg/SvgCheck';
import {toggleComponentActive} from "../../actions";

const Section = (props) => {
    const [currentView, setCurrentView] = useState('');
    const [section, setSection] = useState(null);
    const [openOption, setOpenOption] = useState(false);
    const [triggerOpening, setTriggerOpening] = useState(false);
    const [sectionOnLocalStorage, setSectionOnLocalStorage] = useState(false);
    const [componentsOnLocalStorage, setComponentsOnLocalStorage] = useState(false);

    useEffect(() => {
        setSection(props.section);
        checkLocalStorage();
    }, [props.versionStorage, props.section]);


    const checkLocalStorage = () => {
        try {
            if (localStorage && localStorage.getItem('copiedSection')) {
                setSectionOnLocalStorage(true);
            }
            if (localStorage && localStorage.getItem('copiedComponents')) {
                setComponentsOnLocalStorage(true);
            }
        } catch (e) {
            console.log('private navigation');
        }
    }

    const updateModel = model => {
        setSection(prev => ({
            ...prev,
            model: model
        }));
    }

    const updateName = name => {
        setSection(prev => ({
            ...prev,
            name: name
        }));
    }

    const toggleActive = () => props.dispatch(toggleSectionActive(!props.section.active, props.index));

    const toggleOptions = () => setOpenOption(prev => !prev);

    const toggleTriggerOpening = () => setTriggerOpening(prev => !prev);


    const isUpdated = () => (section && !isEqual(section, props.section) || (section && !isEqual(section.components, props.section.components)))

    const getSectionFields = () => {
        return sectionConfig[props.section.model].default.fields;
    }

    const pastSection = (withComponents = false) => {

        const sectionToPast = JSON.parse(localStorage.getItem('copiedSection'));
        if (!sectionToPast) {
            notifierError(props.extensionInfo.extension, ALERT.ERROR_MEMORY_SECTION);
        } else {
            if (withComponents) {
                setSection(prev => ({
                    ...prev,
                    name: sectionToPast.name,
                    model: sectionToPast.model,
                    fields: sectionToPast.fields,
                    components: [...prev.components, ...sectionToPast.components]
                }), () => {
                    console.log('test')
                    setCurrentView('presets');
                    notifierSuccess(props.extensionInfo.extension, ALERT.SUCCESS_PAST_SECTION);
                });


            } else {
                return new Promise((resolve, reject) => {
                    setSection(prev => ({
                        ...prev,
                        name: sectionToPast.name,
                        model: sectionToPast.model,
                        fields: sectionToPast.fields
                    }));
                    resolve();
                }).then(() => {
                    console.log('test 2')
                    setCurrentView('presets');
                    notifierSuccess(props.extensionInfo.extension, ALERT.SUCCESS_PAST_SECTION);
                })

            }
        }
    }

    const pastComponents = (replaceComponents = false) => {
        const elementsToPast = JSON.parse(localStorage.getItem('copiedComponents'));
        if (!elementsToPast) {
            notifierError(props.extensionInfo.extension, ALERT.ERROR_MEMORY_SECTION);
        } else {
            if (replaceComponents) {
                return new Promise((resolve, reject) => {
                    setSection(prev => ({
                        ...prev,
                        components: elementsToPast
                    }));
                    resolve();
                }).then(() => {
                    updateView('presets');
                    notifierSuccess(props.extensionInfo.extension, ALERT.SUCCESS_PAST_COMPONENTS);
                    closeOption();
                })


            } else {
                return new Promise((resolve, reject) => {
                    setSection(prev => ({
                        ...prev,
                        components: [...prev.components, ...elementsToPast]
                    }));
                    resolve();
                }).then(() => {
                    updateView('presets');
                    notifierSuccess(props.extensionInfo.extension, ALERT.SUCCESS_PAST_SECTION);
                    closeOption();
                })

            }
        }
    }

    const updateView = (view) => setCurrentView(prev => prev === view ? '' : view);

    const closeOption = () => setOpenOption(false);

    //const {dispatch, domLength, section, index} = this.props;
    let inputName, selectModel;
    let children = (props.section.components && props.section.components.length !== 0) ? props.section.components.map((component, i) =>
        <ComponentDOM key={i} component={component} index={i} indexParent={props.index}
                      lengthParent={props.section.components.length}/>
    ) : null;
    if (!section) return null;
    return (
        <ContainerSection>
            <TopBar
                borderBottom={currentView === 'presets' ||
                currentView === 'formPastComponents' ||
                currentView === 'formPastSection' ||
                currentView === 'formDelete'}>
                <Description>
                    <Active
                        className={section.active ? 'active' : ''}
                        onClick={() => {
                            toggleActive();
                        }}>
                        <SvgCheck/>
                    </Active>
                    <h3>{props.section.name}</h3>
                    <h4>{props.section.model} </h4>
                </Description>
                <ActionsBarSection currentView={currentView}
                                   openOption={openOption}
                                   triggerOpening={triggerOpening}
                                   toggleTrigger={toggleTriggerOpening}
                                   updateView={updateView}
                                   closeOption={closeOption}
                                   toggleOptions={toggleOptions}
                                   nbrComponentsOfSection={section.components.length}
                                   section={section}
                                   index={props.index}
                                   domLength={props.domLength}
                />
            </TopBar>
            {
                currentView === 'formDelete' &&
                <SafeDelete>
                    <p>The deletion is final. Are you sure you want to delete this section?</p>
                    <div className={'buttons'}>
                        <ButtonBasic label={'Cancel'} action={() => {
                            updateView('');
                            closeOption();
                        }}/>
                        <ButtonDelete label={'Delete'} action={() => {
                            props.dispatch(removeSection(props.index));
                            updateView('');
                            closeOption();
                        }}/>
                    </div>
                </SafeDelete>
            }
            {
                currentView === 'formPastSection' &&
                <ChoiceOptions>
                    <p>What do you want to import ? </p>
                    <div className={'buttons'}>

                        <ButtonValidate label={'Section presets'} action={() => {
                            pastSection();
                        }}/>
                        <ButtonValidate label={'Section presets and Components'}
                                        action={() => pastSection(true)}/>
                        <ButtonBasic label={'Cancel'} action={() => {
                            updateView('');
                            closeOption();
                        }}/>
                    </div>
                </ChoiceOptions>
            }
            {
                currentView === 'formPastComponents' &&
                <ChoiceOptions>
                    <p>What do you want to import ? </p>
                    <div className={'buttons'}>
                        <ButtonValidate label={'Replace'} action={() => pastComponents(true)}/>
                        <ButtonValidate label={'Add'} action={() => pastComponents()}/>
                        <ButtonBasic label={'Cancel'} action={() => {
                            updateView('');
                            closeOption();
                        }}/>
                    </div>
                </ChoiceOptions>
            }
            {
                currentView === 'presets' || isUpdated() ? <Settings>
                    <FormSection onSubmit={e => {
                        e.preventDefault();
                        if (!isUpdated()) return;
                        props.dispatch(updateSection(section, props.index));
                    }}
                    >
                        <div>
                            <label>Model</label>
                            <select ref={node => (selectModel = node)}
                                    value={section.model || null}
                                    onChange={e => {
                                        updateModel(e.target.value);
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
                                   value={section.name || ''}
                                   onChange={e => updateName(e.target.value)}/>
                        </div>
                        {
                            isUpdated() && <Buttons className={'buttons'}>
                                <ButtonBasic
                                    label={'Cancel'}
                                    disabled={!isUpdated()}
                                    action={e => {
                                        e.preventDefault();
                                        setSection(props.section);
                                        inputName.value = section.name;
                                        selectModel.value = section.model;
                                    }}/>
                                <ButtonValidate label={'Update'} type={'submit'} disabled={!isUpdated()}/>
                            </Buttons>
                        }
                    </FormSection>
                </Settings> : null
            }
            {
                currentView === 'formAddComponent' &&
                <AddComponent index={props.index} open={true} updateView={updateView}/>
            }
            {
                currentView === 'presets' &&
                <FieldsContainer>
                    <Fields>
                        <FieldsListOfSection triggerOpening={triggerOpening}
                                             fields={getSectionFields()}
                                             index={props.index}/>
                    </Fields>
                </FieldsContainer>
            }
            <Children>{children}</Children>
        </ContainerSection>
    );

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
    versionStorage: getVersionStorage(state).versionStorage,
});

export default connect(mapStateToProps)(Section);
*/