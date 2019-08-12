import React, {Component} from 'react';
import {Container} from './styled';
import PropTypes from 'prop-types';

class Typography extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {} = this.props;
        return (
            <Container>
                typography interface
            </Container>
        )
    }
}


Typography.propTypes = {};

export default Typography;