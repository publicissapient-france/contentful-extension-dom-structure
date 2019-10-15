import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Preview, Element, ButtonsMove, Button, PreviewContainer, Label, Wrapper } from './styled';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';
import SvgElementCTA from '../../components/svg/SvgElementCTA';
import SvgElementImage from '../../components/svg/SvgElementImage';
import SvgElementLink from '../../components/svg/SvgElementLink';
import SvgElementText from '../../components/svg/SvgElementText';
import SvgElementTextMarkdown from '../../components/svg/SvgElementTextMarkdown';


class OrderFieldsContent extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentDidMount(){


    }

    getFieldByName = (name) => {
        let result = this.props.fields.find( (field) => {
            return field.nameProperty === name
        })
        console.log('getfield name result', result);
        return result;
    }

    getSvgElementByType = (type) => {
        console.log('type', type);
        switch (type) {
            case 'Text' :
                return <SvgElementText/>;
            case 'TextMarkdown' :
                return <SvgElementTextMarkdown/>;
            case 'SingleImage' :
                return <SvgElementImage/>;
            case 'MultiplesImage' :
                return <SvgElementImage/>;
        }

    }

    moveElementToTop = (index) => {
        if(index === 0 ) return
        const a = this.props.order[index];
        const b = this.props.order[index - 1];
        let newOrder = [...this.props.order];
        newOrder[index-1] = a;
        newOrder[index] = b;

        this.props.updateOrder(newOrder);



    }


    moveElementToBottom = (index) =>{
        if(index === (this.props.order.length - 1) ) return
        const a = this.props.order[index];
        const b = this.props.order[index + 1];
        let newOrder = [...this.props.order];
        newOrder[index] = b;
        newOrder[index+1] = a;

        this.props.updateOrder(newOrder);
    }


    render () {
        const { fields, order } = this.props;

        console.log('FIELDS ON ORDER', fields);
        console.log('order ON ORDER', order);
        if(!order) return null;
        return (
            <Container>
                <Wrapper>
                <PreviewContainer>
                    {
                        order.map( (field, i) => {
                            const fieldConfig = this.getFieldByName(field);
                            return <Preview>
                                <Element>
                                    <ButtonsMove>
                                        <Button onClick={ () => this.moveElementToBottom(i)}><SvgArrowToTop/></Button>
                                        <Button onClick={() => { this.moveElementToTop(i)}}><SvgArrowToTop/></Button>
                                    </ButtonsMove>
                                    {
                                        this.getSvgElementByType(fieldConfig.typeField)
                                    }
                                    <Label>{ fieldConfig.nameProperty }</Label>
                                </Element>

                            </Preview>
                        })
                    }
                </PreviewContainer>
                </Wrapper>
            </Container>
        );
    }
}

OrderFieldsContent.propTypes = {

};

export default OrderFieldsContent;
