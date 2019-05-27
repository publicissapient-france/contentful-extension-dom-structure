import update from 'react-addons-update';

const visibility = (state = [], action) => {
    switch (action.type) {
        case 'INIT_VISIBILITY' :
            return {
                openFormAddSection : false,
                selectedLanguage : 0
            }

        case 'TOGGLE_FORM_ADD_SECTION':
            return update(state, {
                openFormAddSection: {$set: !state.openFormAddSection}
            });

        case 'TOGGLE_SELECTED_LANGUAGE':
            return update(state, {
                selectedLanguage: {$set: action.language}
            });

        case 'GET_VISIBILITY_FORM_ADD_SECTION':
            return state;

        default:
            return state;
    }
};

export default visibility;
