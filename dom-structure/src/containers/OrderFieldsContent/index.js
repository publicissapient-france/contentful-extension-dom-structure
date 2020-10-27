import React from 'react';
import PropTypes from 'prop-types';

import {Container, Preview, Element, ButtonsMove, Button, PreviewContainer, Label} from './styled';
import SvgArrowToTop from '../../components/svg/SvgArrowToTop';
import SvgElementCTA from '../../components/svg/SvgElementCTA';
import SvgElementImage from '../../components/svg/SvgElementImage';
import SvgElementText from '../../components/svg/SvgElementText';
import SvgElementTextMarkdown from '../../components/svg/SvgElementTextMarkdown';

import DefaultWrapper from '../../components/wrappers/DefaultWrapper'
import HeaderPicturesOnCornersWrapper from '../../components/wrappers/HeaderPicturesOnCornersWrapper';
import CardDuoWrapper from '../../components/wrappers/CardDuoWrapper';
import HeaderBasicWrapper from '../../components/wrappers/HeaderBasicWrapper';

const mapModelToWrappers = {
    DefaultWrapper,
    HeaderPicturesOnCornersWrapper,
    CardDuoWrapper,
    HeaderBasicWrapper
}

const getSvgElementByType = (type) => {
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

const OrderFieldsContent = ({fields, order, componentModel, updateOrder}) => {

    const getFieldByName = (name) => fields.find((field) => field.nameProperty === name);

    const moveElementToTop = (index, indexSubOrder = null) => {
        if (index === 0) return
        if (indexSubOrder !== null) {
            const a = order[indexSubOrder][index];
            const b = order[indexSubOrder][index - 1];
            let newOrder = [...order];
            newOrder[indexSubOrder][index - 1] = a;
            newOrder[indexSubOrder][index] = b;
            updateOrder(newOrder);
        } else {
            const a = order[index];
            const b = order[index - 1];
            let newOrder = [...order];
            newOrder[index - 1] = a;
            newOrder[index] = b;
            updateOrder(newOrder);
        }
    }


    const moveElementToBottom = (index, indexSubOrder = null) => {
        if (indexSubOrder !== null) {
            if (index === (order[indexSubOrder].length - 1)) return
            const a = order[indexSubOrder][index];
            const b = [indexSubOrder][index + 1];
            let newOrder = [...order];
            newOrder[indexSubOrder][index] = b;
            newOrder[indexSubOrder][index + 1] = a;
            updateOrder(newOrder);
        } else {
            if (index === (order.length - 1)) return
            const a = order[index];
            const b = order[index + 1];
            let newOrder = [...order];
            newOrder[index] = b;
            newOrder[index + 1] = a;
            updateOrder(newOrder);
        }
    }

    const renderFieldView = (field, indexField, indexSubOrder = null) => {
        return <Preview key={indexField}>
            <Element>
                <ButtonsMove>
                    <Button onClick={() =>
                        moveElementToBottom(indexField, indexSubOrder)
                    }><SvgArrowToTop/></Button>
                    <Button onClick={() => {
                        moveElementToTop(indexField, indexSubOrder)
                    }}><SvgArrowToTop/></Button>
                </ButtonsMove>
                {
                    getSvgElementByType(field.typeField)
                }
                <Label>{field.name}</Label>
            </Element>
        </Preview>
    }

    const renderOrderPreview = (order) => {
        let result;
        if (Array.isArray(order[0])) {
            result = order.map((subOrder, i) => {
                return subOrder.map((field, j) => {
                        const fieldConfig = getFieldByName(field);
                        if (!fieldConfig) return null
                        return renderFieldView(fieldConfig, j, i)
                    }
                )
            })
        } else {
            result = order.map((field, i) => {
                const fieldConfig = getFieldByName(field);
                if (!fieldConfig) return null
                return renderFieldView(fieldConfig, i)
            })
        }
        return result
    }

    if (!order || !fields) return null;

    const PreviewContent = <PreviewContainer>{renderOrderPreview(order)}</PreviewContainer>

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

OrderFieldsContent.propTypes = {
    fields : PropTypes.array,
    order : PropTypes.array,
    componentModel :  PropTypes.string,
    updateOrder : PropTypes.func
};

export default OrderFieldsContent;
