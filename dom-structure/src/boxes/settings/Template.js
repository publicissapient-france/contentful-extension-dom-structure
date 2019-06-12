import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, ButtonGreen, Error } from '../../style/styledComponents';
import { Banner, Fields, ActiveContent, BoxColor, Palette, Property } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import SvgCross from '../../components/SvgCross';
import { connect } from 'react-redux';
import { updateSettingsValue, getCurrentDOM, getColors } from '../../actions';
import Palettes from '../../components/Palettes';
import { extensionTheme } from '../../style/theme';

import styled from 'styled-components';

export const FieldsTemplate = styled(Fields)`
    padding :0px 0px 0px 20px;
    
    &.open{
        flex-direction : row;
        
    }
`;export const FieldsError = styled(Fields)`
    display : block;
`;

export const SelectedColor = styled(BoxColor)`
    width : 30px;
    height : 30px;
    align-self:flex-start;
`;

export const ChoiceColor = styled.div`
   display : flex;
  // width : 100%;
   
   &>div{
    padding-bottom : 20px;
    display:flex;
    flex-direction:column;
    
   }
   
   &>div:nth-child(1){
       margin-right : 20px;
       width : 100px;
       min-width : 100px;
   }
   
   &>div:nth-child(2){
       border-left:1px solid  ${ extensionTheme.grey20 };
       padding-left : 25px;
       display:flex;
       flex-direction : row;
       justify-content : space-between;
       width: inherit;
       
       &>div{
        display:flex;
        flex-direction:column;
       }
       
       &.hidden{
        display : none;
       }
       
   }
`;
export const Close = styled(Icon)`
   align-self :flex-end;
   width : 40px;
`;

export const PaletteContainer = styled(Palette)`
    padding-top : 10px;
`;

export const ChoiceOpacity = styled(Fields)`
    display : flex;
    padding : 0px 30px 20px 25px;

   &>input{
    width : 60px;
   }
`;
export const ColorForm = styled.div`
    
`;

export const PaletteView = styled.div`
    width : 100%;
`;

export const ChoiceConfirm = styled(Fields)`
    display : flex;
    padding :0px 20px 20px 15px;
    align-items : flex-end;
    justify-content : flex-end;
`;

class Template extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true,
            colors: null,
            viewPalette: false,
            openPalette: false
        };
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.settings.Template ? componentStore.settings.Template.value : {},
            active: componentStore.settings.Template ? componentStore.settings.Template.active : true,
            colors: this.props.colors ? this.props.colors : null
        });
    };

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.settings.Template && componentStore.settings.Template.value === this.state.value) {
            return false;
        }
        return true;
    }

    render () {
        const { dispatch, dom, colors, indexComponent, indexSection, name } = this.props;

        if (!colors) {
            return (
                <div>
                    <Banner>
                        <div>
                            <p>{name}</p>
                        </div>
                        <Icon className={this.state.open ? '' : 'rotate'}
                            onClick={() => {
                                this.setState({ open: !this.state.open });
                            }}><SvgArrow/></Icon>
                    </Banner>
                    <FieldsError>
                        <Error>
                            <h2>Error</h2>
                            <p>To use this option, you must have selected a reference style guide in your project.</p>
                            <p>Please check that a style guide has been selected.</p>
                        </Error>
                    </FieldsError>
                </div>
            );
        }
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveContent
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({ active: !this.state.active }, () => {
                                    dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}/>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'}
                        onClick={() => {
                            this.setState({ open: !this.state.open });
                        }}><SvgArrow/></Icon>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>
                    <ChoiceColor>
                        <div>
                            <Property>Background-color</Property>
                            <SelectedColor
                                onClick={() => {
                                    this.setState({ viewPalette: !this.state.viewPalette });
                                }}
                                style={{
                                    background: this.state.value.hex ? this.state.value.hex : '#000'
                                }}/>
                        </div>
                        <PaletteView className={this.state.viewPalette ? '' : 'hidden'}>
                            <div>
                                <Property>Color chart</Property>
                                <Palettes colors={colors} parent={this} custom={false}
                                    currentColor={this.state.value.hex}/>
                            </div>
                            <div>
                                <Close onClick={() => {
                                    this.setState({ viewPalette: false });
                                }}><SvgCross/></Close>
                            </div>

                        </PaletteView>
                    </ChoiceColor>
                    <ChoiceOpacity className={this.state.viewPalette ? 'hidden' : 'q'}>
                        <Property>Opacity </Property>
                        <input type={'number'} max={100} min={0}
                            value={this.state.value.opacity ? this.state.value.opacity * 100 : 100}
                            onChange={e => {
                                this.setState({
                                    value: {
                                        ...this.state.value,
                                        opacity: e.target.value / 100
                                    }
                                }, () => {
                                    console.log('STATE', this.state);
                                });
                            }}/>
                        <span>%</span>
                    </ChoiceOpacity>
                    <ColorForm>

                    </ColorForm>
                    <ChoiceConfirm className={this.state.viewPalette ? 'hidden' : ''}>
                        <ButtonGreen
                            disabled={!this.isUpdated()}
                            className={this.isUpdated() ? 'active' : ''}
                            onClick={() => {
                                dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                            }}>
                            Update
                        </ButtonGreen>
                    </ChoiceConfirm>

                </FieldsTemplate>
            </div>
        );
    }
}

Template.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    colors: getColors(state).value
});

export default connect(mapStateToProps)(Template);