import React, {Component} from 'react';
import {ButtonGreen} from '../../style/styledComponents';
import {getCurrentExtension, getStyleGuideName} from '../../actions/index';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class ColorAdd extends Component {
    openStyleGuide = e => {
        this.props.extensionInfo.extension.navigator.openEntry(this.props.extensionInfo.extension.entry.fields['styleGuide']
            .getValue().sys.id, {slideIn: true}).then(({entity}) => {});
    }

    render() {
        const {styleGuideName, display} = this.props;

        return (
            <section className={!display ? 'hidden' : ''}>
                <h2>Do you want to add a color on <strong>{styleGuideName}</strong>'s palette ? </h2>
                <ButtonGreen className={'active'} onClick={e => this.openStyleGuide(e)}>Open color chart </ButtonGreen>
            </section>
        );
    }
};

ColorAdd.propTypes = {
    display: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    styleGuideName: getStyleGuideName(state).value,
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ColorAdd);
