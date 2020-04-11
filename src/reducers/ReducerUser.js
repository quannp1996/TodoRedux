
import * as actionTypes from './../constants/ActionTypes'
const initialState = {
    isLogging : false,
    logged    : false,
    name      : '',
    message   :'',
    creating  : false
};
const User = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.USER_CREATE:
            return{
                ...state,
                creating: false,
                message : (action.data != undefined) ? action.data.message : ''
            }
        case 'CREATE_FALSE':
            return{
                ...state,
                creating: true,
                message: action.data.message
            }
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                logged: true,
                message : '',
                name  : action.data.username
            }
        case actionTypes.USER_LOGGING:
            return {
                ...state,
                isLogging: true,
            }
        case actionTypes.USER_LOGIN_FALSE:
            return {
                ...state,
                logged: false,
                message: action.data.message
            } 
        case actionTypes.CHECK_LOGGED:
            return {
                ...state,
                logged: action.data.logged,
                name: action.data.name
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                logged: false
            }
        case 'IS_CREATING':
            return{
                ...state,
                creating: action.status
            }
        default:
            return {
                ...state
            }
    }
}
export default User
