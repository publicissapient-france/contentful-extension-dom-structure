import _ from 'lodash';
import update from 'react-addons-update';

const style = (state = [], action) => {
    switch (action.type) {
    case 'INIT_STYLE_INFORMATION' :
        const colors = _.values(action.style.colorChart)[0];
        const name = _.values(action.style.name)[0];
        return update(state, {
            colors: { $set: colors },
            name: { $set: name }

        });

    case 'ADD_COLOR_ON_STYLEGUIDE' :
        console.log('test');
        return action.state;

    case 'GET_STYLE' :
        return action.state;

    default:
        return state;
    }
};

export default style;
