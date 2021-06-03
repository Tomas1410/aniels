import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import ulubioneReducer from './ulubioneReducer'
import generatorReducer from './generatorReducer'

export default combineReducers({
    main: recipesReducer,
    error: errorReducer,
    auth: authReducer,
    ulubione: ulubioneReducer,
    generator: generatorReducer
})