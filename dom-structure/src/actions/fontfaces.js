export const addFontFaces = object => ({
    type: 'ADD_FONT_FACES',
    font: object
});

export const getFontfaces = state => ({
    type: 'GET_FONT_FACES',
    value: state.fontfaces
});
