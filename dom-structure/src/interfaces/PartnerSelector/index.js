import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Formations,
    Select,
    List,
    Priority,
    Display,
    PriorityList,
    Element,
    Identity,
    ButtonsMove,
    Button
} from './styled';
import {getCurrentExtension} from '../../actions/index';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';

class PartnerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners: [],
            selected: [],
            priority: []
        };
    }

    componentDidMount = async () => {
        await this.initRessources();
        this.setState({
            selected: this.props.partners,
            display: this.props.display,
            priority: this.props.priority
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.display !== prevProps.display) {
            this.setState({
                display: this.props.display
            })
        }
        if (this.props.partners !== prevProps.partners) {
            this.setState({
                selected: this.props.partners
            })
        }
        if (this.props.priority !== prevProps.priority) {
            this.setState({
                priority: this.props.priority,
                selected: this.orderSelectedWithPriority()
            }, () => {
                this.props.updateContent(this.state.selected, 'data')
            })
        }
    }

    initRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'partner',
        }).then(result => {
            this.setState({
                partners: result.items.map(item => {
                    let formation = {
                        id: item.sys.id,
                        name: item.fields.name[this.findProperLocale()]
                    }
                    return formation
                })
            })
        });

    }

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)
    alreadySelected = (id) => this.state.selected.find(item => item === id)

    addPriority = (id) => {
        this.setState(prevState => ({
            priority: [...prevState.priority, id]
        }), () => {
            this.props.updateContent(this.state.priority, 'priority')
        })
    }

    removePriority = (id) => {
        this.setState(prevState => ({
            priority: prevState.priority.filter(item => item !== id)
        }), () => {
            this.props.updateContent(this.state.priority, 'priority')
        })
    }

    updatePriority = (id) => {
        if (!this.alreadyOnPriority(id)) {
            this.addPriority(id);

            if (!this.alreadySelected(id)) {
                this.addSelected(id);
            }
        } else {
            this.removePriority(id);
        }
    }

    addSelected = (id) => {
        this.setState(prevState => ({
            selected: [...prevState.selected, id]
        }), () => {
            this.props.updateContent(this.state.selected, 'data')
        })
    }

    removeSelected = (id) => {
        this.setState(prevState => ({
            selected: prevState.selected.filter(item => item !== id)
        }), () => {
            this.props.updateContent(this.state.selected, 'data')
        })
    }

    updateSelected = (e, id) => {
        if (e.target.checked) {
            this.addSelected(id);
        } else {
            this.removeSelected(id);

            if (this.alreadyOnPriority(id)) {
                this.removePriority(id);
            }
        }
    }

    orderSelectedWithPriority = () => [...this.state.priority, ...this.state.selected.filter(id => !this.alreadyOnPriority(id))];

    toggleDisplay = (prop, subProp, value) => {
        this.setState(prevState => ({
            display: {
                ...prevState.display,
                [prop]: {
                    ...prevState.display[prop],
                    [subProp]: value
                }
            }
        }), () => {
            this.props.updateContent(this.state.display, 'display')
        })
    }

    getById = (id) => this.state.partners.find(element => element.id === id);

    moveElementToTop = (index) => {
        if (index === 0) return
        const a = this.props.priority[index];
        const b = this.props.priority[index - 1];
        let newOrder = [...this.props.priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        this.setState({priority: newOrder}, () => {
            this.props.updateContent(this.state.priority, 'priority')
        })
    }

    moveElementToBottom = (index) => {
        if (index === (this.props.priority.length - 1)) return
        const a = this.props.priority[index];
        const b = this.props.priority[index + 1];
        let newOrder = [...this.props.priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        this.setState({priority: newOrder}, () => {
            this.props.updateContent(this.state.priority, 'priority')
        })
    }

    render = () => {
        return (
            <Container>
                <Formations>
                    <label>Partners</label>
                    <List>
                        {
                            this.state.partners ? this.state.partners.map((formation, i) => {
                                return <Select key={i}>
                                    <input checked={this.state.selected.includes(formation.id)} type={'checkbox'}
                                           onChange={(e) => this.updateSelected(e, formation.id)}/>
                                    <p className={this.state.priority.includes(formation.id) ? 'active' : ''}
                                       onClick={() => {
                                           this.updatePriority(formation.id)
                                       }}>{formation.name}</p>
                                </Select>
                            }) : null
                        }
                    </List>
                </Formations>
                <Priority>
                    <label>Priority List</label>
                    <PriorityList>
                        {
                            this.state.priority ? this.state.priority.map((id, i) => {
                                const formation = this.getById(id);
                                if (!formation) return null
                                return <Element>
                                    <ButtonsMove>
                                        <Button onClick={() => this.moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                        <Button onClick={() => this.moveElementToTop(i)}><SvgArrowToTop/></Button>
                                    </ButtonsMove>
                                    <Identity>{formation.name}</Identity>
                                </Element>
                            }) : null
                        }
                    </PriorityList>

                </Priority>
            </Container>
        );
    }
}

PartnerSelector.protoTypes = {
    partners: PropTypes.array,
    display: PropTypes.object,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(PartnerSelector);
