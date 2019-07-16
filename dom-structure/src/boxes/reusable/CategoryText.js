import React, {Component} from 'react';
import {Property, IconContainer, Dot} from '../../style/styledComponentsBoxes';
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
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';
import styled from 'styled-components';
import _ from 'lodash';
import {extensionTheme} from '../../style/theme';

export const ChoiceFont = styled.div`
   display : flex;
   flex-direction : column;
    height : 100%;

`;

export const ContainerProps = styled.div`
    display : flex;
    
    &>div:nth-child(1){
       width : 50%;
       border-right : 1px solid ${ extensionTheme.grey20 }

    }
    &>div:nth-child(2){
       width : 50%;
    }
`;
export const FontProps = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    padding-right : 30px;   
    padding-bottom : 10px;   
    padding-top:10px;
    
    &>div{
        display : flex;
        flex-direction : column;
        margin-bottom:10px;

   }   
`;
export const TypoProps = styled.div`
    width : 100%;
    display : flex;
    flex-wrap : wrap;
    padding-right: 30px;
    padding-top: 34px;
    
    &>div{
        display : flex;
        height : 30px;
    
    & input{
        max-width : 50px;
        margin-left : 10px;
    }
   }
`;
export const AlignProps = styled.div`
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    padding : 10px 0;
    &>div{
        display : flex;
        
        &>${ IconContainer }:not(last-child){
            margin-right: 20px;
        }
    }
`;

export const TransformProps = styled.div`
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 }
    padding : 10px 0;

     &>div{
        display : flex;
        
        &>${ IconContainer }:not(last-child){
            margin-right: 20px;
        }
    }
`;
export const Field = styled.div`
    display : flex;
    
    select{
        width: 100%;
    }
