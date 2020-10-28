import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text, ButtonsMove, Button} from "./styled";
import SvgArrowToTop from '../svg/SvgArrowToTop'

const ItemPriority = ({data, index, moveElementToBottom, moveElementToTop}) => {
    if (!data) return null
    return (
        <Container>
            <ButtonsMove>
                <Button onClick={() => moveElementToBottom(index)}><SvgArrowToTop/></Button>
                <Button onClick={() => moveElementToTop(index)}><SvgArrowToTop/></Button>
            </ButtonsMove>
            <Text>{data.name}</Text>
        </Container>
    )
}

ItemPriority.propTypes = {
    data : PropTypes.object,
    index : PropTypes.number,
    moveElementToBottom : PropTypes.func,
    moveElementToTop : PropTypes.func
}

export default ItemPriority;