import React, {Component} from 'react';
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


class FlexContainerProperties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbrChildToPreview: 2
        };
    }

    componentDidMount = () => {
        this.setState({
            properties: this.props.properties
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.properties !== prevProps.properties) {
            this.setState(prevState => ({
                ...prevState,
                properties: this.props.properties
            }));
        }
    }

    updateFlex = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            properties: {
                ...prevState.properties,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('properties', this.state.properties);
        });
    }

    createElements = (n) => {
        var elements = [];
        for (let i = 0; i < n; i++) {
            elements.push(<div key={i}><p>{i + 1}</p></div>);
        }
        return elements;
    };
    createColumns = (n) => {
        var elements = [];
        for (let i = 0; i < n; i++) {
            elements.push(<div key={i}/>);
        }
        return elements;
    };

    render() {
        const {properties, storeValue, defaultValue} = this.props;

        if (!this.state.properties) return null;
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
                                       onChange={e => {
                                           this.updateFlex('columns', e.target.value);
                                       }}/>
                            </ContainerMainProperty>
                            <ContainerMainProperty>
                                <input type={'number'}
                                       min={1}
                                       max={15}
                                       value={this.state.nbrChildToPreview}
                                       onChange={e => {
                                           this.setState({
                                               nbrChildToPreview: e.target.value
                                           });
                                       }}/>
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
                                       onChange={e => {
                                           this.updateFlex('gutterHorizontal', e.target.value);
                                       }}/>
                                <label>Horizontal (px)</label>
                            </ContainerMainProperty>
                            <ContainerMainProperty>
                                <input type={'number'}
                                       min={0}
                                       className={hasNotSamePropertyValue(storeValue, properties, 'gutterVertical') ? 'updated' : ''}
                                       value={properties.gutterVertical || ''}
                                       onChange={e => {
                                           this.updateFlex('gutterVertical', e.target.value);
                                       }}/>
                                <label>Vertical (px)</label>
                            </ContainerMainProperty>
                        </FlexProperty>
                    </div>
                    <Preview flex={properties}>
                        {this.createElements(this.state.nbrChildToPreview)}
                        <Grid columns={properties.columns}>
                            {this.createColumns(properties.columns)}
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
                                                    value={choice} action={this.updateFlex}>
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
                                                    value={choice} action={this.updateFlex}>
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
                                                    value={choice} action={this.updateFlex}>
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
                                                    value={choice} action={this.updateFlex}>
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
                                                        value={choice} action={this.updateFlex}>
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
