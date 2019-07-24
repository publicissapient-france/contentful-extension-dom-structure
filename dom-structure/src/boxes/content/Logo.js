import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateContentValue, getCurrentDOM, getCurrentLanguage } from '../../actions';

import { Icon } from '../../style/styledComponents';
import { Banner, Fields, ActiveCheckBox } from '../../style/styledComponentsBoxes';
import SvgToggle from '../../components/svg/SvgToggle';
import SvgCheck from '../../components/svg/SvgCheck';
import ImageUploader from '../../components/ImageUploader';

class Logo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true
        };
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.Logo ? componentStore.content.Logo.value : {},
            active: componentStore.content.Logo ? componentStore.content.Logo.active : true,
            open: this.props.open
        });

        console.log('language on Logo', this.props.currentLanguage);
    };

    render () {
        const { dispatch, dom, currentLanguage, indexComponent, indexSection, name } = this.props;
        const indexLanguage = currentLanguage.language;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveCheckBox
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({ active: !this.state.active }, () => {
                                    dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}>
                            <SvgCheck/>
                        </ActiveCheckBox>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'}
                          onClick={() => {
                              this.setState({ open: !this.state.open });
                          }}><SvgToggle/></Icon>
                </Banner>
                <Fields className={this.state.open ? 'open' : ''}>
                   <ImageUploader/>
                </Fields>
            </div>
        );
    }
}

Logo.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.number
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    currentLanguage: getCurrentLanguage(state)
});

export default connect(mapStateToProps)(Logo);
