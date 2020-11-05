import React, {useEffect, useState} from 'react';
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

const SpeakerSelector = ({speakers, priority, display, updateContent, extensionInfo}) => {
    const [innerPriority, setInnerPriority] = useState(priority);
    const [innerSpeakers, setInnerSpeakers] = useState([]);
    const [selectedSpeakers, setSelectedSpeakers] = useState(speakers);
    const [innerDisplay, setInnerDisplay] = useState(display);

    useEffect(() => {
        async function initialization() {
            await initRessources();
        }

        initialization();
        setInnerPriority(priority);
        setSelectedSpeakers(speakers);
        setInnerDisplay(display);
    }, []);

    useEffect(() => {
        setSelectedSpeakers(speakers);
    }, [speakers]);

    useEffect(() => {
        setInnerDisplay(display);
    }, [display]);

    useEffect(() => {
        updateContent(innerPriority, 'priority');
    }, [innerPriority])

    useEffect(() => {
        updateContent(innerDisplay, 'display');
    }, [innerDisplay])

    useEffect(() => {
        updateContent(selectedSpeakers, 'speakers');
    }, [selectedSpeakers])

    const initRessources = async () => {
        await extensionInfo.extension.space.getEntries({
            'content_type': 'website',
        }).then(selectedEntry => {
            const speakersUrl = selectedEntry.items[0].fields.speakers[findProperLocale()];
            fetch(speakersUrl)
                .then(results => {
                    const result = results.json();
                    return result
                })
                .then(data => {
                    setInnerSpeakers(data)
                });
        })
    }
    const findProperLocale = () => extensionInfo.extension.locales.default;
    const alreadyOnPriority = (id) => innerPriority.find(item => item === id);
    const alreadySelected = (id) => selectedSpeakers.find(item => item === id) ? true : false;
    const orderSelectedWithNewPriority = (newPriority) => [...newPriority, ...selectedSpeakers.filter(id => !(newPriority.find(item => item === id)))];
    const getById = (id) => innerSpeakers.find(element => element.id === id);

    const addPriority = (id) => {
        const newPriority = [...innerPriority, id];
        setInnerPriority(newPriority);
        setSelectedSpeakers(orderSelectedWithNewPriority(newPriority));
    }

    const removePriority = (id) => {
        const newPriority = innerPriority.filter(item => item !== id);
        setInnerPriority(newPriority);
        setSelectedSpeakers(orderSelectedWithNewPriority(newPriority));
    }

    const updatePriority = (id) => !alreadyOnPriority(id) ? addPriority(id) : removePriority(id);

    const addSelected = (id) => {
        setSelectedSpeakers([...selectedSpeakers, id])
    }

    const removeSelected = (id) => {
        setSelectedSpeakers(selectedSpeakers.filter(item => item !== id));
        setInnerPriority(innerPriority.filter(item => item !== id));
    }

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeSelected(id);

    const toggleDisplay = (prop, subProp, value) => {
        setInnerDisplay(prev => ({
            ...prev,
            [prop]: {
                ...prev[prop],
                [subProp]: value
            }
        }))
    }

    const moveElementToTop = (index) => {
        if (index === 0) return
        const a = priority[index];
        const b = priority[index - 1];
        let newOrder = [...priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        setInnerPriority(newOrder);
        setSelectedSpeakers(orderSelectedWithNewPriority(newOrder));
    }

    const moveElementToBottom = (index) => {
        if (index === (priority.length - 1)) return
        const a = priority[index];
        const b = priority[index + 1];
        let newOrder = [...priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        setInnerPriority(newOrder);
        setSelectedSpeakers(orderSelectedWithNewPriority(newOrder));
    }

    return (
        <Container>
            <Speakers>
                <label>Speakers</label>
                <List>
                    {
                        innerSpeakers && innerSpeakers.map((speaker, i) => {
                            return <Select key={i}>
                                <input checked={selectedSpeakers.includes(speaker.id)} type={'checkbox'}
                                       onChange={(e) => updateSelected(e, speaker.id)}/>
                                <p className={innerPriority.includes(speaker.id) ? 'active' : ''}
                                   onClick={() => updatePriority(speaker.id)}>
                                    {speaker.firstName} {speaker.lastName}
                                    </p>
                            </Select>
                        })
                    }
                </List>
            </Speakers>
            <Priority>
                <label>Priority List</label>
                <PriorityList>
                    {
                        innerPriority && innerPriority.map((id, i) => {
                            const speaker = getById(id);
                            if (!speaker) return null
                            return <Element>
                                <ButtonsMove>
                                    <Button onClick={() => moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                    <Button onClick={() => moveElementToTop(i)}><SvgArrowToTop/></Button>
                                </ButtonsMove>
                                <Identity>{speaker.firstName} {speaker.lastName}</Identity>
                            </Element>
                        })
                    }
                </PriorityList>
                <Display>
                    <div>
                        <label>Tiny content</label>
                        <Select>
                            <input
                                checked={innerDisplay && innerDisplay.logo && innerDisplay.logo.tiny ? innerDisplay.logo.tiny : false}
                                type={'checkbox'}
                                onChange={(e) => toggleDisplay('logo', 'tiny', e.target.checked)}/>
                            Logo
                        </Select>
                    </div>
                    <div>
                        <label>Large content</label>
                        <Select>
                            <input
                                checked={innerDisplay && innerDisplay.logo && innerDisplay.logo.large ? innerDisplay.logo.large : false}
                                type={'checkbox'}
                                onChange={(e) => toggleDisplay('logo', 'large', e.target.checked)}/>
                            Logo
                        </Select>
                    </div>
                </Display>
            </Priority>
        </Container>
    );
}

SpeakerSelector.protoTypes = {
    speakers: PropTypes.array,
    display: PropTypes.object,
    priority: PropTypes.array,
    updateContent : PropTypes.func
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(SpeakerSelector);
