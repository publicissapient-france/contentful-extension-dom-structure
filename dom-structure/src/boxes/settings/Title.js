import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, ButtonGreen,ButtonBasic, Error } from '../../style/styledComponents';
import { Banner, Fields, ActiveCheckBox, BoxColor, Palette, Property, ChoiceConfirm } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import SvgCross from '../../components/SvgCross';
import SvgCheck from '../../components/SvgCheck';
import { connect } from 'react-redux';
import { updateSettingsValue, getCurrentDOM, getColors } from '../../actions';
import Palettes from '../../components/Palettes';
import { extensionTheme } from '../../style/theme';
import styled from 'styled-components';

export const FieldsTemplate = styled(Fields)`
    padding : 20px 0px 20px 15px;

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
   &.full-width{
     width : 100%;
   }
   
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
        justify-content:space-between;
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

export const ChoiceOpacity = styled(Fields)`
    display : flex;
    padding:0px;
    margin-left : 25px;

   &>input{
    width : 60px;
   }
`;

export const PaletteView = styled.div`
    width : 100%;
`;
export const ChoiceColorConfirm = styled(ChoiceConfirm)`
    margin-right : 15px;

`;


class Title extends Component {
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
            value: componentStore.settings.Title ? componentStore.settings.Title.value : {},
            active: componentStore.settings.Title ? componentStore.settings.Title.active : true,
            colors: this.props.colors ? this.props.colors : null,
            open : this.props.open
        });
    };

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.settings.Title && componentStore.settings.Title.value === this.state.value) {
            return false;
        }
        return true;
    }


    render () {
        const { dispatch, dom, colors, indexComponent, indexSection, name } = this.props;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({ active: !this.state.active }, () => {
                                    dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}>
                            <SvgCheck/>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'}
                        onClick={() => {
                            this.setState({ open: !this.state.open });
                        }}><SvgArrow/></Icon>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>


                </FieldsTemplate>
            </div>
        );
    }
}

Title.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    colors: getColors(state).value
});

export default connect(mapStateToProps)(Title);
