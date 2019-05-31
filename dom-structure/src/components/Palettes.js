import React, { Component } from 'react';
import { connect } from 'react-redux';
import SvgExtended from './SvgExtended';
import SvgNotExtended from './SvgNotExtended';

import {
    Palette, BlockColor, BoxColor, IconExtend,
    NameColor, HexColor, ColorList
} from '../style/styledComponentsBoxes';
import styled from 'styled-components';

export const PaletteContainer = styled(Palette)`
    
`;

class Palettes extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: false
        };
    }

    render () {
        const { colors, parent } = this.props;

        let extendSVG = (this.state.open) ? <SvgExtended/> : <SvgNotExtended/>;
        // if(!colors) return null
        return (
            <PaletteContainer className={this.state.open ? 'open' : ''}>
                <IconExtend onClick={() => this.setState({ open: !this.state.open })}>
                    {extendSVG}
                </IconExtend>
                <ColorList>
                    {
                        (!colors) ? <span>No color available</span>
                            : colors.map((color, i) =>
                                <BlockColor key={i}
                                    className={parent.state.value.hex === color.hex ? 'selected' : ''}
                                    onClick={e => {
                                        parent.setState({
                                            value: {
                                                ...parent.state.value,
                                                hex: color.hex
                                            }
                                        });
                                    }}>
                                    <BoxColor
                                        className={color.name === 'None' ? 'null' : ''}
                                        style={{ background: color.hex }}/>
                                    <NameColor>{color.slug}</NameColor>
                                    <HexColor>{color.hex}</HexColor>
                                </BlockColor>
                            )
                    }
                </ColorList>
            </PaletteContainer>
        );
    }
};

export default connect()(Palettes);
