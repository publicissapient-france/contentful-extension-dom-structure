import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import _ from 'lodash';
import {getCurrentStyle} from '../../actions/index';
import {hasNotSamePropertyValue} from '../../utils/functions'

import {Property, IconContainer} from '../../style/styledComponentsFields';
import {ChoiceFont, ContainerProps, FontProps, AlignProps, Field, TransformProps, TypoProps} from "./styled";
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
import IconActing from "../../components/IconActing/index";
import Dot from '../../components/Dot/index';


class Typography extends Component {
    constructor(props) {
        super(props);

        this.state = {familyFonts: []};
    }

    componentDidMount() {
        this.setState({
            familyFonts: _.groupBy(this.props.fonts, 'family'),
            font: this.props.font || this.props.defaultFont,
            text: this.props.text || this.props.defaultText
        });
    };

    componentDidUpdate(prevProps) {
        if (this.props.fonts != prevProps.fonts) {
            this.setState({
                familyFonts: _.groupBy(this.props.fonts, 'family'),
            });
        }

        if (this.props.font !== prevProps.font || this.props.text !== prevProps.text) {
            this.setState({
                ...this.state,
                font: this.props.font,
                text: this.props.text
            }, () => {
                if (this.state.font && this.state.font.theme && this.props.themes && !this.state.font.family) {
                    this.initWithTheme();
                }
            });
        }
    }

    initWithTheme = () => {
        let selectedTheme = this.getThemeValue(this.props.themes, this.state.font.theme);
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                family: selectedTheme.family,
                typeface: selectedTheme.typeface,
                weight: selectedTheme.weight,
                size: selectedTheme.fontsize,
                lineHeight: selectedTheme.lineheight
            }
        }, () => {
            new Promise( (resolve, reject) => {
                this.props.updateStateProps('font', this.state.font);
                resolve();
            }).then(() => {
                this.props.updateStore();
            })
        })
    }

    updateWithTheme = () => {
        let selectedTheme = this.getThemeValue(this.props.themes, this.state.font.theme);
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                family: selectedTheme.family,
                typeface: selectedTheme.typeface,
                weight: selectedTheme.weight,
                size: selectedTheme.fontsize,
                lineHeight: selectedTheme.lineheight
            }
        }, () => {
            this.props.updateStateProps('font', this.state.font);
        })
    }

    updateFontProp = (prop, value) => {
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                [prop]: value
            }
        }, () => {
            this.props.updateStateProps('font', this.state.font);
        })
    }
    updateTextProp = (prop, value) => {
        this.setState({
            ...this.state,
            text: {
                ...this.state.text,
                [prop]: value
            }
        }, () => {
            this.props.updateStateProps('text', this.state.text);
        })
    }
    updateFontTheme = (value) => {
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                theme: value
            }
        }, () => {
            this.updateWithTheme();
            this.props.updateStateProps('font', this.state.font);
        })
    }
    updateFontFamily = (value) => {
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                family: value,
                typeface: this.state.familyFonts[value][0].typeface
            }
        }, () => {
            this.props.updateStateProps('font', this.state.font);
        })
    }

    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return
        return themes.find(theme => theme.name === selectedTheme);
    }

    transformPropsAreNotDefault = () => {
        if (hasNotSamePropertyValue(this.props.defaultText, this.props.text, 'transform')
            || hasNotSamePropertyValue(this.props.defaultText, this.props.text, 'decoration')
            || hasNotSamePropertyValue(this.props.defaultFont, this.props.font, 'style')) {
            return true
        }
        return false
    }

    getWeightNumber = (array, key) => array[key].weight[1];
    getWeightName = (array, key) => array[key].weight[0];
    getTypeface = (array, key) => array[key].typeface;

    render() {
        const {font, text, storeValueFont, storeValueText, defaultFont, defaultText} = this.props;
        if (!font || !text) return null
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
                                        onChange={e => {
                                            this.updateFontTheme(e.target.value);
                                        }}>
                                    {this.props.themes ? this.props.themes.map((theme, i) => <option value={theme.name}
                                                                                                     key={i}>{theme.name}</option>) :
                                        <option></option>}
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
                                    onChange={e => {
                                        this.updateFontFamily(e.target.value);
                                    }}>
                                    <option></option>
                                    {Object.keys(this.state.familyFonts).map(key => <option value={key}
                                                                                            key={key}>{key}</option>)}
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
                                        this.updateFontProp('weight', [textSelected, valueSelected]);
                                    }}>
                                    {
                                        (font.family && this.state.familyFonts[font.family])
                                            ? Object.keys(_.groupBy(this.state.familyFonts[font.family], 'weight[0]')).map((key, i) =>
                                                <option
                                                    value={this.getWeightNumber(this.state.familyFonts[font.family], i)}
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
                                   onChange={e => {
                                       this.updateFontProp('size', e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'lineHeight')}/>
                            <IconContainer>
                                <SvgLineHeight/>
                            </IconContainer>
                            <input type={'number'}
                                   className={hasNotSamePropertyValue(storeValueFont, font, 'lineHeight') ? 'updated' : ''}
                                   value={font.lineHeight || ''}
                                   onChange={e => {
                                       this.updateFontProp('lineHeight', e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultFont, font, 'letterSpacing')}/>
                            <IconContainer>
                                <SvgLetterSpacing/>
                            </IconContainer>
                            <input type={'number'}
                                   className={hasNotSamePropertyValue(storeValueFont, font, 'letterSpacing') ? 'updated' : ''}
                                   value={font.letterSpacing || ''}
                                   onChange={e => {
                                       this.updateFontProp('letterSpacing', e.target.value);
                                   }}/>
                        </div>
                    </TypoProps>
                </ContainerProps>
                <ContainerProps>
                    <AlignProps>
                        <div>
                            <Dot enabled={hasNotSamePropertyValue(defaultText, text, 'align')}/>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'} value={'left'}
                                        action={this.updateTextProp}>
                                <SvgAlignLeft/>
                            </IconActing>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'}
                                        value={'center'}
                                        action={this.updateTextProp}>
                                <SvgAlignCenter/>
                            </IconActing>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'} value={'right'}
                                        action={this.updateTextProp}>
                                <SvgAlignRight/>
                            </IconActing>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'align'}
                                        value={'justify'}
                                        action={this.updateTextProp}>
                                <SvgAlignJustify/>
                            </IconActing>
                        </div>
                    </AlignProps>
                    <TransformProps>
                        <div>
                            <Dot enabled={this.transformPropsAreNotDefault()}/>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'transform'}
                                        value={'uppercase'} action={this.updateTextProp} nullAllowed>
                                <SvgCapitalize/>
                            </IconActing>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'transform'}
                                        value={'capitalize'} action={this.updateTextProp} nullAllowed>
                                <SvgDropCap/>
                            </IconActing>
                            <IconActing objectA={storeValueText} objectB={text} targetProperty={'decoration'}
                                        value={'underline'} action={this.updateTextProp} nullAllowed>
                                <SvgUnderline/>
                            </IconActing>
                            <IconActing objectA={storeValueFont} objectB={font} targetProperty={'style'}
                                        value={'italic'} action={this.updateFontProp} nullAllowed>
                                <SvgItalic/>
                            </IconActing>
                        </div>
                    </TransformProps>
                </ContainerProps>
            </ChoiceFont>
        );
    }
}


Typography.protoTypes = {
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
        generatedFontName: PropTypes.string.isRequired,
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
    }))
};


const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts,
    themes: getCurrentStyle(state).style.themes
});

export default connect(mapStateToProps)(Typography);
