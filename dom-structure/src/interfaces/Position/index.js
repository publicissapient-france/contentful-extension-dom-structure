import React, {useState, useEffect} from 'react';
import {Container, ContainerFields, Field} from './styled';
import PropTypes from 'prop-types';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';

const Position = ({position, storeValuePosition, defaultPosition, event, updateStateProps}) => {
    const [innerPosition, setInnerPosition] = useState(position);

    useEffect(() => {
        setInnerPosition(position);
    }, [position]);

    useEffect(() => {
        updateStateProps('position', innerPosition, event);
    }, [innerPosition]);

    const updatePosition = (prop, value) => {
        setInnerPosition(prev => ({
            ...prev,
            [prop]: String(value)
        }));
    }

    if (!innerPosition) return null;
    return (
        <Container>
            <ContainerFields>
                {
                    ['top', 'right', 'bottom', 'left'].map((property, i) =>
                        defaultPosition && defaultPosition.hasOwnProperty(property) ?
                        <Field key={i}>
                            <label>{property}</label>
                            <div>
                                <Dot enabled={hasNotSamePropertyValue(defaultPosition, position, property)}/>
                                <input
                                    type={'text'}
                                    className={hasNotSamePropertyValue(storeValuePosition, position, property) ? 'updated' : ''}
                                    value={innerPosition[property]}
                                    onChange={e => updatePosition(property, e.target.value)}/>
                            </div>
                        </Field> : null
                    )
                }
            </ContainerFields>
        </Container>
    );
}

Position.propTypes = {
    updateStateProps: PropTypes.func,
    position: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValuePosition: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultPosition: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    event : PropTypes.string
};

export default Position;
