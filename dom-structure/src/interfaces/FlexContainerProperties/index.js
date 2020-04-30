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
        for(let i =0; i < n; i++){
            elements.push(<div key={i}><p>{i+1}</p></div>);
        }
        return elements;
    };
    createColumns = (n) => {
        var elements = [];
        for(let i =0; i < n; i++){
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
                        { this.createElements(this.state.nbrChildToPreview) }
                        <Grid columns={properties.columns}>
                            { this.createColumns(properties.columns) }
                        </Grid>
                    </Preview>
                </MainProperties>

                <Field>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'direction')}/>
                        <label>Direction</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'direction'}
                                        value={'row'} action={this.updateFlex}>
                                row
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'direction'}
                                        value={'column'} action={this.updateFlex}>
                                column
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'direction'}
                                        value={'row-reverse'} action={this.updateFlex}>
                                row-reverse
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'direction'}
                                        value={'column-reverse'} action={this.updateFlex}>
                                column-reverse
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'wrap')}/>
                        <label>Wrap</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'wrap'}
                                        value={'wrap'} action={this.updateFlex}>
                                wrap
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'wrap'}
                                        value={'nowrap'} action={this.updateFlex}>
                                nowrap
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'justify')}/>
                        <label>Justify</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                        value={'center'} action={this.updateFlex}>
                                center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                        value={'space-between'} action={this.updateFlex}>
                                space-between
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                        value={'space-around'} action={this.updateFlex}>
                                space-around
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'justify'}
                                        value={''} action={this.updateFlex}>
                                none
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'alignItems')}/>
                        <label>Align items</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignItems'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignItems'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignItems'}
                                        value={'center'} action={this.updateFlex}>
                                center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignItems'}
                                        value={'stretch'} action={this.updateFlex}>
                                stretch
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignItems'}
                                        value={'baseline'} action={this.updateFlex}>
                                baseline
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignItems'}
                                        value={''} action={this.updateFlex}>
                                none
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, properties, 'alignContent')}/>
                        <label>Align content</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={'center'} action={this.updateFlex}>
                                center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={'stretch'} action={this.updateFlex}>
                                stretch
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={'space-between'} action={this.updateFlex}>
                                space-between
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={'space-around'} action={this.updateFlex}>
                                space-around
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={properties} targetProperty={'alignContent'}
                                        value={''} action={this.updateFlex}>
                                none
                            </IconActing>
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
