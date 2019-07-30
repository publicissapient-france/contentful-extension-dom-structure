import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCurrentExtension} from "../../actions/index";
import {ReloadView, IconContainer} from "./styled";
import UploadView from '../../components/UploadView/index'
import FileView from '../../components/FileView/index'
import SvgRefresh from '../../components/svg/SvgRefresh'

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
        if (this.props.currentAsset) {
            this.setSelectedAsset(this.props.currentAsset);
        }
    };

    componentDidUpdate = prevProps => {
        if (this.props.currentAsset != prevProps.currentAsset && this.props.currentAsset) {
            this.setSelectedAsset(this.props.currentAsset);
        }
    }

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
            this.props.updateStateProps('asset', this.state.asset);
        })
    }

    removeSelectedAsset = () => {
        this.setState({
            ...this.state,
            asset: null
        }, () => {
            this.props.updateStateProps('asset', this.state.asset);
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
        if(!this.state.asset) return
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


    render = () => {
        const {currentAsset} = this.props;
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
