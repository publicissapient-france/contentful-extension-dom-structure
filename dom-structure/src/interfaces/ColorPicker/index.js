import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import {Error} from '../../style/styledComponents';
import {Property} from '../../style/styledComponentsFields';
import {
    Field,
    ChoiceColor,
    ChoiceOpacity,
    Close,
    FieldsError,
    PaletteContainer,
    PaletteView,
    SelectedColor
} from './styled'
import SvgCross from '../../components/svg/SvgCross';
import ColorView from '../../components/ColorView/index';
import ColorAdd from '../../containers/ColorAdd/index';
import ColorsList from '../../components/ColorsList/index';
import Dot from '../../components/Dot/index';

import {getColors} from '../../actions/index';
import {hasNotSamePropertyValue, hexToRgb, RGBtoString} from "../../utils/functions";

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openBasic: false,
            openCustom: false,
            currentAction: 'view'
        };
    }

    toggleAction = () => this.state.currentAction === 'view' ? this.setState({currentAction: 'add'}) : this.setState({currentAction: 'view'});
    toggleOpenBasic = () => this.setState({openBasic: !this.state.openBasic});
    toggleOpenCustom = () => this.setState({openCustom: !this.state.openCustom});

    isSelected = (item) => this.props.color && this.props.color.hex === item.hex && this.state.currentAction === 'view'

    updateColor = (value) => {
        const selectedColor = {
            hex: value.hex,
            rgb: RGBtoString(hexToRgb(value.hex)),
            name: value.name,
            shade: value.shade
        }
        this.setState({currentAction: 'view'});
        this.props.updateStateProps('color', selectedColor);
    }

    updateOpacity = (value) => {
        const opacity = {
            value: String(value / 100)
        }
        this.props.updateStateProps('opacity', opacity);


    }

    render() {
        const {storeValueColor, storeValueOpacity, colors, color, opacity, defaultColor, defaultOpacity, openView, hidden} = this.props;
        if (!color) return <p>no color defined</p>
        if (!colors) return (
            <FieldsError>
                <Error>
                    <h2>Error</h2>
                    <p>To use this option, you must have selected a reference style guide in your project.</p>
                    <p>Please check that a style guide has been selected.</p>
                </Error>
            </FieldsError>
        )
        return (
            <ChoiceColor className={[openView ? 'full-width' : '', hidden ? 'hidden' : '']}>
                <div>
                    <Property>Color</Property>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultColor, color, 'hex')}/>
                        <SelectedColor
                            className={['active', hasNotSamePropertyValue(storeValueColor, color, 'hex') ? 'updated' : '']}
                            onClick={() => {
                                this.props.toggleOpenView();
                            }}
                            style={{
                                background: color.hex
                            }}/>
                    </Field>
                </div>
                <PaletteView className={openView ? '' : 'hidden'}>
                    <div>
                        <Property>Color chart</Property>
                        <PaletteContainer>
                            <ColorsList open={this.state.openBasic} colors={colors.basic} action={this.updateColor}
                                        isSelected={this.isSelected} toggleOpen={this.toggleOpenBasic}/>
                            <ColorsList open={this.state.openCustom} colors={colors.custom}
                                        action={this.updateColor}
                                        availableAdding
                                        selectedAdding={this.state.currentAction === 'add'}
                                        isSelected={this.isSelected}
                                        toggleAction={this.toggleAction}
                                        toggleOpen={this.toggleOpenCustom}/>
                            <ColorView display={this.state.currentAction === 'view'} color={color}/>
                            <ColorAdd display={this.state.currentAction === 'add'}/>
                        </PaletteContainer>
                    </div>
                    <div>
                        <Close onClick={() => {
                            this.props.toggleOpenView();
                        }}><SvgCross/></Close>
                    </div>
                </PaletteView>
                <ChoiceOpacity className={openView ? 'hidden' : ''}>
                    <Property>Opacity</Property>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultOpacity, opacity, 'value')}/>
                        <div>
                            <input type={'number'} max={100} min={0}
                                   className={ hasNotSamePropertyValue(storeValueOpacity, opacity, 'value') ? 'updated' : ''}
                                   defaultValue={Number(opacity.value) * 100 || 100}
                                   onChange={e => {
                                       this.updateOpacity(e.target.value)
                                   }}/>
                            <span>%</span>
                        </div>
                    </Field>
                </ChoiceOpacity>
            </ChoiceColor>
        );
    }
}

ColorPicker.protoTypes = {
    color: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        shade: PropTypes.string.isRequired
    }),
    defaultColor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        shade: PropTypes.string.isRequired
    }),
    storeValueColor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        shade: PropTypes.string.isRequired
    }),
    opacity: PropTypes.number,
    defaultOpacity: PropTypes.number,
    storeValueOpacity: PropTypes.number,
    colors: PropTypes.shape({
        basic: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            hex: PropTypes.string.isRequired,
            shade: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired
        })),
        custom: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            hex: PropTypes.string.isRequired,
            shade: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired
        }))
    }),
    openView: PropTypes.bool.isRequired,
    hidden: PropTypes.bool
};

const mapStateToProps = state => ({
    colors: getColors(state).value
});

export default connect(mapStateToProps)(ColorPicker);
