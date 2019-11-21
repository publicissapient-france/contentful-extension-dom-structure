import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Field, Selector, Choice} from './styled';
import {getCurrentExtension} from '../../actions/index';
import isEmpty from 'lodash/isEmpty'
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
    };

    componentDidUpdate(prevProps) {

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
                <Selector>
                    {
                        this.state.allSpeakers ?
                            this.state.allSpeakers.map((speaker, i) => {
                                return <Choice key={i}>
                                    <input defaultChecked={this.state.speakers.includes(speaker.id)} type={'checkbox'}
                                           onChange={(e) => this.toggleChange(e, speaker.id)}/>
                                    {speaker.firstname} {speaker.lastname}
                                </Choice>
                            })
                            : null
                    }

                </Selector>
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
