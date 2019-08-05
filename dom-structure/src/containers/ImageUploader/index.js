import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCurrentExtension} from "../../actions/index";
import {IconContainer, ViewPort, RefreshMessage, Actions} from "./styled";
import UploadView from '../../components/UploadView/index'
import FileView from '../../components/FileView/index'
import SvgRefresh from '../../components/svg/SvgRefresh'

import SvgAttachement from '../../components/svg/SvgAttachement';
import SvgAddSmall from '../../components/svg/SvgAddSmall';
import SvgTrashSmall from '../../components/svg/SvgTrashSmall';
import ButtonValidate from "../../components/ui/ButtonValidate/index";
import ReloadView from '../../components/RealoadView'

class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggingOver: false,
            asset: null,
            valid: true,
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
            this.publishAsset();
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

    publishAsset = async () => {
        if(!this.state.asset) return;
        let assetId = this.state.asset.sys.id;
        try {
            let asset = await this.props.extensionInfo.extension.space.getAsset(assetId);
            if(asset.sys.version ===
                (asset.sys.publishedVersion || 0) + 1){
                console.log('asset en publish', asset)
            }else{
                console.log('asset en draft')
                this.props.extensionInfo.extension.space.publishAsset(asset);
            }
        } catch (err) {

        }
    }

    informationsAreValid = () => {
        if (this.props.alt) {
            return true
        }
        return false
    }

/*<ReloadView>
                    <ViewPort>
                        <IconContainer>
                            <SvgRefresh/>
                        </IconContainer>
                    </ViewPort>
                    <Actions>
                        <IconContainer>
                            <SvgAttachement/>
                        </IconContainer>
                        <IconContainer>
                            <SvgAddSmall/>
                        </IconContainer>
                        <IconContainer>
                            <SvgTrashSmall/>
                        </IconContainer>
                    </Actions>
                    <RefreshMessage>
                        <p>You added a new image. Click on "refresh" to see it</p>
                        <ButtonValidate label={'Refresh'} action={() => {this.reloadAsset(this.state.asset.sys.id);}}/>
                    </RefreshMessage>
                </ReloadView>*/
    render = () => {
        const {asset, alt, index} = this.props;
        if (!this.state.isDraggingOver && this.state.asset && !this.state.asset.fields.file) {
            return (
                <ReloadView
                    assetId={this.state.asset.sys.id}
                    onClickReload={this.reloadAsset}
                />

            )
        } else if (!this.state.isDraggingOver && this.state.asset) {
            return (
                <FileView
                    index={this.props.index}
                    file={this.state.asset.fields.file[this.findProperLocale()]}
                    title={this.state.asset.fields.title[this.findProperLocale()]}
                    alt={alt}
                    isPublished={
                        this.state.asset.sys.version ===
                        (this.state.asset.sys.publishedVersion || 0) + 1
                    }
                    onClickLinkExisting={this.onClickLinkExisting}
                    onClickNewAsset={this.onClickNewAsset}
                    //onClickEdit={this.onClickEdit}
                    onClickRemove={this.onClickRemove}
                    //onClickReload={this.reloadAsset}
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
