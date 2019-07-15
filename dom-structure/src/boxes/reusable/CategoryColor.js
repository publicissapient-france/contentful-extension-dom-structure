import React, {Component} from 'react';
import {Icon, Error} from '../../style/styledComponents';
import {
    BoxColor,
    Palette,
    Property, BlockColor, IconExtend, IconAdd,
    NameColor, HexColor, ColorList, Dot, Fields
} from '../../style/styledComponentsBoxes';
import SvgCross from '../../components/svg/SvgCross';

import SvgExtended from '../../components/svg/SvgExtended';
import SvgNotExtended from '../../components/svg/SvgNotExtended';
import SvgSheet from '../../components/svg/SvgSheet';
import {connect} from 'react-redux';
import {getColors} from '../../actions';
import ColorView from '../../components/ColorView';
import ColorAdd from '../../components/ColorAdd';
import {extensionTheme} from '../../style/theme';
import styled from 'styled-components';

export const SelectedColor = styled(BoxColor)`
    width : 30px;
    height : 30px;
    align-self:flex-start;
    
    &.updated{
        border : 2px solid ${extensionTheme.blueM};
    }
`;

export const ChoiceColor = styled.div`
   display : flex;
   &.full-width{
     width : 100%;
   }
   
   &>div{
    padding-top : 20px;
    padding-bottom : 20px;
    display:flex;
    flex-direction:column;
    
   }
  
   &>div:nth-child(2){
       border-left:1px solid  ${ extensionTheme.grey20 };
       padding-left : 25px;
       display:flex;
       flex-direction : row;
       justify-content : space-between;
       width: inherit;
       margin-left : 30px;
       
       &>div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       }
       
       &.hidden{
        display : none;
       }
   }
`;
export const Close = styled(Icon)`
   align-self :flex-end;
   width : 40px;
`;

export const ChoiceOpacity = styled.div`
    display : flex;
    flex-direction:column;

   & input{
    width : 50px;
    max-width : 50px;
    
   }
`;
export const PaletteView = styled.div`
    width : 100%;
`;
export const PaletteContainer = styled.div`
    flex-direction : column;
`;

export const Field = styled.div`
    display : flex;
    
`;
export const FieldsError = styled(Fields)`
    display : block;
`;

class CategoryColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openBasic: false,
            openCustom: false,
            currentAction: 'view'
        };
    }

    toggleAction = () => this.state.currentAction === 'view' ? this.setState({currentAction: 'add'}) : this.setState({currentAction: 'view'});

    isSelected = (item) => this.props.color && this.props.color.hex === item.hex && this.state.currentAction === 'view'

    render() {
        const {storeValueColor, colors, color, opacity, openView} = this.props;

        let extendSVGbasic = (this.state.openBasic) ? <SvgExtended/> : <SvgNotExtended/>;
        let extendSVGcustom = (this.state.openCustom) ? <SvgExtended/> : <SvgNotExtended/>;
        console.log('storeValueColor', storeValueColor);
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
                        <Dot/>
                        <SelectedColor
                            className={'active'}
                            className={storeValueColor && color.hex !== storeValueColor.hex ? 'updated' : ''}
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
                                <ColorList>
                                    {
                                        (!colors) ? <span>No color available</span>
                                            : colors.basic.map((item, i) =>
                                                <BlockColor key={i}
                                                            className={this.isSelected(item) ? 'selected' : ''}
                                                            onClick={e => {
                                                                const selectedColor = {
                                                                    hex: item.hex,
                                                                    name: item.name,
                                                                    shade: item.shade
                                                                }
                                                                this.setState({currentAction: 'view'});
                                                                this.props.updateStateProps('color', selectedColor);
                                                            }}>
                                                    <BoxColor
                                                        className={item.name === 'None' ? 'null' : ''}
                                                        style={{background: item.hex}}/>
                                                    <NameColor>{item.slug}</NameColor>
                                                    <HexColor>{item.hex}</HexColor>
                                                </BlockColor>
                                            )
                                    }
                                </ColorList>
                            </Palette>
                            <Palette className={this.state.openCustom ? 'open' : ''}>
                                <IconExtend onClick={() => this.setState({openCustom: !this.state.openCustom})}>
                                    {extendSVGcustom}
                                </IconExtend>
                                <ColorList>
                                    {
                                        (!colors) ? <span>No color available</span>
                                            : colors.custom.map((item, i) =>
                                                <BlockColor key={i}
                                                            className={this.isSelected(item) ? 'selected' : ''}
                                                            onClick={e => {
                                                                const selectedColor = {
                                                                    hex: item.hex,
                                                                    name: item.name,
                                                                    shade: item.shade
                                                                }
                                                                this.setState({currentAction: 'view'});
                                                                this.props.updateStateProps('color', selectedColor);
                                                            }}>
                                                    <BoxColor
                                                        style={{background: item.hex}}/>
                                                    <NameColor>{item.slug}</NameColor>
                                                    <HexColor>{item.hex}</HexColor>
                                                </BlockColor>
                                            )
                                    }
                                    <IconAdd className={this.state.currentAction === 'add' ? 'selected' : ''}
                                             onClick={e => this.toggleAction()}>
                                        <SvgSheet/>
                                    </IconAdd>
                                </ColorList>
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
                        <Dot/>
                        <div>
                            <input type={'number'} max={100} min={0}
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
