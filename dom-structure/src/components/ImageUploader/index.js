import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCurrentExtension} from "../../actions/index";
import {Spinner} from "@contentful/forma-36-react-components"
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
            asset: null,
            valid: true
        }


    }

    componentDidMount = () => {
        console.log('currentAsset', this.props.currentAsset.asset);
        if (this.props.currentAsset) {
            this.setSelectedAsset(this.props.currentAsset.asset);
           // this.assetIsValid()
        }


    };

    componentDidUpdate = prevProps => {
        /* if(this.props.currentAsset != prevProps.currentAsset){
             this.setSelectedAsset(this.props.currentAsset.asset);
         }*/
           if(this.props.currentAsset != prevProps.currentAsset){
             //this.setSelectedAsset(this.props.currentAsset.asset);
              // this.assetIsValid();
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

        const result = await this.props.extensionInfo.extension.navigator.openNewAsset({slideIn: true}).then(({entity}) => {
            return entity
        })
        this.reuseExistingAsset(result.sys.id);

    }

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
        if (!asset) {
            this.removeSelectedAsset()
        }
        this.setState({
            ...this.state,
            asset: asset
        }, () => {
            this.assetIsValid();
            this.props.updateStateAsset(this.state.asset);
        })
    }

    removeSelectedAsset = () => {
        this.setState({
            ...this.state,
            asset: null
        }, () => {
            this.props.updateStateAsset(this.state.asset);
        })
    }

    onError = error => {
        console.error(error)
        this.props.extensionInfo.extension.notifier.error(error.message)
    }

    onCustomError = message => {
        console.error(message)
        this.props.extensionInfo.extension.notifier.error(message)
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
            if (!asset.fields.file) {
                this.removeSelectedAsset();
                this.onCustomError('Request failed : Asset hasn\'t required data. Please complete Asset before')
            } else {
                this.setSelectedAsset(asset);
            }
        } catch (err) {
            this.onCustomError('Request failed : Asset doesn\'t exist anymore')
            this.removeSelectedAsset();
            //this.onError(err)
        }
    }

    assetIsValid = async () => {
        let assetId = this.state.asset.sys.id;
        let asset

        try {
            asset = await this.props.extensionInfo.extension.space.getAsset(assetId);
            this.setState({
                ...this.state,
                valid: true
            })
            return true
        } catch (err) {
            this.setState({
                ...this.state,
                valid: false
            }, () => {
                console.log('ERROR DETECTED STATE', this.state);
            })
            //this.onCustomError('Request failed : Asset doesn\'t exist anymore 2')
            return false
        }
    }


    render = () => {
        const {currentAsset} = this.props;
        console.log('PROPS EXTENSION PROPS EXTENSION ', this.props.extensionInfo.extension)
        if (!this.state.isDraggingOver && this.state.asset && !this.state.asset.fields.file) {
            return (
                <ReloadView>
                    <IconContainer onClick={() => {
                        this.reloadAsset(this.state.asset.sys.id);
                    }}>
                        <SvgRefresh/>
                    </IconContainer>
                    must reload image
                </ReloadView>
            )
        } else if (!this.state.isDraggingOver && this.state.asset) {
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
                    valid={this.state.valid}
                />
            )
        } else if (!this.state.isDraggingOver && this.state.asset) {
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
    value: PropTypes.shape({
        asset: PropTypes.object
    })
};


const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ImageUploader);
