import { combineReducers } from 'redux';
import todos from './todos';
import VisibilityFilter from './visibilityFilter';
import visibility from './visibility';
import dom from './dom';
import domBuild from './domBuild';

export default combineReducers({
    todos,
    VisibilityFilter,
    visibility,
    dom,
    domBuild
});
