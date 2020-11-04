import React, {useState, useEffect} from 'react';
import {Container, ContainerFields, Field} from './styled';
import {ErrorMessage} from '../../style/styledComponentsFields';
import PropTypes from 'prop-types';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';
import { decamelize } from '../../utils/functions'

const Size = ({size, storeValueSize, defaultSize, event, updateStateProps}) => {
    const [innerSize, setInnerSize] = useState(size);
    const error = `Size available : number, number%, auto, fit-content, min-width, max-width`;

    useEffect(() => {
        setInnerSize(size);
    }, [size]);

    useEffect(() => {
        updateStateProps('size', innerSize, event);
    }, [innerSize]);

    const updateSize = (prop, value) => {
        setInnerSize(prev => ({
            ...prev,
            [prop]: String(value)
        }));
    }

    if (!innerSize) return null;
    return (
        <Container>
            <ContainerFields>
                {
                    ['width', 'height', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight'].map((property, i) =>
                        defaultSize && defaultSize.hasOwnProperty(property) ?
                        <Field key={i}>
                            <label>{decamelize(property, '-')}</label>
                            <div>
                                <Dot enabled={hasNotSamePropertyValue(defaultSize, size, property)}/>
                                <input
                                    type={'text'}
                                    className={hasNotSamePropertyValue(storeValueSize, size, property) ? 'updated' : ''}
                                    value={innerSize[property]}
                                    onChange={e => updateSize(property, e.target.value)}/>
                            </div>
                        </Field> : null
                    )
                }
            </ContainerFields>
            <ErrorMessage>{error}</ErrorMessage>
        </Container>
    );
}

Size.propTypes = {
    updateStateProps: PropTypes.func,
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string
    }),
    storeValueSize: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string
    }),
    defaultSize: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string
    }),
    event : PropTypes.string
};

export default Size;
