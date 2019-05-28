import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../style/styledComponents';
import { Banner, Fields, ActiveContent } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import { connect } from 'react-redux';
import {updateContentValue, getCurrentDOM, getCurrentLanguage, getCurrentExtension} from '../../actions';

class Template extends Component {
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
            value: componentStore.content.Template ? componentStore.content.Template.value : {},
            active: componentStore.content.Template ? componentStore.content.Template.active : true
        });

        console.log('language on title', this.props.currentLanguage);
    };




    getElementById = (extension, id) => {
        return extension.space.getEntries({
            'sys.id': id
        }).then(result => result.items[0]);
    };

    render () {
        const { dispatch, currentExtension, dom, currentLanguage, indexComponent, indexSection, name } = this.props;
        const maxLength = 140;

        console.log('extension', currentExtension.extension);
        console.log('getElementById', this.getElementById(currentExtension.extension, '1bWlKvlFS0qxXUaWQlQW9v'));

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
                    <Icon className={this.state.open ? '' : 'rotate'}
                        onClick={() => {
                            this.setState({ open: !this.state.open });
                        }}><SvgArrow/></Icon>
                </Banner>
                <Fields className={this.state.open ? 'open' : ''}>

                    <span>{name}</span>
                </Fields>
            </div>
        );
    }
}

Template.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.number
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    currentExtension: getCurrentExtension(state),
    currentLanguage: getCurrentLanguage(state)
});

export default connect(mapStateToProps)(Template);
