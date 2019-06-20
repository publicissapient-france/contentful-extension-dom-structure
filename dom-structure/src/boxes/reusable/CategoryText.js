import React, {Component} from 'react';
import {Icon} from '../../style/styledComponents';
import {Property} from '../../style/styledComponentsBoxes';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';
import styled from 'styled-components';
import _ from 'lodash';

export const Close = styled(Icon)`
   align-self :flex-end;
   width : 40px;
`;

export const ChoiceFont = styled.div`
   display : flex;
   flex-direction : column; 
`;

export const PaletteView = styled.div`
    width : 100%;
`;

export const FontProps = styled.div`
    width : 100%;
    display : flex;
    
    &>div{
    display : flex;
    padding : 0 10px;
        flex-direction : column;

   }   
`;
export const OthersProps = styled.div`
    width : 100%;
    display : flex;
    &>div{
    display : flex;
    flex-direction : column;
    padding : 0 10px;
    
    & input{
        max-width : 60px;
    }
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
        const {fontFamily, fontWeight, fontSize, lineHeight} = this.props;
        return (
            <ChoiceFont>
                <FontProps>
                    <div>
                        <Property>Font</Property>
                        <select
                            value={fontFamily}
                            onChange={e => {
                                this.props.updateFontFamily(e.target.value)
                            }}>
                            <option></option>
                            {Object.keys(this.state.typographies).map(key => <option value={key}
                                                                                     key={key}>{key}</option>)}
                        </select>
                    </div>
                    <div>
                        <Property>font-weight</Property>
                        <select
                            value={fontWeight}
                            onChange={e => {
                                this.props.updateFontWeight(e.target.value)
                            }}>
                            {
                                (fontFamily && this.state.typographies[fontFamily]) ?
                                    Object.keys(_.groupBy(this.state.typographies[fontFamily], 'weight[0]')).map((key) =>
                                        <option value={key} key={key}>{key}</option>)
                                    :
                                    <option></option>
                            }
                        </select>
                    </div>
                </FontProps>

                <OthersProps>
                    <div>
                        <Property>font-size</Property>
                        <input type={'number'}
                               value={fontSize}
                               onChange={e => {
                                   this.props.updateFontSize(e.target.value)
                               }}/>
                        <span>px</span>
                    </div>
                    <div>
                        <Property>line-height</Property>
                        <input type={'number'}
                               value={lineHeight}
                               onChange={e => {
                                   this.props.updateLineHeight(e.target.value)
                               }}/>
                        <span>px</span>
                    </div>
                </OthersProps>
            </ChoiceFont>
        );
    }
}

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts
});

export default connect(mapStateToProps)(CategoryText);
