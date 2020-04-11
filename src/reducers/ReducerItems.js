
import * as actionTypes from './../constants/ActionTypes'
let initialLists = [
    {
        _id: 1,
        
        value: 'Task1',
        checked: false
    },
    {
        _id: 2,
        
        value: 'Task2',
        checked: false
    },
    {
        _id: 3,
        
        value: 'Task3',
        checked: false
    }
];
const Items = (state = initialLists, action) => {
    let newState = [...state]
    switch(action.type){
        case actionTypes.ADD_ITEM:
            newState.push(action.item);
            break;
        case actionTypes.DEL_ITEM:
            let indexDel = newState.findIndex( item => item.id === action.id);
            newState.splice(indexDel,1);
            break;
        case actionTypes.UPD_ITEM:
            let indexUpD = newState.findIndex( item => item.id === action.item.id);
            newState[indexUpD] = action.item; 
            break; 
        case actionTypes.GET_ITEMS:
                newState =  [...action.items];
                newState.forEach( item => {
                    item.id = item._id; 
                })
                break;
        default:
            break;
    }
    return newState;
}
export default Items