import _ from 'lodash';
import update from 'react-addons-update';

const style = (state = [], action) => {
    switch (action.type) {
    case 'INIT_STYLE_INFORMATION' :
        console.log('style action', action.style)
        const colors = _.values(action.style.colorChart)[0];
        const name = _.values(action.style.name)[0];
        const fonts = action.fonts.map(font => font.fields)
            .map(font => {
                return {
                    family: _.values(font.name)[0],
                    generatedFontName: _.values(font.generatedFontName)[0],
                    style: _.values(font.style)[0],
                    typeface: _.values(font.typeface)[0],
                    weight: _.values(font.weight)[0]
                };
            });

        const themes = _.values(action.style.themes)[0].themes.themes;

        return update(state, {
            name: { $set: name },
            colors: { $set: colors },
            fonts: { $set: fonts },
            themes : { $set : themes }
        });

    case 'GET_STYLE' :
        return action.state;

    default:
        return state;
    }
};

export default style;
