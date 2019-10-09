import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { Container } from './styled';

class InputMarkdown extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: ''
        };

        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
    }

    componentDidMount () {
        this.setState({
            value: this.extractFromHTML(this.props.defaultValue)
        });
    }

    componentDidUpdate (prevProps) {
        if (this.props.currentLanguage !== prevProps.currentLanguage) {
            this.setState({
                value: this.extractFromHTML(this.props.defaultValue)
            });
        }

    }

    handleTabChange = tab => {
        this.setState({ tab: tab });
    };

    handleValueChange = value => {
        this.setState({
            value: value
        }, () => {
            this.props.action(this.convertToHTML(this.state.value), this.props.targetProperty);
        });
    };

    extractFromHTML = value => (this.converter.makeMarkdown(value)).replace('<!-- -->', '');

    convertToHTML = value => this.converter.makeHtml(value);

    render () {
        return (<Container>
            <ReactMde
                onChange={this.handleValueChange}
                onTabChange={this.handleTabChange}
                value={this.state.value}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(this.converter.makeHtml(markdown))
                }
                selectedTab={this.state.tab}
            />
        </Container>);
    }
}

InputMarkdown.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    currentLanguage: PropTypes.number
};

export default InputMarkdown;
