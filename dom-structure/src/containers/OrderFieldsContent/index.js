import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Container, Preview, Element, ButtonsMove, Button, PreviewContainer, Label } from './styled';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';
import SvgElementCTA from '../../components/svg/SvgElementCTA';
import SvgElementImage from '../../components/svg/SvgElementImage';
import SvgElementText from '../../components/svg/SvgElementText';
import SvgElementTextMarkdown from '../../components/svg/SvgElementTextMarkdown';

import DefaultWrapper from '../../components/wrappers/DefaultWrapper'
import HeaderPicturesOnCornersWrapper from '../../components/wrappers/HeaderPicturesOnCornersWrapper';

const mapModelToWrappers = {
    DefaultWrapper,
    HeaderPicturesOnCornersWrapper
}

class OrderFieldsContent extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount(){
        console.log('fields OrderfieldsContent',  this.props.fields);

    }

    componentDidUpdate(prevProps) {

    }

    getFieldByName = (name) => this.props.fields.find( (field) => field.nameProperty === name );


    getSvgElementByType = (type) => {
        switch (type) {
            case 'Text' :
                return <SvgElementText/>;
            case 'TextMarkdown' :
                return <SvgElementTextMarkdown/>;
            case 'SingleImage' :
                return <SvgElementImage/>;
            case 'MultiplesImage' :
                return <SvgElementImage/>;
            case 'CTA' :
                return <SvgElementCTA/>;
            default :
                return <div>no preview</div>
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
        return (this.props.order.length !== fieldWithContent.length );
    }


    render () {
        const { fields, order, componentModel } = this.props;
        if(!order || !fields ) return null;

        const PreviewContent = <PreviewContainer>
            {
                order.map( (field, i) => {
                    const fieldConfig = this.getFieldByName(field);
                    if(!fieldConfig) return null
                    return <Preview key={i}>
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
                        : React.createElement( mapModelToWrappers[`DefaultWrapper`], {}, PreviewContent)
                }
            </Container>
        );
    }
}

OrderFieldsContent.propTypes = {

};

export default OrderFieldsContent;
