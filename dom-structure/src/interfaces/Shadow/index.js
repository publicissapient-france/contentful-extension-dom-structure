import React, { Component } from 'react';
import { Container, Field, Inputs, Preview} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';

class Shadow extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            shadow: this.props.shadow
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.shadow !== prevProps.shadow) {
            this.setState(prevState => ({
                ...prevState,
                shadow: this.props.shadow
            }));
        }
    }

    updateShadow = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            shadow: {
                ...prevState.shadow,
                [prop]: value,
            }
        }), () => {
            this.props.updateStateProps('shadow', this.state.shadow, this.props.event);
        });
    }

    render () {
        const { shadow, storeValueShadow, defaultShadow, hidden } = this.props;

        if (!this.state.shadow || !shadow) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <label>shadow</label>
                        <Inputs>
                            <Dot enabled={!isEqual(defaultShadow, shadow)}/>
                            <input type={'text'}
                                   value={shadow.value}
                                   className={hasNotSamePropertyValue(storeValueShadow, shadow, 'value' ? 'updated' : '')}
                                   onChange={e => { this.updateShadow('value', e.target.value)

                                   }}/>

                        </Inputs>
                    </div>
                    <Preview shadow={shadow.value}>
                        <div/>
                    </Preview>
                </Field>
            </Container>

        );
    }
}

Shadow.propTypes = {
    updateStateProps: PropTypes.func,
    shadow: PropTypes.shape({
        value: PropTypes.string,
    }),
    storeShadow: PropTypes.shape({
        value: PropTypes.string,
    }),
    defaultShadow: PropTypes.shape({
        value: PropTypes.string,
    }),
};

export default Shadow;
