import React, {useState} from "react";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
const Add = ({dispatch}) => {
    const [value, setValue]  = useState(null);
    const onSave = () => {
        if(value){
            let item = {
                id      : Math.random().toString(),
                value   : value,
                checked : false
            }
            dispatch(actions.addItem(item));
            setValue('');
        }
    }
    return(
        <React.Fragment>
            <input type="text" value={value} onChange={ e => {setValue(e.target.value)}} />
            <button onClick={onSave}>Save</button>
        </React.Fragment>
    )
}
export default connect()(Add);