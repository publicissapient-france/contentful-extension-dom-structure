import React, {useState} from 'react';
import PropTypes from 'prop-types';

import SvgTrashSmall from '../../../components/svg/SvgTrashSmall';
import ButtonBasic from '../../../components/ui/ButtonBasic';
import ButtonDelete from '../../../components/ui/ButtonDelete';
import {Item, Contain, Icon} from './styled';
import {SafeDelete} from "../../../style/styledComponents";

const ItemFormation = ({formation, priority, updatePriority, removeFromSelectedList}) => {
    const [openSafeDelete, setOpenSafeDelete] = useState(false);

    return (
        <Item>
            <Contain>
                <Icon onClick={() => setOpenSafeDelete(true)}><SvgTrashSmall/></Icon>
                <p className={priority.includes(formation.id) ? 'active' : ''}
                   onClick={() => updatePriority(formation.id)}>
                    {formation.name}
                </p>
            </Contain>
            <SafeDelete className={!openSafeDelete ? 'hidden' : ''}>
                <p>The deletion is final. Are you sure you want to delete this component?</p>
                <div className={'buttons'}>
                    <ButtonBasic label={'Cancel'} action={() => setOpenSafeDelete(false)}/>
                    <ButtonDelete label={'Delete'} action={() => {
                        removeFromSelectedList(formation.id);
                        setOpenSafeDelete(false);
                    }}/>
                </div>
            </SafeDelete>
        </Item>
    );
}

ItemFormation.propTypes = {
    formation: PropTypes.object,
    priority: PropTypes.array,
    updatePriority: PropTypes.func,
    removeFromSelectedList: PropTypes.func
}

export default ItemFormation;