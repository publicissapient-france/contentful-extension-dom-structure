import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import {getCurrentStyle} from '../../actions/index';
import {hasNotSamePropertyValue} from '../../utils/functions';

import {Property, IconContainer} from '../../style/styledComponentsFields';
import {ChoiceFont, ContainerProps, FontProps, AlignProps, Field, TransformProps, TypoProps} from './styled';
import SvgFontSize from '../../components/svg/SvgFontSize';
import SvgLineHeight from '../../components/svg/SvgLineHeight';
import SvgLetterSpacing from '../../components/svg/SvgLetterSpacing';
import SvgCapitalize from '../../components/svg/SvgCapitalize';
import SvgItalic from '../../components/svg/SvgItalic';
import SvgDropCap from '../../components/svg/SvgDropCap';
import SvgUnderline from '../../components/svg/SvgUnderline';
import SvgAlignLeft from '../../components/svg/SvgAlignLeft';
import SvgAlignCenter from '../../components/svg/SvgAlignCenter';
import SvgAlignJustify from '../../components/svg/SvgAlignJustify';
import SvgAlignRight from '../../components/svg/SvgAlignRight';
import IconActing from '../../components/IconActing/index';
import Dot from '../../components/Dot/index';

const getWeightNumber = (array, key) => array[key].weight[1];
const getWeightName = (array, key) => array[key].weight[0];
const getTypeface = (array, key) => array[key].typeface;

const Typography = ({fonts, font, storeValueFont, defaultFont, text, storeValueText, defaultText, currentMode, event, themes, updateStateProps}) => {
    const [familyFonts, setFamilyFonts] = useState([]);
    const [innerFont, setInnerFont] = useState(font || defaultFont);
    const [innerText, setInnerText] = useState(text || defaultText);

    useEffect(() => {
        setInnerFont(font || defaultFont);
        setInnerText(text || defaultText);
    }, []);

    useEffect(() => {
        setFamilyFonts(_.groupBy(fonts, 'family'));
    }, [fonts]);

    useEffect(() => {
        setInnerFont(font);
    }, [font]);

    useEffect(() => {
        setInnerText(text);
    }, [text]);

    useEffect(() => {
        updateStateProps('font', innerFont, event);
    }, [innerFont]);

    useEffect(() => {
        updateStateProps('text', innerText, event);
    }, [innerText]);

    const updateFontProp = (prop, value) => {
        setInnerFont(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    const updateTextProp = (prop, value) => {
        setInnerText(prev => ({
            ...prev,
            [prop]: value
        }));
    }

    const updateFontTheme = (theme) => {
        let selectedTheme = getThemeValue(themes, theme);
        setInnerFont(prev => ({
            ...prev,
            theme: theme,
            family: selectedTheme.family,
            typeface: selectedTheme.typeface,
            weight: selectedTheme.weight,
            size: selectedTheme.fontsize[currentMode],
            lineHeight: selectedTheme.lineheight[currentMode]
        }))
    }

    const updateFontFamily = value => {
        setInnerFont(prev => ({
            ...prev,
            family: value,
            typeface: familyFonts[value][0].typeface
        }));
    }

    const getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return;
        return themes.find(theme => theme.name === selectedTheme);
    }

    const transformPropsAreNotDefault = () => {
        if (hasNotSamePropertyValue(defaultText, text, 'transform') ||
            hasNotSamePropertyValue(defaultText, text, 'decoration') ||
            hasNotSamePropertyValue(defaultFont, font, 'style')) {
            return true;
        }
        return false;
    }

    if (!font || !text) return null;
    return (
        <ChoiceFont>
            <ContainerProps>
                <FontProps>
                    <div>
                        <Property>Thème</Property>
                        <Field>
                            <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'theme')}/>
                            <select value={font.theme}
                                    className={hasNotSamePropertyValue(storeValueFont, font, 'theme') ? 'updated' : ''}
                                    onChange={e => updateFontTheme(e.target.value)}>
                                {
                                    themes ?
                                    themes.map((theme, i) => <option value={theme.name} key={i}>{theme.name}</option>)
                                    : <option></option>
                                }
                            </select>
                        </Field>
                    </div>
                    <div>
                        <Property>Font</Property>
                        <Field>
                            <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'family')}/>
                            <select
                                value={font.family || ''}
                                className={hasNotSamePropertyValue(storeValueFont, font, 'family') ? 'updated' : ''}
                                onChange={e => updateFontFamily(e.target.value)}>
                                <option></option>
                                {Object.keys(familyFonts).map(key => <option value={key} key={key}>{key}</option>)}
                            </select>
                        </Field>
                    </div>
                    <div>
                        <Field>
                            <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'weight')}/>
                            <select
                                value={font.weight ? font.weight[1] : ''}
                                className={hasNotSamePropertyValue(storeValueFont, font, 'weight') ? 'updated' : ''}
                                onChange={e => {
                                    let textSelected = e.target.options[e.target.selectedIndex].text;
                                    let valueSelected = e.target.value;
                                    updateFontProp('weight', [textSelected, valueSelected]);
                                }}>
                                {
                                    (font.family && familyFonts[font.family])
                                        ? Object.keys(_.groupBy(familyFonts[font.family], 'weight[0]')).map((key, i) =>
                                            <option
                                                value={getWeightNumber(familyFonts[font.family], i)}
                                                key={key}>{key}</option>)
                                        : <option></option>
                                }
                            </select>
                        </Field>
                    </div>
                </FontProps>

                <TypoProps>
                    <div>
                        <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'size')}/>
                        <IconContainer>
                            <SvgFontSize/>
                        </IconContainer>
                        <input type={'number'}
                               className={hasNotSamePropertyValue(storeValueFont, font, 'size') ? 'updated' : ''}
                               value={font.size || ''}
                               onChange={e => updateFontProp('size', e.target.value)}/>
                    </div>
                    <div>
                        <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'lineHeight')}/>
                        <IconContainer>
                            <SvgLineHeight/>
                        </IconContainer>
                        <input type={'number'}
                               className={hasNotSamePropertyValue(storeValueFont, font, 'lineHeight') ? 'updated' : ''}
                               value={font.lineHeight || ''}
                               onChange={e => updateFontProp('lineHeight', e.target.value)}/>
                    </div>
                    <div>
                        <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'letterSpacing')}/>
                        <IconContainer>
                            <SvgLetterSpacing/>
                        </IconContainer>
                        <input type={'number'}
                               className={hasNotSamePropertyValue(storeValueFont, font, 'letterSpacing') ? 'updated' : ''}
                               value={font.letterSpacing || ''}
                               onChange={e => updateFontProp('letterSpacing', e.target.value)}/>
                    </div>
                </TypoProps>
            </ContainerProps>
            <ContainerProps>
                <AlignProps>
                    <div>
                        <Dot enabled={hasNotSamePropertyValue(defaultText, text, 'align')}/>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'} value={'left'}
                                    action={updateTextProp}>
                            <SvgAlignLeft/>
                        </IconActing>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'}
                                    value={'center'}
                                    action={updateTextProp}>
                            <SvgAlignCenter/>
                        </IconActing>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'} value={'right'}
                                    action={updateTextProp}>
                            <SvgAlignRight/>
                        </IconActing>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'}
                                    value={'justify'}
                                    action={updateTextProp}>
                            <SvgAlignJustify/>
                        </IconActing>
                    </div>
                </AlignProps>
                <TransformProps>
                    <div>
                        <Dot enabled={transformPropsAreNotDefault()}/>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'transform'}
                                    value={'uppercase'} action={updateTextProp} nullAllowed>
                            <SvgCapitalize/>
                        </IconActing>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'transform'}
                                    value={'capitalize'} action={updateTextProp} nullAllowed>
                            <SvgDropCap/>
                        </IconActing>
                        <IconActing objectA={storeValueText} objectB={text} targetProperty={'decoration'}
                                    value={'underline'} action={updateTextProp} nullAllowed>
                            <SvgUnderline/>
                        </IconActing>
                        <IconActing objectA={storeValueFont} objectB={font} targetProperty={'style'}
                                    value={'italic'} action={updateFontProp} nullAllowed>
                            <SvgItalic/>
                        </IconActing>
                    </div>
                </TransformProps>
            </ContainerProps>
        </ChoiceFont>
    );
}

