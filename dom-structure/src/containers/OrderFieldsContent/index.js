import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';

import {Container, Preview, Element, ButtonsMove, Button, PreviewContainer, Label} from './styled';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';
import SvgElementCTA from '../../components/svg/SvgElementCTA';
import SvgElementImage from '../../components/svg/SvgElementImage';
import SvgElementText from '../../components/svg/SvgElementText';
import SvgElementTextMarkdown from '../../components/svg/SvgElementTextMarkdown';

import DefaultWrapper from '../../components/wrappers/DefaultWrapper'
import HeaderPicturesOnCornersWrapper from '../../components/wrappers/HeaderPicturesOnCornersWrapper';
import CardDuoWrapper from '../../components/wrappers/CardDuoWrapper';

const mapModelToWrappers = {
    DefaultWrapper,
    HeaderPicturesOnCornersWrapper,
    CardDuoWrapper
}

class OrderFieldsContent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    getFieldByName = (name) => this.props.fields.find((field) => field.nameProperty === name);


    getSvgElementByType = (type) => {
        switch (type) {
            case 'Template' :
                return null;
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

    moveElementToTop = (index, indexSubOrder = null) => {
        if (index === 0) return
        if(indexSubOrder !== null){
            const a = this.props.order[indexSubOrder][index];
            const b = this.props.order[indexSubOrder][index - 1];
            let newOrder = [...this.props.order];
            newOrder[indexSubOrder][index - 1] = a;
            newOrder[indexSubOrder][index] = b;
            this.props.updateOrder(newOrder);
        }else{
            const a = this.props.order[index];
            const b = this.props.order[index - 1];
            let newOrder = [...this.props.order];
            newOrder[index - 1] = a;
            newOrder[index] = b;
            this.props.updateOrder(newOrder);
        }
    }


    moveElementToBottom = (index, indexSubOrder = null) => {
        if(indexSubOrder  !== null){
            if (index === (this.props.order[indexSubOrder].length - 1)) return
            const a = this.props.order[indexSubOrder][index];
            const b = this.props.order[indexSubOrder][index + 1];
            let newOrder = [...this.props.order];
            newOrder[indexSubOrder][index] = b;
            newOrder[indexSubOrder][index + 1] = a;
            this.props.updateOrder(newOrder);
        }else{
            if (index === (this.props.order.length - 1)) return
            const a = this.props.order[index];
            const b = this.props.order[index + 1];
            let newOrder = [...this.props.order];
            newOrder[index] = b;
            newOrder[index + 1] = a;
            this.props.updateOrder(newOrder);
        }
    }

    renderFieldView = (field, indexField, indexSubOrder = null) => {
        return <Preview key={indexField}>
            <Element>
                <ButtonsMove>
                    <Button onClick={() =>
                        this.moveElementToBottom(indexField, indexSubOrder)
                    }><SvgArrowToTop/></Button>
                    <Button onClick={() => {
                        this.moveElementToTop(indexField,indexSubOrder)
                    }}><SvgArrowToTop/></Button>
                </ButtonsMove>
                {
                    this.getSvgElementByType(field.typeField)
                }
                <Label>{field.name}</Label>
            </Element>
        </Preview>
    }

    renderOrderPreview = (order) => {
        let result;
        if (Array.isArray(order[0])) {
            result = order.map((subOrder, i) => {
                return subOrder.map((field, j) => {
                        const fieldConfig = this.getFieldByName(field);
                        if (!fieldConfig) return null
                        return this.renderFieldView(fieldConfig, j, i)
                    }
                )
            })
        } else {
            result = order.map((field, i) => {
                const fieldConfig = this.getFieldByName(field);
                if (!fieldConfig) return null
                return this.renderFieldView(fieldConfig, i)
            })
        }
        return result

    }

    render() {
        const {fields, order, componentModel} = this.props;
        if (!order || !fields) return null;

        const PreviewContent = <PreviewContainer>
            {
                this.renderOrderPreview(order)
            }
        </PreviewContainer>

        return (
            <Container>
                {
                    mapModelToWrappers[`${componentModel}Wrapper`] ?
                        React.createElement(mapModelToWrappers[`${componentModel}Wrapper`], {}, PreviewContent)
                        : React.createElement(mapModelToWrappers[`DefaultWrapper`], {}, PreviewContent)
                }
            </Container>
        );
    }
}

OrderFieldsContent.propTypes = {};

export default OrderFieldsContent;
