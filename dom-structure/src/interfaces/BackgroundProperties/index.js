import React, { Component } from 'react';
import { Container, Field, Inputs } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

class BackgroundProperties extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            background: this.props.value
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.value !== prevProps.value) {
            this.setState(prevState => ({
                ...prevState,
                background: this.props.value
            }));
        }
    }

    updatePadding = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            background: {
                ...prevState.background,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('background', this.state.background, this.props.event);
        });
    }

    render () {
        const { value, storeValue, defaultValue, hidden } = this.props;

        if (!this.state.background) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <label>backg.top</label>
                        <Inputs>
                            <Dot enabled={!isEqual(defaultValue, value)}/>
                            <input
                                type={'number'}
                                className={hasNotSamePropertyValue(storeValue, value, 'top') ? 'updated' : ''}
                                value={this.state.background.top}
                                onChange={e => {
                                    this.updatePadding('top', e.target.value);
                                }}/>
                        </Inputs>
                    </div>

                </Field>
            </Container>
        );
    }
}

BackgroundProperties.propTypes = {
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

export default BackgroundProperties;
