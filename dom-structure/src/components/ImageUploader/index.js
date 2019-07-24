import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ChoiceImage, Field} from "./styled";

import {
    readFileAsUrl,
    findImageContentType,
    getImageUrlFromDataTransfer,
    getAssetIdFromDataTransfer,
    getBase64FromDataTransfer
} from "../../utils/imageLoader"
import {getCurrentExtension} from "../../actions/index";
import { Spinner } from "@contentful/forma-36-react-components"
import UploadView from '../UploadView/index'
import "./index.css"


class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggingOver: false,
            value: null
        }

    }

    componentDidMount = () => {

    };

    componentDidUpdate = prevProps => {

    }

    onClickLinkExisting = async () => {
        const selectedAsset = await this.props.extensionInfo.extension.dialogs.selectSingleAsset({
            locale: this.props.extensionInfo.extension.field.locale
        })

        try {
            await this.setFieldLink(selectedAsset.sys.id)
        } catch (err) {
            this.onError(err)
        }
    }

    findProperLocale() {
        if (this.props.extensionInfo.extension.fields[this.props.extensionInfo.extension.field.id].type === "Link") {
            return this.props.extensionInfo.extension.locales.default
        }

        return this.props.extensionInfo.extension.field.locale
    }

    setFieldLink(assetId) {
        return this.props.extensionInfo.extension.field
            .setValue(
                {
                    sys: {
                        type: "Link",
                        linkType: "Asset",
                        id: assetId
                    }
                },
                this.findProperLocale()
            )
            .then(() =>
                this.props.extensionInfo.extension.space
                    .getAsset(this.state.value.sys.id)
                    .then(asset => this.setState({ asset }))
            )
    }

    onError = error => {
        console.error(error)
        this.props.extensionInfo.extension.notifier.error(error.message)
    }

    render = () => {
        console.log('PROPS EXTENSION PROPS EXTENSION ', this.props.extensionInfo.extension)
        if (this.state.uploading) {
            return (
                <ProgressView
                    imageUrl={this.state.imageUrl}
                    base64Prefix={this.state.base64Prefix}
                    base64Data={this.state.base64Data}
                    uploadProgress={this.state.uploadProgress}
                />
            )
        } else if (!this.state.isDraggingOver && this.state.asset) {
            // Display existing asset if user is not dragging over an image
            return (
                <FileView
                    file={this.state.asset.fields.file[this.findProperLocale()]}
                    isPublished={
                        this.state.asset.sys.version ===
                        (this.state.asset.sys.publishedVersion || 0) + 1
                    }
                    isDraggingOver={this.state.isDraggingOver}
                    onDrop={this.onDropFiles}
                    onDragOverStart={this.onDragOverStart}
                    onDragOverEnd={this.onDragOverEnd}
                    onClickEdit={this.onClickEdit}
                    onClickRemove={this.onClickRemove}
                />
            )
        } else if (!this.state.isDraggingOver && this.state.value) {
            // If `asset` is not set but `value` is, the entry was just opened
            // and we're currently loading the asset value.
            return (
                <div className="spinner viewport centered">
                    <Spinner/>
                </div>
            )
        }

        return (
            <UploadView
                isDraggingOver={this.state.isDraggingOver}
                onDrop={this.onDropFiles}
                onDragOverStart={this.onDragOverStart}
                onDragOverEnd={this.onDragOverEnd}
                onClickLinkExisting={this.onClickLinkExisting}
            />
        )
    }
}


ImageUploader.protoTypes = {};


const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ImageUploader);
