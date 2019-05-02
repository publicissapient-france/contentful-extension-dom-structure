import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dom from './dom'

export default combineReducers({
    todos,
    visibilityFilter,
    dom
})