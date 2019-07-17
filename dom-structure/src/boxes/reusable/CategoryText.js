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
import IconActing from "../../components/IconActing";

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

        this.updateTextProp = this.updateTextProp.bind(this);
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

    getWeightNumber = (array, key) =>  array[key].weight[1];

    getWeightName = (array, key) => array[key].weight[0];

    getTypeface = (array, key) =>  array[key].typeface;


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
                                    {this.props.themes ? this.props.themes.map((theme, i) => <option value={theme.name}
                                                                                                     key={i}>{theme.name}</option>) :
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
                            <Dot
                                className={defaultText.transform && text.transform !== defaultText.transform ? 'active ' : ''}/>
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

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts,
    themes: getCurrentStyle(state).style.themes
});

export default connect(mapStateToProps)(CategoryText);
