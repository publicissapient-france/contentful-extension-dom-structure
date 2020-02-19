import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Speakers,
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

class SpeakerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            speakers: [],
            selectedSpeakers: [],
            priority: []
        };
    }

    componentDidMount = async () => {
        await this.initSpeakersRessources();
        this.setState({
            selectedSpeakers: this.props.speakers,
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
        if (this.props.speakers !== prevProps.speakers) {
            this.setState({
                selectedSpeakers: this.props.speakers
            })
        }
        if (this.props.priority !== prevProps.priority) {
            this.setState({
                priority: this.props.priority,
                selectedSpeakers : this.orderSelectedWithPriority()
            }, () => {
                this.props.updateContent(this.state.selectedSpeakers, 'speakers')
            })
        }
    }

    initSpeakersRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'event',
        }).then(selectedEntry => {
            this.setState({
                speakers: selectedEntry.items[0].fields.speakers[this.findProperLocale()]
            })
            return selectedEntry.items[0].fields.speakers[this.findProperLocale()]
        });
    }

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)
    alreadySelected = (id) => this.state.selectedSpeakers.find(item => item === id)

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
            selectedSpeakers: [...prevState.selectedSpeakers, id]
        }), () => {
            this.props.updateContent(this.state.selectedSpeakers, 'speakers')
        })
    }

    removeSelected = (id) => {
        this.setState(prevState => ({
            selectedSpeakers: prevState.selectedSpeakers.filter(item => item !== id)
        }), () => {
            this.props.updateContent(this.state.selectedSpeakers, 'speakers')
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

    orderSelectedWithPriority = () => [...this.state.priority, ...this.state.selectedSpeakers.filter(id => !this.alreadyOnPriority(id))];

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

    getById = (id) => this.state.speakers.find(element => element.id === id);

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
                <Speakers>
                    <label>Speakers</label>
                    <List>
                        {
                            this.state.speakers ? this.state.speakers.map((speaker, i) => {
                                return <Select key={i}>
                                    <input checked={this.state.selectedSpeakers.includes(speaker.id)} type={'checkbox'}
                                           onChange={(e) => this.updateSelected(e, speaker.id)}/>
                                    <p className={this.state.priority.includes(speaker.id) ? 'active' : ''}
                                       onClick={() => {
                                           this.updatePriority(speaker.id)
                                       }}>{speaker.FirstName} {speaker.LastName}</p>
                                </Select>
                            }) : null
                        }
                    </List>
                </Speakers>
                <Priority>
                    <label>Priority List</label>
                    <PriorityList>
                        {
                            this.state.priority ? this.state.priority.map((id, i) => {
                                const speaker = this.getById(id);
                                return <Element>
                                    <ButtonsMove>
                                        <Button onClick={() => this.moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                        <Button onClick={() => this.moveElementToTop(i)}><SvgArrowToTop/></Button>
                                    </ButtonsMove>
                                    <Identity>{speaker.FirstName} {speaker.LastName}</Identity>
                                </Element>
                            }) : null
                        }
                    </PriorityList>
                    <Display>
                        <div>
                            <label>Tiny content</label>
                            <Select>
                                <input
                                    checked={this.state.display && this.state.display.logo && this.state.display.logo.tiny ? this.state.display.logo.tiny : false}
                                    type={'checkbox'}
                                    onChange={(e) => this.toggleDisplay('logo', 'tiny', e.target.checked)}/>
                                Logo
                            </Select>
                        </div>
                        <div>
                            <label>Large content</label>
                            <Select>
                                <input
                                    checked={this.state.display && this.state.display.logo && this.state.display.logo.tiny ? this.state.display.logo.tiny : false}
                                    type={'checkbox'}
                                    onChange={(e) => this.toggleDisplay('logo', 'large', e.target.checked)}/>
                                Logo
                            </Select>
                        </div>
                    </Display>
                </Priority>
            </Container>
        );
    }
}

SpeakerSelector.protoTypes = {
    speakers: PropTypes.array,
    display: PropTypes.object,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(SpeakerSelector);
