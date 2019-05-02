const dom = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SECTION':
            console.log('state on dom.js', state);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
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