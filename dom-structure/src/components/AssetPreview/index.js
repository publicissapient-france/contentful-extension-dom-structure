import React, { Component } from 'react';
import { Icon } from '@contentful/forma-36-react-components';
import {
    Container,
    Preview,
    ViewPort
} from './styled';

class AssetPreview extends Component {
    render () {
        const { asset, locale } = this.props;
        const bg = asset && asset.url ? { backgroundImage: `url(${ asset.url })` } : '';

        return (
            <Container
                className={`file-view  ${
                    asset.url ? 'image-file' : 'non-image-file'
                }`}
            >
                {
                    !asset.url ? <ViewPort>
                        <Icon
                            color={'muted'}
                            icon="Asset"
                            size="large"
                            className="image-icon"
                        />
                    </ViewPort>
                        : <Preview style={bg}/>

                }

            </Container>
        );
    }
}

export default AssetPreview;
