import {applyMiddleware, combineReducers, createStore} from "redux";
import TodoSliceReducer, {TodoinitialState} from "./todo/TodoSlice";
import PostSliceReducer,{PostInitialState} from "./post/PostsSlice";
import thunk from "redux-thunk";


const store = createStore(combineReducers({
    todo:TodoSliceReducer,
    posts:PostSliceReducer

}), {

    todo: TodoinitialState,
    posts:PostInitialState
},applyMiddleware(thunk))
export default store