import {combineReducers} from 'redux';
import items from './ReducerItems';
import user from './ReducerUser';
const myReducer = combineReducers({
    items,
    user
})
export default myReducer