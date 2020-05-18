import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Container, Text, ButtonsMove, Button} from "./styled";
import SvgArrowToTop from '../svg/SvgArrowToTop'

class ItemPriority extends Component{
    render(){
        const { data, index } = this.props;

        if (!data) return null
        return (
            <Container>
                <ButtonsMove>
                    <Button
                        onClick={() => this.props.moveElementToBottom(index)}><SvgArrowToTop/></Button>
                    <Button onClick={() => this.props.moveElementToTop(index)}><SvgArrowToTop/></Button>
                </ButtonsMove>
                <Text>{ data.name }</Text>
            </Container>
        )
    }
}

ItemPriority.propTypes = {
    formation : PropTypes.object,
    index : PropTypes.number
}

export default ItemPriority;