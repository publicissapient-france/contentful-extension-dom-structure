import React, { Component } from 'react';
import { Container, Field, FlexProperty, ContainerProperty, Preview } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import IconActing from '../../components/IconActing/index';
import Dot from '../../components/Dot';


class FlexContainerProperties extends Component {
    constructor (props) {
        super(props);
        this.state = {};
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

    render () {
        const { flex, storeValue, defaultValue } = this.props;

        if (!this.state.flex) return null;
        return (
            <Container>
                <Preview flex={flex}>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </Preview>
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
        direction: PropTypes.oneOf(['row', 'column']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent:PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
    storeValue: PropTypes.shape({
        direction: PropTypes.oneOf(['row', 'column', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap', '']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent:PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
    defaultValue: PropTypes.shape({
        direction: PropTypes.oneOf(['row', 'column', '']),
        wrap: PropTypes.oneOf(['wrap', 'nowrap', '']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', '']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', '']),
        alignContent:PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', ''])
    }),
};

export default FlexContainerProperties;
