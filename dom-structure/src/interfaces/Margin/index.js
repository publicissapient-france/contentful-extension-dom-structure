import React, {Component} from 'react';
import {Container, Field, Inputs} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';

class Margin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            margin: this.props.margin
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.margin !== prevProps.margin) {
            this.setState(prevState => ({
                ...prevState,
                margin: this.props.margin
            }));
        }
    }

    updatePadding = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            margin: {
                ...prevState.margin,
                [prop]: String(value),
            }
        }), () => {
            this.props.updateStateProps('margin', this.state.margin, this.props.event);
        });
    }

    render() {
        const {margin, storeValueMargin, defaultMargin, hidden} = this.props;

        if (!this.state.margin) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <label>margin</label>
                        <Inputs>
                            <Dot enabled={!isEqual(defaultMargin, margin)}/>
                            {
                                ['top', 'right', 'bottom', 'left'].map((edge, i) => {
                                    return (
                                        <input key={i} type={'number'} min={0}
                                               className={hasNotSamePropertyValue(storeValueMargin, margin, edge) ? 'updated' : ''}
                                               value={this.state.margin[edge]}
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

Margin.propTypes = {
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

export default Margin;
