import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Partners,
    Select,
    List,
    Priority,
    PriorityList,
    Element,
    Identity,
    ButtonsMove,
    Button
} from './styled';
import {getCurrentExtension} from '../../actions/index';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';

class CategorySelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            selected: ''
        };
    }

    componentDidMount = async () => {
        await this.initRessources();
        this.setState({
            selected: this.props.category
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.setState({
                selected: this.props.category
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

    alreadySelected = (id) => this.state.selected === id

    addSelected = (id) => {
        this.setState(prevState => ({
            selected: id
        }), () => {
            this.props.updateContent('data', this.state.selected)
        })
    }

    removeSelected = (id) => {
        this.setState(prevState => ({
            selected: ''
        }), () => {
            this.props.updateContent('data', this.state.selected)
        })
    }

    updateSelected = (e, id) => (e.target.checked) ? this.addSelected(id) : this.removeSelected();

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
                                        <input checked={this.state.selected === category.id} type={'checkbox'}
                                               onChange={(e) => this.updateSelected(e, category.id)}/>
                                        <p>{category.name}</p>
                                    </Select>
                                }) : null
                        }
                    </List>
                </Partners>
            </Container>
        );
    }
}

CategorySelector.protoTypes = {
    partners: PropTypes.array,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CategorySelector);

/*import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, Partners, Select, List} from './styled';
import {getCurrentExtension} from '../../actions/index';

const CategorySelector = ({category, extensionInfo, updateContent}) => {
    const [innerCategories, setInnerCategories] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        async function initialization() {
            await initRessources();
        }

        initialization();
        setSelected(category);
    }, []);

    useEffect(() => {
        setSelected(category);
    }, [category]);

    useEffect(() => {
        updateContent('data', selected)
    }, [selected]);

    const initRessources = async () => {
        await extensionInfo.extension.space.getEntries({
            'content_type': 'category',
        }).then(result => {
            setInnerCategories(result.items.map(item => {
                let category = {
                    id: item.sys.id,
                    name: item.fields.name[findProperLocale()]
                }
                return category
            }));
        });
    }

    const findProperLocale = () => extensionInfo.extension.locales.default;

    const addSelected = (id) => setSelected(id);

    const removeSelected = () => setSelected('');

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeSelected();

    return (
        <Container>
            <Partners>
                <label>Category</label>
                <List>
                    {
                        innerCategories ? innerCategories.sort((a, b) => a.name.localeCompare(b.name))
                            .map((category, i) => {
                                return <Select key={i}>
                                    <input checked={selected === category.id} type={'checkbox'}
                                           onChange={(e) => updateSelected(e, category.id)}/>
                                    <p>{category.name}</p>
                                </Select>
                            }) : null
                    }
                </List>
            </Partners>
        </Container>
    );
}

CategorySelector.protoTypes = {
    updateContent: PropTypes.func,
    category: PropTypes.string
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CategorySelector);*/
