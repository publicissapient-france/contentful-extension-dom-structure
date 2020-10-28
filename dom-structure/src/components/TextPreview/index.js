import React, {useState, useEffect} from 'react';
import {IconContainer} from '../../style/styledComponentsFields';
import SvgMoon from '../svg/SvgMoon';
import SvgSun from '../svg/SvgSun';
import SvgA from '../svg/SvgA';
import SvgP from '../svg/SvgP';
import SvgExtend from '../svg/SvgExtend';
import PropTypes from 'prop-types';

import {PreviewContainer, Options, TextContainer} from './styled';

const TextPreview = (props) => {
    const [light, setLight] = useState(true);
    const [alphabet, setAlphabet] = useState(true);
    const [previewAlphabet, setPreviewAlphabet] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*');
    const [previewParagraph, setPreviewParagraph] = useState('Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.');
    const [font, setFont] = useState(null);
    const [text, setText] = useState(null);
    const [opacity, setOpacity] = useState(null);
    const [color, setColor] = useState(null);

    useEffect(() => {
        setFont(props.font);
        setText(props.text);
        setOpacity(props.opacity);
        setColor(props.color);


    }, [props.font, props.text, props.opacity, props.color]);

    let lightIcon = light ? <SvgMoon/> : <SvgSun/>;
    let textIcon = alphabet ? <SvgP/> : <SvgA/>;
    let extendIcon = alphabet ? <SvgExtend/> : <SvgExtend/>;
    if (!font || !text || !color) return <p>preview impossible</p>;
    return (
        <PreviewContainer className={props.hidden ? 'hidden' : ''}>
            <TextContainer className={[!light ? 'on-dark' : '', props.open ? 'is-open' : '']}>
                <p
                    style={{
                        fontSize: `${ font.size }px`,
                        fontFamily: `"${ font.family }",${ font.typeface }`,
                        fontWeight: font.weight ? font.weight[1] : '',
                        lineHeight: `${ font.lineHeight }px`,
                        letterSpacing: `${ font.letterSpacing }px`,
                        fontStyle: font.style,
                        color: color.hex,
                        opacity: opacity.value,
                        textAlign: text.align,
                        textTransform: text.transform,
                        textDecoration: text.decoration
                    }}
                >{alphabet ? previewAlphabet : previewParagraph}
                </p>
                <Options>
                    <IconContainer
                        onClick={() => {setLight(!light)}}>{lightIcon}
                    </IconContainer>
                    <IconContainer
                        onClick={() => { setAlphabet(!alphabet);}}>
                        {textIcon}
                    </IconContainer>
                    <IconContainer
                        onClick={() => props.toggleOpenPreview()}>
                        {extendIcon}
                    </IconContainer>
                </Options>
            </TextContainer>
        </PreviewContainer>
    );
};

TextPreview.propTypes = {
    open: PropTypes.bool,
    hidden: PropTypes.bool,
    toggleOpenPreview : PropTypes.func
};

export default TextPreview;
