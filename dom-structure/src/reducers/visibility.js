import update from 'react-addons-update';

const visibility = (state = [], action) => {
    switch (action.type) {
        case 'INIT_VISIBILITY' :
            return {
                openFormAddSection: false,
                openFormAddSectionToTop: false,
                selectedLanguage: 0,
                view: {}
            };

        case 'TOGGLE_FORM_ADD_SECTION':
            return update(state, {
                openFormAddSection: {$set: !state.openFormAddSection}
            });

        case 'TOGGLE_FORM_ADD_SECTION_TO_TOP':
            return update(state, {
                openFormAddSectionToTop: {$set: !state.openFormAddSectionToTop}
            });

        case 'TOGGLE_SELECTED_LANGUAGE':
            return update(state, {
                selectedLanguage: {$set: action.language}
            });

        case 'TOGGLE_RESPONSIVE_MODE':
            return update(state, {
                responsiveMode: {$set: action.mode}
            });


        case 'GET_VISIBILITY_FORM_ADD_SECTION':
            return state;

        default:
            return state;
    }
};

export default visibility;
