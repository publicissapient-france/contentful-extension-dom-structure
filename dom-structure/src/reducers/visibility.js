import update from 'react-addons-update';

const visibility = (state = [], action) => {
    switch (action.type) {
        case 'INIT_VISIBILITY' :
            return {
                openFormAddSection: false,
                openFormAddSectionToTop: false,
                openFormAddSectionToBottom: false,
                selectedLanguage: 0,
                editorOnly: false,
                view: {},
                accessLocalStorage: true,
                versionStorage : 0
            };

        case 'TOGGLE_FORM_ADD_SECTION':
            return update(state, {
                openFormAddSection: {$set: !state.openFormAddSection}
            });

        case 'CLOSE_FORM_ADD_SECTION':
            return update(state, {
                openFormAddSection: {$set: false},
                toggleFormAddSectionToTop: {$set: false},
                toggleFormAddSectionToBottom: {$set: false}
            });

        case 'TOGGLE_FORM_ADD_SECTION_TO_TOP':
            return update(state, {
                openFormAddSectionToTop: {$set: !state.openFormAddSectionToTop}
            });

        case 'TOGGLE_FORM_ADD_SECTION_TO_BOTTOM':
            return update(state, {
                openFormAddSectionToBottom: {$set: !state.openFormAddSectionToBottom}
            });

        case 'TOGGLE_EDITOR_ONLY':
            return update(state, {
                editorOnly: {$set: action.active}
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


        case 'UPDATE_ACCESS_LOCAL_STORAGE':
            return update(state, {
                accessLocalStorage: {$set: action.active}
            });


        case 'INCREMENT_VERSION_STORAGE':
            return update(state, {
                versionStorage: {$set: state.versionStorage + 1}
            });


        case 'GET_VISIBILITY':
            return action.state;


        default:
            return state;
    }
};

export default visibility;
