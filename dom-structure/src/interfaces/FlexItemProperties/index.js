import React, { Component } from 'react';
import { Container, Field, FlexProperty, ContainerProperty, Preview, FlexElement } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import IconActing from '../../components/IconActing/index';
import Dot from '../../components/Dot';


class FlexItemProperties extends Component {
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
                                   onChange={e => {
                                       this.updateFlex('order', e.target.value);
                                   }}/>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'order'}
                                        value={'auto'} action={this.updateFlex}>
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
                                   onChange={e => {
                                       this.updateFlex('grow', e.target.value);
                                   }}/>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'grow'}
                                        value={'auto'} action={this.updateFlex}>
                                auto
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                    <FlexProperty>
                        <Dot enabled={hasNotSamePropertyValue(defaultValue, flex, 'alignSelf')}/>
                        <label>Justify</label>
                        <ContainerProperty>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                        value={'auto'} action={this.updateFlex}>
                                auto
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                        value={'flex-start'} action={this.updateFlex}>
                                flex-start
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                        value={'flex-end'} action={this.updateFlex}>
                                flex-end
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                        value={'center'} action={this.updateFlex}>
                               center
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                        value={'baseline'} action={this.updateFlex}>
                               baseline
                            </IconActing>
                            <IconActing objectA={storeValue} objectB={flex} targetProperty={'alignSelf'}
                                        value={'stretch'} action={this.updateFlex}>
                               stretch
                            </IconActing>
                        </ContainerProperty>
                    </FlexProperty>
                </Field>
            </Container>
        );
    }
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
