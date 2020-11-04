import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, Formations, List, Priority, PriorityList, Drop, FormationsContainer} from './styled';
import ButtonValidate from '../../components/ui/ButtonValidate';
import {getCurrentExtension} from '../../actions/index';
import ItemFormation from './ItemFormation';
import ItemPriority from '../../components/ItemPriority';

const FormationSelector = ({formations, priority, updateContent, extensionInfo}) => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [selectedFormation, setSelectedFormation] = useState('');
    const [innerCategories, setInnerCategories] = useState([]);
    const [innerFormations, setInnerFormations] = useState([]);
    const [selectedFormations, setSelectedFormations] = useState([]);
    const [innerPriority, setInnerPriority] = useState([]);

    useEffect(() => {
        async function initialization() {
            await initRessources();
        }

        initialization();

        setInnerPriority(priority);
        setSelectedFormations(formations);
    }, []);

    useEffect(() => {
        setSelectedFormations(formations);
    }, [formations]);

    useEffect(() => {
        updateContent(selectedFormations, 'data')
    }, [selectedFormations])

    useEffect(() => {
        updateContent(innerPriority, 'priority')
    }, [innerPriority])

    const initRessources = async () => {
        await extensionInfo.extension.space.getEntries({
            'content_type': 'formation',
        }).then(async result => {
            await result.items.map(async item => {
                let categoriesID = item.fields.category[findProperLocale()].map(category => category.sys.id);

                let formation = {
                    id: item.sys.id,
                    name: item.fields.name[findProperLocale()],
                    categories: await getCategoryNameByID(categoriesID)
                }

                setInnerFormations([...innerFormations, formation])

                formation.categories.map(category => {
                    if (!innerCategories.includes(category)) {
                        setInnerCategories([...innerCategories, category])
                    }
                })
                return formation
            })
        });
    }

    const findProperLocale = () => extensionInfo.extension.locales.default;

    const getById = (id) => innerFormations.find(element => element.id === id);

    const orderSelectedWithNewPriority = (newPriority) => [...newPriority, ...selectedFormations.filter(id => !(newPriority.find(item => item === id)))];


    const getCategoryNameByID = (ids) => {
        return extensionInfo.extension.space.getEntries({
            'sys.id[in]': ids.join(',')
        }).then(result => {
            return result.items.map(item => item.fields.name[findProperLocale()])
        })
    }

    const alreadyOnPriority = (id) => innerPriority.find(item => item === id)

    const addPriority = (id) => {
        const newPriority = [...innerPriority, id];
        setInnerPriority(newPriority);
        setSelectedFormations(orderSelectedWithNewPriority(newPriority));
    }

    const removePriority = (id) => {
        const newPriority = innerPriority.filter(item => item !== id);
        setInnerPriority(newPriority);
        setSelectedFormations(orderSelectedWithNewPriority(newPriority));
    }

    const updatePriority = (id) => !alreadyOnPriority(id) ? addPriority(id) : removePriority(id);

    const addSelected = (id) => {
        setSelectedFormations([...selectedFormations, id])
    }

    const removeFromSelectedList = (id) => {
        setSelectedFormations(selectedFormations.filter(item => item !== id));
        setInnerPriority(innerPriority.filter(item => item !== id));
    }

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeFromSelectedList(id);

    const alreadySelected = (id) => selectedFormations.find(item => item === id) ? true : false;

    const moveElementToTop = (index) => {
        if (index === 0) return
        const a = priority[index];
        const b = priority[index - 1];
        let newOrder = [...priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        setInnerPriority(newOrder);
        setSelectedFormations(orderSelectedWithNewPriority(newOrder));
    }

    const moveElementToBottom = (index) => {
        if (index === (priority.length - 1)) return
        const a = priority[index];
        const b = priority[index + 1];
        let newOrder = [...priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        setInnerPriority(newOrder);
        setSelectedFormations(orderSelectedWithNewPriority(newOrder));
    }

    const getFilteredFormation = () => {
        return innerFormations.map(formation => formation.categories.includes(categoryFilter) ? formation : null)
            .filter(el => el)
            .filter(formation => !selectedFormations.includes(formation.id))
    }

    return (
        <Container>
            <Drop>
                <div>
                    <label>Select Category</label>
                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value={''}></option>
                        {
                            innerCategories &&
                            innerCategories.map(category => <option key={category}
                                                                    value={category}>{category}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>Select Formation</label>
                    <select value={selectedFormation}
                            disabled={categoryFilter === '' ? true : false}
                            onChange={(e) => setSelectedFormation(e.target.value)}>
                        <option value={''}></option>
                        {
                            getFilteredFormation() &&
                            getFilteredFormation().map(formation => <option key={formation.name}
                                                                            value={formation.id}>{formation.name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <ButtonValidate label={'Add'} disabled={selectedFormation === ''}
                                    action={() => addSelected(selectedFormation)}/>
                </div>
            </Drop>
            <FormationsContainer>
                <Formations>
                    <label>Formations</label>
                    <List>
                        {
                            innerFormations &&
                            innerFormations.filter(formation => selectedFormations.includes(formation.id))
                                .map((formation, i) => {
                                    return <ItemFormation formation={formation}
                                                          priority={innerPriority} key={i}
                                                          updatePriority={updatePriority}
                                                          removeFromSelectedList={removeFromSelectedList}
                                    />
                                })
                        }
                    </List>
                </Formations>
                <Priority>
                    <label>Priority List</label>
                    <PriorityList>
                        {
                            innerPriority && innerPriority.map((id, i) => {
                                const formation = getById(id);
                                return <ItemPriority data={formation}
                                                     index={i}
                                                     key={i}
                                                     moveElementToBottom={moveElementToBottom}
                                                     moveElementToTop={moveElementToTop}
                                />
                            })
                        }
                    </PriorityList>
                </Priority>
            </FormationsContainer>
        </Container>
    );
}

FormationSelector.protoTypes = {
    updateContent : PropTypes.func,
    formations: PropTypes.array,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(FormationSelector);
