import React, { Component } from 'react';
import { Container, ContainerFields, Field } from './styled';
import { ErrorMessage } from '../../style/styledComponentsFields';
import PropTypes from 'prop-types';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

class Size extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            size: this.props.size
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.size !== prevProps.size) {
            this.setState({
                size: this.props.size
            });
        }
    }

    updateSize = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            size: {
                ...prevState.size,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('size', this.state.size, this.props.event);
        });
    }

    isValid = value => {
        return false;
    }

    render () {
        const { size, storeValueSize, defaultSize } = this.props;

        const error = `Size available : number, number%, auto, fit-content, min-width, max-width`;

        if (!this.state.size) return null;
        return (
            <Container>
                <ContainerFields>
                    <Field>
                        <label>width</label>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'width')}/>
                            <input
                                type={'text'}
                                className={[hasNotSamePropertyValue(storeValueSize, size, 'width') ? 'updated' : '',
                                    !this.isValid(this.state.size.width) ? 'invalid' : '']}
                                value={this.state.size.width}
                                onChange={e => {
                                    this.updateSize('width', e.target.value);
                                }}/>
                        </div>
                    </Field>
                    <Field>
                        <label>height</label>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'height')}/>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueSize, size, 'height') ? 'updated' : ''}
                                value={this.state.size.height}
                                onChange={e => {
                                    this.updateSize('height', e.target.value);
                                }}/>
                        </div>
                    </Field>
                    <Field>
                        <label>max-width</label>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'maxWidth')}/>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueSize, size, 'maxWidth') ? 'updated' : ''}
                                value={this.state.size.maxWidth}
                                onChange={e => {
                                    this.updateSize('maxWidth', e.target.value);
                                }}/>
                        </div>
                    </Field>
                    <Field>
                        <label>max-height</label>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'maxHeight')}/>
                            <input
                                type={'text'}
                                className={hasNotSamePropertyValue(storeValueSize, size, 'maxHeight') ? 'updated' : ''}
                                value={this.state.size.maxHeight}
                                onChange={e => {
                                    this.updateSize('maxHeight', e.target.value);
                                }}/>
                        </div>
                    </Field>

                    {
                        defaultSize && defaultSize.minWidth ?
                            <Field>
                                <label>min-width</label>
                                <div>
                                    <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'minWidth')}/>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueSize, size, 'minWidth') ? 'updated' : ''}
                                        value={this.state.size.minWidth}
                                        onChange={e => {
                                            this.updateSize('minWidth', e.target.value);
                                        }}/>
                                </div>
                            </Field> : null
                    }
                    {
                        defaultSize && defaultSize.minHeight ?
                            <Field>
                                <label>min-height</label>
                                <div>
                                    <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'minHeight')}/>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueSize, size, 'minHeight') ? 'updated' : ''}
                                        value={this.state.size.minHeight}
                                        onChange={e => {
                                            this.updateSize('minHeight', e.target.value);
                                        }}/>
                                </div>
                            </Field> : null
                    }

                </ContainerFields>
                <ErrorMessage>{ error }</ErrorMessage>
            </Container>
        );
    }
}

Size.propTypes = {
    updateStateProps: PropTypes.func,
    size: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValueSize: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultSize: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
};

export default Size;
