import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { getCurrentStyle } from '../../actions/index';
import { hasNotSamePropertyValue } from '../../utils/functions';

import { Property, IconContainer } from '../../style/styledComponentsFields';
import { ChoiceFont, ContainerProps, FontProps, Field, TypoProps } from './styled';
import SvgFontSize from '../../components/svg/SvgFontSize';
import SvgLineHeight from '../../components/svg/SvgLineHeight';
import Dot from '../../components/Dot/index';

class IconTypography extends Component {
    constructor (props) {
        super(props);

        this.state = { familyFonts: [] };
    }

    componentDidMount () {
        this.setState({
            familyFonts: _.groupBy(this.props.fonts, 'family'),
            font: this.props.font || this.props.defaultFont
        });
    };

    componentDidUpdate (prevProps) {
        if (this.props.fonts !== prevProps.fonts) {
            this.setState({
                familyFonts: _.groupBy(this.props.fonts, 'family'),
            });
        }

        if (this.props.font !== prevProps.font) {
            this.setState({
                ...this.state,
                font: this.props.font
            });
        }
    }

    updateFontProp = (prop, value) => {
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                [prop]: value
            }
        }, () => {
            this.props.event ? this.props.updateStateProps('font', this.state.font, this.props.event)
            : this.props.updateStateProps('font', this.state.font);
        });
    }

    updateFontFamily = value => {
        this.setState({
            ...this.state,
            font: {
                ...this.state.font,
                family: value,
                typeface: this.state.familyFonts[value][0].typeface,
                weight : this.state.familyFonts[value][0].weight
            }
        }, () => {
            this.props.event ? this.props.updateStateProps('font', this.state.font, this.props.event)
            :this.props.updateStateProps('font', this.state.font);
        });
    }

    render () {
        const { font, storeValueFont, defaultFont, event } = this.props;
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
                                    onChange={e => {
                                        this.updateFontFamily(e.target.value);
                                    }}>
                                    <option></option>
                                    {Object.keys(this.state.familyFonts).map(key => <option value={key}
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
                    </TypoProps>
                </ContainerProps>
            </ChoiceFont>
        );
    }
}

IconTypography.protoTypes = {
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
    }))
};

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts
});

export default connect(mapStateToProps)(IconTypography);
