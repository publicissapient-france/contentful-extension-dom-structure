import React, {Component} from 'react';
import styled from 'styled-components';
import {contentfulTheme} from '../style/theme';
import {connect} from 'react-redux';
import {getCurrentExtension} from '../actions';

const Container = styled.div`
   
  
`;

class ToogleLanguages extends Component {
    componentDidMount = () => {
        console.log('this.props.extension', this.props.extension)
    }

    render() {
        const {dispatch, extensionInfo} = this.props;
        if (!extensionInfo) return null;
        return (
            <Container>
                toogle language
                {
                    extensionInfo.extension.locales.available.map( (language, i) => {
                        return <p>{ language }</p>
                    })
                }
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});

export default connect(mapStateToProps)(ToogleLanguages);
