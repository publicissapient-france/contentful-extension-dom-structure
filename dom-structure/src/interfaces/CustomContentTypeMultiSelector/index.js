import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Partners,
    Select,
    List, Priority, PriorityList, SelectContentType
} from './styled';
import {getCurrentExtension} from '../../actions/index';
import ItemPriority from '../../components/ItemPriority';

const CustomContentTypeMultiSelector = ({contents, priority, contentType, extensionInfo, updateContent}) => {
    const [innerContents, setInnerContents] = useState([]);
    const [selectedContents, setSelectedContents] = useState(contents);
    const [innerPriority, setInnerPriority] = useState(priority);
    const [innerContentType, setInnerContentType] = useState(contentType);

    const availableContentType = ["publication", "event", "customerCase"];

    useEffect(() => {
        setInnerPriority(priority);
        setSelectedContents(contents);
    }, []);

    useEffect(() => {
        async function initialization() {
            if (innerContentType !== "") {
                await initRessources(innerContentType);
            }
        }
        initialization();

        updateContent(innerContentType, 'contentType');

    }, [innerContentType]);

    useEffect(() => {
        setSelectedContents(contents);
    }, [contents]);

    useEffect(() => {
        updateContent(innerPriority, 'priority');
    }, [innerPriority]);

    useEffect(() => {
        updateContent(selectedContents, 'data');
    }, [selectedContents])


    const initRessources = async (contentType) => {
        try {
            await extensionInfo.extension.space.getEntries({
                'content_type': contentType,
            }).then(result => {
                setInnerContents(result.items.map(item => {
                    let content = {
                        id: item.sys.id,
                        name: item.fields.name[findProperLocale()]
                    }
                    return content
                }))
            });
        } catch (error) {
            console.error('content type does not exist on this contentful space');
            setInnerContents([]);
        }
    }
    const orderSelectedWithNewPriority = (newPriority) => [...newPriority, ...selectedContents.filter(id => !(newPriority.find(item => item === id)))];
    const alreadyOnPriority = (id) => innerPriority.find(item => item === id)

    const addPriority = (id) => {
        const newPriority = [...innerPriority, id];
        setInnerPriority(newPriority);
        setSelectedContents(orderSelectedWithNewPriority(newPriority));
    }

    const removePriority = (id) => {
        const newPriority = innerPriority.filter(item => item !== id);
        setInnerPriority(newPriority);
        setSelectedContents(orderSelectedWithNewPriority(newPriority));
    }

    const updatePriority = (id) => !alreadyOnPriority(id) ? addPriority(id) : removePriority(id);

    const addSelected = (id) => {
        setSelectedContents([...selectedContents, id])
    }

    const removeFromSelectedList = (id) => {
        setSelectedContents(selectedContents.filter(item => item !== id));
        setInnerPriority(innerPriority.filter(item => item !== id));
    }

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeFromSelectedList(id);

    const alreadySelected = (id) => selectedContents.find(item => item === id) ? true : false;


    const findProperLocale = () => extensionInfo.extension.locales.default;
    const getById = (id) => innerContents.find(element => element.id === id);

    const moveElementToTop = (index) => {
        if (index === 0) return
        const a = priority[index];
        const b = priority[index - 1];
        let newOrder = [...priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        setInnerPriority(newOrder);
        setSelectedContents(orderSelectedWithNewPriority(newOrder));
    }

    const moveElementToBottom = (index) => {
        if (index === (priority.length - 1)) return
        const a = priority[index];
        const b = priority[index + 1];
        let newOrder = [...priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        setInnerPriority(newOrder);
        setSelectedContents(orderSelectedWithNewPriority(newOrder));
    }

    const updateContentType = async (value) => {
        setInnerContentType(value);
        setInnerPriority([]);
        setSelectedContents([]);
    }

    return (
        <>
            <SelectContentType>
                <label>Choose Content Type</label>
                <select value={innerContentType}
                        onChange={(e) => updateContentType(e.target.value)}
                >
                    <option value={''}></option>
                    {
                        availableContentType &&
                        availableContentType.map(contentType => <option key={contentType}
                                                                        value={contentType}>{contentType}</option>)
                    }
                </select>
            </SelectContentType>
            <Container>
                <Partners>
                    <label>Select Content</label>
                    <List>
                        {
                            innerContents &&
                            innerContents.sort((a, b) => a.name.localeCompare(b.name))
                                .map((content, i) => {
                                    return <Select key={i}>
                                        <input checked={alreadySelected(content.id)} type={'checkbox'}
                                               onChange={(e) => updateSelected(e, content.id)}/>
                                        <p className={alreadyOnPriority(content.id) ? 'active' : ''}
                                           onClick={() => updatePriority(content.id)}>{content.name}</p>
                                    </Select>
                                })
                        }
                    </List>
                </Partners>
                <Priority>
                    <label>Priority List</label>
                    <PriorityList>
                        {
                            innerPriority &&
                            innerPriority.map((id, i) => {
                                const content = getById(id);
                                return <ItemPriority data={content}
                                                     index={i}
                                                     key={i}
                                                     moveElementToBottom={moveElementToBottom}
                                                     moveElementToTop={moveElementToTop}
                                />

                            })
                        }
                    </PriorityList>
                </Priority>
            </Container>
        </>
    );
}

CustomContentTypeMultiSelector.protoTypes = {
    contents : PropTypes.array,
    priority: PropTypes.array,
    contentType : PropTypes.string,
    updateContent : PropTypes.func
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CustomContentTypeMultiSelector);
