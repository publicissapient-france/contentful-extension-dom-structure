import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Partners,
    Select,
    List, Priority, PriorityList
} from './styled';
import {getCurrentExtension} from '../../actions/index';
import ItemPriority from '../../components/ItemPriority';
import {usePrevValues} from "../../utils/hooks";

const CategoryMultiSelector = ({extensionInfo, categories, priority, updateContent}) => {
    const [state, setState] = useState({
        categories: [],
        selectedCategories: [],
        priority: []
    });

    useEffect(() => {
        async function initialization() {
            await initRessources();
        }

        initialization();


        setState(prev => ({
            ...prev,
            selectedCategories: categories,
            priority: priority
        }))
    }, []);

    usePrevValues(
        useMemo(() => ({
            categories
        }), [categories]),
        useCallback(prevValues => {
            if (prevValues.categories !== categories) {
                setState(prev => ({
                    ...prev,
                    selectedCategories: categories
                }));
            }
        }, [categories])
    );

    usePrevValues(
        useMemo(() => ({
            priority
        }), [priority]),
        useCallback(prevValues => {
            if (prevValues.priority !== priority) {
                setState(prev => ({
                    ...prev,
                    priority: priority,
                    selectedCategories: orderSelectedWithPriority()
                }));
            }
        }, [priority])
    );

    usePrevValues(
        useMemo(() => ({
            state
        }), [state]),
        useCallback(prevValues => {
            if (prevValues.state.priority !== state.priority) {
                updateContent(state.priority, 'priority')
            }
            if (prevValues.state.selectedCategories !== state.selectedCategories) {
                updateContent(state.selectedCategories, 'data')
            }
        }, [state])
    );

    const initRessources = async () => {
        await extensionInfo.extension.space.getEntries({
            'content_type': 'category',
        }).then(result => {
            setState(prev => ({
                ...prev,
                categories: result.items.map(item => {
                    let category = {
                        id: item.sys.id,
                        name: item.fields.name[findProperLocale()]
                    }
                    return category
                })
            }))
        });

    }
    const findProperLocale = () => extensionInfo.extension.locales.default;

    const orderSelectedWithPriority = () => [...state.priority, ...state.selectedCategories.filter(id => !alreadyOnPriority(id))];

    const alreadyOnPriority = (id) => state.priority.find(item => item === id)

    const getById = (id) => state.categories.find(element => element.id === id);

    const orderSelectedWithNewPriority = (newPriority) => [...newPriority, ...state.selectedCategories.filter(id => !(newPriority.find(item => item === id)))];

    const addPriority = (id) => {
        const newPriority = [...state.priority, id]
        setState(prev => ({
            ...prev,
            priority: newPriority,
            selectedCategories: orderSelectedWithNewPriority(newPriority)
        }));
    }

    const removePriority = (id) => {
        const newPriority = state.priority.filter(item => item !== id);
        setState(prev => ({
            ...prev,
            priority: newPriority,
            selectedCategories: orderSelectedWithNewPriority(newPriority)
        }));
    }

    const updatePriority = (id) => !alreadyOnPriority(id) ? addPriority(id) : removePriority(id);

    const addSelected = (id) => {
        setState(prev => ({
            ...prev,
            selectedCategories: [...prev.selectedCategories, id]
        }));
    }

    const removeFromSelectedList = (id) => {
        setState(prev => ({
            ...prev,
            selectedCategories: prev.selectedCategories.filter(item => item !== id),
            priority: prev.priority.filter(item => item !== id)
        }));
    }

    const alreadySelected = (id) => state.selectedCategories.find(item => item === id) ? true : false;

    const moveElementToTop = (index) => {
        if (index === 0) return
        const a = priority[index];
        const b = priority[index - 1];
        let newOrder = [...priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        setState(prev => ({
            ...prev,
            priority: newOrder,
            selectedCategories: orderSelectedWithNewPriority(newOrder)
        }));
    }

    const moveElementToBottom = (index) => {
        if (index === (priority.length - 1)) return
        const a = priority[index];
        const b = priority[index + 1];
        let newOrder = [...priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        setState(prev => ({
            ...prev,
            priority: newOrder,
            selectedCategories: orderSelectedWithNewPriority(newOrder)
        }));
    }

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeFromSelectedList(id);

    return (
        <Container>
            <Partners>
                <label>Category</label>
                <List>
                    {
                        state.categories ? state.categories.sort((a, b) => a.name.localeCompare(b.name))
                            .map((category, i) => {
                                return <Select key={i}>
                                    <input checked={alreadySelected(category.id)} type={'checkbox'}
                                           onChange={(e) => updateSelected(e, category.id)}/>
                                    <p className={alreadyOnPriority(category.id) ? 'active' : ''}
                                       onClick={() => updatePriority(category.id)}>{category.name}</p>
                                </Select>
                            }) : null
                    }
                </List>
            </Partners>
            <Priority>
                <label>Priority List</label>
                <PriorityList>
                    {
                        state.priority ? state.priority.map((id, i) => {
                            const category = getById(id);
                            return <ItemPriority data={category}
                                                 index={i}
                                                 key={i}
                                                 moveElementToBottom={moveElementToBottom}
                                                 moveElementToTop={moveElementToTop}
                            />

                        }) : null
                    }
                </PriorityList>
            </Priority>
        </Container>
    );
}

CategoryMultiSelector.protoTypes = {
    partners: PropTypes.array,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CategoryMultiSelector);
