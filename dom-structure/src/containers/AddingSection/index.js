import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFormAddSection, toggleFormAddSectionToTop } from '../../actions/index';
import { Button } from './styled'

class AddingSection extends Component {
    render () {
        const { dispatch, onTop } = this.props;
        if (onTop)
            return <Button onClick={() => dispatch(toggleFormAddSectionToTop())}>+ Add section</Button>;
        else
            return <Button onClick={() => dispatch(toggleFormAddSection())}>+ Add section</Button>;
    }
}

export default connect()(AddingSection);
