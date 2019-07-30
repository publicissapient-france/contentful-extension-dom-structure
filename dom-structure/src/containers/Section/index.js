import React, {Component} from 'react';
import {connect} from 'react-redux';
import SvgAdd from '../../components/svg/SvgAdd';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgRange from '../../components/svg/SvgRange';
import SvgCheck from '../../components/svg/SvgCheck';
import SvgTrash from '../../components/svg/SvgTrash';
import ComponentDOM from '../ComponentDOM/index';
import {
    Container,
    ButtonBasic,
    ButtonGreen,
    Icon,
    Range,
    ButtonDelete,
    SafeDelete
} from '../../style/styledComponents';
import {Settings, TopBar, Active, Actions, Description, FormSection, AddChild, Children} from './styled'
import {
    updateSection,
    removeSection,
    moveSectionToTop,
    moveSectionToDown,
    toggleSectionActive
} from '../../actions/index';
import sectionsConfig from '../../config/sections/*.js';
import update from 'react-addons-update';
import AddComponent from '../AddComponent/index';

import PropTypes from 'prop-types';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openSettings: false,
            openAdd: false,
            openSafeDelete: false,
            section: null
        };
    }

    componentDidMount = () => {
        this.setState({section: this.props.section});
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
    })
    toggleOpenAdd = () => this.setState({openAdd: !this.state.openAdd, openSettings: false, openSafeDelete: false})
    toggleOpenSettings = () => this.setState({
        openSettings: !this.state.openSettings,
        openAdd: false,
        openSafeDelete: false
    })

    isUpdated = () => (this.state.section && (this.state.section.name !== this.props.section.name ||
        this.state.section.model !== this.props.section.model))

    render() {
        const {dispatch, domLength, section, index} = this.props;
        let inputName, selectModel;
        let children = (section.components && section.components.length !== 0) ? section.components.map((component, i) =>
            <ComponentDOM key={i} component={component} index={i} indexParent={index}
                          lengthParent={section.components.length}/>
        ) : null;
        if (!this.state.section) return null;
        return (
            <Container>
                <TopBar>
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
                        <Icon className={this.state.openAdd ? 'active' : ''} onClick={() => this.toggleOpenAdd()}>
                            <SvgAdd/>
                        </Icon>
                        <Icon className={this.state.openSettings ? 'active' : ''}
                              onClick={() => this.toggleOpenSettings()}>
                            <SvgSetting/>
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
                        <Icon className={'trash'} onClick={() => this.toggleSafeSecure()}><SvgTrash/></Icon>
                    </Actions>
                </TopBar>
                <SafeDelete className={!this.state.openSafeDelete ? 'hidden' : ''}>
                    <p>The deletion is final. Are you sure you want to delete this section?</p>
                    <div className={'buttons'}>
                        <ButtonBasic onClick={() => this.toggleSafeSecure()}>Cancel</ButtonBasic>
                        <ButtonDelete onClick={() => {
                            dispatch(removeSection(index));
                            this.setState({openSafeDelete: false});
                        }}>
                            Delete
                        </ButtonDelete>
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
                            <label>Section Name</label>
                            <input ref={node => (inputName = node)} type={'text'}
                                   defaultValue={section.name ? section.name : ''}
                                   onChange={e => {
                                       this.updateName(e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <label>Model</label>
                            <select ref={node => (selectModel = node)}
                                    defaultValue={section.model ? section.model : null}
                                    onChange={e => {
                                        this.updateModel(e.target.value);
                                    }}>
                                {
                                    Object.keys(sectionsConfig).map((key, i) => {
                                        return <option value={key} key={i}>{key}</option>;
                                    })
                                }
                            </select>
                        </div>
                        <div className={'buttons'}>
                            <ButtonBasic
                                className={this.isUpdated() ? '' : 'disable'}
                                onClick={e => {
                                    e.preventDefault();
                                    this.toggleOpenSettings();
                                    this.setState({section: this.props.section});
                                    inputName.value = section.name;
                                    selectModel.value = section.model;
                                }}>
                                Cancel
                            </ButtonBasic>
                            <ButtonGreen
                                disabled={!this.isUpdated()}
                                className={this.isUpdated() ? 'active' : ''}>Update</ButtonGreen>
                        </div>
                    </FormSection>
                </Settings>
                <AddChild>
                    <AddComponent index={index} open={this.state.openAdd} parent={this}/>
                </AddChild>
                <Children>{children}</Children>
            </Container>
        );
    }
};

Index.propTypes = {
    section: PropTypes.shape({
        active: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
    domLength: PropTypes.number
};

export default connect()(Index);