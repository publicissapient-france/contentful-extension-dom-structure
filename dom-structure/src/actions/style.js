export const initStyleInformation = (styleguide, fonts) => ({
    type: 'INIT_STYLE_INFORMATION',
    style: styleguide,
    fonts: fonts

});
export const getCurrentStyle = state => ({
    type: 'GET_STYLE',
    style: state.style
});
export const getColors = state => ({
    type: 'GET_STYLE',
    value: state.style.colors
});
export const getStyleGuideName = state => ({
    type: 'GET_STYLE',
    value: state.style.name
});
