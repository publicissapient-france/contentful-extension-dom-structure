import React, { useState, useEffect } from 'react';
import { Container, Field, FlexProperty, ContainerProperty, Preview, FlexElement } from './styled';
import PropTypes from 'prop-types';
import { hasNotSamePropertyValue } from '../../utils/functions';
import IconActing from '../../components/IconActing/index';
import Dot from '../../components/Dot';

const FlexItemProperties = ({flex,storeValue, defaultValue, updateStateProps}) => {
    const [innerFlex, setInnerFlex] = useState(flex);

    useEffect(() => {
        setInnerFlex(flex);
    }, [flex])

    useEffect(() => {
        updateStateProps('flex', innerFlex);
    }, [innerFlex])

    const updateFlex = (prop, value) => {
        setInnerFlex(prev => ({
            ...prev,
            [prop]: String(value)
        }))
    }

    if (!innerFlex) return null;
    return (
        <Container>
            <Preview>
                <FlexElement flex={flex}/>
                <div/>
            </Preview>
            <Field>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'order')}/>
                    <label>Order</label>
                    <ContainerProperty>
                        <input type={'number'}
                               className={hasNotSamePropertyValue(storeValue, flex, 'order') ? 'updated' : ''}
                               value={flex.order || ''}
                               onChange={e => updateFlex('order', e.target.value)}/>
                        <IconActing objectA={storeValue} objectB={flex} targetProperty={'order'}
                                    value={'auto'} action={updateFlex}>
                            auto
                        </IconActing>
                    </ContainerProperty>
                </FlexProperty>

                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'grow')}/>
                    <label>Grow</label>
                    <ContainerProperty>
                        <input type={'number'}
                               className={hasNotSamePropertyValue(storeValue, flex, 'grow') ? 'updated' : ''}
                               value={flex.grow || ''}
                               onChange={e => updateFlex('grow', e.target.value)}/>
                        <IconActing objectA={storeValue} objectB={flex} targetProperty={'grow'}
                                    value={'auto'} action={updateFlex}>
                            auto
                        </IconActing>
                    </ContainerProperty>
                </FlexProperty>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'alignSelf')}/>
                    <label>Justify</label>
                    <ContainerProperty>
                        {
                            ['auto', 'flex-start','flex-end', 'center', 'baseline','stretch' ].map((choice, i) => {
                                return (
                                    <IconActing key={i} objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                                value={choice} action={updateFlex}>
                                        { choice }
                                    </IconActing>)
                            })
                        }
                    </ContainerProperty>
                </FlexProperty>
            </Field>
        </Container>
    );
}

FlexItemProperties.propTypes = {
    updateStateProps: PropTypes.func,
    flex: PropTypes.shape({
        order: PropTypes.oneOf([
            PropTypes.number,
            PropTypes.oneOf([ 'auto' ])
        ]),
        grow: PropTypes.oneOf([
            PropTypes.number,
            PropTypes.oneOf([ 'auto' ])]),
        alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
    }),
    storeValue: PropTypes.shape({
        order: PropTypes.oneOf([
            PropTypes.number,
            PropTypes.oneOf([ 'auto' ])
        ]),
        grow: PropTypes.oneOf([
            PropTypes.number,
            PropTypes.oneOf([ 'auto' ])]),
        alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
    }),
    defaultValue: PropTypes.shape({
        order: PropTypes.oneOf([
            PropTypes.number,
            PropTypes.oneOf([ 'auto' ])
        ]),
        grow: PropTypes.oneOf([
            PropTypes.number,
            PropTypes.oneOf([ 'auto' ])]),
        alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
    }),
};

export default FlexItemProperties;
