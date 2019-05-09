import update from 'react-addons-update';
import {components} from "../config/defaultConfig";
import index from "./index";

const dom = (state = [], action) => {
    switch (action.type) {
        case 'INIT_DOM' :
            return [...action.dom];
        case 'ADD_SECTION':
            return [
                ...state,
                {
                    type: action.section.type,
                    name: action.section.name,
                    model: action.section.model,
                    specs: action.section.specs,
                    components: action.section.components
                }
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

        case 'ADD_COMPONENT':
            return update(state, {
                [action.index]: {
                    components: {
                        $push: [
                            {
                                type: action.component.type,
                                name: action.component.name,
                                model: action.component.model
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
                            name: {$set: action.component.name},
                            model: {$set: action.component.model}
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
            })

        default:
            return state;
    }
};

export default dom;
