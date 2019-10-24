import React, { Component } from 'react';
import { IconContainer } from '../../style/styledComponentsFields';
import SvgMoon from '../svg/SvgMoon';
import SvgSun from '../svg/SvgSun';
import SvgA from '../svg/SvgA';
import SvgP from '../svg/SvgP';
import SvgExtend from '../svg/SvgExtend';
import PropTypes from 'prop-types';

import { PreviewContainer, Options, TextContainer } from './styled';

class TextPreview extends Component {
    constructor (props) {
        super(props);

        this.state = {
            light: true,
            alphabet: true,
            textPreview: {
                alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*',
                paragraph: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.'
            },
            font : null,
            text : null,
            opacity : null,
            color : null,
        };
    }

    componentDidMount(){
        this.setState({
            font : this.props.font,
            text : this.props.text,
            opacity : this.props.opacity,
            color : this.props.color
        })
    }

    componentDidUpdate(prevProps ) {
        if (this.props.font !== prevProps.font) {
            this.setState({
                font : this.props.font
            })
        }
        if (this.props.text !== prevProps.text) {
            this.setState({
                text : this.props.text
            })
        }
        if (this.props.opacity !== prevProps.opacity) {
            this.setState({
                opacity : this.props.opacity
            })
        }
        if (this.props.color !== prevProps.color) {
            this.setState({
                color : this.props.color
            })
        }
    }

    render () {
        const { font, text, color, opacity, open, hidden } = this.props;
        let lightIcon = this.state.light ? <SvgMoon/> : <SvgSun/>;
        let textIcon = this.state.alphabet ? <SvgP/> : <SvgA/>;
        let extendIcon = this.state.alphabet ? <SvgExtend/> : <SvgExtend/>;
        if (!this.state.font || !this.state.text || !this.state.color) return <p>preview impossible</p>;
        return (
            <PreviewContainer className={hidden ? 'hidden' : ''}>
                <TextContainer className={[!this.state.light ? 'on-dark' : '', open ? 'is-open' : '']}>
                    <p
                        style={{
                            fontSize: `${ this.state.font.size }px`,
                            fontFamily: `"${ this.state.font.family }",${ this.state.font.typeface }`,
                            fontWeight: this.state.font.weight ? this.state.font.weight[1] : '',
                            lineHeight: `${ this.state.font.lineHeight }px`,
                            letterSpacing: `${ this.state.font.letterSpacing }px`,
                            fontStyle: this.state.font.style,
                            color: this.state.color.hex,
                            opacity: this.state.opacity.value,
                            textAlign: this.state.text.align,
                            textTransform: this.state.text.transform,
                            textDecoration: this.state.text.decoration
                        }}
                    >{
                            this.state.alphabet ? this.state.textPreview.alphabet : this.state.textPreview.paragraph
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

TextPreview.propTypes = {
    hidden: PropTypes.bool
};

export default TextPreview;
