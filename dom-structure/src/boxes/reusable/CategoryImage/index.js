import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices, Field} from "./styled";
import ImageUploader from '../../../components/ImageUploader'

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
                <Field>
                    <ImageUploader currentAsset={asset}
                                   updateStateProps={this.props.updateStateProps}/>
                </Field>
                <Field>
                    <div>
                        <label>alt</label>
                        <input type={'text'}
                               value={alt}
                               onChange={e => {
                                   this.props.updateStateTranslatedProps('alt', e.target.value);
                               }}/>
                    </div>
                </Field>
                <Field>
                    <div>
                        <label>description</label>
                        <input type={'text'}
                               value={description}
                               onChange={e => {
                                   this.props.updateStateTranslatedProps('description', e.target.value);
                               }}/>
                    </div>
                </Field>
            </Choices>
        );
    }
}


CategoryImage.protoTypes = {
    indexLanguage: PropTypes.number,
    alt: PropTypes.arrayOf(PropTypes.string)
};


export default connect()(CategoryImage);
