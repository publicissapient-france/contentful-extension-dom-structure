import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleFormAddSection, toggleFormAddSectionToTop} from '../../actions/index';
import {Button} from './styled';
import SvgAddSection from '../../components/svg/SvgAddSection';


class AddingSection extends Component {
    render() {
        const {dispatch, onTop} = this.props;
        if (onTop) {
            return <Button onClick={() => dispatch(toggleFormAddSectionToTop())}>
               <SvgAddSection/>
                Add section
            </Button>;
        } else {
            return <Button onClick={() => dispatch(toggleFormAddSection())}>
                <SvgAddSection/>
                Add section
            </Button>;
        }
    }
}

export default connect()(AddingSection);
