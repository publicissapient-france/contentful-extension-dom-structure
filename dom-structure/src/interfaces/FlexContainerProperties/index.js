import React, { useState, useEffect} from 'react';
import {
    Container,
    Field,
    FlexProperty,
    ContainerProperty,
    Preview,
    MainProperties,
    ContainerMainProperty, Grid
} from './styled';
import PropTypes from 'prop-types';
import {hasNotSamePropertyValue} from '../../utils/functions';
import IconActing from '../../components/IconActing/index';
import Dot from '../../components/Dot';

const createElements = (n) => {
    var elements = [];
    for (let i = 0; i < n; i++) {
        elements.push(<div key={i}><p>{i + 1}</p></div>);
    }
    return elements;
};
const createColumns = (n) => {
    var elements = [];
    for (let i = 0; i < n; i++) {
        elements.push(<div key={i}/>);
    }
    return elements;
};

const FlexContainerProperties = ({properties,storeValue, defaultValue, updateStateProps}) => {
    const [nbrChildToPreview, setNbrChildToPreview] = useState(2);
    const [innerProperties, setInnerProperties] = useState(properties);

    useEffect(() => {
        setInnerProperties(properties)
    }, [properties]);

    useEffect(() => {
        updateStateProps('properties', innerProperties);
    }, [innerProperties]);

    const updateFlex = (prop, value) => {
        setInnerProperties(prev => ({
            ...prev,
            [prop]: String(value)
        }))
    }

    if (!innerProperties) return null;
    return (
        <Container>
            <MainProperties>
                <div>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'columns')}/>
                        <label>Nbr. columns</label>
                        <ContainerMainProperty>
                            <input type={'number'}
                                   min={1}
                                   className={hasNotSamePropertyValue(storeValue, properties, 'columns') ? 'updated' : ''}
                                   value={properties.columns || ''}
                                   onChange={e => updateFlex('columns', e.target.value)}/>
                        </ContainerMainProperty>
                        <ContainerMainProperty>
                            <input type={'number'}
                                   min={1}
                                   max={15}
                                   value={nbrChildToPreview}
                                   onChange={e => setNbrChildToPreview(e.target.value)}/>
                            <label>( Nbr. of childs on preview )</label>
                        </ContainerMainProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'gutterHorizontal')}/>
                        <label>Gutters</label>
                        <ContainerMainProperty>
                            <input type={'number'}
                                   min={0}
                                   className={hasNotSamePropertyValue(storeValue, properties, 'gutterHorizontal') ? 'updated' : ''}
                                   value={properties.gutterHorizontal || ''}
                                   onChange={e => updateFlex('gutterHorizontal', e.target.value)}/>
                            <label>Horizontal (px)</label>
                        </ContainerMainProperty>
                        <ContainerMainProperty>
                            <input type={'number'}
                                   min={0}
                                   className={hasNotSamePropertyValue(storeValue, properties, 'gutterVertical') ? 'updated' : ''}
                                   value={properties.gutterVertical || ''}
                                   onChange={e => {updateFlex('gutterVertical', e.target.value)}}/>
                            <label>Vertical (px)</label>
                        </ContainerMainProperty>
                    </FlexProperty>
                </div>
                <Preview flex={properties}>
                    {createElements(nbrChildToPreview)}
                    <Grid columns={properties.columns}>
                        {createColumns(properties.columns)}
                    </Grid>
                </Preview>
            </MainProperties>

            <Field>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'direction')}/>
                    <label>Direction</label>
                    <ContainerProperty>
                        {
                            ['row', 'column', 'row-reverse', 'column-reverse'].map((choice, i) => {
                                return (
                                    <IconActing key={i} objectA={storeValue} objectB={properties} targetProperty={'direction'}
                                                value={choice} action={updateFlex}>
                                        {choice}
                                    </IconActing>
                                )
                            })
                        }
                    </ContainerProperty>
                </FlexProperty>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'wrap')}/>
                    <label>Wrap</label>
                    <ContainerProperty>
                        {
                            ['wrap', 'nowrap'].map((choice, i) => {
                                return (
                                    <IconActing key={i} objectA={storeValue} objectB={properties} targetProperty={'wrap'}
                                                value={choice} action={updateFlex}>
                                        {choice}
                                    </IconActing>
                                )
                            })
                        }
                    </ContainerProperty>
                </FlexProperty>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'justify')}/>
                    <label>Justify</label>
                    <ContainerProperty>
                        {
                            ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', ''].map((choice, i) => {
                                return (
                                    <IconActing key={i} objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                                value={choice} action={updateFlex}>
                                        {choice !== '' ? choice : 'none'}
                                    </IconActing>
                                )
                            })
                        }
                    </ContainerProperty>
                </FlexProperty>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'alignItems')}/>
                    <label>Align items</label>
                    <ContainerProperty>
                        {
                            ['flex-start', 'flex-end', 'center', 'stretch', 'baseline', ''].map((choice, i) => {
                                return (
                                    <IconActing key={i} objectA={storeValue} objectB={properties}
                                                targetProperty={'alignItems'}
                                                value={choice} action={updateFlex}>
                                        {choice !== '' ? choice : 'none'}
                                    </IconActing>
                                )
                            })
                        }
                    </ContainerProperty>
                </FlexProperty>
                <FlexProperty>
                    <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'alignContent')}/>
                    <label>Align content</label>
                    <ContainerProperty>
                        {
                            ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around', '']
                                .map((choice, i) => {
                                    return (
                                        <IconActing key={i} objectA={storeValue} objectB={properties}
                                                    targetProperty={'alignContent'}
                                                    value={choice} action={updateFlex}>
                                            {choice !== '' ? choice : 'none'}
                                        </IconActing>)

                                })
                        }
                    </ContainerProperty>
                </FlexProperty>
            </Field>
        </Container>
    );
}

FlexContainerProperties.propTypes = {
    updateStateProps: PropTypes.func,
    properties: PropTypes.shape({
        columns: PropTypes.string,
        gutterHorizontal: PropTypes.string,
        gutterVertical: PropTypes.string,
        direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
    storeValue: PropTypes.shape({
        columns: PropTypes.string,
        gutterHorizontal: PropTypes.string,
        gutterVertical: PropTypes.string,
        direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap', '']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
    defaultValue: PropTypes.shape({
        columns: PropTypes.string,
        gutterHorizontal: PropTypes.string,
        gutterVertical: PropTypes.string,
        direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap', '']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
};

export default FlexContainerProperties;
