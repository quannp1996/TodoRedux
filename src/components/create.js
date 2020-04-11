import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import * as actionTypes from './../constants/ActionTypes';
const Create = (props) => {
    const {OnUserCreate , OnBackLogin}  = props;
    const [username, setUsername]       = useState('');
    const [password, setPassword]       = useState('');
    const [email, setEmail]             = useState('');
    const [errorCreate, setErrorCreate] = useState('');
    const userCreate = e => {
        e.preventDefault();
        if(!username || !password || !email){
            setErrorCreate('Vui lòng điền đầy đủ thông tin');
            return;
        }
        OnUserCreate({
            username,
            email,
            password
        })
    }
    return(
        <React.Fragment>
                    
                         {(errorCreate) ? (
                            <div className="alert alert-warning alert-dismissible show">
                                {errorCreate}
                            </div>
                        ):(<></>)}
                         <form onSubmit={userCreate}>
                                 <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Tên đăng nhập</label>
                                    <input type="text" name="username" className="form-control" onChange={ e => setUsername(e.target.value) } placeholder="Tên tài khoản..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Email</label>
                                    <input type="text" name="email" inputMode="email" className="form-control" onChange={ e => setEmail(e.target.value) } placeholder="Email..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                    <input type="password" name="password" className="form-control" onChange={ e => setPassword(e.target.value) } placeholder="Mật khẩu..." />
                                </div>
                                <a class="dropdown-item" onClick={OnBackLogin} href="#">Quay lại trang đăng nhập</a>
                                <input type="submit" value="Đăng kí" className="btn btn-primary" />
                        </form>
                
        </React.Fragment>
    )
}
const mapDispatchToProps = dispatch => ({
    OnUserCreate: data => { 
       dispatch(actions.createUser(data))
    },
    OnBackLogin : () => dispatch({
        type: 'USER_CREATE',
        message: ''
    })
});
export default connect(null, mapDispatchToProps)(Create);