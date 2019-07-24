import React, {Component} from 'react';

import {IconContainer} from '../../style/styledComponentsBoxes';
import SvgMoon from '../svg/SvgMoon';
import SvgSun from '../svg/SvgSun';
import SvgA from '../svg/SvgA';
import SvgP from '../svg/SvgP';
import SvgExtend from '../svg/SvgExtend';

import { PreviewContainer, Options, TextContainer } from './styled';

class TextPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            light: true,
            alphabet: true,
            text: {
                alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*',
                paragraph: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.'
            }
        };
    }

    render() {
        const {font, text, color, opacity, open} = this.props;
        let lightIcon = this.state.light ? <SvgMoon/> : <SvgSun/>;
        let textIcon = this.state.alphabet ? <SvgA/> : <SvgP/>;
        let extendIcon = this.state.alphabet ? <SvgExtend/> : <SvgExtend/>;
        if (!font || !text) return <p>preview impossible</p>
        return (
            <PreviewContainer className={'textPreview'}>
                <TextContainer className={[!this.state.light ? 'on-dark' : '', open ? 'is-open' : '']}>
                    <p
                        style={{
                            fontSize: font.size + 'px',
                            fontFamily: ' "' + font.family + '",' + font.typeface,
                            fontWeight: font.weight ? font.weight[1] : '',
                            lineHeight: font.lineHeight + 'px',
                            letterSpacing: font.letterSpacing + 'px',
                            fontStyle: font.style,
                            color: color.hex,
                            opacity: opacity,
                            textAlign: text.align,
                            textTransform: text.transform,
                            textDecoration: text.decoration
                        }}
                    >{
                        this.state.alphabet ? this.state.text.alphabet : this.state.text.paragraph
                    }
                    </p>
                    <Options>
                        <IconContainer
                            onClick={e => {
                                this.setState({
                                    light: !this.state.light
                                });
                            }}>
                            {lightIcon}
                        </IconContainer>
                        <IconContainer
                            onClick={e => {
                                this.setState({alphabet: !this.state.alphabet});
                            }}>
                            {textIcon}
                        </IconContainer>
                        <IconContainer
                            onClick={e => {
                                this.props.toggleOpenPreview();
                            }}>
                            {extendIcon}
                        </IconContainer>
                    </Options>
                </TextContainer>
            </PreviewContainer>
        );
    }
};

export default TextPreview;
