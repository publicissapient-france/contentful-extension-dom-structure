import React, { Component } from 'react';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import PropTypes from 'prop-types';
import { Icon, ButtonGreen } from '../../style/styledComponents';

import { Banner, Fields, ActiveContent } from '../../style/styledComponentsBoxes';
import SvgArrow from '../../components/SvgArrow';
import { connect } from 'react-redux';
import { updateContentValue, getCurrentDOM } from '../../actions';
import styled from "styled-components";


const TextArea = styled.div`
  margin-bottom : 10px;
`;

class Text extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
            value: "**Hello world!!!**",
            active: true,

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
            value: componentStore.content.Text && componentStore.content.Text.value ? componentStore.content.Text.value : '',
            active: componentStore.content.Text ? componentStore.content.Text.active : true
        });
    };

    isUpdated = () => {
        return true;
    }

    handleValueChange = value => {
        this.setState({
            value : value
        });
        console.log('STATE ON HANDLEVALUE', this.state)
        console.log('HTML', this.converter.makeHtml(this.state.value))
    };

    handleTabChange = tab => {
        this.setState({ tab :  tab });
        console.log('STATE', this.state);
    };


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
                    <TextArea className="container">
                        <ReactMde
                            onChange={this.handleValueChange}
                            onTabChange={this.handleTabChange}
                            value={this.state.value}
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
                            dispatch(updateContentValue(name, this.state.value, this.state.active, indexComponent, indexSection))
                        }
                        }>
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
