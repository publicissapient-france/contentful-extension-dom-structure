import React, {Component} from 'react';
import {Container, Field} from './styled';
import PropTypes from 'prop-types';
import {hasNotSamePropertyValue} from "../../utils/functions";
import Dot from '../../components/Dot'

class Size extends Component {
    constructor(props) {
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
            this.setState(prevState => ({
                ...prevState,
                size: this.props.size
            }));
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
            this.props.updateStateProps('size', this.state.size);
        });
    }


    render() {
        const {size, storeValueSize, defaultSize} = this.props;

        if(!this.state.size)return null
        return (
            <Container>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'width')}/>
                    <div>
                        <label>width</label>
                        <input
                            type={'text'}
                            className={hasNotSamePropertyValue(storeValueSize, size, 'width') ? 'updated' : ''}
                            value={this.state.size.width}
                            onChange={e => {
                                this.updateSize('width', e.target.value)
                            }}/>
                    </div>
                </Field>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'height')}/>
                    <div>
                        <label>height</label>
                        <input
                            type={'text'}
                            className={hasNotSamePropertyValue(storeValueSize, size, 'height') ? 'updated' : ''}
                            value={this.state.size.height}
                            onChange={e => {
                                this.updateSize('height', e.target.value)
                            }}/>
                    </div>
                </Field>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'maxWidth')}/>
                    <div>
                        <label>max-width</label>
                        <input
                            type={'text'}
                            className={hasNotSamePropertyValue(storeValueSize, size, 'maxWidth') ? 'updated' : ''}
                            value={this.state.size.maxWidth}
                            onChange={e => {
                                this.updateSize('maxWidth', e.target.value)
                            }}/>
                    </div>
                </Field>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'maxHeight')}/>
                    <div>
                        <label>max-height</label>
                        <input
                            type={'text'}
                            className={hasNotSamePropertyValue(storeValueSize, size, 'maxHeight') ? 'updated' : ''}
                            value={this.state.size.maxHeight}
                            onChange={e => {
                                this.updateSize('maxHeight', e.target.value)
                            }}/>
                    </div>
                </Field>
            </Container>
        )
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