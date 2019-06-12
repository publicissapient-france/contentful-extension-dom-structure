import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../style/styledComponents';
import { Banner, Fields, ActiveContent } from '../../style/styledComponentsBoxes';
import SvgToggle from '../../components/SvgToggle';
import { connect } from 'react-redux';
import { getCurrentDOM, getCurrentLanguage, updateContentValue } from '../../actions';

class Tagline extends Component {
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
            value: componentStore.content.Tagline ? componentStore.content.Tagline.value : {},
            active: componentStore.content.Tagline ? componentStore.content.Tagline.active : true,
            open : this.props.open
        });
    }

    render () {
        const { dispatch, currentLanguage, indexComponent, indexSection, name } = this.props;
        const maxLength = 140;
        const indexLanguage = currentLanguage.language;

        return (
            <div>
                <Banner>
                    <div>
                        <ActiveContent
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({ active: !this.state.active }, () => {
                                    dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                                });
                            }}/>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'} onClick={() => {
                        this.setState({ open: !this.state.open });
                    }}>
                        <SvgToggle/>
                    </Icon>
                </Banner>
                <Fields className={this.state.open ? 'open' : ''}>
                    <input type={'text'} maxLength={maxLength}
                        defaultValue={this.state.value[indexLanguage]}
                        onBlur={e => {
                            this.setState({ value: {
                                ...this.state.value,
                                [indexLanguage]: e.target.value
                            } }, () => {
                                console.log('STATE : ', this.state.value);
                                dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection));
                            });
                        }}/>
                    <span>{maxLength} characters</span>
                </Fields>
            </div>
        );
    }
}

Tagline.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.number
};

const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    currentLanguage: getCurrentLanguage(state)
});
export default connect(mapStateToProps)(Tagline);
