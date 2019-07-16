import update from 'react-addons-update';

const fontfaces = (state = [], action) => {
    switch (action.type) {
    case 'ADD_FONT_FACES' :
        return update(state, { $push: [action.font] }
        );

    case 'GET_FONT_FACES' :
        return action.state;

    default:
        return state;
    }
};

export default fontfaces;
