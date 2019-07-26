import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import Dot from '../../../components/Dot'
import {hasNotSamePropertyValue} from "../../../utils/functions";
import {ChoiceSize, Field} from "./styled";

class CategorySize extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            size: this.props.size
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.size !== prevProps.size) {
            this.setState({
                ...this.state,
                size: this.props.size
            });
        }
    }

    updateSize = (prop, value) => {
        this.setState({
            ...this.state,
            size: {
                ...this.state.size,
                [prop]: value,
            }
        }, () => {
            this.props.updateStateProps('size', this.state.size);
        })
    }

    render() {
        const {storeValueSize, size, defaultSize} = this.props;
        if (!size) return null
        return (
            <ChoiceSize>
                <div>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'width')}/>
                        <div>
                            <label>width</label>
                            <input
                                className={hasNotSamePropertyValue(storeValueSize, size, 'width') ? 'updated' : ''}
                                value={size.width}
                                onChange={e => {
                                    this.updateSize('width', e.target.value)
                                }}/>
                            <span>px</span>
                        </div>
                    </Field>
                </div>
                <div>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'height')}/>
                        <div>
                            <label>height</label>
                            <input
                                className={hasNotSamePropertyValue(storeValueSize, size, 'height') ? 'updated' : ''}
                                value={size.height}
                                onChange={e => {
                                    this.updateSize('height', e.target.value)
                                }}/>
                            <span>px</span>
                        </div>
                    </Field>
                </div>
                <div>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'maxWidth')}/>
                        <div>
                            <label>max-width</label>
                            <input
                                className={hasNotSamePropertyValue(storeValueSize, size, 'maxWidth') ? 'updated' : ''}
                                value={size.maxWidth}
                                onChange={e => {
                                    this.updateSize('maxWidth', e.target.value)
                                }}/>
                            <span>px</span>
                        </div>
                    </Field>
                </div>
                <div>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultSize, size, 'maxHeight')}/>
                        <div>
                            <label>max-height</label>
                            <input
                                className={hasNotSamePropertyValue(storeValueSize, size, 'maxHeight') ? 'updated' : ''}
                                value={size.maxHeight}
                                onChange={e => {
                                    this.updateSize('maxHeight', e.target.value)
                                }}/>
                            <span>px</span>
                        </div>
                    </Field>
                </div>
            </ChoiceSize>
        );
    }
}


CategorySize.protoTypes = {
    size: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number
    }),
    defaultSize: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number
    }),
    storeValueSize: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number
    })


};


export default connect()(CategorySize);
