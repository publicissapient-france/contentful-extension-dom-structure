import React from 'react';
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

export default function FileView (props) {
    const url = props.url;
    const type = 'image'; //file.contentType.split('/')[0];
    const bg = { backgroundImage: `url(https://${ url })` };

    return (
        <Container
            className={`file-view  ${
                type === 'image' ? 'image-file' : 'non-image-file'
            }`}
        >
            {!props.valid ? (
                <Warning>
                    <strong>WARNING : </strong><br/>
                    The selected asset does NOT exist anymore on Media
                </Warning>
            ) : (
                null
            )}
            <DataContainer>
                <div>
                    {type === 'image' ? (
                        <Preview style={bg}/>
                    ) : (
                        <Preview>
                            <span>Asset file</span>
                        </Preview>
                    )}
                </div>
                <Actions>
                    <div>
                        <IconContainer onClick={props.onClickLinkExisting}>
                            <SvgAttachement/>
                        </IconContainer>
                        <IconContainer onClick={props.onClickNewAsset}>
                            <SvgAddSmall/>
                        </IconContainer>
                    </div>
                    <IconContainer className="delete" onClick={props.onClickRemove}>
                        <SvgTrashSmall/>
                    </IconContainer>
                </Actions>

            </DataContainer>
        </Container>
    );
}
