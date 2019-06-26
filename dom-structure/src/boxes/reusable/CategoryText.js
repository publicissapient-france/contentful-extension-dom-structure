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
    padding-top:20px;
    
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
    padding-top: 44px;
    
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
            typographies: []
        };
    }

    componentDidMount = () => {
        this.setState({
            typographies: _.groupBy(this.props.fonts, 'name')
        });
    };

    render() {
        const {storeValueFont, storeValueText, fontFamily, fontWeight, fontSize, fontStyle, lineHeight, letterSpacing, textAlign, textTransform, textDecoration} = this.props;
        return (
            <ChoiceFont>
                <ContainerProps>
                    <FontProps>
                        <div>
                            <Property>Thème</Property>
                            <Field>
                                <Dot>
                                    <div></div>
                                </Dot>
                                <select>
                                    <option>Title 1</option>
                                    <option>Title 2</option>
                                </select>
                            </Field>
                        </div>
                        <div>
                            <Property>Font</Property>
                            <Field>
                                <Dot>
                                    <div></div>
                                </Dot>
                                <select
                                    value={fontFamily}
                                    className={storeValueFont && fontFamily !== storeValueFont.family ? 'updated' : ''}
                                    onChange={e => {
                                        this.props.updateFontFamily(e.target.value);
                                    }}>
                                    <option></option>
                                    {Object.keys(this.state.typographies).map(key => <option value={key}
                                                                                             key={key}>{key}</option>)}
                                </select>
                            </Field>
                        </div>
                        <div>
                            <Field>
                                <Dot>
                                    <div></div>
                                </Dot>
                                <select
                                    value={fontWeight}
                                    className={storeValueFont && fontWeight !== storeValueFont.weight ? 'updated' : ''}
                                    onChange={e => {
                                        this.props.updateFontWeight(e.target.value);
                                    }}>
                                    {
                                        (fontFamily && this.state.typographies[fontFamily])
                                            ? Object.keys(_.groupBy(this.state.typographies[fontFamily], 'weight[0]')).map(key =>
                                                <option value={key} key={key}>{key}</option>)
                                            : <option></option>
                                    }
                                </select>
                            </Field>
                        </div>
                    </FontProps>

                    <TypoProps>
                        <div>
                            <Dot>
                                <div></div>
                            </Dot>
                            <IconContainer>
                                <SvgFontSize/>
                            </IconContainer>
                            <input type={'number'}
                                   className={storeValueFont && fontSize !== storeValueFont.size ? 'updated' : ''}
                                   value={fontSize}
                                   onChange={e => {
                                       this.props.updateFontSize(e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <Dot>
                                <div></div>
                            </Dot>
                            <IconContainer>
                                <SvgLineHeight/>
                            </IconContainer>
                            <input type={'number'}
                                   className={storeValueFont && lineHeight !== storeValueFont.lineheight ? 'updated' : ''}
                                   value={lineHeight}
                                   onChange={e => {
                                       this.props.updateLineHeight(e.target.value);
                                   }}/>
                        </div>
                        <div>
                            <Dot>
                                <div></div>
                            </Dot>
                            <IconContainer>
                                <SvgLetterSpacing/>
                            </IconContainer>
                            <input type={'number'}
                                   className={storeValueFont && letterSpacing !== storeValueFont.letterSpacing ? 'updated' : ''}
                                   value={letterSpacing}
                                   onChange={e => {
                                       this.props.updateLetterSpacing(e.target.value);
                                   }}/>
                        </div>
                    </TypoProps>
                </ContainerProps>
                <ContainerProps>
                    <AlignProps>
                        <div>
                            <Dot>
                                <div></div>
                            </Dot>
                            <IconContainer
                                className={storeValueText && textAlign !== storeValueText.align && textAlign === 'left' ? 'updated' :
                                    (textAlign === 'left' ? 'active' : '')} onClick={e => {
                                this.props.updateTextAlign('left');

                            }}>
                                <SvgAlignLeft/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && textAlign !== storeValueText.align && textAlign === 'center' ? 'updated' :
                                    (textAlign === 'center' ? 'active' : '')} onClick={e => {
                                this.props.updateTextAlign('center');
                            }}>
                                <SvgAlignCenter/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && textAlign !== storeValueText.align && textAlign === 'right' ? 'updated' :
                                    (textAlign === 'right' ? 'active' : '')} onClick={e => {
                                this.props.updateTextAlign('right');
                            }}>
                                <SvgAlignRight/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && textAlign !== storeValueText.align && textAlign === 'justify' ? 'updated' :
                                    (textAlign === 'justify' ? 'active' : '')} onClick={e => {
                                this.props.updateTextAlign('justify');
                            }}>
                                <SvgAlignJustify/>
                            </IconContainer>

                        </div>
                    </AlignProps>
                    <TransformProps>
                        <div>
                            <Dot>
                                <div></div>
                            </Dot>
                            <IconContainer
                                className={storeValueText && textTransform !== storeValueText.transform && textTransform === 'uppercase' ? 'updated' :
                                    (textTransform === 'uppercase' ? 'active' : '')} onClick={e => {
                                if (textTransform === 'uppercase') {
                                    this.props.updateTextTransform('');
                                } else {
                                    this.props.updateTextTransform('uppercase');
                                }
                            }}>
                                <SvgCapitalize/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && textTransform !== storeValueText.transform && textTransform === 'capitalize' ? 'updated' :
                                    (textTransform === 'capitalize' ? 'active' : '')} onClick={e => {
                                if (textTransform === 'capitalize') {
                                    this.props.updateTextTransform(null);
                                } else {
                                    this.props.updateTextTransform('capitalize');
                                }
                            }}>
                                <SvgDropCap/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueText && textDecoration !== storeValueText.decoration && textDecoration === 'underline' ? 'updated' :
                                    (textDecoration === 'underline' ? 'active' : '')} onClick={e => {
                                if (textDecoration === 'underline') {
                                    this.props.updateTextDecoration(null);
                                } else {
                                    this.props.updateTextDecoration('underline');
                                }
                            }}>
                                <SvgUnderline/>
                            </IconContainer>
                            <IconContainer
                                className={storeValueFont && fontStyle !== storeValueFont.style && fontStyle === 'italic' ? 'updated' :
                                    (fontStyle === 'italic' ? 'active' : '')} onClick={e => {
                                if (fontStyle === 'italic') {
                                    this.props.updateFontStyle(null);
                                } else {
                                    this.props.updateFontStyle('italic');
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
    fonts: getCurrentStyle(state).style.fonts
});

export default connect(mapStateToProps)(CategoryText);
