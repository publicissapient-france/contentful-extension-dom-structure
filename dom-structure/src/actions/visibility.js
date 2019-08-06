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
export const toggleFormAddSectionToTop = () => ({
    type: 'TOGGLE_FORM_ADD_SECTION_TO_TOP',
});
export const openFormAddSection = () => ({
    type: 'GET_VISIBILITY_FORM_ADD_SECTION',
});
export const getCurrentLanguage = state => ({
    type: 'GET_LANGUAGE',
    language: state.visibility.selectedLanguage
});


export const getResponsiveMode = state => ({
    type: 'GET_RESPONSIVE_MODE',
    mode: state.visibility.responsiveMode
});