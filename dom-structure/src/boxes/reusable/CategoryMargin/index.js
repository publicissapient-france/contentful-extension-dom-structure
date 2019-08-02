import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Dot from '../../../components/Dot'
import {hasNotSamePropertyValue} from "../../../utils/functions";
import {Choices, Field, Inputs} from "./styled";

class CategoryMargin extends Component {
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
            this.setState({
                ...this.state,
                margin: this.props.margin
            });
        }
    }

    updateMargin = (prop, value) => {
        this.setState({
            ...this.state,
            margin: {
                ...this.state.margin,
                [prop]: value,
            }
        }, () => {
            this.props.updateStateProps('margin', this.state.margin);
        })
    }

    render() {
        const {storeValueMargin, margin, defaultMargin} = this.props;
        if (!margin) return null
        return (
            <Choices>
                <div>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultMargin, margin, 'top')}/>
                        <div>
                            <label>margin</label>
                            <Inputs>
                                <input
                                    type={'number'}
                                    className={hasNotSamePropertyValue(storeValueMargin, margin, 'top') ? 'updated' : ''}
                                    value={margin.top}
                                    onChange={e => {
                                        this.updateMargin('top', e.target.value)
                                    }}/>
                                <input
                                    type={'number'}
                                    className={hasNotSamePropertyValue(storeValueMargin, margin, 'right') ? 'updated' : ''}
                                    value={margin.right}
                                    onChange={e => {
                                        this.updateMargin('right', e.target.value)
                                    }}/>
                                <input
                                    type={'number'}
                                    className={hasNotSamePropertyValue(storeValueMargin, margin, 'bottom') ? 'updated' : ''}
                                    value={margin.bottom}
                                    onChange={e => {
                                        this.updateMargin('bottom', e.target.value)
                                    }}/>
                                <input
                                    type={'number'}
                                    className={hasNotSamePropertyValue(storeValueMargin, margin, 'left') ? 'updated' : ''}
                                    value={margin.left}
                                    onChange={e => {
                                        this.updateMargin('left', e.target.value)
                                    }}/>
                            </Inputs>
                        </div>
                    </Field>
                </div>

            </Choices>
        );
    }
}

CategoryMargin.protoTypes = {
    margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    }),
    defaultSize: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    }),
    storeValueSize: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    })
};


export default connect()(CategoryMargin);
