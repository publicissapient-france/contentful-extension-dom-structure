import React from 'react';
import {connect} from 'react-redux';
import {toggleFormAddSectionToBottom, toggleFormAddSectionToTop} from '../../actions/index';
import {Button} from './styled';
import SvgAddSection from '../../components/svg/SvgAddSection';


const AddingSection = ({dispatch, onTop}) => {
    if (onTop) {
        return <Button onClick={() => dispatch(toggleFormAddSectionToTop())}>
            <SvgAddSection/>
            Add section
        </Button>;
    } else {
        return <Button onClick={() => dispatch(toggleFormAddSectionToBottom())}>
            <SvgAddSection/>
            Add section
        </Button>;
    }
}

export default connect()(AddingSection);
