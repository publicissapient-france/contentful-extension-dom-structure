import React from 'react';
import PropTypes from 'prop-types';

import {Asset} from '@contentful/forma-36-react-components';
import {
    Container,
    Actions,
    Warning,
    DataContainer,
    IconContainer,
    Preview
} from './styled';
import SvgAttachement from '../svg/SvgAttachement';
import SvgAddSmall from '../svg/SvgAddSmall';
import SvgTrashSmall from '../svg/SvgTrashSmall';

const FileView = ({url, valid, onClickLinkExisting, onClickNewAsset, onClickRemove}) => {
    const type = 'image'; //file.contentType.split('/')[0];
    const bg = { backgroundImage: `url(https://${ url })` };

    return (
        <Container className={`file-view  ${type === 'image' ? 'image-file' : 'non-image-file'}`}>
            {!valid &&
                <Warning>
                    <strong>WARNING : </strong><br/>
                    The selected asset does NOT exist anymore on Media
                </Warning>
            }
            <DataContainer>
                <div>
                    {type === 'image' ? (<Preview style={bg}/>) : (
                        <Preview>
                            <Asset type={type} className="file-type-icon"/>
                        </Preview>
                    )}
                </div>
                <Actions>
                    <div>
                        <IconContainer onClick={onClickLinkExisting}>
                            <SvgAttachement/>
                        </IconContainer>
                        <IconContainer onClick={onClickNewAsset}>
                            <SvgAddSmall/>
                        </IconContainer>
                    </div>
                    <IconContainer className="delete" onClick={onClickRemove}>
                        <SvgTrashSmall/>
                    </IconContainer>
                </Actions>
            </DataContainer>
        </Container>
    );
}

FileView.propTypes = {
    url : PropTypes.string,
    valid : PropTypes.bool,
    onClickLinkExisting : PropTypes.func,
    onClickNewAsset : PropTypes.func,
    onClickRemove : PropTypes.func
}

export default FileView;
