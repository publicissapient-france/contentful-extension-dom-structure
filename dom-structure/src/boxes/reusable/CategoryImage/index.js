import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices} from "./styled";
import ImageUploader from '../../../containers/ImageUploader'

class CategoryImage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {

    };

    componentDidUpdate = prevProps => {

    }

    render() {
        const {alt, asset} = this.props;
        return (
            <Choices>
                <ImageUploader asset={asset || null}
                               alt={alt || ''}
                               index={null}
                               updateStateAsset={this.props.updateStateAsset}
                               updateStateTranslatedProps={this.props.updateStateTranslatedProps}
                />
            </Choices>
        );

    }
}


CategoryImage.protoTypes = {
    indexLanguage: PropTypes.number,
    value: PropTypes.arrayOf(PropTypes.string)
};


export default connect()(CategoryImage);
