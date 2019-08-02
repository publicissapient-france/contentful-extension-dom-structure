import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices, Field} from "./styled";
import ImageUploader from '../ImageUploader'

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
        const {multiple, value, indexLanguage} = this.props;
        console.log('VALUE ON CATEGORY MULTIPLE IMAGE', value)
        return (
            <Choices>
                {Array.from(Array(multiple), (e, i) => {
                    return <ImageUploader currentAsset={value[i] ? value[i].asset : null}
                                          alt={value[i] && value[i].alt ? value[i].alt[indexLanguage]  : ''}
                                          index={i}
                                          description={value[i] && value[i].description ? value[i].description[indexLanguage] : ''}
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
    alt: PropTypes.arrayOf(PropTypes.string)
};


export default connect()(CategoryMultipleImage);
