import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Field} from './styled';
import {getCurrentExtension} from '../../actions/index';
import UploadView from '../../components/UploadView/index';
import FileView from '../../components/FileView/index';

const ImageUploader = ({asset,alt, index,currentResponsiveMode, updateStateAsset, updateStateTranslatedProps, extensionInfo}) => {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [innerAsset, setInnerAsset] = useState(asset);
    const [valid, setValid] = useState(true);

    useEffect(() => {
        console.log('effect 1')
        console.log(asset);
        if (asset && asset.url) {
            setInnerAsset(asset);
        }else{

        }
    //}, [asset]);
    }, []);

    useEffect(() => {
        console.log('effect 2')
        setInnerAsset(asset);
       /* if(asset !== innerAsset){
            setInnerAsset(asset);
        }
       /* if (asset && asset.id) {
            setInnerAsset(asset);
        }else{
            setInnerAsset(null);
        }*/
    }, [currentResponsiveMode]);

    useEffect(() => {
        console.log('effect 3')
        /*async function isValid() {
            if(innerAsset && innerAsset !== {}){
                assetIsValid();
            }
        }
        isValid();*/
        if(asset){
            console.log('update draft');
            updateStateAsset('images', 'asset', innerAsset, index);
        }
    }, [innerAsset]);

    const onClickNewAsset = async () => {
        const result = await extensionInfo.extension.navigator.openNewAsset({ slideIn: { waitForClose: true } }).then(({entity}) => {
            return entity;
        });
        await reuseExistingAsset(result.sys.id);
    }

    const reuseExistingAsset = async assetId => {
        let asset;
        try {
            asset = await extensionInfo.extension.space.getAsset(assetId);
        } catch (err) {
            onError(err);
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
            onError(err);
        }
    }

    const findProperLocale = () => extensionInfo.extension.locales.default;

    const setSelectedAsset = asset => {
        if (!asset) {
            removeSelectedAsset();
        }
        const url = asset.fields.file[findProperLocale()].url;

        setInnerAsset({
            url: url,
            fileName: url.substring(url.lastIndexOf('/') + 1),
            id: asset.sys.id
        })
    }

    const removeSelectedAsset = () => {
        setInnerAsset({})
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
        let assetId = innerAsset.id;
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
            onCustomError('Request failed : Asset doesn\'t exist anymore');
            removeSelectedAsset();
        }
    }

    const assetIsValid = async () => {
        if (!innerAsset || !innerAsset.id) return;
        let assetId = innerAsset.id;
        try {
            let asset = await extensionInfo.extension.space.getAsset(assetId);
            setValid(true);
        } catch (err) {
            setValid(false);
        }
    }

    const publishAsset = async () => {
        if (!innerAsset || !innerAsset.id) return;
        try {
            if (innerAsset.sys.version === (innerAsset.sys.publishedVersion || 0) + 1) {
            } else {
                extensionInfo.extension.space.publishAsset(innerAsset);
            }
        } catch (err) {
        }
    }

    let view;
    if (innerAsset && innerAsset.url) {
        view = <FileView
            url={innerAsset.url}
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
                       onChange={e => updateStateTranslatedProps('images', 'alt', e.target.value, index)}/>
            </Field>
        </Container>
    );
}

ImageUploader.protoTypes = {
    asset: PropTypes.object,
    alt: PropTypes.string,
    index: PropTypes.number,
    updateStateAsset : PropTypes.func,
    updateStateTranslatedProps : PropTypes.func
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(ImageUploader);
