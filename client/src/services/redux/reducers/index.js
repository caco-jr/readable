import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { posts } from './posts'
import { selected } from './selected'
import { categories } from './category'
import { modal } from './modal'
import { toggleEditing } from './toggleEditing'

export default combineReducers({
    categories,
    posts,
    selected,
    toggleEditing,
    modal,
    form: formReducer
});