import React, { Component } from 'react';

import { IconContainer } from '../../style/styledComponentsFields';
import SvgMoon from '../svg/SvgMoon';
import SvgSun from '../svg/SvgSun';
import SvgA from '../svg/SvgA';
import SvgP from '../svg/SvgP';
import SvgExtend from '../svg/SvgExtend';
import PropTypes from 'prop-types';

import { PreviewContainer, Options, TextContainer } from './styled';

class IconPreview extends Component {
    constructor (props) {
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

    render () {
        const { font, color, opacity, open, hidden } = this.props;
        let lightIcon = this.state.light ? <SvgMoon/> : <SvgSun/>;
        let textIcon = this.state.alphabet ? <SvgP/> : <SvgA/>;
        let extendIcon = this.state.alphabet ? <SvgExtend/> : <SvgExtend/>;
        if (!font) return <p>preview impossible</p>;
        return (
            <PreviewContainer className={hidden ? 'hidden' : ''}>
                <TextContainer className={[!this.state.light ? 'on-dark' : '', open ? 'is-open' : '']}>
                    <p
                        style={{
                            fontSize: `${ font.size }px`,
                            fontFamily: `"${ font.family }",${ font.typeface }`,
                            fontWeight: font.weight ? font.weight[1] : '',
                            lineHeight: `${ font.lineHeight }px`,
                            color: color.hex,
                            opacity: opacity.value
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
                                this.setState({ alphabet: !this.state.alphabet });
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

IconPreview.propTypes = {
    hidden: PropTypes.bool
};

export default IconPreview;
