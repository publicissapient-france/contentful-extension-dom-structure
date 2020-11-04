import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import {getCurrentStyle} from '../../actions/index';
import {hasNotSamePropertyValue} from '../../utils/functions';

import {Property, IconContainer} from '../../style/styledComponentsFields';
import {ChoiceFont, ContainerProps, FontProps, Field, TypoProps} from './styled';
import SvgFontSize from '../../components/svg/SvgFontSize';
import SvgLineHeight from '../../components/svg/SvgLineHeight';
import Dot from '../../components/Dot/index';

const IconTypography = ({fonts, font, storeValueFont, defaultFont, updateStateProps, event}) => {
    const [familyFonts, setFamilyFonts] = useState([]);
    const [innerFont, setInnerFont] = useState(font || defaultFont);

    useEffect(() => {
        setInnerFont(font || defaultFont);
    }, [font]);

    useEffect(() => {
        setFamilyFonts(_.groupBy(fonts, 'family'));
    }, [fonts]);

    useEffect(() => {
        updateStateProps('font', innerFont, event)
    }, [innerFont]);

    const updateFontProp = (prop, value) => {
        setInnerFont(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    const updateFontFamily = value => {
        setInnerFont(prev => ({
            ...prev,
            family: value,
            typeface: familyFonts[value][0].typeface,
            weight: familyFonts[value][0].weight
        }))
    }

    if (!font) return null;
    return (
        <ChoiceFont>
            <ContainerProps>
                <FontProps>
                    <div>
                        <Property>Font</Property>
                        <Field>
                            <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'family')}/>
                            <select
                                value={font.family || ''}
                                className={hasNotSamePropertyValue(storeValueFont, font, 'family') ? 'updated' : ''}
                                onChange={e => updateFontFamily(e.target.value)}>
                                <option></option>
                                {Object.keys(familyFonts).map(key => <option value={key}
                                                                             key={key}>{key}</option>)}
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
                </TypoProps>
            </ContainerProps>
        </ChoiceFont>
    );
}

IconTypography.protoTypes = {
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

    fonts: PropTypes.arrayOf(PropTypes.shape({
        family: PropTypes.string.isRequired,
        typeface: PropTypes.string.isRequired,
        weight: PropTypes.arrayOf(PropTypes.string)
    })),
    event : PropTypes.string,
    updateStateProps : PropTypes.func
};

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts
});

export default connect(mapStateToProps)(IconTypography);
