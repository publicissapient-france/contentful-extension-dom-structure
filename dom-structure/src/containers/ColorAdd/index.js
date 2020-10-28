import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentExtension, getStyleGuideName} from '../../actions/index';
import ButtonValidate from '../../components/ui/ButtonValidate';

const ColorAdd = ({styleGuideName, display, extensionInfo}) => {
    const openStyleGuide = () => {
        extensionInfo.extension.navigator.openEntry(extensionInfo.extension.entry.fields['styleGuide']
            .getValue().sys.id, {slideIn: true}).then(({entity}) => {
        });
    }

    return (
        <section className={!display ? 'hidden' : ''}>
            <h2>Do you want to add a color on <strong>{styleGuideName}</strong>'s palette ? </h2>
            <ButtonValidate label={'Open Style Guide'} action={openStyleGuide}/>
        </section>
    );

};

ColorAdd.propTypes = {
    display: PropTypes.bool.isRequired,
    styleGuideName : PropTypes.string
};

const mapStateToProps = state => ({
    styleGuideName: getStyleGuideName(state).value,
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ColorAdd);
