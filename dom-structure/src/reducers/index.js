import { combineReducers } from 'redux';
import visibility from './visibility';
import dom from './dom';
import build from './build';

export default combineReducers({
    visibility,
    dom,
    build
});
