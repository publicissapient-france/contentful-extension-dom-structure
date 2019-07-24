import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'

import {Error} from '../../../style/styledComponents';
import {Property} from '../../../style/styledComponentsBoxes';
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
import SvgCross from '../../../components/svg/SvgCross';
import ColorView from '../../../components/ColorView/ColorView';
import ColorAdd from '../../../components/ColorAdd/index';
import ColorsList from '../../../components/ColorsList';
import Dot from '../../../components/Dot';

import {getColors} from '../../../actions/index';
import {hasNotSamePropertyValue} from "../../../utils/functions";

class CategoryColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openBasic: false,
            openCustom: false,
            currentAction: 'view'
        };

        this.toggleAction = this.toggleAction.bind(this);
        this.toggleOpenBasic = this.toggleOpenBasic.bind(this);
        this.toggleOpenCustom = this.toggleOpenCustom.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.updateColor = this.updateColor.bind(this);

    }

    toggleAction = () => this.state.currentAction === 'view' ? this.setState({currentAction: 'add'}) : this.setState({currentAction: 'view'});
    toggleOpenBasic = () => this.setState({openBasic: !this.state.openBasic});
    toggleOpenCustom = () => this.setState({openCustom: !this.state.openCustom});

    isSelected = (item) => this.props.color && this.props.color.hex === item.hex && this.state.currentAction === 'view'

    updateColor = (value) => {
        const selectedColor = {
            hex: value.hex,
            name: value.name,
            shade: value.shade
        }
        this.setState({currentAction: 'view'});
        this.props.updateStateProps('color', selectedColor);
    }

    render() {
        const {storeValueColor, storeValueOpacity, colors, color, opacity, defaultColor, defaultOpacity, openView} = this.props;
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
            <ChoiceColor className={openView ? 'full-width' : ''}>
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
                        <Dot enabled={!_.isEqual(defaultOpacity, opacity)}/>
                        <div>
                            <input type={'number'} max={100} min={0}
                                   className={storeValueOpacity && opacity !== storeValueOpacity ? 'updated' : ''}
                                   value={opacity * 100 || 100}
                                   onChange={e => {
                                       this.props.updateStateProps('opacity', String(e.target.value / 100));
                                   }}/>
                            <span>%</span>
                        </div>
                    </Field>
                </ChoiceOpacity>
            </ChoiceColor>
        );
    }
}

CategoryColor.protoTypes = {
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
    openView: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    colors: getColors(state).value
});

export default connect(mapStateToProps)(CategoryColor);
