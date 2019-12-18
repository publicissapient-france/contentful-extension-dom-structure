import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Field, Selector, Choice, Display, ButtonEvents} from './styled';
import {getCurrentExtension} from '../../actions/index';
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import uniqBy from 'lodash/uniqBy'

class SpeakerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggingOver: false,
            eventId: null,
            speakers: [],
            allSpeakers: null
        };
    }

    componentDidMount() {
        if (this.props.idSource && !isEmpty(this.props.idSource)) {
            this.setState({
                eventId: this.props.idSource
            }, () => {
                this.setEventOnState(this.state.eventId)
            })
        }
        if (this.props.speakers && !isEmpty(this.props.speakers)) {
            this.setState({
                speakers: this.props.speakers
            })
        }
        this.setState({
            display: this.props.display,
            currentEvent : this.props.event
        })
    };

    componentDidUpdate(prevProps) {
        if(this.props.display !== prevProps.display){
            this.setState({
                display: this.props.display
            })
        }
        if(this.props.event !== prevProps.event){
            this.setState({
                currentEvent: this.props.event
            })
        }
    }

    onClickLinkExisting = async () => {
        await this.props.extensionInfo.extension.dialogs.selectSingleEntry({
            contentTypes: ["event"]
        }).then(selectedEntry => {
            if (selectedEntry) {
                try {
                    this.setSelectedEvent(selectedEntry);
                } catch (err) {
                    this.onError(err);
                }
            }
        });

    }


    findProperLocale() {
        return this.props.extensionInfo.extension.locales.default;
    }

    getElementById = id => {
        return this.props.extensionInfo.extension.space.getEntries({
            'sys.id': id
        }).then(function (result) {
            return result.items[0];
        });
    }

    setEventOnState = async (id) => {
        if (!id) return
        let event = await this.getElementById(id);

        this.setState({
            eventId: event.sys.id,
            eventName: event.fields['name'][this.findProperLocale()],
            allSpeakers: uniqBy(event.fields['speakers'][this.findProperLocale()], (item) => item.firstname && item.lastname)
        })
    }

    setSelectedEvent = async event => {
        this.setState({
            ...this.state,
            eventId: event.sys.id,
            eventName: event.fields['name'][this.findProperLocale()],
            allSpeakers: uniqBy(event.fields['speakers'][this.findProperLocale()], (item) => item.firstname && item.lastname)
        }, () => {
            this.props.updateContent('idSource', this.state.eventId)
        });
    }

    onError = error => {
        console.error(error);
        this.props.extensionInfo.extension.notifier.error(error.message);
    }

    onCustomError = message => {
        console.error(message);
        this.props.extensionInfo.extension.notifier.error(message);
    }

    toggleChange = (e, id) => {
        if (e.target.checked) {
            this.setState(prevState => ({
                speakers: [...prevState.speakers, id]
            }), () => {
                this.props.updateContent('speakers', this.state.speakers)
            })
        } else {
            this.setState(prevState => ({
                speakers: prevState.speakers.filter(item => item !== id)
            }), () => {
                this.props.updateContent('speakers', this.state.speakers)

            })
        }
    }
    selectAll = (e) => {
        if (e.target.checked) {
            this.setState(prevState => ({
                speakers: [...prevState.allSpeakers].map(speaker => speaker.identifier)
            }), () => {
                this.props.updateContent('speakers', this.state.speakers)
            })
        } else {
            this.setState(prevState => ({
                speakers: []
            }), () => {
                this.props.updateContent('speakers', this.state.speakers)

            })
        }

    }

    allSelected = () => isEqual(this.state.speakers, [...this.state.allSpeakers].map(speaker => speaker.identifier))

    updateDisplay = (property, e, event) => {
        if (e.target.checked) {
            this.setState(prevState => ({
                display: {
                    ...prevState.display,
                    [event]: {
                        ...prevState.display[event],
                        [property]: true
                    }
                }
            }), () => {
                this.props.updateContent('display', this.state.display)
            });
        }else{
            this.setState(prevState => ({
                display: {
                    ...prevState.display,
                    [event]: {
                        ...prevState.display[event],
                        [property]:false
                    }
                }
            }), () => {
                this.props.updateContent('display', this.state.display)
            });
        }

    }

    render = () => {
        const {} = this.props;


        return (
            <Container>
                <Field>

                    {
                        this.state.eventId && !isEmpty(this.state.eventId) ?
                            <div>
                                <button onClick={() => this.onClickLinkExisting()}>Change source event</button>
                                <p>selected event : {this.state.eventName ? this.state.eventName : ''}</p>
                            </div>
                            : <div>
                                <p>Select source event :</p>
                                <button onClick={() => this.onClickLinkExisting()}>Choose</button>
                            </div>
                    }

                </Field>
                {
                    this.state.allSpeakers ?
                        <Choice>
                            <input checked={this.allSelected()} type={'checkbox'}
                                   onChange={(e) => this.selectAll(e)}/>
                            select all
                        </Choice>
                        : null
                }
                <Selector>
                    {
                        this.state.allSpeakers ?
                            this.state.allSpeakers.map((speaker, i) => {
                                return <Choice key={i}>
                                    <input checked={this.state.speakers.includes(speaker.identifier)} type={'checkbox'}
                                           onChange={(e) => this.toggleChange(e, speaker.identifier)}/>
                                    {speaker.firstname} {speaker.lastname}
                                </Choice>
                            })
                            : null
                    }

                </Selector>
                <Display>
                    {
                        this.props.events && this.props.events.length !== 0 ?
                            <ButtonEvents>
                                {
                                    this.props.events.map((event, i) => {
                                        return <button
                                            key={i}
                                            className={event === this.props.event ? 'current' : ''}
                                            onClick={() => {
                                                this.props.toggleCurrentEvent(event)
                                            }}>{event}</button>
                                    })
                                }
                            </ButtonEvents> : null

                    }
                    {
                        this.state.display && this.state.display[this.props.event] ?
                            Object.keys(this.state.display[this.props.event]).map((key, i) =>  {
                                return <Choice key={i}>
                                    <input checked={this.state.display[this.props.event][key]} type={'checkbox'}
                                           onChange={(e) => this.updateDisplay(key, e, this.state.currentEvent)}/>
                                    {key}
                                </Choice>
                            })

                            : null

                    }
                </Display>
            </Container>
        );
    }
}

SpeakerSelector.protoTypes = {
    asset: PropTypes.object,
    alt: PropTypes.string,
    index: PropTypes.number
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(SpeakerSelector);
