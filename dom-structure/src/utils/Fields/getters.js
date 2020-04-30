const getText = (content, language) => content.text && content.text[language] ? content.text[language] : '';

const getIcon = (content, language) => content.icon && content.icon[language] ? content.icon[language] : '';

const getLink = (content, language) => content.link && content.link[language] ? content.link[language] : '';

const getHtml = (content, language) => content.html && content.html[language] ? content.html[language] : '';

const getAlt = (content, language) => content.images && content.images[0] && content.images[0].alt && content.images[0].alt[language] ? content.images[0].alt[language] : '';

const getAltByIndex = (content, language, i) => content.images && content.images[i].alt && content.images[i].alt[language] ? content.images[i].alt[language] : '';

const getAsset = (content, responsiveMode) => content.images && content.images[0] && content.images[0].asset ? content.images[0].asset[responsiveMode] : null

const getAssetByIndex = (content, responsiveMode, i) => content.images[i] ? content.images[i].asset[responsiveMode] : null;

const getAssetToPreview = (content, responsiveMode, responsiveContent) => {
    if (!content.images || !content.images[0] || !content.images[0].asset) return null;
    if (responsiveContent.includes(responsiveMode)) {
        return content.images[0].asset[responsiveMode];
    } else {
        return content.images[0].asset[responsiveContent[0]];
    }
}

const getAssetToPreviewByIndex = (content, responsiveMode, responsiveContent, i) => {
    if (!content.images || !content.images[i] || !content.images[i].asset) return null;
    return responsiveContent.includes(responsiveMode) ? content.images[i].asset[responsiveMode] : content.images[i].asset[responsiveContent[i]];
}

const getData = (content) => content && content.data ? content.data : '';


export {
    getText,
    getIcon,
    getLink,
    getHtml,
    getAltByIndex,
    getAssetByIndex,
    getAssetToPreview,
    getAssetToPreviewByIndex,
    getAsset,
    getAlt,
    getData
};
