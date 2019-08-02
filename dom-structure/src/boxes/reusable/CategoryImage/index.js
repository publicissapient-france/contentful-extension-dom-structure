import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices} from "./styled";
import ImageUploader from '../ImageUploader'

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
        const {alt, description, asset} = this.props;
        return (
            <Choices>
                    <ImageUploader currentAsset={asset}
                                   alt={alt}
                                   index={null}
                                   description={description}
                                   updateStateAsset={this.props.updateStateAsset}
                                   updateStateTranslatedProps={this.props.updateStateTranslatedProps}
                    />
            </Choices>
        );
    }
}


CategoryImage.protoTypes = {
    indexLanguage: PropTypes.number,
    alt: PropTypes.arrayOf(PropTypes.string)
};


export default connect()(CategoryImage);
