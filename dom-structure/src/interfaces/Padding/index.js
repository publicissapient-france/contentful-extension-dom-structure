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
            this.props.updateStateProps('padding', this.state.padding, this.props.event);
        });
    }

    render () {
        const { padding, storeValuePadding, defaultPadding, hidden } = this.props;

        if (!this.state.padding) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <label>padding</label>
                        <Inputs>
                            <Dot enabled={!isEqual(defaultPadding, padding)}/>
                            {
                                ['top', 'right', 'bottom', 'left'].map((edge, i) => {
                                    return (
                                        <input key={i} type={'number'} min={0}
                                            className={hasNotSamePropertyValue(storeValuePadding, padding, edge) ? 'updated' : ''}
                                            value={this.state.padding[edge]}
                                            onChange={e => {
                                                this.updatePadding(edge, e.target.value);
                                            }}/>)
                                })
                            }
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
