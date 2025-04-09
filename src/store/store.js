import {createStore, combineReducers, applyMiddleware} from 'redux'
//import newsReducer from '../reducers/example/news-reducer'
import {thunk} from 'redux-thunk'
import authReducer from '../reducers/auth-reducer';
import profileReducer from '../reducers/profile-reducer';
let reducers = combineReducers({
    //newsPage : newsReducer
    authPage: authReducer,
    profileReducer: profileReducer
})

let store = createStore(reducers, applyMiddleware(thunk));
export default store;