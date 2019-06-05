import React, {Component} from 'react';
import {connect} from 'react-redux';
import SvgExtended from './SvgExtended';
import SvgNotExtended from './SvgNotExtended';
import SvgSheet from './SvgSheet';

import {
    Palette, BlockColor, BoxColor, IconExtend, IconAdd,
    NameColor, HexColor, ColorList
} from '../style/styledComponentsBoxes';
import styled from 'styled-components';
import AddColorForm from "./AddColorForm";
import ColorView from "./ColorView";

export const PaletteContainer = styled.div`
    flex-direction : column;
`;

class Palettes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openBasic: false,
            openCustom: false,
            currentAction : 'view', //two type of action : view, add,
            currentChoice : null
        };
    }

    toggleAction = () => {
        this.state.currentAction == 'view' ? this.setState({ currentAction : 'add'}) :  this.setState({ currentAction : 'view'})
    }

    render() {
        const {colors, parent, custom, currentColor} = this.props;

        let extendSVGbasic = (this.state.openBasic) ? <SvgExtended/> : <SvgNotExtended/>;
        let extendSVGcustom = (this.state.openCustom) ? <SvgExtended/> : <SvgNotExtended/>;
        return (
            <PaletteContainer >

                    <Palette className={this.state.openBasic ? 'open' : ''}>
                        <IconExtend onClick={() => this.setState({openBasic: !this.state.openBasic})}>
                            {extendSVGbasic}
                        </IconExtend>
                        <ColorList>
                            {
                                (!colors) ? <span>No color available</span>
                                    : colors.basic.map((color, i) =>
                                        <BlockColor key={i}
                                                    className={currentColor === color.hex && this.state.currentAction == 'view' ? 'selected' : ''}
                                                    onClick={e => {
                                                        console.log('addColor : ', this.state.currentAction);
                                                        parent.setState({
                                                            value: {
                                                                ...parent.state.value,
                                                                hex: color.hex,
                                                                name: color.name,
                                                                shade: color.shade
                                                            }
                                                        }, () => {
                                                            this.setState({currentAction: 'view'});
                                                        });

                                                    }}>
                                            <BoxColor
                                                className={color.name === 'None' ? 'null' : ''}
                                                style={{background: color.hex}}/>
                                            <NameColor>{color.slug}</NameColor>
                                            <HexColor>{color.hex}</HexColor>
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
                                    : colors.custom.map((color, i) =>
                                        <BlockColor key={i}
                                                    className={currentColor === color.hex && this.state.currentAction == 'view' ? 'selected' : ''}
                                                    onClick={e => {
                                                        console.log('addColor : ', this.state.currentAction);
                                                        parent.setState({
                                                            value: {
                                                                ...parent.state.value,
                                                                hex: color.hex,
                                                                name: color.name,
                                                                shade: color.shade
                                                            }
                                                        }, () => {
                                                            this.setState({currentAction: 'view'});
                                                        });

                                                    }}>
                                            <BoxColor
                                                className={color.name === 'None' ? 'null' : ''}
                                                style={{background: color.hex}}/>
                                            <NameColor>{color.slug}</NameColor>
                                            <HexColor>{color.hex}</HexColor>
                                        </BlockColor>
                                    )
                            }
                            <IconAdd className={this.state.currentAction == 'add' ? 'selected' : ''} onClick={(e) => this.toggleAction() }>
                                <SvgSheet/>
                            </IconAdd>
                        </ColorList>
                    </Palette>
                <ColorView  color={parent.state.value}/>
            </PaletteContainer>
        );
    }
};

export default connect()(Palettes);