Typography.protoTypes = {
    currentMode: PropTypes.string.isRequired,
    font: PropTypes.shape({
        family: PropTypes.string.isRequired,
        typeface: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        weight: PropTypes.arrayOf(PropTypes.string),
        theme: PropTypes.string.isRequired,
        letterSpacing: PropTypes.string.isRequired,
        lineHeight: PropTypes.string.isRequired,
        style: PropTypes.oneOf(['italic', null])
    }),
    defaultFont: PropTypes.shape({
        family: PropTypes.string,
        typeface: PropTypes.string,
        size: PropTypes.string,
        weight: PropTypes.arrayOf(PropTypes.string),
        theme: PropTypes.string,
        letterSpacing: PropTypes.string,
        lineHeight: PropTypes.string,
        style: PropTypes.oneOf(['italic', null])
    }),
    storeValueFont: PropTypes.shape({
        family: PropTypes.string.isRequired,
        typeface: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        weight: PropTypes.arrayOf(PropTypes.string),
        theme: PropTypes.string.isRequired,
        letterSpacing: PropTypes.string.isRequired,
        lineHeight: PropTypes.string.isRequired,
        style: PropTypes.oneOf(['italic', null])
    }),
    text: PropTypes.shape({
        align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
        decoration: PropTypes.oneOf(['underline', null]),
        transform: PropTypes.oneOf(['uppercase', 'capitalize', null]),
    }),
    defaultText: PropTypes.shape({
        align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
        decoration: PropTypes.oneOf(['underline', null]),
        transform: PropTypes.oneOf(['uppercase', 'capitalize', null]),
    }),
    storeValueText: PropTypes.shape({
        align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
        decoration: PropTypes.oneOf(['underline', null]),
        transform: PropTypes.oneOf(['uppercase', 'capitalize', null]),
    }),
    fonts: PropTypes.arrayOf(PropTypes.shape({
        family: PropTypes.string.isRequired,
        typeface: PropTypes.string.isRequired,
        weight: PropTypes.arrayOf(PropTypes.string)
    })),
    themes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        typeface: PropTypes.string.isRequired,
        weight: PropTypes.arrayOf(PropTypes.string),
        fontsize: PropTypes.string.isRequired,
        fontsizeEM: PropTypes.string,
        lineheight: PropTypes.string.isRequired,
        lineheightEM: PropTypes.string
    })),
    event: PropTypes.string,
    updateStateProps : PropTypes.func
};

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts,
    themes: getCurrentStyle(state).style.themes
});

export default connect(mapStateToProps)(Typography);
