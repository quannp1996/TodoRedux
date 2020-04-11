import React, {useState} from "react";
import * as actions from './../actions/index'
import {connect} from 'react-redux';
const Item = (props) => {
    const{item, onDelItem, onUpdItem} = props;
    const[Itemvalue, setItemValue]       = useState(item.value);
    const[Editable, setEditable] = useState(false);
    const[check, setCheck]       = useState(item.checked);
    const onSave = () => {
        let newItem = {
            ...item,
            checked : check,
            value: Itemvalue
        }
        onUpdItem(newItem);
        setEditable(false);
    }
    const onCancel = () => {
        setItemValue(item.value);
        setEditable(false);
        setCheck(item.checked);
    }
    return(
        <React.Fragment>
            <input type="text" disabled={!Editable} value={Itemvalue} onChange={ e => setItemValue(e.target.value)}/>
            <input type="checkbox" disabled={!Editable} checked={check} onClick={ e => setCheck(e.target.checked)} />
            {Editable ? (
                <>
                <button onClick={onSave}>Lưu</button> 
                <button onClick={onCancel}>Hủy</button>
                </>
            ) : (
                <>
                <button onClick={() => setEditable(true)}>Sửa</button> 
                <button onClick={() => onDelItem(item)}>Xóa</button>
                </>
            )}
        </React.Fragment>
    )
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        onDelItem : (item) => {
            dispatch(actions.delItem(item));
        },
        onUpdItem : (item) => {
            dispatch(actions.updItem(item));
        }
    }
}
export default connect(null, mapDispatchtoProps)(Item);