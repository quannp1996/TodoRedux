import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import * as actionTypes from './../constants/ActionTypes';
const Login = (props) => {
    const {state, OnUserLogin, onUserCreat}  = props;
    const [username, setUsername]       = useState('');
    const [password, setPassword]       = useState('');
    const [errorLogin, setErrorLogin]   = useState('');
    const userLogin = e => {
        e.preventDefault();
        if(validateInput()){
            OnUserLogin({
                username,
                password
            })
        }
    }
    const validateInput = () => {
        if(!username || !password){
            setErrorLogin('Vui lòng điền đầy đủ thông tin');
            return false;
        }else{
            setErrorLogin(null);
            return true;
        }  
    }
    return(
                    <React.Fragment>
                        {
                            errorLogin &&
                                <div className="alert alert-danger alert-dismissible show">
                                    {errorLogin}
                                </div>  
                            
                        }
                        <form onSubmit={ e => userLogin(e)}>
                             <div className="form-group">
                                 <label htmlFor="exampleInputEmail1">Tên đăng nhập</label>
                                 <input type="text" value={username} name="username" onChange={ e => setUsername(e.target.value) } className="form-control" placeholder="Tên đăng nhập..." />
                             </div>
                             <div className="form-group">
                                 <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                 <input type="password" value={password} name="password" className="form-control" onChange={ e => setPassword(e.target.value) } placeholder="Password" />
                             </div>
                             <a class="dropdown-item" onClick={onUserCreat} href="#">Bạn chưa có tài khoản? Đăng kí tại đây</a>
                             <input type="submit" value="Đăng nhập" className="btn btn-primary" />
                        </form>
                    </React.Fragment>
    )
}
const mapStatetoProps = state => {
    return {
        state: state.user
    }
}
const mapDispatchToProps = dispatch => ({
    OnUserLogin: data => {
        dispatch(actions.UserLogin(data));
    },
    onUserCreat :  () => dispatch({
        type    : 'IS_CREATING',
        status  : true
    })
});
export default connect(mapStatetoProps, mapDispatchToProps)(Login);