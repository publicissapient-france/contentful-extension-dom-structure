import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Field} from "./styled";
import {getCurrentExtension} from "../../actions/index";
import UploadView from '../../components/UploadView/index'
import FileView from '../../components/FileView/index'
import ReloadView from '../../components/RealoadView/index'

class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggingOver: false,
            asset: {},
            valid: true,
        }
    }

    componentDidMount() {
        if (this.props.asset) {
            this.setSelectedAsset(this.props.asset);
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.asset !== prevProps.asset) {
            if (this.props.asset && this.props.asset.sys) {
                this.setState({
                    ...this.state,
                    asset: this.props.asset
                }, () => {
                    this.publishAsset()
                })
            }else{
                this.setState({
                    ...this.state,
                    asset: {}
                })
            }
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
            this.props.updateStateAsset('images', 'asset', this.state.asset, this.props.index);
        })
    }

    removeSelectedAsset = () => {
        this.setState({
            ...this.state,
            asset: {}
        }, () => {
            this.props.updateStateAsset('images', 'asset', this.state.asset, this.props.index);
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
        if (!this.state.asset || !this.state.asset.sys) return
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
        if (!this.state.asset || !this.state.asset.sys) return;
        try {
            if (this.state.asset.sys.version === (this.state.asset.sys.publishedVersion || 0) + 1) {
            } else {
                this.props.extensionInfo.extension.space.publishAsset(this.state.asset);
            }
        } catch (err) {}
    }

    render = () => {
        const {asset, alt, index} = this.props;
        let view;


        if (!this.state.isDraggingOver && this.state.asset && this.state.asset.fields && !this.state.asset.fields.file) {
            view = <ReloadView
                assetId={this.state.asset.sys.id}
                onClickReload={this.reloadAsset}
            />
        } else if (!this.state.isDraggingOver && this.state.asset && this.state.asset.fields) {
            view = <FileView
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
                onClickRemove={this.onClickRemove}
                valid={this.state.valid}
            />

        } else {
            view = <UploadView
                isDraggingOver={this.state.isDraggingOver}
                onClickLinkExisting={this.onClickLinkExisting}
                onClickNewAsset={this.onClickNewAsset}
            />
        }


        return (
            <Container>
                {view}
                <Field>
                    <label>Alt (required)</label>
                    <input type={'text'}
                           value={alt}
                           onChange={e => {
                               this.props.updateStateTranslatedProps('images', 'alt', e.target.value, index);
                           }}/>
                </Field>
            </Container>

        )

    }
}

ImageUploader.protoTypes = {
    asset: PropTypes.object,
    alt : PropTypes.string,
    index : PropTypes.number
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ImageUploader);
