import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonBasic from '../ui/ButtonBasic';
import ButtonValidate from '../ui/ButtonValidate'
import {ChoiceConfirm} from "../../style/styledComponentsFields";
import {extensionTheme} from "../../style/theme";
import styled from "styled-components";


const ChoiceItemsConfirm = styled(ChoiceConfirm)`
    padding : 10px 15px 10px 20px;
    width : 100%;
    border-top : 1px solid ${ extensionTheme.grey20 };
    box-sizing : border-box;
`;

class FieldUpdateForm extends Component {

    render() {
        const {updated, canceling, updating} = this.props
        return (
            <ChoiceItemsConfirm className={!updated ? 'hidden' : ''}>
            <ButtonBasic label={'Cancel'} disabled={!updated} action={canceling}/>
            <ButtonValidate label={'Update'} disabled={!updated} action={updating}/>
        </ChoiceItemsConfirm>);
    }
}

FieldUpdateForm.propTypes = {};

export default FieldUpdateForm;
