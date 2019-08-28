import React, {Component} from 'react';
import {Container, Field, Inputs} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from "../../utils/functions";
import Dot from '../../components/Dot'

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
            this.props.updateStateProps('margin', this.state.margin);
        });
    }


    render() {
        const {margin, storeValueMargin, defaultMargin} = this.props;

        if(!this.state.margin)return null
        return (
            <Container>
                <Field>
                    <Dot enabled={!isEqual(defaultMargin, margin)}/>
                    <div>
                        <label>margin</label>
                        <Inputs>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValueMargin, margin, 'top') ? 'updated' : ''}
                                value={this.state.margin.top}
                                onChange={e => {
                                    this.updatePadding('top', e.target.value)
                                }}/>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValueMargin, margin, 'right') ? 'updated' : ''}
                                value={this.state.margin.right}
                                onChange={e => {
                                    this.updatePadding('right', e.target.value)
                                }}/>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValueMargin, margin, 'bottom') ? 'updated' : ''}
                                value={this.state.margin.bottom}
                                onChange={e => {
                                    this.updatePadding('bottom', e.target.value)
                                }}/>
                            <input
                                type={'number'}
                                min={0}
                                className={hasNotSamePropertyValue(storeValueMargin, margin, 'left') ? 'updated' : ''}
                                value={this.state.margin.left}
                                onChange={e => {
                                    this.updatePadding('left', e.target.value)
                                }}/>
                        </Inputs>
                    </div>

                </Field>
            </Container>
        )
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