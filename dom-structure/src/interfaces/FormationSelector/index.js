import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Formations,
    List,
    Priority,
    PriorityList,
    Element,
    Identity,
    ButtonsMove,
    Button, Drop, FormationsContainer
} from './styled';
import ButtonValidate from '../../components/ui/ButtonValidate';
import {getCurrentExtension} from '../../actions/index';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';
import ListItem from './ListItem';

class FormationSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryFilter: '',
            selectedFormation : '',
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
        }, () => {
            console.log('STATE AFTER MOUNT', this.state)
        })
    };

    componentDidUpdate(prevProps) {

        if (this.props.formations !== prevProps.formations) {
            this.setState({
                selectedFormations: this.props.formations
            })
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

    getCategoryNameByID = (ids) => {
        return this.props.extensionInfo.extension.space.getEntries({
            'sys.id[in]': ids.join(',')
        }).then(result => {
            console.log('RESULT CATEGORIES', result)
            return result.items.map(item => item.fields.name[this.findProperLocale()])
        })
    }

    initRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'formation',
        }).then(async result => {
            await result.items.map(async item => {

                console.log('ITEM', item);
                let categoriesID = item.fields.category[this.findProperLocale()].map(category => category.sys.id);

                let formation = {
                    id: item.sys.id,
                    name: item.fields.name[this.findProperLocale()],
                    categories: await this.getCategoryNameByID(categoriesID)
                }

                this.setState({
                    formations: [...this.state.formations, formation]
                })

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

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)
    alreadySelected = (id) => this.state.selectedFormations.find(item => item === id)

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

    updatePriority = (id) => !this.alreadyOnPriority(id) ? this.addPriority(id) : this.removePriority(id);

    addSelected = (id) => {
        this.setState(prevState => ({
            selectedFormations: [...prevState.selectedFormations, id]
        }), () => {
            this.setState({
                selectedFormation : ''
            })
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

    orderSelectedWithPriority = () => [...this.state.priority, ...this.state.selectedFormations.filter(id => !this.alreadyOnPriority(id))];

    getById = (id) => this.state.formations.find(element => element.id === id);

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
            .filter( formation => !this.state.selectedFormations.includes(formation.id)  )
    }


    render = () => {
        return (
            <Container>
                <Drop>
                    <div>
                        <label>Select Category</label>
                        <select value={this.state.categoryFilter}
                                onChange={(e) => this.setState({categoryFilter: e.target.value}, () => {
                                    console.log('STATE AFTER UPDATE', this.state);


                                })}
                        >
                            <option value={''}></option>
                            {
                                this.state.categories ?
                                    this.state.categories.map(category => <option value={category}>{category}</option>)
                                    : null
                            }
                        </select>
                    </div>
                    <div>
                        <label>Select Formation</label>
                        <select value={this.state.selectedFormation}
                                onChange={(e) => this.setState({selectedFormation: e.target.value}, () => {
                            console.log('STATE AFTER UPDATE selectedFormation', this.state);


                        })}>
                            <option value={''}></option>
                            {
                                this.getFilteredFormation() ?
                                    this.getFilteredFormation().map(formation => <option
                                        value={formation.id}>{formation.name}</option>)
                                    : null
                            }

                        </select>
                    </div>
                    <div>
                        <ButtonValidate label={'Add'} disabled={this.state.selectedFormation === ''} action={() => this.addSelected(this.state.selectedFormation)}/>
                    </div>


                </Drop>
                <FormationsContainer>
                    <Formations>
                        <label>Formations</label>
                        <List>
                            {
                                this.state.formations ? this.state.formations.filter( formation => this.state.selectedFormations.includes(formation.id))
                                    .map((formation, i) => {
                                    return <ListItem formation={formation}
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
                                    if (!formation) return null
                                    return <Element>
                                        <ButtonsMove>
                                            <Button
                                                onClick={() => this.moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                            <Button onClick={() => this.moveElementToTop(i)}><SvgArrowToTop/></Button>
                                        </ButtonsMove>
                                        <Identity>{formation.name}</Identity>
                                    </Element>
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
