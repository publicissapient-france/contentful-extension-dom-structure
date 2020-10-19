import update from 'react-addons-update';

const dom = (state = [], action) => {
    switch (action.type) {
        case 'INIT_DOM' :
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
                    components: action.section.components,
                    active: false,
                    fields: action.section.fields
                }
            ];
        case 'ADD_SECTION_TO_TOP':
            return [
                {
                    type: action.section.type,
                    name: action.section.name,
                    model: action.section.model,
                    components: action.section.components,
                    active: false,
                    fields: action.section.fields
                },
                ...state
            ];

        case 'UPDATE_SECTION':
            return update(state, {
                [action.index]: {
                    name: {$set: action.section.name},
                    model: {$set: action.section.model}
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
                    active: {$set: action.active}
                }
            });

        case 'MOVE_SECTION_TO_TOP':
            const toTop = state[action.index];
            const toDown = state[action.index - 1];
            return update(state, {
                [action.index]: {$set: toDown},
                [action.index - 1]: {$set: toTop}
            });

        case 'MOVE_SECTION_TO_DOWN':
            const moveDown = state[action.index];
            const moveTop = state[action.index + 1];
            return update(state, {
                [action.index]: {$set: moveTop},
                [action.index + 1]: {$set: moveDown}
            });

        case 'DUPLICATE_SECTION':
            const duplicatedSection = Object.assign({}, state[action.index]);
            return [
                ...state.slice(0, action.index),
                duplicatedSection,
                ...state.slice(action.index)
            ]


        case 'ADD_COMPONENT':
            return update(state, {
                [action.index]: {
                    components: {
                        $push: [
                            {
                                type: action.component.type,
                                name: action.component.name,
                                model: action.component.model,
                                active: false,
                                fields: action.component.fields,
                                order: action.component.order
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
                            name: {$set: action.name},
                            model: {$set: action.model},
                            order: {$set: action.order}
                        }
                    }
                }
            });

        case 'PAST_COMPONENT_PRESET':
            return update(state, {
                [action.indexParent]: {
                    components: {
                        [action.index]: {
                            name: {$set: action.component.name},
                            model: {$set: action.component.model},
                            fields: {$set: action.component.fields},
                            order: {$set: action.component.order}
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

                            active: {$set: action.active}
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
                        [action.index]: {$set: componentToDown},
                        [action.index - 1]: {$set: componentToTop}
                    }
                }
            });

        case 'MOVE_COMPONENT_TO_DOWN':
            const componentMoveToDown = state[action.indexParent].components[action.index];
            const componentMoveToTop = state[action.indexParent].components[action.index + 1];
            return update(state, {
                [action.indexParent]: {
                    components: {
                        [action.index]: {$set: componentMoveToTop},
                        [action.index + 1]: {$set: componentMoveToDown}
                    }
                }
            });


        case 'DUPLICATE_COMPONENT':
            const duplicatedComponent = Object.assign({}, state[action.indexParent].components[action.index]);
            const updatedListComponents = [
                ...state[action.indexParent].components.slice(0, action.index),
                duplicatedComponent,
                ...state[action.indexParent].components.slice(action.index)
            ]
            return update(state, {
                [action.indexParent]: {
                    components: {$set: updatedListComponents}
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

        case 'INIT_FIELD':
            const newField = {
                active: false,
                content: {},
                settings: {}
            };
            return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            fields: {
                                [action.nameProperty]: {$set: newField}
                            }
                        }
                    }
                }
            });

        case 'DUPLICATE_FIELD_COMPONENT':
            const arrayF = Object.keys(state[action.indexSection].components[action.indexComponent].fields).map(field => {

                return field.includes(action.nameProperty);


            })
            const number = arrayF.filter(el => el).length;

            const duplicateField = Object.assign({}, state[action.indexSection].components[action.indexComponent].fields[action.nameProperty]);

            const nameOfField = action.nameProperty.concat(String(number))


            return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            fields: {
                                [nameOfField]: {$set: duplicateField}
                            }
                        }
                    }
                }
            });


        case 'INIT_FIELD_SECTION':

            const newFieldSection = {
                active: false,
                content: {},
                settings: {}
            };
            return update(state, {
                [action.indexSection]: {
                    fields: {
                        [action.nameProperty]: {$set: newFieldSection}
                    }
                }
            });


        case 'TOGGLE_FIELD_ACTIVE':
            return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            fields: {
                                [action.typeField]: {
                                    active: {$set: action.active}
                                }
                            }
                        }
                    }
                }
            });
        case 'TOGGLE_FIELD_SECTION_ACTIVE':
            return update(state, {
                [action.indexSection]: {
                    fields: {
                        [action.typeField]: {
                            active: {$set: action.active}
                        }
                    }
                }

            });

        case 'UPDATE_FIELD_CONTENT_AND_SETTINGS':
            return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            fields: {
                                [action.typeField]: {
                                    content: {$set: action.content},
                                    settings: {$set: action.settings}
                                }
                            }
                        }
                    }
                }
            });

        case 'UPDATE_FIELD_SECTION_CONTENT_AND_SETTINGS':
            return update(state, {
                [action.indexSection]: {
                    fields: {
                        [action.typeField]: {
                            content: {$set: action.content},
                            settings: {$set: action.settings}
                        }
                    }
                }
            });

        case 'UPDATE_FIELD_CONTENT':
            return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            fields: {
                                [action.typeField]: {
                                    content: {$set: action.content}
                                }
                            }
                        }
                    }
                }
            });

        case 'UPDATE_FIELD_SECTION_CONTENT':
            return update(state, {
                [action.indexSection]: {
                    fields: {
                        [action.typeField]: {
                            content: {$set: action.content}
                        }
                    }
                }
            });
        case 'UPDATE_FIELD_SETTINGS':
            return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            fields: {
                                [action.typeField]: {
                                    settings: {$set: action.settings}
                                }
                            }
                        }
                    }
                }
            });
        case 'UPDATE_FIELD_SECTION_SETTINGS':
            return update(state, {
                [action.indexSection]: {
                    fields: {
                        [action.typeField]: {
                            settings: {$set: action.settings}
                        }
                    }
                }
            });

        case 'UPDATE_ORDER':
            /*return update(state, {
                [action.indexSection]: {
                    components: {
                        [action.indexComponent]: {
                            order: {$set: action.order}
                        }
                    }
                }
            });*/
            return action.order

        case 'GET_FIELD':
            return action.field;

        case 'GET_FIELD_CONFIG':
            const result = state[action.indexSection].components[action.indexComponent].fields[action.typeField]
            return action.field;


        default:
            return state;
    }
};

export default dom;
