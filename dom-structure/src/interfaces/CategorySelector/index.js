import React, {useState, useEffect} from 'react';
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
export default connect(mapStateToProps)(CategorySelector);
