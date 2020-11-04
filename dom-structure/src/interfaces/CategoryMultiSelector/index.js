import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, Partners, Select, List, Priority, PriorityList} from './styled';
import {getCurrentExtension} from '../../actions/index';
import ItemPriority from '../../components/ItemPriority';

const CategoryMultiSelector = ({extensionInfo, categories, priority, updateContent}) => {
    const [innerPriority, setInnerPriority] = useState(priority);
    const [innerCategory, setInnerCategory] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(categories);

    useEffect(() => {
        async function initialization() {
            await initRessources();
        }

        initialization();
        setInnerPriority(priority);
        setSelectedCategories(categories);
    }, []);

    useEffect(() => {
        setSelectedCategories(categories)
    }, [categories]);

    useEffect(() => {
        updateContent(innerPriority, 'priority')
    }, [innerPriority])

    useEffect(() => {
        updateContent(selectedCategories, 'data')
    }, [selectedCategories])

    const initRessources = async () => {
        await extensionInfo.extension.space.getEntries({
            'content_type': 'category',
        }).then(result => {
            setInnerCategory(result.items.map(item => {
                let category = {
                    id: item.sys.id,
                    name: item.fields.name[findProperLocale()]
                }
                return category
            }));
        });
    }

    const findProperLocale = () => extensionInfo.extension.locales.default;

    const alreadyOnPriority = (id) => innerPriority.find(item => item === id)

    const getById = (id) => innerCategory.find(element => element.id === id);

    const orderSelectedWithNewPriority = (newPriority) => [...newPriority, ...selectedCategories.filter(id => !(newPriority.find(item => item === id)))];

    const addPriority = (id) => {
        const newPriority = [...innerPriority, id];
        setInnerPriority(newPriority);
        setSelectedCategories(orderSelectedWithNewPriority(newPriority));
    }

    const removePriority = (id) => {
        const newPriority = innerPriority.filter(item => item !== id);
        setInnerPriority(newPriority);
        setSelectedCategories(orderSelectedWithNewPriority(newPriority));
    }

    const updatePriority = (id) => !alreadyOnPriority(id) ? addPriority(id) : removePriority(id);

    const addSelected = (id) => {
        setSelectedCategories([...selectedCategories, id])
    }

    const removeFromSelectedList = (id) => {
        setSelectedCategories(selectedCategories.filter(item => item !== id));
        setInnerPriority(innerPriority.filter(item => item !== id));
    }

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeFromSelectedList(id);

    const alreadySelected = (id) => selectedCategories.find(item => item === id) ? true : false;

    const moveElementToTop = (index) => {
        if (index === 0) return
        const a = priority[index];
        const b = priority[index - 1];
        let newOrder = [...priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        setInnerPriority(newOrder);
        setSelectedCategories(orderSelectedWithNewPriority(newOrder));
    }

    const moveElementToBottom = (index) => {
        if (index === (priority.length - 1)) return
        const a = priority[index];
        const b = priority[index + 1];
        let newOrder = [...priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        setInnerPriority(newOrder);
        setSelectedCategories(orderSelectedWithNewPriority(newOrder));
    }

    return (
        <Container>
            <Partners>
                <label>Category</label>
                <List>
                    {
                        innerCategory &&
                        innerCategory.sort((a, b) => a.name.localeCompare(b.name))
                            .map((category, i) => {
                                return <Select key={i}>
                                    <input checked={alreadySelected(category.id)} type={'checkbox'}
                                           onChange={(e) => updateSelected(e, category.id)}/>
                                    <p className={alreadyOnPriority(category.id) ? 'active' : ''}
                                       onClick={() => updatePriority(category.id)}>{category.name}</p>
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
                            const category = getById(id);
                            return <ItemPriority data={category}
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
    );
}

CategoryMultiSelector.protoTypes = {
    categories: PropTypes.array,
    priority: PropTypes.array,
    updateContent : PropTypes.func
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CategoryMultiSelector);
