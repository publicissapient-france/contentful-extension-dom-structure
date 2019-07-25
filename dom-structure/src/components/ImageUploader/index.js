import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
    readFileAsUrl,
    findImageContentType
} from "../../utils/imageLoader"
import {getCurrentExtension} from "../../actions/index";
import { Spinner } from "@contentful/forma-36-react-components"
import {ReloadView, IconContainer} from "./styled";
import UploadView from '../UploadView'
import FileView from '../FileView'
import SvgRefresh from '../svg/SvgRefresh'

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
        console.log('currentAsset', this.props.currentAsset.asset);
        if(this.props.currentAsset ) {
            this.setSelectedAsset(this.props.currentAsset.asset);
        }
    };

    componentDidUpdate = prevProps => {
        if(this.props.value != prevProps.value){
            this.setSelectedAsset(this.props.currentAsset.asset);
        }
    }

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

    onClickNewAsset = async () => {
        console.log('onClickNewAsset');

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

    reuseExistingAsset = async assetId => {
        let asset

        try {
            asset = await this.props.extensionInfo.extension.space.getAsset(assetId)
        } catch (err) {
            this.onError(err)
        }
        this.setSelectedAsset(asset);

    }



    onClickLinkExisting = async () => {
        const selectedAsset = await this.props.extensionInfo.extension.dialogs.selectSingleAsset({
            locale: this.props.extensionInfo.extension.field.locale
        })
        console.log('selected asset : ', selectedAsset);

        try {
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
        if(!asset){
            this.removeSelectedAsset()
        }
        this.setState({
            ...this.state,
            value : asset,
            asset : asset
        }, () => {
            console.log("STATE AFTER SELECTED", this.state);
            this.props.updateStateAsset(this.state.value);
        })
    }

    removeSelectedAsset = () => {
        this.setState({
            ...this.state,
            value : null,
            asset : null
        }, () => {
            console.log("STATE AFTER SELECTED", this.state);
            this.props.updateStateAsset(this.state.value);
        })
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

    onClickEdit = () => {
        this.props.extensionInfo.extension.navigator.openAsset(this.state.asset.sys.id, {
            slideIn: true
        })
    }

    onClickRemove = () => {
        this.removeSelectedAsset()
    }

    reloadAsset = async () => {
        let assetId = this.state.asset.sys.id;
        let asset

        try {
            asset = await this.props.extensionInfo.extension.space.getAsset(assetId);
            if(!asset.fields.file){
                console.log('you asset asset file, please verify your asset has required data')
                this.removeSelectedAsset();
            }else{
                this.setSelectedAsset(asset);
            }
        } catch (err) {
            this.onError(err)
        }
    }


    render = () => {
        const { currentAsset } = this.props;
        console.log('PROPS EXTENSION PROPS EXTENSION ', this.props.extensionInfo.extension)
        if(!this.state.isDraggingOver && this.state.asset && !this.state.asset.fields.file ){
            return (
                <ReloadView>
                    <IconContainer onClick={ () => {
                        this.reloadAsset(this.state.asset.sys.id);
                    }}>
                        <SvgRefresh/>
                    </IconContainer>
                    must reload image
                </ReloadView>
            )
        }else if (!this.state.isDraggingOver && this.state.asset) {
            // Display existing asset if user is not dragging over an image
            return (
                <FileView
                    file={this.state.asset.fields.file[this.findProperLocale()]}
                    title={this.state.asset.fields.title[this.findProperLocale()]}
                    description={this.state.asset.fields.description ? this.state.asset.fields.description[this.findProperLocale()] : null}
                    isPublished={
                        this.state.asset.sys.version ===
                        (this.state.asset.sys.publishedVersion || 0) + 1
                    }
                    isDraggingOver={this.state.isDraggingOver}
                    onClickEdit={this.onClickEdit}
                    onClickRemove={this.onClickRemove}
                    onClickReload={this.reloadAsset}
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
                onClickLinkExisting={this.onClickLinkExisting}
                onClickNewAsset={this.onClickNewAsset}
            />
        )
    }
}


ImageUploader.protoTypes = {
    value : PropTypes.shape({
        asset : PropTypes.object
    })
};


const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ImageUploader);
