import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices} from "./styled";
import ImageUploader from '../../../containers/ImageUploader'

class CategoryMultipleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {

    };

    componentDidUpdate = prevProps => {

    }

    render() {
        const {numberImages, value, indexLanguage} = this.props;
        console.log('VALUE ON CATEGORY MULTIPLE IMAGE', value)
        return (
            <Choices>
                {Array.from(Array(numberImages), (e, i) => {
                    return <ImageUploader asset={value[i] && value[i].asset ? value[i].asset : null}
                                          alt={value[i] && value[i].alt ? value[i].alt[indexLanguage]  : ''}
                                          index={i}
                                          updateStateAsset={this.props.updateStateAsset}
                                          updateStateTranslatedProps={this.props.updateStateTranslatedProps}
                    />
                })}
            </Choices>
        );
    }
}


CategoryMultipleImage.protoTypes = {
    indexLanguage: PropTypes.number,
    value: PropTypes.arrayOf(PropTypes.string)
};


export default connect()(CategoryMultipleImage);
