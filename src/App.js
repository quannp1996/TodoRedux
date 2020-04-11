import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/index';
import Content from './components/content';
import User from './components/user';

function App(props) {
  const {user,checkedLogged} = props;
  useEffect(() => {
  
    checkedLogged()
  }, [])
  return (
    <React.Fragment>
        <User />
        {user.logged && (
          <Content />
        )
        }
    </React.Fragment>
  );
}
const mapStatetoProps = state => {
   return {
      user : state.user
   }
}
const mapDispatchtoPropsap = dispatch => ({
  checkedLogged: () => dispatch(actions.checkLogged())
});
export default connect(mapStatetoProps, mapDispatchtoPropsap)(App);
