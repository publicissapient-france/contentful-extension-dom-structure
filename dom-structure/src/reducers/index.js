import { combineReducers } from 'redux';
import todos from './todos';
import VisibilityFilter from './visibilityFilter';
import visibility from './visibility';
import dom from './dom';

export default combineReducers({
    todos,
    VisibilityFilter,
    visibility,
    dom
});
