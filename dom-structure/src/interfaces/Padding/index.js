import React, { Component } from 'react';
import { Container, Field, Inputs } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

class Padding extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            padding: this.props.padding
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.padding !== prevProps.padding) {
            this.setState(prevState => ({
                ...prevState,
                padding: this.props.padding
            }));
        }
    }

    updatePadding = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            padding: {
                ...prevState.padding,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('padding', this.state.padding);
        });
    }

    render () {
        const { padding, storeValuePadding, defaultPadding, hidden } = this.props;

        if (!this.state.padding) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <Dot enabled={!isEqual(defaultPadding, padding)}/>
                    <div>
                        <label>padding</label>
                        <Inputs>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValuePadding, padding, 'top') ? 'updated' : ''}
                                value={this.state.padding.top}
                                onChange={e => {
                                    this.updatePadding('top', e.target.value);
                                }}/>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValuePadding, padding, 'right') ? 'updated' : ''}
                                value={this.state.padding.right}
                                onChange={e => {
                                    this.updatePadding('right', e.target.value);
                                }}/>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValuePadding, padding, 'bottom') ? 'updated' : ''}
                                value={this.state.padding.bottom}
                                onChange={e => {
                                    this.updatePadding('bottom', e.target.value);
                                }}/>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValuePadding, padding, 'left') ? 'updated' : ''}
                                value={this.state.padding.left}
                                onChange={e => {
                                    this.updatePadding('left', e.target.value);
                                }}/>
                        </Inputs>
                    </div>

                </Field>
            </Container>
        );
    }
}

Padding.propTypes = {
    updateStateProps: PropTypes.func,
    padding: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValuePadding: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultPadding: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
};

export default Padding;
