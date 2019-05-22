import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import PropTypes from 'prop-types';
import { Icon, ButtonGreen } from '../../style/styledComponents';

import { Banner, Fields, ActiveContent } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import { connect } from 'react-redux';
import { updateContentValue, getCurrentDOM } from '../../actions';

class Text extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: '',
            active: true,
            editorState: EditorState.createEmpty()
        };
    }

    componentDidMount = () => {
        const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];

        this.setState({
            value: componentStore.content.Text ? componentStore.content.Text.value : '',
            active: componentStore.content.Text ? componentStore.content.Text.active : true
        });
    };

    handleValueChange = value => {
        this.setState({ value: value }/*, () => {
            this.props.dispatch(updateContentValue(name, this.state.value, this.state.active, this.props.indexComponent, this.props.indexSection));
        } */);
        console.log(this.state.value);
    };

    isUpdated = () => {
        /*  const componentStore = this.props.dom.sections[this.props.indexSection].components[this.props.indexComponent];
        if (componentStore.content.Text && this.state.value !== componentStore.content.Text) {
            return true
        } */
        return false;
    }

    onChange = editorState => {
        this.setState({ editorState: editorState });
    }

    handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    render () {
        const { dispatch, indexComponent, indexSection, name } = this.props;

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
                    <div className="editorContainer">
                        <button onClick={this.onUnderlineClick}>U</button>
                        <button onClick={this.onBoldClick}><b>B</b></button>
                        <button onClick={this.onItalicClick}><em>I</em></button>
                        <div className="editors">
                            <Editor
                                editorState={this.state.editorState}
                                handleKeyCommand={this.handleKeyCommand}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <ButtonGreen
                        disabled={!this.isUpdated()}
                        className={this.isUpdated() ? 'active' : ''}
                        onClick={() => dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection))}>
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
    name: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
    dom: getCurrentDOM(state)
});

export default connect(mapStateToProps)(Text);
