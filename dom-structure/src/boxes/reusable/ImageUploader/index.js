import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCurrentExtension} from "../../../actions/index";
import {ReloadView, IconContainer, ViewPort} from "./styled";
import UploadView from '../../../components/UploadView/index'
import FileView from '../../../components/FileView/index'
import SvgRefresh from '../../../components/svg/SvgRefresh'

class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggingOver: false,
            asset: null,
            valid: true,
            openInformations: false
        }
    }

    componentDidMount = () => {
        if (this.props.asset) {
            this.setSelectedAsset(this.props.asset);
        }
    };

    componentDidUpdate = prevProps => {
        if (this.props.asset != prevProps.asset && this.props.asset) {
            this.setSelectedAsset(this.props.asset);
        }
    }

    toggleOpenInformations = () => this.setState({openInformations: !this.state.openInformations});

    onClickNewAsset = async () => {
        const result = await this.props.extensionInfo.extension.navigator.openNewAsset({slideIn: true}).then(({entity}) => {
            return entity
        })
        this.reuseExistingAsset(result.sys.id);
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
        //TO DO : MULTILANGUE
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
            this.props.updateStateAsset(this.state.asset, this.props.index);
        })
    }

    removeSelectedAsset = () => {
        this.setState({
            ...this.state,
            asset: null
        }, () => {
            this.props.updateStateAsset(this.state.asset, this.props.index);
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
        }
    }

    assetIsValid = async () => {
        if (!this.state.asset) return
        let assetId = this.state.asset.sys.id;
        try {
            let asset = await this.props.extensionInfo.extension.space.getAsset(assetId);
            this.setState({
                ...this.state,
                valid: true
            })
        } catch (err) {
            this.setState({
                ...this.state,
                valid: false
            })
        }
    }

    informationsAreValid = () => {
        if (this.props.alt) {
            return true
        }
        return false
    }


    render = () => {
        const {asset, alt, description} = this.props;
        if (!this.state.isDraggingOver && this.state.asset && !this.state.asset.fields.file) {
            return (
                <ReloadView>
                    <p>You added a new image. Click on "refresh" to see it</p>
                    <ViewPort>
                        <IconContainer onClick={() => {
                            this.reloadAsset(this.state.asset.sys.id);
                        }}>
                            <SvgRefresh/>
                        </IconContainer>
                    </ViewPort>
                </ReloadView>
            )
        } else if (!this.state.isDraggingOver && this.state.asset) {
            return (
                <FileView
                    openInformations={this.state.openInformations}
                    toggleOpenInformations={this.toggleOpenInformations}
                    index={this.props.index}
                    file={this.state.asset.fields.file[this.findProperLocale()]}
                    title={this.state.asset.fields.title[this.findProperLocale()]}
                    alt={alt}
                    description={description}
                    isPublished={
                        this.state.asset.sys.version ===
                        (this.state.asset.sys.publishedVersion || 0) + 1
                    }
                    onClickLinkExisting={this.onClickLinkExisting}
                    onClickNewAsset={this.onClickNewAsset}
                    onClickEdit={this.onClickEdit}
                    onClickRemove={this.onClickRemove}
                    onClickReload={this.reloadAsset}
                    updateStateTranslatedProps={this.props.updateStateTranslatedProps}
                    valid={this.state.valid}
                    validInformations={this.informationsAreValid()}
                />
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
