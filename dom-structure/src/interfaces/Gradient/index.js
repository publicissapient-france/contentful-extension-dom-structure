import React, {Component} from 'react';
import {Container, Field, Inputs, Preview} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import Dot from '../../components/Dot';

class Gradient extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            color: this.props.color
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.color !== prevProps.color) {
            this.setState(prevState => ({
                ...prevState,
                color: this.props.color
            }));
        }
    }

    updateGradient = (value) => {
        this.setState(prevState => ({
            ...prevState,
            color: {
                ...prevState.color,
                gradient: value,
            }
        }), () => {
            this.props.updateStateProps(this.props.customTargetColor || 'color', this.state.color, this.props.event);
        });
    }

    render() {
        const {color, storeValue, defaultValue, hidden} = this.props;

        if (!color || !this.state.color) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <label>gradient</label>
                        <Inputs>
                            <Dot enabled={!isEqual(defaultValue, color)}/>
                            <input type={'text'}
                                   value={color.gradient}
                                   onChange={e => {
                                       this.updateGradient(e.target.value)
                                   }}/>

                        </Inputs>
                    </div>
                    <Preview gradient={color.gradient}>
                        <div/>
                    </Preview>
                </Field>
            </Container>

        );
    }
}

Gradient.propTypes = {
    updateStateProps: PropTypes.func,
    color: PropTypes.shape({
        value: PropTypes.string,
    }),
    storeShadow: PropTypes.shape({
        value: PropTypes.string,
    }),
    defaultValue: PropTypes.shape({
        value: PropTypes.string,
    }),
};

export default Gradient;
