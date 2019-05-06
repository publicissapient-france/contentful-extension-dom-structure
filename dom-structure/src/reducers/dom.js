const dom = (state = [], action) => {
    switch (action.type) {
        case 'INIT_DOM' :
            return [...action.dom]
        case 'ADD_SECTION':
            console.log('state on dom.js', state);
            console.log('action :', action);
            return [
                ...state,
                {
                    type: action.section.type,
                    name: action.section.name,
                    model: action.section.model,
                    specs: action.section.specs,
                    components : action.section.components
                }
            ]
        case 'REMOVE_SECTION':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state




    }
}

export default dom