import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'

import {Error} from '../../../style/styledComponents';
import {
    Palette,
    Property, IconExtend, IconAdd, ColorListContainer
} from '../../../style/styledComponentsBoxes';
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
import SvgExtended from '../../../components/svg/SvgExtended';
import SvgNotExtended from '../../../components/svg/SvgNotExtended';
import SvgSheet from '../../../components/svg/SvgSheet';
import ColorView from '../../../components/ColorView';
import ColorAdd from '../../../components/ColorAdd';
import ColorsList from '../../../components/ColorsList';
import Dot from '../../../components/Dot/index';

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

        this.updateColor = this.updateColor.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    toggleAction = () => this.state.currentAction === 'view' ? this.setState({currentAction: 'add'}) : this.setState({currentAction: 'view'});

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

        let extendSVGbasic = (this.state.openBasic) ? <SvgExtended/> : <SvgNotExtended/>;
        let extendSVGcustom = (this.state.openCustom) ? <SvgExtended/> : <SvgNotExtended/>;
        if (!color) return null
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
                            className={['active', hasNotSamePropertyValue(storeValueColor, color, 'hex')? 'updated' : '']}
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
                            <Palette className={this.state.openBasic ? 'open' : ''}>
                                <IconExtend onClick={() => this.setState({openBasic: !this.state.openBasic})}>
                                    {extendSVGbasic}
                                </IconExtend>
                                <ColorListContainer>
                                    <ColorsList colors={colors.basic} action={this.updateColor}
                                                isSelected={this.isSelected}/>
                                </ColorListContainer>
                            </Palette>
                            <Palette className={this.state.openCustom ? 'open' : ''}>
                                <IconExtend onClick={() => this.setState({openCustom: !this.state.openCustom})}>
                                    {extendSVGcustom}
                                </IconExtend>
                                <ColorListContainer>
                                    <ColorsList colors={colors.custom} action={this.updateColor}
                                                isSelected={this.isSelected}/>
                                    <IconAdd className={this.state.currentAction === 'add' ? 'selected' : ''}
                                             onClick={e => this.toggleAction()}>
                                        <SvgSheet/>
                                    </IconAdd>
                                </ColorListContainer>
                            </Palette>
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
                                       this.props.updateStateProps('opacity', e.target.value / 100);
                                   }}/>
                            <span>%</span>
                        </div>
                    </Field>
                </ChoiceOpacity>
            </ChoiceColor>
        );
    }
}

const mapStateToProps = state => ({
    colors: getColors(state).value
});

export default connect(mapStateToProps)(CategoryColor);
