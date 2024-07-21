import {createStore,combineReducers} from 'redux';
import FormReducer from './reducer'

const rootReducer=combineReducers({
    FormReducer
})

const store=createStore(rootReducer);

export default store;