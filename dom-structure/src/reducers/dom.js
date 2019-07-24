import update from 'react-addons-update';

const dom = (state = [], action) => {
    switch (action.type) {
    case 'INIT_DOM' :
        console.log(action.dom)
        return [...action.dom];

    case 'GET_DOM' :
        return action.state;

    case 'ADD_SECTION':
        return [
            ...state,
            {
                type: action.section.type,
                name: action.section.name,
                model: action.section.model,
                settings: action.section.settings,
                components: action.section.components,
                active: false
            }
        ];
    case 'ADD_SECTION_TO_TOP':
        return [
            {
                type: action.section.type,
                name: action.section.name,
                model: action.section.model,
                settings: action.section.settings,
                components: action.section.components,
                active: false
            },
            ...state
        ];

    case 'UPDATE_SECTION':
        return update(state, {
            [action.index]: {
                name: { $set: action.section.name },
                model: { $set: action.section.model }
            }
        });

    case 'REMOVE_SECTION':
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ];

    case 'TOGGLE_SECTION_ACTIVE':
        return update(state, {
            [action.index]: {
                active: { $set: action.active }
            }
        });

    case 'MOVE_SECTION_TO_TOP':
        const toTop = state[action.index];
        const toDown = state[action.index - 1];
        return update(state, {
            [action.index]: { $set: toDown },
            [action.index - 1]: { $set: toTop }
        });

    case 'MOVE_SECTION_TO_DOWN':
        const moveDown = state[action.index];
        const moveTop = state[action.index + 1];
        return update(state, {
            [action.index]: { $set: moveTop },
            [action.index + 1]: { $set: moveDown }
        });

    case 'ADD_COMPONENT':
        return update(state, {
            [action.index]: {
                components: {
                    $push: [
                        {
                            type: action.component.type,
                            name: action.component.name,
                            model: action.component.model,
                            content: {},
                            settings: {},
                            active: false
                        }
                    ]
                }
            }
        });

    case 'UPDATE_COMPONENT':
        return update(state, {
            [action.indexParent]: {
                components: {
                    [action.index]: {
                        name: { $set: action.component.name },
                        model: { $set: action.component.model }
                    }
                }
            }
        });

    case 'REMOVE_COMPONENT':
        return update(state, {
            [action.indexParent]: {
                components: {
                    $set: [
                        ...state[action.indexParent].components.slice(0, action.index),
                        ...state[action.indexParent].components.slice(action.index + 1)
                    ]
                }
            }
        });

    case 'TOGGLE_COMPONENT_ACTIVE':
        return update(state, {
            [action.indexParent]: {
                components: {
                    [action.index]: {
                        active: { $set: action.active }
                    }
                }
            }
        });
    case 'MOVE_COMPONENT_TO_TOP':
        const componentToTop = state[action.indexParent].components[action.index];
        const componentToDown = state[action.indexParent].components[action.index - 1];
        return update(state, {
            [action.indexParent]: {
                components: {
                    [action.index]: { $set: componentToDown },
                    [action.index - 1]: { $set: componentToTop }
                }
            }
        });
    case 'MOVE_COMPONENT_TO_DOWN':
        const componentMoveToDown = state[action.indexParent].components[action.index];
        const componentMoveToTop = state[action.indexParent].components[action.index + 1];
        return update(state, {
            [action.indexParent]: {
                components: {
                    [action.index]: { $set: componentMoveToTop },
                    [action.index + 1]: { $set: componentMoveToDown }
                }
            }
        });

    case 'UPDATE_CONTENT_VALUE':
        return update(state, {
            [action.indexSection]: {
                components: {
                    [action.indexComponent]: {
                        content: {
                            [action.props]: {
                                $set: {
                                    value: action.value,
                                    active: action.active
                                }
                            }
                        }
                    }
                }
            }
        });

    case 'UPDATE_SETTINGS_VALUE':
        return update(state, {
            [action.indexSection]: {
                components: {
                    [action.indexComponent]: {
                        settings: {
                            [action.props]: {
                                $set: {
                                    value: action.value,
                                    active: action.active
                                }
                            }
                        }
                    }
                }
            }
        });

    default:
        return state;
    }
};

export default dom;
