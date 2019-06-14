import _ from 'lodash';
import update from 'react-addons-update';

const style = (state = [], action) => {
    switch (action.type) {
    case 'INIT_STYLE_INFORMATION' :
        const colors = _.values(action.style.colorChart)[0];
        const name = _.values(action.style.name)[0];
        const fonts = action.fonts.map( font => font.fields)

        return update(state, {
            name: { $set: name },
            colors: { $set: colors },
            fonts : { $set: fonts }

        });

    case 'GET_STYLE' :
        return action.state;

    default:
        return state;
    }
};

export default style;
