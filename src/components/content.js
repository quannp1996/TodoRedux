import React, {useState} from "react";
import List from './lists';
import Add from './add';
const Content = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <Add />
                </div>
                <List />
            </div>
        </div>
        
    )
}
export default React.memo(Content);