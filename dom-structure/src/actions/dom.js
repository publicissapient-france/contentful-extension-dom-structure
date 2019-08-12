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






// SECTION

export const addSection = object => ({
    type: 'ADD_SECTION',
    section: object

});
export const addSectionToTop = object => ({
    type: 'ADD_SECTION_TO_TOP',
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

export const toggleSectionActive = (bool, number) => ({
    type: 'TOGGLE_SECTION_ACTIVE',
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

// COMPONENT

export const addComponent = (object, number) => ({
    type: 'ADD_COMPONENT',
    component: object,
    index: number

});

export const updateComponent = (name, model, number, numberParent) => ({
    type: 'UPDATE_COMPONENT',
    name: name,
    model: model,
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

export const toggleComponentActive = (bool, number, numberParent) => ({
    type: 'TOGGLE_COMPONENT_ACTIVE',
    active: bool,
    index: number,
    indexParent: numberParent
});





// COMPONENT CONTENT

export const updateContentValue = (props, value, bool, number, numberParent) => ({
    type: 'UPDATE_CONTENT_VALUE',
    props: props,
    value: value,
    active: bool,
    indexComponent: number,
    indexSection: numberParent
});

// COMPONENT SETTINGS

export const updateSettingsValue = (props, value, bool, number, numberParent) => ({
    type: 'UPDATE_SETTINGS_VALUE',
    props: props,
    value: value,
    active: bool,
    indexComponent: number,
    indexSection: numberParent
});
// COMPONENT SETTINGS

export const toggleFieldActive = (type, bool, number, numberParent) => ({
    type: 'TOGGLE_FIELD_ACTIVE',
    typeField: type,
    active: bool,
    indexComponent: number,
    indexSection: numberParent
});


export const updateFieldContent = (type, content, number, numberParent) => ({
    type: 'UPDATE_FIELD_CONTENT',
    typeField: type,
    content: content,
    indexComponent: number,
    indexSection: numberParent
});

export const updateFieldStatus = (type, status, number, numberParent) => ({
    type: 'UPDATE_FIELD_STATUS',
    typeField: type,
    status: status,
    indexComponent: number,
    indexSection: numberParent
});
