import React, {Component} from 'react';
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

class CategoryMultiSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            selectedCategories: [],
            priority : [],
        };
    }

    componentDidMount = async () => {
        await this.initRessources();
        this.setState({
            selectedCategories: this.props.categories,
            priority: this.props.priority
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.categories !== prevProps.categories) {
            this.setState({
                selectedCategories: this.props.categories
            })
        }
        if (this.props.priority !== prevProps.priority) {
            this.setState({
                priority: this.props.priority,
                selectedCategories: this.orderSelectedWithPriority()
            }, () => {
                this.props.updateContent(this.state.selectedCategories, 'data')
            })
        }
    }

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;
    getById = (id) => this.state.categories.find(element => element.id === id);


    initRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'category',
        }).then(result => {
            this.setState({
                categories: result.items.map(item => {
                    let category = {
                        id: item.sys.id,
                        name: item.fields.name[this.findProperLocale()]
                    }
                    return category
                })
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
            selectedCategories: this.orderSelectedWithPriority()
        }, () => {
            this.props.updateContent(this.state.selectedCategories, 'data')
        })
    }

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)


   // alreadySelected = (id) => this.state.selected === id

    addSelected = (id) => {
        this.setState(prevState => ({
            selectedCategories: [...prevState.selectedCategories, id]
        }), () => {

            this.props.updateContent(this.state.selectedCategories, 'data')
        })
    }

    removeFromSelectedList = (id) => {
        this.setState(prevState => ({
            selectedCategories: prevState.selectedCategories.filter(item => item !== id)
        }), () => {
            this.removePriority(id)
            this.props.updateContent(this.state.selectedCategories, 'data')
        })
    }

    alreadySelected = (id) => this.state.selectedCategories.find(item => item === id) ? true : false


    orderSelectedWithPriority = () => [...this.state.priority, ...this.state.selectedCategories.filter(id => !this.alreadyOnPriority(id))];

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

   // updateSelected = (e, id) => (e.target.checked) ? this.addSelected(id) : this.removeSelected();

    updateSelected = (e, id) => (e.target.checked) ? this.addSelected(id) : this.removeFromSelectedList(id);


    render = () => {
        return (
            <Container>
                <Partners>
                    <label>Category</label>
                    <List>
                        {
                            this.state.categories ? this.state.categories.sort((a, b) => a.name.localeCompare(b.name))
                                .map((category, i) => {
                                return <Select key={i}>
                                    <input checked={this.alreadySelected(category.id)} type={'checkbox'}
                                           onChange={(e) => this.updateSelected(e, category.id) }/>
                                    <p>{category.name}</p>
                                </Select>
                            }) : null
                        }
                    </List>
                </Partners>
                <Priority>
                    <label>Priority List</label>
                    <PriorityList>
                        {
                            this.state.priority ? this.state.priority.map((id, i) => {
                                const category = this.getById(id);
                                return <ItemPriority data={category}
                                                     index={i}
                                                     key={i}
                                                     moveElementToBottom={this.moveElementToBottom}
                                                     moveElementToTop={this.moveElementToTop}
                                />

                            }) : null
                        }
                    </PriorityList>
                </Priority>
            </Container>
        );
    }
}

CategoryMultiSelector.protoTypes = {
    partners: PropTypes.array,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CategoryMultiSelector);
