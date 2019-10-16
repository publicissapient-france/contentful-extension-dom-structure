import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { Container, Preview, Element, ButtonsMove, Button, PreviewContainer, Label } from './styled';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';
import SvgElementCTA from '../../components/svg/SvgElementCTA';
import SvgElementImage from '../../components/svg/SvgElementImage';
import SvgElementLink from '../../components/svg/SvgElementLink';
import SvgElementText from '../../components/svg/SvgElementText';
import SvgElementTextMarkdown from '../../components/svg/SvgElementTextMarkdown';

import DefaultWrapper from '../../components/wrappers/DefaultWrapper'
import HeaderPicturesOnCornersWrapper from '../../components/wrappers/HeaderPicturesOnCornersWrapper';

const mapModelToWrappers = {
    HeaderPicturesOnCornersWrapper
}

class OrderFieldsContent extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentDidMount(){


    }

    getFieldByName = (name) => this.props.fields.find( (field) => field.nameProperty === name );


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

    hasPredefinedOrder = () => {
        let fieldWithContent = this.props.fields.filter( (field) => {
            return !isEmpty(field.content.defaultValue)
        })
        console.log('hasPredefinedOrder name result', fieldWithContent);
        if(this.props.order.length !== fieldWithContent.length ){
            console.log('the component has predefined field order', this.props.componentModel);
            return true
        }
        return false;
    }


    render () {
        const { fields, order, componentModel } = this.props;

        console.log('FIELDS ON ORDER', fields);
        console.log('order ON ORDER', order);
        if(!order) return null;



        //this.hasPredefinedOrder();
        const PreviewContent = <PreviewContainer>
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
                            <Label>{ fieldConfig.name }</Label>
                        </Element>

                    </Preview>
                })
            }
        </PreviewContainer>

        return (
            <Container>
                {
                    this.hasPredefinedOrder() ?
                        React.createElement( mapModelToWrappers[`${componentModel}Wrapper`], {}, PreviewContent)
                        : React.createElement( DefaultWrapper, {}, PreviewContent)
                }
            </Container>
        );
    }
}

OrderFieldsContent.propTypes = {

};

export default OrderFieldsContent;
