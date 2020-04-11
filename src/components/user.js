import React from "react";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import Login from './login';
import Create from './create';
const User = (props) => {
    const{user, onUserLogout} = props;
    return(
        <React.Fragment>
            {(user.logged) ? (
                <div className="alert alert-success alert-dismissible show">
                    Xin chào {user.name}
                    <input type="submit" onClick={() => onUserLogout()} value="Đăng xuất" className="btn btn-primary" />
                </div>
            ) : (
                <React.Fragment>
                     {
                            user.message && 
                                <div className="alert alert-danger alert-dismissible show">
                                {user.message}
                            </div>  
                            
                    }
                    <div className="container">
                        {
                            (!user.creating) ? (
                                <Login />
                            ) : (
                                <Create />
                            )
                        }  
                    </div>
                </React.Fragment>
            ) }
        </React.Fragment>
    )
}
const mapStatetoProps = state => {
    return {user: state.user}
}
const mapDispatchtoProps = dispatch => ({
    onUserLogout:  () => dispatch(actions.UserLogout())
})
export default connect(mapStatetoProps, mapDispatchtoProps)(User);