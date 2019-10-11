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
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import IconActing from '../../components/IconActing/index';
import Dot from '../../components/Dot';


class FlexContainerProperties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbrChildToPreview: 1
        };
    }

    componentDidMount = () => {
        this.setState({
            flex: this.props.flex
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.flex !== prevProps.flex) {
            this.setState(prevState => ({
                ...prevState,
                flex: this.props.flex
            }));
        }
    }

    updateFlex = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            flex: {
                ...prevState.flex,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('flex', this.state.flex);
        });
    }

    createElements = (n) => {
        var elements = [];
        for(let i =0; i < n; i++){
            elements.push(<div><p>{i+1}</p></div>);
        }
        return elements;
    };
    createColumns = (n) => {
        var elements = [];
        for(let i =0; i < n; i++){
            elements.push(<div/>);
        }
        return elements;
    };

    render() {
        const {flex, storeValue, defaultValue} = this.props;



        if (!this.state.flex) return null;
        return (
            <Container>
                <MainProperties>
                    <div>
                        <FlexProperty>
                            <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'columns')}/>
                            <label>Nbr. columns</label>
                            <ContainerMainProperty>
                                <input type={'number'}
                                       min={1}
                                       className={hasNotSamePropertyValue(storeValue, flex, 'columns') ? 'updated' : ''}
                                       value={flex.columns || ''}
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
                            <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'gutterHorizontal')}/>
                            <label>Gutters</label>
                            <ContainerMainProperty>
                                <input type={'number'}
                                       min={0}
                                       className={hasNotSamePropertyValue(storeValue, flex, 'gutterHorizontal') ? 'updated' : ''}
                                       value={flex.gutterHorizontal || ''}
                                       onChange={e => {
                                           this.updateFlex('gutterHorizontal', e.target.value);
                                       }}/>
                                <label>Horizontal (px)</label>
                            </ContainerMainProperty>
                            <ContainerMainProperty>
                                <input type={'number'}
                                       min={0}
                                       className={hasNotSamePropertyValue(storeValue, flex, 'gutterVertical') ? 'updated' : ''}
                                       value={flex.gutterVertical || ''}
                                       onChange={e => {
                                           this.updateFlex('gutterVertical', e.target.value);
                                       }}/>
                                <label>Vertical (px)</label>
                            </ContainerMainProperty>
                        </FlexProperty>
                    </div>
                    <Preview flex={flex}>
                        { this.createElements(this.state.nbrChildToPreview) }
                        <Grid columns={flex.columns}>
                            { this.createColumns(flex.columns) }
                        </Grid>
                    </Preview>
                </MainProperties>

                <Field>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'direction')}/>
                        <label>Direction</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'direction'}
                                        value={'row'} action={this.updateFlex}>
                                row
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'direction'}
                                        value={'column'} action={this.updateFlex}>
                                column
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'wrap')}/>
                        <label>Wrap</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'wrap'}
                                        value={'wrap'} action={this.updateFlex}>
                                wrap
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'wrap'}
                                        value={'nowrap'} action={this.updateFlex}>
                                nowrap
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'justify')}/>
                        <label>Justify</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'justify'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'justify'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'justify'}
                                        value={'center'} action={this.updateFlex}>
                                center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'justify'}
                                        value={'space-between'} action={this.updateFlex}>
                                space-between
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'justify'}
                                        value={'space-around'} action={this.updateFlex}>
                                space-around
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'justify'}
                                        value={''} action={this.updateFlex}>
                                none
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'alignItems')}/>
                        <label>Align items</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignItems'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignItems'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignItems'}
                                        value={'center'} action={this.updateFlex}>
                                center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignItems'}
                                        value={'stretch'} action={this.updateFlex}>
                                stretch
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignItems'}
                                        value={'baseline'} action={this.updateFlex}>
                                baseline
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignItems'}
                                        value={''} action={this.updateFlex}>
                                none
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'alignContent')}/>
                        <label>Align content</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
                                        value={'center'} action={this.updateFlex}>
                                center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
                                        value={'stretch'} action={this.updateFlex}>
                                stretch
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
                                        value={'space-between'} action={this.updateFlex}>
                                space-between
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
                                        value={'space-around'} action={this.updateFlex}>
                                space-around
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignContent'}
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
    flex: PropTypes.shape({
        columns: PropTypes.number,
        gutterHorizontal: PropTypes.number,
        gutterVertical: PropTypes.number,
        direction: PropTypes.oneOf(['row', 'column']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
    storeValue: PropTypes.shape({
        columns: PropTypes.number,
        gutterHorizontal: PropTypes.number,
        gutterVertical: PropTypes.number,
        direction: PropTypes.oneOf(['row', 'column', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap', '']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
    defaultValue: PropTypes.shape({
        columns: PropTypes.number,
        gutterHorizontal: PropTypes.number,
        gutterVertical: PropTypes.number,
        direction: PropTypes.oneOf(['row', 'column', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap', '']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
};

export default FlexContainerProperties;