`;

class CategoryText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            familyFonts: []
        };
    }

    componentDidMount = () => {
        this.setState({
            familyFonts: _.groupBy(this.props.fonts, 'family'),
            font: this.props.font,
            text: this.props.text
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.font !== prevProps.font || this.props.text !== prevProps.text) {
            this.setState({
                ...this.state,
                font: this.props.font,
                text: this.props.text
            }, () => {
                if (this.state.font && this.state.font.theme && this.props.themes && !this.state.font.family) {
                    this.updateWithTheme();
                }
            });
        }

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

    getThemeValue = (themes, selectedTheme) => {
        if (!themes || !selectedTheme) return

        let result = themes.find(theme => theme.name === selectedTheme);
        return result;
    }

    getWeightNumber = (array, key) => {
        return array[key].weight[1];
    }
    getWeightName = (array, key) => {
        return array[key].weight[0];
    }
    getTypeface = (array, key) => {
        return array[key].typeface;
    }

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
                                <Dot className={defaultFont.theme && font.theme != defaultFont.theme ? 'active ' : ''}/>
                                <select value={font.theme}
                                        className={storeValueFont && font.theme !== storeValueFont.theme ? 'updated' : ''}
                                        onChange={e => {
                                            this.updateFontTheme(e.target.value);
                                        }}>
                                    {this.props.themes ? this.props.themes.map((theme, i) => <option value={theme.name} key={i}>{theme.name}</option>) :
                                        <option></option>}
                                </select>
                            </Field>
                        </div>
                        <div>
                            <Property>Font</Property>
                            <Field>
                                <Dot
                                    className={defaultFont.family && font.family !== defaultFont.family ? 'active ' : ''}/>
                                <select
                                    value={font.family || ''}
                                    className={storeValueFont && font.family !== storeValueFont.family ? 'updated' : ''}
                                    onChange={e => {
                                        this.setState({
                                            ...this.state,
                                            font: {
                                                ...this.state.font,
                                                family: e.target.value,
                                                typeface: this.state.familyFonts[e.target.value][0].typeface
                                            }
                                        }, () => {
                                            this.props.updateStateProps('font', this.state.font);
                                        })
                                    }}>
                                    <option></option>
                                    {Object.keys(this.state.familyFonts).map(key => <option value={key}
                                                                                            key={key}>{key}</option>)}
                                </select>
                            </Field>
                        </div>
                        <div>
                            <Field>
                                <Dot
                                    className={defaultFont.weight && font.weight !== defaultFont.weight ? 'active ' : ''}/>
                                <select
                                    value={font.weight ? font.weight[1] : ''}
                                    className={storeValueFont && font.weight !== storeValueFont.weight ? 'updated' : ''}
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
                            <Dot className={defaultFont.size && font.size !== defaultFont.size ? 'active ' : ''}/>
                            <IconContainer>
                                <SvgFontSize/>
                            </IconContainer>
                            <input type={'number'}
                                   className={storeValueFont && font.size !== storeValueFont.size ? 'updated' : ''}
                                   value={font.size || 0}
                                   onChange={e => {
                                       this.updateFontProp('size', e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <Dot
                                className={defaultFont.lineHeight && font.lineHeight !== defaultFont.lineHeight ? 'active ' : ''}/>
                            <IconContainer>
                                <SvgLineHeight/>
                            </IconContainer>
                            <input type={'number'}
                                   className={storeValueFont && font.lineHeight !== storeValueFont.lineHeight ? 'updated' : ''}
                                   value={font.lineHeight || 0}
                                   onChange={e => {
                                       this.updateFontProp('lineHeight', e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <Dot
                                className={defaultFont.letterSpacing && font.letterSpacing !== defaultFont.letterSpacing ? 'active ' : ''}/>
                            <IconContainer>
                                <SvgLetterSpacing/>
                            </IconContainer>
                            <input type={'number'}
                                   className={storeValueFont && font.letterSpacing !== storeValueFont.letterSpacing ? 'updated' : ''}
                                   value={font.letterSpacing || 0}
                                   onChange={e => {
                                       this.updateFontProp('letterSpacing', e.target.value);
                                   }}/>
                        </div>
                    </TypoProps>
                </ContainerProps>
                <ContainerProps>
                    <AlignProps>
                        <div>
                            <Dot className={defaultText.align && text.align !== defaultText.align ? 'active ' : ''}/>
                            <IconContainer
                                className={storeValueText && text.align !== storeValueText.align && text.align === 'left' ? 'updated' :
                                    (text.align === 'left' ? 'active' : '')} onClick={e => {
                                this.updateTextProp('align', 'left');
                            }}>
                                <SvgAlignLeft/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && text.align !== storeValueText.align && text.align === 'center' ? 'updated' :
                                    (text.align === 'center' ? 'active' : '')} onClick={e => {
                                this.updateTextProp('align', 'center');
                            }}>
                                <SvgAlignCenter/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && text.align !== storeValueText.align && text.align === 'right' ? 'updated' :
                                    (text.align === 'right' ? 'active' : '')} onClick={e => {
                                this.updateTextProp('align', 'right');
                            }}>
                                <SvgAlignRight/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && text.align !== storeValueText.align && text.align === 'justify' ? 'updated' :
                                    (text.align === 'justify' ? 'active' : '')} onClick={e => {
                                this.updateTextProp('align', 'justify');
                            }}>
                                <SvgAlignJustify/>
                            </IconContainer>

                        </div>
                    </AlignProps>
                    <TransformProps>
                        <div>
                            <Dot
                                className={defaultText.transform && text.transform !== defaultText.transform ? 'active ' : ''}/>
                            <IconContainer
                                className={storeValueText && text.transform !== storeValueText.transform && text.transform === 'uppercase' ? 'updated' :
                                    (text.transform === 'uppercase' ? 'active' : '')} onClick={e => {
                                if (text.transform === 'uppercase') {
                                    this.updateTextProp('transform', null);
                                } else {
                                    this.updateTextProp('transform', 'uppercase');
                                }
                            }}>
                                <SvgCapitalize/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && text.transform !== storeValueText.transform && text.transform === 'capitalize' ? 'updated' :
                                    (text.transform === 'capitalize' ? 'active' : '')} onClick={e => {
                                if (text.transform === 'capitalize') {
                                    this.updateTextProp('transform', null);
                                } else {
                                    this.updateTextProp('transform', 'capitalize');
                                }
                            }}>
                                <SvgDropCap/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && text.decoration !== storeValueText.decoration && text.decoration === 'underline' ? 'updated' :
                                    (text.decoration === 'underline' ? 'active' : '')} onClick={e => {
                                if (text.decoration === 'underline') {
                                    this.updateTextProp('decoration', null);
                                } else {
                                    this.updateTextProp('decoration', 'underline');
                                }
                            }}>
                                <SvgUnderline/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueFont && font.style !== storeValueFont.style && font.style === 'italic' ? 'updated' :
                                    (font.style === 'italic' ? 'active' : '')} onClick={e => {
                                if (font.style === 'italic') {
                                    this.updateFontProp('style', null);
                                } else {
                                    this.updateFontProp('style', 'italic');
                                }
                            }}>
                                <SvgItalic/>
                            </IconContainer>
                        </div>
                    </TransformProps>
                </ContainerProps>
            </ChoiceFont>
        );
    }
}

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts,
    themes: getCurrentStyle(state).style.themes
});

export default connect(mapStateToProps)(CategoryText);
