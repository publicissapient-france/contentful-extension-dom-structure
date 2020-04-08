import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SvgTrashSmall from '../../../components/svg/SvgTrashSmall';
import ButtonBasic from '../../../components/ui/ButtonBasic';
import ButtonDelete from '../../../components/ui/ButtonDelete';
import { Item, Contain, Icon } from './styled';
import { SafeDelete} from "../../../style/styledComponents";


class ItemFormation extends Component{
    constructor(props){
        super(props);
        this.state = {
            openSafeDelete : false
        }
    }

    toggleSafeSecure = () => this.setState({
        openSafeDelete: !this.state.openSafeDelete
    })

    render(){
        const { formation, priority} = this.props;

        return (
            <Item>
                <Contain>
                    <Icon onClick={() => { this.setState({ openSafeDelete : true})}}><SvgTrashSmall/></Icon>
                    <p className={priority.includes(formation.id) ? 'active' : ''}
                       onClick={() => {
                           this.props.updatePriority(formation.id)
                       }}>{formation.name}</p>
                </Contain>
                <SafeDelete className={!this.state.openSafeDelete ? 'hidden' : ''}>
                    <p>The deletion is final. Are you sure you want to delete this component?</p>
                    <div className={'buttons'}>
                        <ButtonBasic label={'Cancel'} action={() => this.setState({ openSafeDelete : false })}/>
                        <ButtonDelete label={'Delete'} action={() => {
                            this.props.removeFromSelectedList(formation.id);
                            this.setState({ openSafeDelete : false})
                        }}/>
                    </div>
                </SafeDelete>
            </Item>
        )
    }
}

ItemFormation.propTypes = {
    formation : PropTypes.object,
    priority :  PropTypes.array
}

export default ItemFormation;