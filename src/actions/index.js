import * as types from './../constants/ActionTypes'
import axios from 'axios';
const urlAPI = 'http://127.0.0.1:1500';
export const addItem  = (item) => {
    return dispatch => {
        return axios.post(`http://localhost:1500/lists`, item, {
            withCredentials: true
        })
        .then( res => {
            dispatch({
                type : types.ADD_ITEM,
                item : {...res.data, id: res.data._id}
            })
        }).catch(err => {
            alert('Nhập dữ liệu thất bại');
        })
    }
}
export const delItem  = (item) => {
    return dispatch => {
        return axios
        .delete(`http://localhost:1500/lists/${item._id}`, {
            withCredentials: true
        })
        .then(response => {
            dispatch({
                 type: types.DEL_ITEM,
                 id:   response.data._id
            })
        })
    }
}
export const updItem  = (item) => {
    return dispatch => {
        return axios
        .put(`http://localhost:1500/lists/${item._id}`, item, {
            withCredentials: true
        })
        .then( res => {
            dispatch({
                type: types.UPD_ITEM,
                item: {...res.data, id: res.data._id}
            })
        })
        .catch(err => {
            alert('Cập nhật dữ liệu thất bại');
        })
    }
}
export const fetchItems = () => {
    return dispatch => {
        return axios
        .get(`http://localhost:1500/lists`,{
            withCredentials: true
        })
        .then(response => {
             dispatch({
                 type: types.GET_ITEMS,
                 items: response.data 
             })
        })
    }
    
}
export const createUser = data => {
    return dispatch => {
        return axios
        .post(`http://localhost:1500/users`, {...data})
        .then(response => {
            const data = response.data;
            if(!data.status){
                dispatch({
                    type: 'CREATE_FALSE',
                    data: {
                        ...response.data,
                    }     
                })
            }else{
                dispatch({
                    type: types.USER_CREATE,
                    data: {
                        ...response.data,
                        status : false,
                        message: 'Đăng kí thành công!'
                    }
                })
            }
        })
    }
}
export const UserLogin  = data => {
    return dispatch => {
        return axios.post('http://localhost:1500/users/login', {
            ...data
        }, {
            withCredentials: true
        })
        .then(response => {
            const data = response.data;
            if(data.logged === false){
                dispatch({
                    type: types.USER_LOGIN_FALSE,
                    data: response.data 
                })
            }else{
                dispatch({
                    type: types.USER_LOGIN,
                    data: response.data 
                })
            }
        })
        .catch(err => {
            dispatch({
                type: types.USER_LOGIN_FALSE,
                data: {
                    message: 'Kết nối không thành công. Lỗi đăng nhập'
                }
            })
        })
    } 
}
export const checkLogged = () => {
    return dispatch => {
        return axios
        .get('http://localhost:1500/users/auth_logged',{
            withCredentials: true
        })
        .then( res => {       
            dispatch({
                type: types.CHECK_LOGGED,
                data: res.data
            })
        })
    }
}
export const UserLogout = () => {
    return dispatch => {
        return axios
        .get('http://localhost:1500/users/auth_loggout', {
            withCredentials: true,
        })
        .then(res => {
            dispatch({
                type: types.USER_LOGOUT
            })
        })
    }
}