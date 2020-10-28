import React, {useState} from 'react';

import {IconContainer} from '../../style/styledComponentsFields';
import SvgMoon from '../svg/SvgMoon';
import SvgSun from '../svg/SvgSun';
import SvgExtend from '../svg/SvgExtend';
import PropTypes from 'prop-types';

import {PreviewContainer, Options, TextContainer, Error} from './styled';

const IconPreview = ({font, color, opacity, open, hidden, toggleOpenPreview}) => {
    const [light, setLight] = useState(true);
    const [alphabet, setAlphabet] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*');

    let lightIcon = light ? <SvgMoon/> : <SvgSun/>;
    let extendIcon = alphabet ? <SvgExtend/> : <SvgExtend/>;
    if (!font) return <PreviewContainer><Error>Select you icon on Content tab</Error></PreviewContainer>;
    return (
        <PreviewContainer className={hidden ? 'hidden' : ''}>
            <TextContainer className={[!light ? 'on-dark' : '', open ? 'is-open' : '']}>
                <p
                    style={{
                        fontSize: `${ font.size }px`,
                        fontFamily: `"${ font.family }", Blank ,${ font.typeface } `,
                        fontWeight: font.weight ? font.weight[1] : '',
                        lineHeight: `${ font.lineHeight }px`,
                        color: color.hex,
                        opacity: opacity.value
                    }}>
                    {alphabet}
                </p>
                <Options>
                    <IconContainer onClick={() => setLight(!light)}>
                        {lightIcon}
                    </IconContainer>
                    <IconContainer onClick={() => toggleOpenPreview()}>
                        {extendIcon}
                    </IconContainer>
                </Options>
            </TextContainer>
        </PreviewContainer>
    );
};

IconPreview.propTypes = {
    font : PropTypes.object,
    color : PropTypes.object,
    opacity : PropTypes.object,
    open : PropTypes.bool,
    hidden: PropTypes.bool,
    toggleOpenPreview : PropTypes.func
};

export default IconPreview;
