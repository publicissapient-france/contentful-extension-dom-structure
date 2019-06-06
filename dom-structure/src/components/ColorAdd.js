import React, { Component } from 'react';
import { ButtonGreen } from '../style/styledComponents';
import { getCurrentExtension, getStyleGuideName, getStyleGuideId } from '../actions';
import { connect } from 'react-redux';

class ColorAdd extends Component {
    constructor (props) {
        super(props);
    }

    openStyleGuide = e => {
        this.props.extensionInfo.extension.navigator.openEntry(this.props.extensionInfo.extension.entry.fields['styleGuide'].getValue().sys.id, { slideIn: true }).then(({ entity }) => {
            console.log('CA FONCTIONNE');
        });
    }

    componentDidMount = () => {
        console.log('STORE COLOR', this.props.colors);
        console.log('STORE DOM', this.props.dom);
        console.log('STORE extensionInfo', this.props.extensionInfo);
    };

    render () {
        const { dispatch, extensionInfo, styleGuideName, display } = this.props;

        return (<section className={!display ? 'hidden' : ''}>
            <h2>Do you want to add a color on <strong>{ styleGuideName }</strong>'s palette ? </h2>
            <ButtonGreen className={'active'} onClick={e => this.openStyleGuide(e)}>Open style guide </ButtonGreen>
        </section>);
    }
};

const mapStateToProps = state => ({
    styleGuideName: getStyleGuideName(state).value,
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ColorAdd);
