let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};



export const initDOMbuild = object => ({
    type: 'INIT_DOM_BUILD',
    dom: object

});

export const initDOM = object => ({
    type: 'INIT_DOM',
    dom: object

});

export const getCurrentDOM = state => ({
    type: 'GET_DOM',
    sections: state.dom
});

export const addSection = object => ({
    type: 'ADD_SECTION',
    section: object

});

export const updateSection = (object, number) => ({
    type: 'UPDATE_SECTION',
    section: object,
    index: number

});
export const removeSection = number => ({
    type: 'REMOVE_SECTION',
    index: number
});

export const toogleSectionActive = (bool, number) => ({
    type: 'TOOGLE_SECTION_ACTIVE',
    active: bool,
    index: number
});

export const moveSectionToTop = number => ({
    type: 'MOVE_SECTION_TO_TOP',
    index: number
});

export const moveSectionToDown = number => ({
    type: 'MOVE_SECTION_TO_DOWN',
    index: number
});

export const addComponent = (object, number) => ({
    type: 'ADD_COMPONENT',
    component: object,
    index: number

});

export const updateComponent = (object, number, numberParent) => ({
    type: 'UPDATE_COMPONENT',
    component: object,
    index: number,
    indexParent: numberParent

});

export const removeComponent = (number, numberParent) => ({
    type: 'REMOVE_COMPONENT',
    index: number,
    indexParent: numberParent

});

export const moveComponentToTop = (number, numberParent) => ({
    type: 'MOVE_COMPONENT_TO_TOP',
    index: number,
    indexParent: numberParent
});

export const moveComponentToDown = (number, numberParent) => ({
    type: 'MOVE_COMPONENT_TO_DOWN',
    index: number,
    indexParent: numberParent
});

export const toogleComponentActive = (bool, number, numberParent) => ({
    type: 'TOOGLE_COMPONENT_ACTIVE',
    active: bool,
    index: number,
    indexParent: numberParent
});

export const toogleFormAddSection = () => ({
    type: 'TOGGLE_FORM_ADD_SECTION',
});
export const openFormAddSection = () => ({
    type: 'GET_VISIBILITY_FORM_ADD_SECTION',
});

// UPDATE CONTENT

export const updateContentTitle = (value, bool, number, numberParent) => ({
    type: 'UPDATE_CONTENT_TITLE',
    value: value,
    active: bool,
    indexComponent: number,
    indexSection: numberParent
});

export const updateContentTagline = (value, bool, number, numberParent) => ({
    type: 'UPDATE_CONTENT_TAGLINE',
    value: value,
    active: bool,
    indexComponent: number,
    indexSection: numberParent
});
