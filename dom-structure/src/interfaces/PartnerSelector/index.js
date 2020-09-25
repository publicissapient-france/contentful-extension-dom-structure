import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Partners,
    Select,
    List,
    Priority,
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
            priority: this.props.priority
        })
    };

    componentDidUpdate(prevProps) {
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
                if(this.props.forComponent){
                    this.props.updateContent('data', this.state.selected)
                }else{
                    this.props.updateContent(this.state.selected, 'data')
                }

            })
        }
    }

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;
    getById = (id) => this.state.partners.find(element => element.id === id);


    initRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'partner',
        }).then(result => {
            this.setState({
                partners: result.items.map(item => {
                    let partner = {
                        id: item.sys.id,
                        name: item.fields.name[this.findProperLocale()]
                    }
                    return partner
                })
            })
        });

    }

    alreadySelected = (id) => this.state.selected.find(item => item === id)

    addPriority = (id) => {
        this.setState(prevState => ({
            priority: [...prevState.priority, id]
        }), () => {

            if(this.props.forComponent){
                this.props.updateContent('priority', this.state.priority)
            }else{
                this.props.updateContent(this.state.priority, 'priority')
            }

            this.refreshOrderWithPriority()
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

    removePriority = (id) => {
        this.setState(prevState => ({
            priority: prevState.priority.filter(item => item !== id)
        }), () => {
            if(this.props.forComponent){
                this.props.updateContent('priority', this.state.priority)
            }else{
                this.props.updateContent(this.state.priority, 'priority')
            }
            this.refreshOrderWithPriority()
        })
    }

    refreshOrderWithPriority = () => {
        this.setState({
            selected: this.orderSelectedWithPriority()
        }, () => {
            if(this.props.forComponent){
                this.props.updateContent('data', this.state.selected)
            }else{
                this.props.updateContent(this.state.selected, 'data')
            }
        })
    }

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)

    addSelected = (id) => {
        this.setState(prevState => ({
            selected: [...prevState.selected, id]
        }), () => {
            if(this.props.forComponent){
                this.props.updateContent('data', this.state.selected)
            }else{
                this.props.updateContent(this.state.selected, 'data')
            }
        })
    }

    removeSelected = (id) => {
        this.setState(prevState => ({
            selected: prevState.selected.filter(item => item !== id)
        }), () => {
            if(this.props.forComponent){
                this.props.updateContent('data', this.state.selected)
            }else{
                this.props.updateContent(this.state.selected, 'data')
            }
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

    moveElementToTop = (index) => {
        if (index === 0) return
        const a = this.props.priority[index];
        const b = this.props.priority[index - 1];
        let newOrder = [...this.props.priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        this.setState({priority: newOrder}, () => {
            if(this.props.forComponent){
                this.props.updateContent('priority', this.state.priority)
            }else{
                this.props.updateContent(this.state.priority, 'priority')
            }
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
            if(this.props.forComponent){
                this.props.updateContent('priority', this.state.priority)
            }else{
                this.props.updateContent(this.state.priority, 'priority')
            }
        })
    }

    render = () => {
        return (
            <Container>
                <Partners>
                    <label>Partners</label>
                    <List>
                        {
                            this.state.partners ? this.state.partners.sort((a, b) => a.name.localeCompare(b.name)).map((partner, i) => {
                                return <Select key={i}>
                                    <input checked={this.state.selected.includes(partner.id)} type={'checkbox'}
                                           onChange={(e) => this.updateSelected(e, partner.id)}/>
                                    <p className={this.state.priority.includes(partner.id) ? 'active' : ''}
                                       onClick={() => {
                                           this.updatePriority(partner.id)
                                       }}>{partner.name}</p>
                                </Select>
                            }) : null
                        }
                    </List>
                </Partners>
                <Priority>
                    <label>Priority List</label>
                    <PriorityList>
                        {
                            this.state.priority ? this.state.priority.map((id, i) => {
                                const partner = this.getById(id);
                                if (!partner) return null
                                return <Element key={i}>
                                    <ButtonsMove>
                                        <Button onClick={() => this.moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                        <Button onClick={() => this.moveElementToTop(i)}><SvgArrowToTop/></Button>
                                    </ButtonsMove>
                                    <Identity>{partner.name}</Identity>
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
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(PartnerSelector);
