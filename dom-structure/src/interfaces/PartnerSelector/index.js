import React, {useState, useEffect} from 'react';
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

const PartnerSelector = ({partners, priority, updateContent, forComponent, extensionInfo}) => {
    const [innerPriority, setInnerPriority] = useState(priority);
    const [innerPartners, setInnerPartners] = useState([]);
    const [selected, setSelected] = useState(partners);

    useEffect(() => {
        async function initialization() {
            await initRessources();
        }

        initialization();
        setInnerPriority(priority);
        setSelected(partners);
    }, []);

    useEffect(() => {
        setSelected(partners)
    }, [partners]);

    useEffect(() => {
        if (forComponent) {
            updateContent('priority', innerPriority)
        } else {
            updateContent(innerPriority, 'priority')
        }
    }, [innerPriority])

    useEffect(() => {
        if (forComponent) {
            updateContent('data', selected)
        } else {
            updateContent(selected, 'data')
        }
    }, [selected])

    const initRessources = async () => {
        await extensionInfo.extension.space.getEntries({
            'content_type': 'partner',
        }).then(result => {
            setInnerPartners(result.items.map(item => {
                let partner = {
                    id: item.sys.id,
                    name: item.fields.name[findProperLocale()]
                }
                return partner
            }))
        });
    }

    const findProperLocale = () => extensionInfo.extension.locales.default;
    const getById = (id) => innerPartners.find(element => element.id === id);
    const orderSelectedWithNewPriority = (newPriority) => [...newPriority, ...selected.filter(id => !(newPriority.find(item => item === id)))];
    const alreadyOnPriority = (id) => innerPriority.find(item => item === id)

    const addPriority = (id) => {
        const newPriority = [...innerPriority, id];
        setInnerPriority(newPriority);
        setSelected(orderSelectedWithNewPriority(newPriority));
    }

    const removePriority = (id) => {
        const newPriority = innerPriority.filter(item => item !== id);
        setInnerPriority(newPriority);
        setSelected(orderSelectedWithNewPriority(newPriority));
    }

    const updatePriority = (id) => !alreadyOnPriority(id) ? addPriority(id) : removePriority(id);

    const addSelected = (id) => {
        setSelected([...selected, id])
    }

    const removeFromSelectedList = (id) => {
        setSelected(selected.filter(item => item !== id));
        setInnerPriority(innerPriority.filter(item => item !== id));
    }

    const updateSelected = (e, id) => (e.target.checked) ? addSelected(id) : removeFromSelectedList(id);

    const alreadySelected = (id) => selected.find(item => item === id) ? true : false;

    const moveElementToTop = (index) => {
        if (index === 0) return
        const a = priority[index];
        const b = priority[index - 1];
        let newOrder = [...priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;

        setInnerPriority(newOrder);
        setSelected(orderSelectedWithNewPriority(newOrder));
    }

    const moveElementToBottom = (index) => {
        if (index === (priority.length - 1)) return
        const a = priority[index];
        const b = priority[index + 1];
        let newOrder = [...priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        setInnerPriority(newOrder);
        setSelected(orderSelectedWithNewPriority(newOrder));
    }

    return (
        <Container>
            <Partners>
                <label>Partners</label>
                <List>
                    {
                        innerPartners && innerPartners.sort((a, b) => a.name.localeCompare(b.name)).map((partner, i) => {
                            return <Select key={i}>
                                <input checked={selected.includes(partner.id)} type={'checkbox'}
                                       onChange={(e) => updateSelected(e, partner.id)}/>
                                <p className={innerPriority.includes(partner.id) ? 'active' : ''}
                                   onClick={() => updatePriority(partner.id)}>{partner.name}</p>
                            </Select>
                        })
                    }
                </List>
            </Partners>
            <Priority>
                <label>Priority List</label>
                <PriorityList>
                    {
                        innerPriority && innerPriority.map((id, i) => {
                            const partner = getById(id);
                            if (!partner) return null
                            return <Element key={i}>
                                <ButtonsMove>
                                    <Button onClick={() => moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                    <Button onClick={() => moveElementToTop(i)}><SvgArrowToTop/></Button>
                                </ButtonsMove>
                                <Identity>{partner.name}</Identity>
                            </Element>
                        })
                    }
                </PriorityList>
            </Priority>
        </Container>
    );
}

PartnerSelector.protoTypes = {
    partners: PropTypes.array,
    priority: PropTypes.array,
    updateContent: PropTypes.func,
    forComponent: PropTypes.bool
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(PartnerSelector);
