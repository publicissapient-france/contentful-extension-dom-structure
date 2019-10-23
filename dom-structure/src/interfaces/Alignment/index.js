import React, { Component } from 'react';
import { Container, Field, Inputs, CornerBottomLeft, CornerBottomRight, CornerTopRight, CornerTofLeft, InputsRadius } from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { hasNotSamePropertyValue } from '../../utils/functions';
import Dot from '../../components/Dot';
import IconActing from '../../components/IconActing';
import SvgAlignToStart from '../../components/svg/SvgAlignToStart';
import SvgAlignToEnd from '../../components/svg/SvgAlignToEnd';
import SvgAlignToCenter from '../../components/svg/SvgAlignToCenter';

class Alignment extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState({
            alignment: this.props.alignment
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.alignment !== prevProps.alignment) {
            this.setState(prevState => ({
                ...prevState,
                alignment: this.props.alignment
            }));
        }
    }

    updateAlignment = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            alignment: {
                ...prevState.alignment,
                [prop]: value,
            }
        }), () => {
            this.props.updateStateProps('alignment', this.state.alignment);
        });
    }

    render () {
        const { alignment, storeValueAlignment, defaultAlignment, hidden } = this.props;

        if (!this.state.alignment || !alignment) return null;
        return (
            <Container className={hidden ? 'hidden' : ''}>
                <Field>
                    <div>
                        <Dot enabled={hasNotSamePropertyValue(defaultAlignment, alignment, 'horizontal')}/>
                        <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                    value={'flex-start'} action={this.updateAlignment} nullAllowed>
                            <SvgAlignToStart/>
                        </IconActing>
                        <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                    value={'center'} action={this.updateAlignment} nullAllowed>
                            <SvgAlignToCenter/>
                        </IconActing>
                        <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                    value={'flex-end'} action={this.updateAlignment} nullAllowed>
                            <SvgAlignToEnd/>
                        </IconActing>
                    </div>
                </Field>
            </Container>
        );
    }
}

Alignment.propTypes = {
    updateStateProps: PropTypes.func,
    alignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    storeValueMargin: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    defaultMargin: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
};

export default Alignment;
