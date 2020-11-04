import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Field} from './styled';
import {getCurrentExtension} from '../../actions/index';
import UploadView from '../../components/UploadView/index';
import FileView from '../../components/FileView/index';
import ReloadView from '../../components/RealoadView/index';

const EntryUploader = ({asset, updateStateAsset,updateStateTranslatedProps, alt,  index, extensionInfo}) => {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [valid, setValid] = useState(true);
    const [innerAsset, setInnerAsset] = useState({});

    useEffect(() => {
        if (asset) {
            setSelectedAsset(asset)
        }
        if(!asset){
            setInnerAsset({});
        }
    }, []);

    useEffect(() => {
        if (asset && asset.sys) {
            setInnerAsset(asset);
            async function publish() {
                if (!innerAsset || !innerAsset.sys) return;
                try {
                    if (innerAsset.sys.version === (innerAsset.sys.publishedVersion || 0) + 1) {

                    } else {
                        extensionInfo.extension.space.publishAsset(innerAsset);
                    }
                } catch (err) {
                }
            }
            publish();
        }
    }, [asset]);


    useEffect(() => {
        updateStateAsset('images', 'asset', innerAsset, index);
        async function publish() {
            if (!innerAsset || !innerAsset.sys) return;
            try {
                if (innerAsset.sys.version === (innerAsset.sys.publishedVersion || 0) + 1) {

                } else {
                    extensionInfo.extension.space.publishAsset(innerAsset);
                }
            } catch (err) {
            }
        }
        publish();
    }, [innerAsset]);

    const setSelectedAsset = asset => {
        if (!asset) {
            removeSelectedAsset()
        }
        setInnerAsset(asset)
    }

    const removeSelectedAsset = () => {
        setInnerAsset({});
    }

    const onClickNewAsset = async () => {
        const result = await extensionInfo.extension.navigator.openNewAsset({slideIn: true}).then(({entity}) => {
            return entity;
        });
        reuseExistingAsset(result.sys.id);
    }

    const reuseExistingAsset = async assetId => {
        let asset;
        try {
            asset = await extensionInfo.extension.space.getAsset(assetId);
        } catch (err) {
            this.onError(err);
        }
        setSelectedAsset(asset);
    }

    const onClickLinkExisting = async () => {
        const selectedAsset = await extensionInfo.extension.dialogs.selectSingleAsset({
            locale: extensionInfo.extension.field.locale
        });
        try {
            setSelectedAsset(selectedAsset);
        } catch (err) {
            this.onError(err);
        }
    }

    const findProperLocale = () => {
        return extensionInfo.extension.locales.default;
    }

    const onError = error => {
        console.error(error);
        extensionInfo.extension.notifier.error(error.message);
    }

    const onCustomError = message => {
        console.error(message);
        extensionInfo.extension.notifier.error(message);
    }

    const onClickRemove = () => removeSelectedAsset();

    const reloadAsset = async () => {
        let assetId = innerAsset.sys.id;
        let asset;

        try {
            asset = await extensionInfo.extension.space.getAsset(assetId);
            if (!asset.fields.file) {
                removeSelectedAsset();
                onCustomError('Request failed : Asset hasn\'t required data. Please complete Asset before');
            } else {
                setSelectedAsset(asset);
            }
        } catch (err) {
            this.onCustomError('Request failed : Asset doesn\'t exist anymore');
            //removeSelectedAsset();
        }
    }

    const assetIsValid = async () => {
        if (!innerAsset || !innerAsset.sys) return;
        let assetId = innerAsset.sys.id;
        try {
            let asset = await extensionInfo.extension.space.getAsset(assetId);
            setValid(true);
        } catch (err) {
            setValid(false);
        }
    }


    let view;

    if (!isDraggingOver && innerAsset && innerAsset.fields && !innerAsset.fields.file) {
        view = <ReloadView
            assetId={innerAsset.sys.id}
            onClickReload={reloadAsset}
        />;
    } else if (!isDraggingOver && innerAsset && innerAsset.fields) {
        view = <FileView
            index={index}
            file={innerAsset.fields.file[findProperLocale()]}
            title={innerAsset.fields.title[findProperLocale()]}
            alt={alt}
            isPublished={
                innerAsset.sys.version ===
                (innerAsset.sys.publishedVersion || 0) + 1
            }
            onClickLinkExisting={onClickLinkExisting}
            onClickNewAsset={onClickNewAsset}
            onClickRemove={onClickRemove}
            valid={valid}
        />;
    } else {
        view = <UploadView
            isDraggingOver={isDraggingOver}
            onClickLinkExisting={onClickLinkExisting}
            onClickNewAsset={onClickNewAsset}
        />;
    }

    return (
        <Container>
            {view}
            <Field>
                <label>Alt (required)</label>
                <input type={'text'}
                       value={alt}
                       onChange={e => {
                           updateStateTranslatedProps('images', 'alt', e.target.value, index);
                       }}/>
            </Field>
        </Container>
    );
}


EntryUploader.protoTypes = {
    asset: PropTypes.object,
    alt: PropTypes.string,
    index: PropTypes.number,
    updateStateAsset : PropTypes.func,
    updateStateTranslatedProps : PropTypes.func
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(EntryUploader);
