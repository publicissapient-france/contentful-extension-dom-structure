import React, { Component } from 'react';
import { Container, Field, InputsBorder } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

class BorderWidth extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            width: this.props.width
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.width !== prevProps.width) {
            this.setState(prevState => ({
                ...prevState,
                width: this.props.width
            }));
        }
    }

    updateWidth = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            width: {
                ...prevState.width,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('width', this.state.width);
        });
    }

    render () {
        const { width, storeValueWidth, defaultWidth, hidden } = this.props;

        if (!this.state.width) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <label>border width</label>
                    <div>
                        <InputsBorder>
                            <Dot enabled={!isEqual(this.state.width, defaultWidth)}/>
                            {
                                ['top', 'right','bottom', 'left' ].map(edge => {
                                    return (
                                        <input
                                        type={'number'}
                                        min={0}
                                        className={hasNotSamePropertyValue(storeValueWidth, width, edge) ? 'updated' : ''}
                                        value={parseInt(this.state.width[edge])}
                                        onChange={e => {
                                            this.updateWidth(edge, e.target.value);
                                        }}/>
                                    )
                                })
                            }
                        </InputsBorder>
                    </div>
                </Field>
            </Container>
        );
    }
}

BorderWidth.propTypes = {
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

export default BorderWidth;
