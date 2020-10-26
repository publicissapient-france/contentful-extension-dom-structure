export const initVisibility = () => ({
    type: 'INIT_VISIBILITY',
});
export const toggleLanguage = number => ({
    type: 'TOGGLE_SELECTED_LANGUAGE',
    language: number
});

export const toggleResponsiveMode = mode => ({
    type: 'TOGGLE_RESPONSIVE_MODE',
    mode: mode
});

export const toggleFormAddSection = () => ({
    type: 'TOGGLE_FORM_ADD_SECTION',
});
export const closeFormAddSection = () => ({
    type: 'CLOSE_FORM_ADD_SECTION',
});
export const toggleFormAddSectionToTop = () => ({
    type: 'TOGGLE_FORM_ADD_SECTION_TO_TOP',
});
export const toggleFormAddSectionToBottom = () => ({
    type: 'TOGGLE_FORM_ADD_SECTION_TO_BOTTOM',
});
export const openFormAddSection = () => ({
    type: 'GET_VISIBILITY_FORM_ADD_SECTION',
});

export const toggleEditorOnly = (active) => ({
    type: 'TOGGLE_EDITOR_ONLY',
    active:active
});

export const getCurrentLanguage = state => ({
    type: 'GET_LANGUAGE',
    language: state.visibility.selectedLanguage
});

export const getInterfaceMode = state => ({
    type: 'GET_INTERFACE_MODE',
    editorOnly: state.visibility.editorOnly
});

export const updateAccessLocalStorage = (active) => ({
    type: 'UPDATE_ACCESS_LOCAL_STORAGE',
    active:active
});

export const getVisibility = (state) => ({
    type: 'GET_ACCESS_LOCAL_STORAGE',
    visibility: state.visibility
});


export const getAccessLocalStorageAvailable = state => ({
    type: 'GET_ACCESS_LOCAL_STORAGE_AVAILABLE',
    accessLocalStorage: state.visibility.accessLocalStorage
});
export const getVersionStorage = state => ({
    type: 'GET_VERSION_STORAGE',
    versionStorage: state.visibility.versionStorage
});

export const incrementVersionStorage = () => ({
    type: 'INCREMENT_VERSION_STORAGE'
});
