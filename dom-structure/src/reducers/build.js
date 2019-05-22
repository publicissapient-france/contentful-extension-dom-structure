const build = (state = [], action) => {
    switch (action.type) {
    case 'INIT_DOM_BUILD' :
        return [...action.dom];
    default:
        return state;
    }
};

export default build;
