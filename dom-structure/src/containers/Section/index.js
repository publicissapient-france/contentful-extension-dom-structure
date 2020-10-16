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

import ComponentDOM from '../ComponentDOM/index';

import {
    Icon,
    Range,
    SafeDelete
} from '../../style/styledComponents';
import {
    ContainerSection,
    Settings,
    TopBar,
    Active,
    Actions,
    Description,
    FormSection,
    AddChild,
    Children,
    Fields,
    FieldsContainer,
    PanelActions
} from './styled';
import {
    updateSection,
    removeSection,
    moveSectionToTop,
    moveSectionToDown,
    toggleSectionActive
} from '../../actions/index';
import ButtonBasic from '../../components/ui/ButtonBasic';
import ButtonDelete from '../../components/ui/ButtonDelete';
import update from 'react-addons-update';
import AddComponent from '../AddComponent/index';
import ButtonValidate from '../../components/ui/ButtonValidate';

import PropTypes from 'prop-types';
import FieldsListOfSection from "../../components/FieldsListOfSection";
import sectionConfig from '../../config/sections/*.js';


class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openSettings: false,
            openAdd: false,
            openSafeDelete: false,
            openOption: false,
            section: null,
            triggerOpening: false
        };
    }

    componentDidMount = () => {
        this.setState({section: this.props.section});
    }

    componentDidUpdate(prevProps) {
        if (this.props.section !== prevProps.section) {
            this.setState({section: this.props.section});
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
        openSettings: false

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
    triggerOpening = () => this.setState(prevState => ({
        triggerOpening: !prevState.triggerOpening
    }))

    isUpdated = () => (this.state.section && (this.state.section.name !== this.props.section.name ||
        this.state.section.model !== this.props.section.model))

    getSectionFields = () => {
        return sectionConfig[this.props.section.model].default.fields;
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
                <TopBar borderBottom={this.state.openSettings}>
                    <Description>
                        <Active
                            className={this.state.section.active ? 'active' : ''}
                            onClick={e => {
                                this.toggleActive();
                            }}>
                            <SvgCheck/>
                        </Active>
                        <h3>{section.name} </h3>
                        <h4>{section.model} </h4>
                    </Description>
                    <Actions>
                        <PanelActions className={this.state.openOption ? 'hidden' : ''}>
                            <Icon className={this.state.openAdd ? 'active' : ''} onClick={() => this.toggleOpenAdd()}>
                                <SvgAddElement/>
                            </Icon>
                        </PanelActions>
                        <PanelActions className={this.state.openOption ? 'hidden' : ''}>
                            <Icon className={this.state.openSettings && !this.state.triggerOpening ? 'active' : ''}
                                  onClick={() => this.toggleOpenSettings()}>
                                <SvgSetting/>
                            </Icon>
                        </PanelActions>
                        <PanelActions className={['options', !this.state.openOption ? 'hidden' : '']}>
                            <div>
                                <Icon className={['trash', this.state.openSafeDelete ? 'active' : '']}
                                      onClick={() => {this.toggleSafeSecure()}}><SvgTrash/></Icon>
                            </div>
                            <div>
                                <Icon className={''} onClick={() => {
                                    console.log('past all components')
                                }}>
                                    <SvgPastAllComponents/>
                                </Icon>
                                <Icon className={''} onClick={() => {
                                    console.log('copy all components')
                                }}>
                                    <SvgCopyAllComponents/>
                                </Icon>
                            </div>
                            <div>
                                <Icon className={''} onClick={() => {
                                    console.log('past section')
                                }}><SvgPastSection/></Icon>
                                <Icon className={''} onClick={() => {
                                    console.log('copy section')
                                }}>
                                    <SvgCopySection/>
                                </Icon>
                            </div>
                            <div>
                                <Icon className={''} onClick={() => {
                                    console.log('duplicate section')
                                }}>
                                    <SvgDuplicateSection/>
                                </Icon>
                            </div>
                        </PanelActions>
                        <PanelActions>
                            <Icon className={this.state.openOption ? 'active' : ''}
                                  onClick={() => {
                                      this.toggleOptions();
                                  }}>
                                <SvgHorizontalThreeDots/>

                            </Icon>
                            <Icon className={this.state.triggerOpening ? 'active' : ''}
                                  onClick={() => {
                                      this.triggerOpening();
                                      if (!this.state.openSettings) {
                                          this.toggleOpenSettings();
                                      }
                                  }}>
                                <SvgSpec/>
                            </Icon>
                            <Range>
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
                        <ButtonBasic label={'Cancel'} action={this.toggleSafeSecure}/>
                        <ButtonDelete label={'Delete'} action={() => {
                            dispatch(removeSection(index));
                            this.setState({openSafeDelete: false});
                        }}/>
                    </div>
                </SafeDelete>
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
                                   onChange={e => {
                                       this.updateName(e.target.value);
                                   }}/>
                        </div>
                        <div className={'buttons'}>
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
                        </div>
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

export default connect()(Section);
