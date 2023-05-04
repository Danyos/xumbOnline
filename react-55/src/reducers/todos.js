import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "../actions/todos";

export const initialState={
    todos:[
        {
            id:1,
            title:"lorem ipsum an dollar ",
            completed:false,
        },
        {
            id:2,
            title:"lorem ipsum an dollar ",
            completed:false,
        },
        {
            id:3,
            title:"lorem ipsum an dollar ",
            completed:false,
        },
        {
            id:4,
            title:"lorem ipsum an dollar ",
            completed:false,
        },
    ]
}
export function todoReducer(state,action){
    switch (action.type){
        case ADD_TODO:
            console.log(action)
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id:parseInt(Math.random()*99999999),
                        title:  action.todo,
                        completed:false,
                    }
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(res=>res.id!==action.id)
            }

        case UPDATE_TODO:
            console.log(action)
            return {
                ...state,
                todos:state.todos.map(res=> {
                    if (res.id === +action.info.id) {
                        res.title = action.info.value

                    }
                    return res
                })
            }

        default:
            return state

    }
}