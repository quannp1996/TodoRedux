import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import Item from './item';
import * as actions from './../actions/index'
const Lists = (props) => {
    const {items, onGetItems} = props
    useEffect(() => {
        onGetItems();
    }, [])
    return (
        <React.Fragment>
            <div className="col-sm-4 card">
                <h5 className="text-center">
                    Chưa Hoàn Thành
                </h5>
                    <ul className="list-group">
                        {items
                        .filter(item => item.checked === false)
                        .map( item => {
                            return item.id && (<li className="list-group-item"  key={item.id}>
                                <Item 
                                    item={item}
                                />
                            </li>)
                        })}
                    </ul>
            </div>
            <div className="col-sm-4 card">
                <h5 className="text-center">Hoàn Thành</h5>
                <ul className="list-group">
                    {items
                    .filter(item => item.checked === true)
                    .map( item => {
                        return item.id && (<li className="list-group-item" key={item.id}>
                            <Item 
                                item={item}
                            />
                        </li>)
                    })}
                </ul>
            </div>
        </React.Fragment>
        
        
    )
}
const mapStatetoProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = dispatch => ({
    onGetItems: () => dispatch(actions.fetchItems()),
});
export default React.memo(connect(mapStatetoProps, mapDispatchToProps)(Lists));