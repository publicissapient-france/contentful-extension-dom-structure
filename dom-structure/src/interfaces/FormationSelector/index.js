import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, Formations, List, Priority, PriorityList, Drop, FormationsContainer} from './styled';
import ButtonValidate from '../../components/ui/ButtonValidate';
import {getCurrentExtension} from '../../actions/index';
import ItemFormation from './ItemFormation';
import ItemPriority from '../../components/ItemPriority';

class FormationSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryFilter: '',
            selectedFormation: '',
            categories: [],
            formations: [],
            selectedFormations: [],
            priority: []
        };
    }

    componentDidMount = async () => {
        await this.initRessources();
        this.setState({
            selectedFormations: this.props.formations,
            priority: this.props.priority
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.formations !== prevProps.formations) {
            this.setState({selectedFormations: this.props.formations})
        }
        if (this.props.priority !== prevProps.priority) {
            this.setState({
                priority: this.props.priority,
                selectedFormations: this.orderSelectedWithPriority()
            }, () => {
                this.props.updateContent(this.state.selectedFormations, 'data')
            })
        }
    }

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;
    getById = (id) => this.state.formations.find(element => element.id === id);

    getCategoryNameByID = (ids) => {
        return this.props.extensionInfo.extension.space.getEntries({
            'sys.id[in]': ids.join(',')
        }).then(result => {
            return result.items.map(item => item.fields.name[this.findProperLocale()])
        })
    }

    initRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'formation',
        }).then(async result => {
            await result.items.map(async item => {
                let categoriesID = item.fields.category[this.findProperLocale()].map(category => category.sys.id);

                let formation = {
                    id: item.sys.id,
                    name: item.fields.name[this.findProperLocale()],
                    categories: await this.getCategoryNameByID(categoriesID)
                }

                this.setState({formations: [...this.state.formations, formation]})

                formation.categories.map(category => {
                    if (!this.state.categories.includes(category)) {
                        this.setState({
                            categories: [...this.state.categories, category]
                        })
                    }
                })
                return formation
            })
        });
    }

    addPriority = (id) => {
        this.setState(prevState => ({
            priority: [...prevState.priority, id]
        }), () => {
            this.props.updateContent(this.state.priority, 'priority')
            this.refreshOrderWithPriority()
        })
    }

    updatePriority = (id) => !this.alreadyOnPriority(id) ? this.addPriority(id) : this.removePriority(id);

    removePriority = (id) => {
        this.setState(prevState => ({
            priority: prevState.priority.filter(item => item !== id)
        }), () => {
            this.props.updateContent(this.state.priority, 'priority')
            this.refreshOrderWithPriority()
        })
    }

    refreshOrderWithPriority = () => {
        this.setState({
            selectedFormations: this.orderSelectedWithPriority()
        }, () => {
            this.props.updateContent(this.state.selectedFormations, 'data')
        })
    }

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)

    addSelected = (id) => {
        this.setState(prevState => ({
            selectedFormations: [...prevState.selectedFormations, id]
        }), () => {
            this.setState({selectedFormation: ''})
            this.props.updateContent(this.state.selectedFormations, 'data')
        })
    }

    removeFromSelectedList = (id) => {
        this.setState(prevState => ({
            selectedFormations: prevState.selectedFormations.filter(item => item !== id)
        }), () => {
            this.removePriority(id)
            this.props.updateContent(this.state.selectedFormations, 'data')
        })
    }

    alreadySelected = (id) => this.state.selectedFormations.find(item => item === id)

    orderSelectedWithPriority = () => [...this.state.priority, ...this.state.selectedFormations.filter(id => !this.alreadyOnPriority(id))];

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

    getFilteredFormation = () => {
        return this.state.formations.map(formation => formation.categories.includes(this.state.categoryFilter) ? formation : null)
            .filter(el => el)
            .filter(formation => !this.state.selectedFormations.includes(formation.id))
    }

    render = () => {
        return (
            <Container>
                <Drop>
                    <div>
                        <label>Select Category</label>
                        <select value={this.state.categoryFilter}
                                onChange={(e) => this.setState({categoryFilter: e.target.value})}
                        >
                            <option value={''}></option>
                            {
                                this.state.categories ?
                                    this.state.categories.map(category => <option key={category} value={category}>{category}</option>)
                                    : null
                            }
                        </select>
                    </div>
                    <div>
                        <label>Select Formation</label>
                        <select value={this.state.selectedFormation}
                                disabled={this.state.categoryFilter === '' ? true : false}
                                onChange={(e) => this.setState({selectedFormation: e.target.value})}>
                            <option value={''}></option>
                            {
                                this.getFilteredFormation() ?
                                    this.getFilteredFormation().map(formation => <option key={formation.name} value={formation.id}>{formation.name}</option>)
                                    : null
                            }
                        </select>
                    </div>
                    <div>
                        <ButtonValidate label={'Add'} disabled={this.state.selectedFormation === ''}
                                        action={() => this.addSelected(this.state.selectedFormation)}/>
                    </div>
                </Drop>
                <FormationsContainer>
                    <Formations>
                        <label>Formations</label>
                        <List>
                            {
                                this.state.formations ? this.state.formations.filter(formation => this.state.selectedFormations.includes(formation.id))
                                    .map((formation, i) => {
                                        return <ItemFormation formation={formation}
                                                              priority={this.state.priority} key={i}
                                                              updatePriority={this.updatePriority}
                                                              removeFromSelectedList={this.removeFromSelectedList}
                                        />
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
                                    return <ItemPriority data={formation}
                                                         index={i}
                                                         key={i}
                                                         moveElementToBottom={this.moveElementToBottom}
                                                         moveElementToTop={this.moveElementToTop}
                                    />

                                }) : null
                            }
                        </PriorityList>
                    </Priority>
                </FormationsContainer>
            </Container>
        );
    }
}

FormationSelector.protoTypes = {
    formations: PropTypes.array,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(FormationSelector);


/*


//FUNCTIONNAL

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
*/