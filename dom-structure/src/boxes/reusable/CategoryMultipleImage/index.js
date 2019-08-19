import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices} from "./styled";
import ImageUploader from '../../../interfaces/ImageUploader'
import {getCurrentLanguage, getResponsiveMode} from "../../../actions";

class CategoryMultipleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getAsset = (i) => {
        if (this.props.mode) {
            return this.props.images[i].asset[this.props.mode]
        } else {
            return this.props.images[i].asset
        }
    }

    render() {
        const {images, mode, indexLanguage} = this.props;
        if (!images) return null
        return (
            <Choices>
                {
                    images.map((image, i) => {
                        return <ImageUploader asset={this.getAsset(i)}
                                              alt={image.alt[indexLanguage] ? image.alt[indexLanguage] : ''}
                                              index={i}
                                              key={i}
                                              updateStateAsset={this.props.updateStateAsset}
                                              updateStateTranslatedProps={this.props.updateStateTranslatedProps}
                        />
                    })
                }
            </Choices>
        );
    }
}


CategoryMultipleImage.protoTypes = {
    indexLanguage: PropTypes.number,
    value: PropTypes.arrayOf(PropTypes.string),
    mode: PropTypes.string
};

const mapStateToProps = state => ({
    indexLanguage: getCurrentLanguage(state).language,
    responsiveMode: getResponsiveMode(state).mode
});

export default connect(mapStateToProps)(CategoryMultipleImage);
