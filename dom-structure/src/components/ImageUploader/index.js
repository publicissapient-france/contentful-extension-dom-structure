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
import UploadView from '../UploadView'
import FileView from '../FileView'
import ProgressView from '../ProgressView'

import "./index.css"


class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggingOver: false,
            value: null,
            selectedValue : {}
        }

    }

    componentDidMount = () => {
        console.log('currentAsset', this.props.currentAsset.asset);
        if(this.props.currentAsset ) {
            this.setSelectedAsset(this.props.currentAsset.asset);
        }
    };

    componentDidUpdate = prevProps => {

    }

    onDropFiles = event => {
        event.preventDefault()
        event.stopPropagation()

        this.setState({
            imageUrl: undefined,
            base64Prefix: undefined,
            base64Data: undefined
        }, () => {
            console.log('on drop files event STEP 1 :', this.state);
        })

        // Read the file that was just selected
        const files = Array.prototype.slice.call(
            event.target.files || event.dataTransfer.files
        )

        if (files.length) {
            return this.createNewAssetFromFiles(files)
        }

        if (!event.dataTransfer) {
            return
        }

        // Check if another asset was dragndropped.
        const assetId = getAssetIdFromDataTransfer(event.dataTransfer)
        if (assetId) {
            return this.reuseExistingAsset(assetId)
        }

        // Check if an image with base64 type was dragndropped
        const base64 = getBase64FromDataTransfer(event.dataTransfer)
        if (base64) {
            return this.createNewAssetFromBase64(base64.prefix, base64.data, {
                name: "Unnamed",
                type: base64.type
            })
        }

        // Check if an image element was dragndropped
        const imageUrl = getImageUrlFromDataTransfer(event.dataTransfer)
        if (imageUrl) {
            return this.createNewAssetFromImageUrl(imageUrl)
        }
    }

    /*
     Create a new (unprocessed) asset entry for given upload and file.
     createAsset(upload: UploadEntity, file: File, locale: string): Promise<AssetEntity>
  */
    createAsset = (upload, file, locale) => {
        const asset = {
            fields: {
                title: {},
                description: {},
                file: {}
            }
        }

        asset.fields.title[locale] = file.name
        asset.fields.description[locale] = file.name
        asset.fields.file[locale] = {
            contentType: file.type,
            fileName: file.name,
            uploadFrom: {
                sys: {
                    type: "Link",
                    linkType: "Upload",
                    id: upload.sys.id
                }
            }
        }

        return this.props.extensionInfo.extension.space.createAsset(asset)
    }

    createNewAssetWithContenful = async () => {
        console.log('createNewAssetWithContenful');

        const result = await this.props.extensionInfo.extension.navigator.openNewAsset({ slideIn: true }).then(({ entity }) => {
            /* new entry of the "blogPost" content type was opened in the slide-in editor */
            console.log('ENTITY ON OPENNEWASSET', entity)
            return entity

        })

        console.log('"RESULT CREAT WITH CONTENTFUL', result);
        this.reuseExistingAsset(result.sys.id);








    }

    // createAssetWithImageUrl(imageUrl, contentType, locale)
    createAssetWithImageUrl = (imageUrl, contentType, locale) => {
        const asset = {
            fields: {
                title: {},
                description: {},
                file: {}
            }
        }

        asset.fields.title[locale] = imageUrl
        asset.fields.description[locale] = imageUrl
        asset.fields.file[locale] = {
            contentType,
            fileName: imageUrl,
            upload: imageUrl
        }

        return this.props.extensionInfo.extension.space.createAsset(asset)
    }

    createNewAssetFromFiles = async files => {
        // Filter only images
        const imageFiles = files.filter(file => /^image\/[\w-_]+$/.test(file.type))

        // If no images were found, raise an error
        if (imageFiles.length === 0) {
            return this.onError(new Error("Only images are allowed"))
        }

        // Only one image at a time is supported. In the future, we can accept set of images per locale ?
        if (imageFiles.length > 1) {
            return this.onError(new Error("Please drop only one image at a time"))
        }

        const imageFile = imageFiles[0]

        this.setState({ file: imageFile }, () => {
            console.log('CREATE NEW ASSET FILES state : ', this.state);
        })
        this.setUploadProgress(0)

        // Encode the file as Base64, so we can pass it through SDK proxy to get it uploaded
        const [base64Prefix, base64Data] = await readFileAsUrl(imageFile)
        this.createNewAssetFromBase64(base64Prefix, base64Data, imageFile)
    }

    createNewAssetFromBase64 = async (base64Prefix, base64Data, file) => {
        this.setUploadProgress(10)
        this.setState({ base64Prefix, base64Data }, () => {
            console.log('CREATE NEW ASSET FROM BASE 64 state : ', this.state);
        })

        // Upload the Base64 encoded image
        const upload = await this.props.extensionInfo.extension.space.createUpload(base64Data)
        this.setUploadProgress(40)

        // Some customers use different locale model than others, so we need to figure out what works for them best
        const locale = this.findProperLocale()

        // Create an unprocessed asset record that links to the upload record created above
        // It reads asset title and filenames from the HTML5 File object we're passing as second parameter
        const rawAsset = await this.createAsset(upload, file, locale)
        this.setUploadProgress(50)
        this.processAndPublishAsset(rawAsset, locale)
    }

    createNewAssetFromImageUrl = async imageUrl => {
        this.setUploadProgress(0)

        this.setState({
            imageUrl
        }, () => {
            console.log('CREATE NEW ASSETS FROM IMAGE URL', this.state)
        })

        // const contentType = await findImageContentType(imageUrl)
        const locale = this.findProperLocale()
        const rawAsset = await this.createAssetWithImageUrl(imageUrl, "", locale)

        this.setUploadProgress(25)
        this.processAndPublishAsset(rawAsset, locale)
    }

    reuseExistingAsset = async assetId => {
        let asset

        try {
            asset = await this.props.extensionInfo.extension.space.getAsset(assetId)
        } catch (err) {
            this.onError(err)
        }
        this.setSelectedAsset(asset);

       /* this.setState({
            asset
        }, () => {
            console.log('REUSE EXISTING ASSET state', this.state);
        })

       /* await this.props.sdk.field.setValue(
            {
                sys: {
                    type: "Link",
                    linkType: "Asset",
                    id: assetId
                }
            },
            this.findProperLocale()
        )*/
    }

    processAndPublishAsset = async (rawAsset, locale) => {
        // Send a request to start processing the asset. This will happen asynchronously.
        await this.props.extensionInfo.extension.space.processAsset(rawAsset, locale)

        this.setUploadProgress(55)

        // Wait until asset is processed.
        const processedAsset = await this.props.extensionInfo.extension.space.waitUntilAssetProcessed(
            rawAsset.sys.id,
            locale
        )
        this.setUploadProgress(85)

        // Publish the asset, ignore if it fails
        let publishedAsset
        try {
            publishedAsset = await this.props.extensionInfo.extension.space.publishAsset(processedAsset)
        } catch (err) {}

        this.setUploadProgress(95)

        const asset = publishedAsset || processedAsset
        this.setState({
            asset
        }, () => {
            console.log('PROCESS AND PUBLISH ASSET state', this.state);
        })

        // Set the value of the reference field as a link to the asset created above
        /*await this.props.sdk.field.setValue(
            {
                sys: {
                    type: "Link",
                    linkType: "Asset",
                    id: asset.sys.id
                }
            },
            locale
        )*/

        this.setUploadProgress(100)
    }

    onClickLinkExisting = async () => {
        const selectedAsset = await this.props.extensionInfo.extension.dialogs.selectSingleAsset({
            locale: this.props.extensionInfo.extension.field.locale
        })
        console.log('selected asset : ', selectedAsset);

        try {
            //await this.setFieldLink(selectedAsset.sys.id)
            this.setSelectedAsset(selectedAsset);
        } catch (err) {
            this.onError(err)
        }
    }

    findProperLocale() {
        /*if (this.props.extensionInfo.extension.fields[this.props.extensionInfo.extension.field.id].type === "Link") {
            return this.props.extensionInfo.extension.locales.default
        }

        return this.props.extensionInfo.extension.field.locale*/
        return this.props.extensionInfo.extension.locales.default
    }

    setSelectedAsset = (asset) => {
        if(!asset) return
        this.setState({
            ...this.state,
            value : asset,
            asset : asset
        }, () => {
            console.log("STATE AFTER SELECTED", this.state);
            this.props.updateStateAsset(this.state.value);
        })
    }

    setFieldLink(assetId) {
        /*return this.setState({
            selectedValue : {
                sys: {
                    type: "Link",
                    linkType: "Asset",
                    id: assetId
                }
            }
        }, () => {
            this.props.extensionInfo.extension.space
                .getAsset(this.state.value.sys.id)
                .then(asset => This.setState({ asset }))
        })*/
    }
    onDragOverEnd = () => {
        this.setState({ isDraggingOver: false })
    }

    onDragOverStart = () => {
        this.setState({ isDraggingOver: true })
    }

    onError = error => {
        console.error(error)
        this.props.extensionInfo.extension.notifier.error(error.message)
    }

    setUploadProgress(percent) {
        this.setState({
            uploading: percent < 100,
            uploadProgress: percent
        })
    }


    render = () => {
        const { currentAsset } = this.props;
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
        } else if(!this.state.isDraggingOver && this.state.asset && !this.state.asset.fields.file){
            return (
                <button onClick={ () => {
                    this.reuseExistingAsset(this.state.asset.sys.id)
                }}>
                    must reload image
                </button>
            )
        }else if (!this.state.isDraggingOver && this.state.asset) {
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
                createNewAssetWithContenful={this.createNewAssetWithContenful}
            />
        )
    }
}


ImageUploader.protoTypes = {};


const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ImageUploader);
