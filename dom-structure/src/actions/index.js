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

export const initDOM = object => ({
  type: 'INIT_DOM',
  dom: object

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


export const addComponent = (object, number) => ({
    type: 'ADD_COMPONENT',
    component: object,
    index : number

});

export const updateComponent = (object, number, numberParent) => ({
    type: 'UPDATE_COMPONENT',
    component: object,
    index : number,
    indexParent : numberParent

});


export const removeComponent = (number, numberParent) => ({
    type: 'REMOVE_COMPONENT',
    index : number,
    indexParent : numberParent

});


export const toogleFormAddSection = () => ({
  type: 'TOGGLE_FORM_ADD_SECTION',
});
export const openFormAddSection = () => ({
  type: 'GET_VISIBILITY_FORM_ADD_SECTION',
});
