import React, {Component} from 'react';
import PropTypes from 'prop-types';


import {Container} from './styled';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";


class InputMarkdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'content'
        };
    }

    componentDidMount() {
        this.setState({
            content: this.props.defaultValue
        });
    }

    componentDidUpdate(prevProps) {
         if (this.props.currentLanguage !== prevProps.currentLanguage) {
             this.setState({
                 content: this.props.defaultValue
             });
         }

         if(this.props.defaultValue !== prevProps.defaultValue && this.props.defaultValue !== this.state.content){
             this.setState({
                 content: this.props.defaultValue
             });
         }
    }

    updateContent = (value) => {
        this.setState({
            content: value
        }, () => {
            console.log('update content state value', this.state.content)
            this.props.action(this.state.content, this.props.targetProperty)
        })
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    render() {
        return (<Container>
            <JoditEditor
                editorRef={this.setRef}
                value={this.state.content}
                config={this.config}
                onChange={this.updateContent}
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
