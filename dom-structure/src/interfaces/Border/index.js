import React, {Component} from 'react';
import {
    Container,
    Field,
    Inputs,
    InputsBorder,
    Column,
    Row,
    InputsRadius,
    CornerTofLeft,
    CornerTopRight,
    CornerBottomRight,
    CornerBottomLeft
} from './styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';
import ColorPicker from '../ColorPicker';

class Border extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openColorView: false
        };
    }

    componentDidMount = () => {
        this.setState({
            border: this.props.border
        }, () => {
            console.log('state after mount', this.state);

        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.border !== prevProps.border) {
            this.setState(prevState => ({
                ...prevState,
                border: this.props.border
            }), () => {
                console.log('state after update', this.state);

            });
        }
    }

    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));


    /* updatePadding = (prop, value) => {
         this.setState(prevState => ({
             ...prevState,
             margin: {
                 ...prevState.margin,
                 [prop]: String(value),
             }
         }), () => {
             this.props.updateStateProps('margin', this.state.margin);
         });
     }*/

    updateWidth = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            border: {
                ...prevState.border,
                width: {
                    ...prevState.border.width,
                    [prop]: String(value)
                }
            }
        }), () => {
            console.log('state border', this.state);
            this.props.updateStateProps('border', this.state.border);
        });
    }
    updateBorder = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            border: {
                ...prevState.border,
                radius: {
                    ...prevState.border.radius,
                    [prop]: value
                }
            }
        }), () => {
            console.log('state border', this.state);
            this.props.updateStateProps('border', this.state.border);
        });
    }
    updateBorderProperty = (prop, value) => {
        this.setState(prevState => ({
            ...prevState,
            border: {
                ...prevState.border,
                [prop]: value
            }
        }), () => {
            console.log('state border', this.state);
            this.props.updateStateProps('border', this.state.border);
        });
    }


    render() {
        const {border, storeValueBorder, defaultBorder} = this.props;

        if (!this.state.border || !border) return null;
        return (
            <Container>
                <Column className={this.state.openPreview || this.state.openColorView ? 'full-width' : ''}>
                    <Row>
                        <ColorPicker hidden={false}
                                     color={border.color}
                                     opacity={border.opacity}
                                     storeValueColor={storeValueBorder.color}
                                     storeValueOpacity={storeValueBorder.opacity}
                                     defaultColor={defaultBorder.color}
                                     defaultOpacity={defaultBorder.opacity}
                                     openView={this.state.openColorView}
                                     updateStateProps={this.updateBorderProperty}
                                     toggleOpenView={this.toggleOpenView}
                                     customName={'Border'}
                        />
                    </Row>
                </Column>
                <Column className={this.state.openPreview || this.state.openColorView ? 'hidden' : ''}>
                    <Row>
                        <label>border width</label>
                        <div>
                            <InputsBorder>
                                <Dot enabled={true}/>
                                <input
                                    type={'number'}
                                    min={0}
                                    className={hasNotSamePropertyValue(storeValueBorder.width, border.width, 'top') ? 'updated' : ''}
                                    value={parseInt(this.state.border.width.top) || 0}
                                    onChange={e => {
                                        this.updateWidth('top', e.target.value);
                                    }}/>
                                <input
                                    type={'number'}
                                    min={0}
                                    className={hasNotSamePropertyValue(storeValueBorder.width, border.width, 'right') ? 'updated' : ''}
                                    value={parseInt(this.state.border.width.right) || 0}
                                    onChange={e => {
                                        this.updateWidth('right', e.target.value);
                                    }}/>
                                <input
                                    type={'number'}
                                    min={0}
                                    className={hasNotSamePropertyValue(storeValueBorder.width, border.width, 'bottom') ? 'updated' : ''}
                                    value={parseInt(this.state.border.width.bottom) || 0}
                                    onChange={e => {
                                        this.updateWidth('bottom', e.target.value);
                                    }}/>
                                <input
                                    type={'number'}
                                    min={0}
                                    className={hasNotSamePropertyValue(storeValueBorder.width, border.width, 'left') ? 'updated' : ''}
                                    value={parseInt(this.state.border.width.left) || 0}
                                    onChange={e => {
                                        this.updateWidth('left', e.target.value);
                                    }}/>

                            </InputsBorder>
                        </div>
                    </Row>
                    <Row>
                        <label>border radius</label>
                        <div>
                            <InputsRadius>
                                <Dot enabled={true}/>
                                <CornerTofLeft>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueBorder.radius, border.radius, 'topLeft') ? 'updated' : ''}
                                        value={this.state.border.radius.topLeft}
                                        onChange={e => {
                                            this.updateBorder('topLeft', e.target.value);
                                        }}/>
                                </CornerTofLeft>
                                <CornerTopRight>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueBorder.radius, border.radius, 'topRight') ? 'updated' : ''}
                                        value={this.state.border.radius.topRight}
                                        onChange={e => {
                                            this.updateBorder('topRight', e.target.value);
                                        }}/>
                                </CornerTopRight>
                                <CornerBottomRight>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueBorder.radius, border.radius, 'bottomRight') ? 'updated' : ''}
                                        value={this.state.border.radius.bottomRight}
                                        onChange={e => {
                                            this.updateBorder('bottomRight', e.target.value);
                                        }}/>
                                </CornerBottomRight>
                                <CornerBottomLeft>
                                    <input
                                        type={'text'}
                                        className={hasNotSamePropertyValue(storeValueBorder.radius, border.radius, 'bottomLeft') ? 'updated' : ''}
                                        value={this.state.border.radius.bottomLeft}
                                        onChange={e => {
                                            this.updateBorder('bottomLeft', e.target.value);
                                        }}/>
                                </CornerBottomLeft>
                            </InputsRadius>
                        </div>
                    </Row>
                </Column>


            </Container>
        );
    }
}

Border.propTypes = {
    updateStateProps: PropTypes.func,
    border: PropTypes.shape({
        width: PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    }),
    storeValueBorder: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
    defaultBorder: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),
};

export default Border;
