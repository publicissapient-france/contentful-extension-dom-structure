import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../style/styledComponents';
import { Banner, Fields, ActiveContent } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import { connect } from 'react-redux';
import { getCurrentDOM, updateContentValue } from '../../actions';

class Tagline extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: '',
            active: true
        };
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.Tagline ? componentStore.content.Tagline.value : '',
            active: componentStore.content.Tagline.value ? componentStore.content.Tagline.active : true
        });
    }

    render () {
        const { dispatch, indexComponent, indexSection, name } = this.props;
        const maxLength = 140;

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
                        <SvgArrow/>
                    </Icon>
                </Banner>
                <Fields className={this.state.open ? 'open' : ''}>
                    <input type={'text'} maxLength={maxLength}
                        defaultValue={this.state.value}
                        onBlur={e => {
                            this.setState({ value: e.target.value }, () => {
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
    name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    dom: getCurrentDOM(state)
});
export default connect(mapStateToProps)(Tagline);
