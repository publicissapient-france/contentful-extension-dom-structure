const dom = (state = [], action) => {
    switch (action.type) {
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
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state




    }
}

export default dom