import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, ButtonGreen, ButtonBasic, Error} from '../../style/styledComponents';
import {
    Banner,
    Fields,
    ActiveCheckBox,
    ChoiceConfirm
} from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/svg/SvgArrow';
import SvgCheck from '../../components/svg/SvgCheck';
import {connect} from 'react-redux';
import {updateSettingsValue, getCurrentDOM} from '../../actions';
import CategoryText from '../reusable/CategoryText';
import CategoryColor from '../reusable/CategoryColor';
import CategorySeo from '../reusable/CategorySeo';
import {extensionTheme} from '../../style/theme';
import styled from 'styled-components';
import update from "react-addons-update";

export const FieldsTemplate = styled(Fields)`
    padding :0px;

   /* &.open{
        flex-direction : row;
        
    }*/
`;
export const FieldsError = styled(Fields)`
    display : block;
`;

export const Choices = styled.div`
    width : 100%;
    display : flex;
`;
export const Category = styled.div`    
    border : 1px solid ${ extensionTheme.grey20 };
    border-left : 0px
    
    &.color{
        flex-grow : 1;
        width : fit-content;
        display : flex;
        padding-right: 30px;
        padding-top: 20px;

    }    
    
`;
export const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 0;
    width : 100%;

`;
export const Column = styled.div`
    display : flex;
    flex-direction : column;
    
    &.full-width{
        width : 100%;
        
        & ${Category}{
            width : 100%;
            padding-top : 0;
        }
    }

`;

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true,
            openView: false,
        };

        this.toggleOpenView = this.toggleOpenView.bind(this);
        this.updateStateProps = this.updateStateProps.bind(this);
    }

    componentDidMount = () => {
        console.log('default value : ', this.props.defaultValue);

        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.settings.Title ? componentStore.settings.Title.value : this.props.defaultValue,
            active: componentStore.settings.Title ? componentStore.settings.Title.active : true,
            open: this.props.open
        }, () => {
            console.log('TITLE compoentDidMount state', this.state)
            console.log('TITLEcomponentStore.settings.Title', componentStore.settings.Title)
        });
    };




    updateStateProps = (props , value) => {
        this.setState({
            value: {
                ...this.state.value,
                [props]: value
            }
        }, () => {
                console.log('updatefontprops :', this.state)
            });
    }

    toggleOpenView = () => {
        this.setState({openView: !this.state.openView});
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.settings.Title && componentStore.settings.Title.value === this.state.value) {
            return false;
        }
        return true;
    }

    colorIsUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.settings.Title &&
            (componentStore.settings.Title.value.hex === this.state.value.hex &&
                componentStore.settings.Title.value.name === this.state.value.name &&
                componentStore.settings.Title.value.shade === this.state.value.shade
            )
        ) {
            return false;
        }
        return true;
    }

    render() {
        const {dispatch, dom, indexComponent, indexSection, name} = this.props;
        const componentStore = dom.sections[indexSection].components[indexComponent];

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({active: !this.state.active}, () => {
                                    dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}>
                            <SvgCheck/>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'}
                          onClick={() => {
                              this.setState({open: !this.state.open});
                          }}><SvgArrow/></Icon>
                </Banner>
                <FieldsTemplate className={this.state.open ? 'open' : ''}>
                    <Choices>
                        <Column className={this.state.openView ? 'full-width' : ''}>
                            <Category className={'color'}>
                                <CategoryColor openView={this.state.openView}
                                               toggleOpenView={this.toggleOpenView}
                                               storeValueColor={componentStore.settings.Title && componentStore.settings.Title.value.color ? componentStore.settings.Title.value.color : null }
                                               color={this.state.value.color}
                                               opacity={this.state.value.opacity}
                                               updateStateProps={this.updateStateProps}
                                />
                            </Category>

                            <Category className={['seo', this.state.openView ? 'hidden' : '']}>
                                <CategorySeo
                                    storeValueSeo={componentStore.settings.Title && componentStore.settings.Title.value.seoTag ? componentStore.settings.Title.value.seoTag : null}
                                    seoTag={this.state.value.seoTag}
                                    updateStateProps={this.updateStateProps}/>
                            </Category>
                        </Column>

                        <Category className={['font', this.state.openView ? 'hidden' : '']}>
                            <CategoryText
                                storeValueFont={componentStore.settings.Title && componentStore.settings.Title.value.font ? componentStore.settings.Title.value.font: null}
                                storeValueText={componentStore.settings.Title && componentStore.settings.Title.value.text ? componentStore.settings.Title.value.text : null}
                                font={this.state.value.font}
                                text={this.state.value.text}
                                theme={this.state.value.theme}
                                updateStateProps={this.updateStateProps}
                            />
                        </Category>

                    </Choices>

                    <ChoiceItemsConfirm className={this.state.openView ? 'hidden' : ''}>
                        <ButtonBasic
                            className={this.isUpdated() ? '' : 'disable'}
                            onClick={e => {
                                e.preventDefault();
                                this.setState({
                                    value: componentStore.settings.Title.value
                                });
                            }}>
                            Cancel
                        </ButtonBasic>
                        <ButtonGreen
                            disabled={!this.isUpdated()}
                            className={this.isUpdated() ? 'active' : ''}
                            onClick={() => {
                                dispatch(updateSettingsValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                            }}>
                            Update
                        </ButtonGreen>
                    </ChoiceItemsConfirm>
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
});

export default connect(mapStateToProps)(Title);
