import React, { Component } from 'react';
import { Container, Field, Inputs, CornerBottomLeft, CornerBottomRight, CornerTopRight, CornerTofLeft, InputsRadius } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

class Radius extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            radius: this.props.radius
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.radius !== prevProps.radius) {
            this.setState(prevState => ({
                ...prevState,
                radius: this.props.radius
            }));
        }
    }

    updateRadius = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            radius: {
                ...prevState.radius,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('radius', this.state.radius);
        });
    }

    render () {
        const { radius, storeValueRadius, defaultRadius, hidden } = this.props;

        if (!this.state.radius) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <label>radius</label>
                            <InputsRadius>
                                <Dot enabled={!isEqual(this.state.radius, defaultRadius)}/>
                                <CornerTofLeft>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueRadius, radius, 'topLeft') ? 'updated' : ''}
                                        value={this.state.radius.topLeft}
                                        onChange={e => {
                                            this.updateRadius('topLeft', e.target.value);
                                        }}/>
                                </CornerTofLeft>
                                <CornerTopRight>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueRadius, radius, 'topRight') ? 'updated' : ''}
                                        value={this.state.radius.topRight}
                                        onChange={e => {
                                            this.updateRadius('topRight', e.target.value);
                                        }}/>
                                </CornerTopRight>
                                <CornerBottomRight>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueRadius, radius, 'bottomRight') ? 'updated' : ''}
                                        value={this.state.radius.bottomRight}
                                        onChange={e => {
                                            this.updateRadius('bottomRight', e.target.value);
                                        }}/>
                                </CornerBottomRight>
                                <CornerBottomLeft>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueRadius, radius, 'bottomLeft') ? 'updated' : ''}
                                        value={this.state.radius.bottomLeft}
                                        onChange={e => {
                                            this.updateRadius('bottomLeft', e.target.value);
                                        }}/>
                                </CornerBottomLeft>
                            </InputsRadius>
                    </div>
                </Field>
            </Container>
        );
    }
}

Radius.propTypes = {
    updateStateProps: PropTypes.func,
    margin: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    storeValueMargin: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultMargin: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
};

export default Radius;
