import { combineReducers } from 'redux';
import visibility from './visibility';
import dom from './dom';
import build from './build';
import extension from './extension';
import style from './style';
import fontfaces from './fontfaces';

export default combineReducers({
    visibility,
    dom,
    build,
    extension,
    style,
    fontfaces
});
