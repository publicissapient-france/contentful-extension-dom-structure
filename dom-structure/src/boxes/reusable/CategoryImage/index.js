import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {Choices, Field} from "./styled";
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
        const {alt, description, asset} = this.props;
        return (
            <Choices>
                <Field>
                    <ImageUploader currentAsset={asset}
                                   updateStateProps={this.props.updateStateProps}/>
                </Field>
                <div>
                    <Field>
                        <label>alt</label>
                        <input type={'text'}
                               value={alt}
                               onChange={e => {
                                   this.props.updateStateTranslatedProps('alt', e.target.value);
                               }}/>
                    </Field>
                    <Field>
                        <label>description</label>
                        <input type={'text'}
                               value={description}
                               onChange={e => {
                                   this.props.updateStateTranslatedProps('description', e.target.value);
                               }}/>
                    </Field>
                </div>

            </Choices>
        );
    }
}


CategoryImage.protoTypes = {
    indexLanguage: PropTypes.number,
    alt: PropTypes.arrayOf(PropTypes.string)
};


export default connect()(CategoryImage);
