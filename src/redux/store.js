import {createStore, combineReducers} from 'redux'
import todoReducer from './todoReducer';

const rootReducers = combineReducers({
   todoState: todoReducer
})

const store = createStore(rootReducers);

export default store;