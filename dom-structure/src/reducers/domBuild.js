import update from 'react-addons-update';

const dom = (state = [], action) => {
    switch (action.type) {
        case 'INIT_DOM_BUILD' :
            console.log('on est dans init dom build');
            return [...action.dom];
        default:
            return state;
    }
};

export default dom;
