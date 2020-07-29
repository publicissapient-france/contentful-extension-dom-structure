import React, { Component } from 'react';
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
                    asset && asset.url ? 'image-file' : 'non-image-file'
                }`}
            >
                {
                    !asset || !asset.url ? <ViewPort>
                        <span>Asset</span>
                    </ViewPort>
                        : <Preview style={bg}/>

                }

            </Container>
        );
    }
}

export default AssetPreview;
