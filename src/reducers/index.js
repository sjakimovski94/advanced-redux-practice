import {combineReducers} from 'redux';

function newComments(state = 0,action){
 return state;
}

function newTasks(state = 0,action){
    return state;
}

function newOrders(state = 0,action){
    return state;
}

function newTickets(state = 0,action){
    return state;
}

function orders(state = 0,action){
    return state;
}

function tasks(state = 0,action){
    return state;
}

const rootReducer = combineReducers({
 newComments, newTasks, newOrders, newTickets, orders, tasks
});
export default rootReducer;
