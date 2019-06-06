import React, { Component } from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Icon, ButtonGreen } from '../../style/styledComponents';

import { Banner, Fields, ActiveContent } from '../../style/styledComponentsBoxes';
import SvgToggle from '../../components/SvgToggle';
import { connect } from 'react-redux';
import { updateContentValue, getCurrentDOM, getCurrentLanguage } from '../../actions';
import styled from 'styled-components';

const TextArea = styled.div`
  margin-bottom : 10px;
  
  & textarea{
   font-size : 14px;
  }
 
`;

class Text extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: {},
            active: true

        };

        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.Text && componentStore.content.Text.value ? this.extractFromHTML(componentStore.content.Text.value) : {}, // (this.converter.makeMarkdown(componentStore.content.Text.value)).replace('<!-- -->' , '') : '',
            active: componentStore.content.Text ? componentStore.content.Text.active : true
        });

        console.log('MOUNT');
    };

    extractFromHTML = value => {
        let result = _.mapValues(value, html => {
            return (this.converter.makeMarkdown(html)).replace('<!-- -->', '');
        });
        return result;
    }

    convertToHTML = value => {
        let result = _.mapValues(value, markdown => { return this.converter.makeHtml(markdown); });
        return result;
    }

    isUpdated = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        if (componentStore.content.Text && componentStore.content.Text.value[this.props.currentLanguage.language] === this.converter.makeHtml(this.state.value[this.props.currentLanguage.language])) {
            return false;
        }
        return true;
    }

    handleValueChange = value => {
        const indexLanguage = this.props.currentLanguage.language;

        this.setState({
            value: {
                ...this.state.value,
                [indexLanguage]: value
            }
        }, () => {
            // console.log('state afetr upedate', this.state);
        });
    };

    handleTabChange = tab => {
        this.setState({ tab: tab });
    };

    render () {
        const { dispatch, dom, currentLanguage, indexComponent, indexSection, name } = this.props;
        const indexLanguage = currentLanguage.language;
        return (
            <div>
                <Banner>
                    <div>
                        <ActiveContent
                            className={this.state.active ? 'active' : ''}
                            onClick={e => {
                                this.setState({ active: !this.state.active }, () => {
                                    dispatch(updateContentValue(name, this.convertToHTML(this.state.value), this.state.active, indexComponent, indexSection));
                                });
                            }}/>
                        <p>{name}</p>
                    </div>
                    <Icon className={this.state.open ? '' : 'rotate'}
                        onClick={() => {
                            this.setState({ open: !this.state.open });
                        }}><SvgToggle/></Icon>
                </Banner>
                <Fields className={this.state.open ? 'open' : ''}>
                    <TextArea className="container">
                        <ReactMde
                            onChange={this.handleValueChange}
                            onTabChange={this.handleTabChange}
                            value={this.state.value[indexLanguage]}
                            generateMarkdownPreview={markdown =>
                                Promise.resolve(this.converter.makeHtml(markdown))
                            }
                            selectedTab={this.state.tab}
                        />
                    </TextArea>
                    <ButtonGreen
                        disabled={!this.isUpdated()}
                        className={this.isUpdated() ? 'active' : ''}
                        onClick={() => {
                            dispatch(updateContentValue(name, this.convertToHTML(this.state.value), this.state.active, indexComponent, indexSection));
                        }}>
                        Update
                    </ButtonGreen>

                </Fields>
            </div>
        );
    }
}

Text.propTypes = {
    indexSection: PropTypes.number.isRequired,
    indexComponent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.number
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state),
    currentLanguage: getCurrentLanguage(state)
});

export default connect(mapStateToProps)(Text);
