import React, {Component} from 'react';
import {connect} from 'react-redux';
import isEqual from 'lodash/isEqual'

import OrderFieldsContent from '../OrderFieldsContent';
import SvgSetting from '../../components/svg/SvgSetting';
import SvgRange from '../../components/svg/SvgRange';
import SvgCheck from '../../components/svg/SvgCheck';
import SvgDuplicate from '../../components/svg/SvgDuplicate';
import SvgTrash from '../../components/svg/SvgTrash';
import SvgSpec from '../../components/svg/SvgSpec';
import FieldsList from '../../components/FieldsList';

import {
    Icon,
    Range,
    SafeDelete
} from '../../style/styledComponents';
import {
    ContainerComponent,
    FormComponent,
    Banner,
    Description,
    Actions,
    Active,
    Toggle,
    TopBar,
    FieldsContainer,
    Fields,
    Column,
    Buttons
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
    toggleComponentActive,
    duplicateComponent


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
            component: null,
            openSafeDelete: false,
            config: {},
            triggerOpening: false
        };
    }

    componentDidMount = async () => {
        this.setState({component: this.props.component}, () => {
        });

    }

    componentDidUpdate(prevProps) {
        if (this.props.component !== prevProps.component) {
            this.setState({component: this.props.component});
        }


    }

    updateModel = model => {
        this.setState({
            component: update(this.state.component, {
                model: {$set: model},
            })
        });
    }

    updateName = name => {
        this.setState(prevState => ({
            component: update(prevState.component, {
                name: {$set: name}
            })
        }));
    }

    updateOrder = order => {
        this.setState(prevState => ({
            component: update(prevState.component, {
                order: {$set: order}
            })
        }));
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
    }, () => {
        if (!this.state.openSettings) {
            this.setState({
                triggerOpening: false
            })
        }
    })
    toggleOpenContent = () => this.setState({
        openContent: !this.state.openContent,
        openSettings: false,
        openSafeDelete: false
    })
    triggerOpening = () => this.setState(prevState => ({
        triggerOpening: !prevState.triggerOpening
    }))

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
            this.state.component.model !== this.props.component.model ||
            this.state.component.order !==  this.props.component.order
        )
    )

    getComponentFields = () => {
        return componentConfig[this.props.component.model].default.fields;
    }

    getComponentFieldsByState = () => {
        return componentConfig[this.state.component.model].default.fields;
    }

    render() {
        const {dispatch, component, index, indexParent, lengthParent} = this.props;
        let inputName, selectModel;
        console.log('component -----------------------------', component)
        if (!this.state.component) return null;

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
                        <Icon className={this.state.openSettings && !this.state.triggerOpening ? 'active' : ''}
                              onClick={() => this.toggleOpenSettings()}>
                            <SvgSetting/>
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
                        <Icon className={['trash', this.state.openSafeDelete ? 'active' : '']}
                              onClick={() => this.toggleSafeSecure()}><SvgTrash/></Icon>
                        <Icon
                              onClick={() => dispatch(duplicateComponent(index, indexParent))}><SvgDuplicate/></Icon>
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
                            return;
                        }
                        dispatch(updateComponent(this.state.component.name, this.state.component.model, this.state.component.order, index, indexParent));
                    }}
                    >
                        <Column>
                            <div>
                                <label>Component Name</label>
                                <input ref={node => (inputName = node)} type={'text'}
                                       value={this.state.component.name || ''}
                                       onChange={e => {
                                           this.updateName(e.target.value);
                                       }}/>
                            </div>
                            <div>
                                <label>Model</label>
                                <select ref={node => (selectModel = node)}
                                        value={this.state.component.model || null}
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
                        </Column>
                        <Column>
                            <div>
                                <label>Order</label>
                                <OrderFieldsContent componentModel={this.state.component.model}
                                                    fields={this.getComponentFieldsByState()}
                                                    order={this.state.component.order} updateOrder={this.updateOrder}/>
                            </div>
                        </Column>
                        <Buttons className={'buttons'}>
                            <ButtonBasic
                                label={'Cancel'}
                                disabled={!this.isUpdated()}
                                action={e => {
                                    e.preventDefault();
                                    this.setState(prevState => ({
                                        component: update(prevState.component, {
                                            name: {$set: this.props.component.name},
                                            model: {$set: this.props.component.model},
                                            order: {$set: this.props.component.order}
                                        })
                                    }));
                                    inputName.value = component.name;
                                    selectModel.value = component.model;
                                }}/>
                            <ButtonValidate label={'Update'} type={'submit'} disabled={!this.isUpdated()}/>
                        </Buttons>
                    </FormComponent>
                </div>
                <FieldsContainer className={!this.state.openSettings ? 'hidden' : ''}>
                    <Fields>
                        <FieldsList triggerOpening={this.state.triggerOpening} fields={this.getComponentFields()}
                                    index={index} indexParent={indexParent}/>
                    </Fields>
                </FieldsContainer>
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

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(ComponentDOM);
