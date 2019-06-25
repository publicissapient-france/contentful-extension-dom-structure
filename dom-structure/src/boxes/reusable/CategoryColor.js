import React, { Component } from 'react';
import { Icon } from '../../style/styledComponents';
import {
    BoxColor,
    Palette,
    Property, BlockColor, IconExtend, IconAdd,
    NameColor, HexColor, ColorList, Dot
} from '../../style/styledComponentsBoxes';
import SvgCross from '../../components/svg/SvgCross';

import SvgExtended from '../../components/svg/SvgExtended';
import SvgNotExtended from '../../components/svg/SvgNotExtended';
import SvgSheet from '../../components/svg/SvgSheet';
import { connect } from 'react-redux';
import { getColors } from '../../actions';
import ColorView from '../../components/ColorView';
import ColorAdd from '../../components/ColorAdd';
import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const SelectedColor = styled(BoxColor)`
    width : 30px;
    height : 30px;
    align-self:flex-start;
`;

export const ChoiceColor = styled.div`
   display : flex;
   &.full-width{
     width : 100%;
   }
   
   &>div{
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
class CategoryColor extends Component {
    constructor (props) {
        super(props);

        this.state = {
            openBasic: false,
            openCustom: false,
            currentAction: 'view'
        };
    }

    componentDidMount = () => {
        console.log('color on props : ', this.props.color);
    };

    toggleAction = () => {
        this.state.currentAction === 'view' ? this.setState({ currentAction: 'add' }) : this.setState({ currentAction: 'view' });
    }

    render () {
        const { colors, color, openView } = this.props;

        let extendSVGbasic = (this.state.openBasic) ? <SvgExtended/> : <SvgNotExtended/>;
        let extendSVGcustom = (this.state.openCustom) ? <SvgExtended/> : <SvgNotExtended/>;
        return (
            <ChoiceColor className={openView ? 'full-width' : ''}>
                <div>
                    <Property>Color</Property>
                    <Field>
                        <Dot>
                            <div></div>
                        </Dot>
                        <SelectedColor
                            onClick={() => {
                                this.props.toggleOpenView();
                            }}
                            style={{
                                background: color && color.hex ? color.hex : '#000'
                            }}/>
                    </Field>

                </div>
                <PaletteView className={openView ? '' : 'hidden'}>
                    <div>
                        <Property>Color chart</Property>
                        <PaletteContainer>
                            <Palette className={this.state.openBasic ? 'open' : ''}>
                                <IconExtend onClick={() => this.setState({ openBasic: !this.state.openBasic })}>
                                    {extendSVGbasic}
                                </IconExtend>
                                <ColorList>
                                    {
                                        (!colors) ? <span>No color available</span>
                                            : colors.basic.map((item, i) =>
                                                <BlockColor key={i}
                                                    className={color && color.hex === item.hex && this.state.currentAction === 'view' ? 'selected' : ''}
                                                    onClick={e => {
                                                        console.log('addColor : ', this.state.currentAction);
                                                        this.setState({ currentAction: 'view' });
                                                        this.props.updateColor(item.hex, item.name, item.shade);
                                                    }}>
                                                    <BoxColor
                                                        className={item.name === 'None' ? 'null' : ''}
                                                        style={{ background: item.hex }}/>
                                                    <NameColor>{item.slug}</NameColor>
                                                    <HexColor>{item.hex}</HexColor>
                                                </BlockColor>
                                            )
                                    }
                                </ColorList>
                            </Palette>
                            <Palette className={this.state.openCustom ? 'open' : ''}>
                                <IconExtend onClick={() => this.setState({ openCustom: !this.state.openCustom })}>
                                    {extendSVGcustom}
                                </IconExtend>
                                <ColorList>
                                    {
                                        (!colors) ? <span>No color available</span>
                                            : colors.custom.map((item, i) =>
                                                <BlockColor key={i}
                                                    className={color && color.hex === item.hex && this.state.currentAction === 'view' ? 'selected' : ''}
                                                    onClick={e => {
                                                        console.log('addColor : ', this.state.currentAction);
                                                        this.setState({ currentAction: 'view' });
                                                        this.props.updateColor(item.hex, item.name, item.shade);
                                                    }}>
                                                    <BoxColor
                                                        className={item.name === 'None' ? 'null' : ''}
                                                        style={{ background: item.hex }}/>
                                                    <NameColor>{item.slug}</NameColor>
                                                    <HexColor>{item.hex}</HexColor>
                                                </BlockColor>
                                            )
                                    }
                                    <IconAdd className={this.state.currentAction === 'add' ? 'selected' : ''} onClick={e => this.toggleAction() }>
                                        <SvgSheet/>
                                    </IconAdd>
                                </ColorList>
                            </Palette>
                            <ColorView display={this.state.currentAction === 'view'} color={color}/>
                            <ColorAdd display={this.state.currentAction === 'add'} />
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
                        <Dot>
                            <div></div>
                        </Dot>
                        <div>
                            <input type={'number'} max={100} min={0}
                                value={color && color.opacity ? color.opacity * 100 : 100}
                                onChange={e => { this.props.updateOpacity(e.target.value / 100); }}/>
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
