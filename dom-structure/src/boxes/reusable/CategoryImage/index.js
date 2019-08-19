import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices} from "./styled";
import ImageUploader from '../../../interfaces/ImageUploader'
import {getCurrentLanguage} from "../../../actions";

class CategoryImage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getAsset = () => {
        if(this.props.mode){
            return this.props.image.asset[this.props.mode]
        }else{
            return this.props.image.asset
        }
    }

    render() {
        const {image, indexLanguage} = this.props;
        if(!image) return null
        return (
            <Choices>
                <ImageUploader asset={this.getAsset()}
                               alt={image.alt[indexLanguage] ? image.alt[indexLanguage]  : ''}
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
    value: PropTypes.arrayOf(PropTypes.string),
    mode: PropTypes.string
};


const mapStateToProps = state => ({
    indexLanguage: getCurrentLanguage(state).language
});

export default connect(mapStateToProps)(CategoryImage);
