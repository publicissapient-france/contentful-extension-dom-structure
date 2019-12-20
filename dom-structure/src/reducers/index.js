import { combineReducers } from 'redux';
import visibility from './visibility';
import dom from './dom';
import extension from './extension';
import style from './style';
import fontfaces from './fontfaces';

export default combineReducers({
    visibility,
    dom,
    extension,
    style,
    fontfaces
});
