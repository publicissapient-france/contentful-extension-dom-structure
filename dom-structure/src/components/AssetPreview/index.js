import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Preview,
    ViewPort
} from './styled';
import {Icon} from '@contentful/forma-36-react-components';

const AssetPreview = ({asset, locale}) => {
    const bg = asset && asset.url ? {backgroundImage: `url(${ asset.url })`} : '';

    return (
        <Container className={`file-view  ${asset && asset.url ? 'image-file' : 'non-image-file'}`}>
            {
                !asset || !asset.url ? <ViewPort>
                        <Icon color={'muted'}
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

AssetPreview.propTypes = {
    asset: PropTypes.object,
    locale: PropTypes.string
};


export default AssetPreview;
