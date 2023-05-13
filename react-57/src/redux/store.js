import {applyMiddleware, createStore} from "redux";

// function logger(state){
//     return function(next){
//         return function(action){
//             console.log('Dher dimumy')
//             return next(action)
//         }
//     }
// }
const logger=(state)=>(next)=>(action)=>{
    console.log("hi how are you")

    if (action.todo.title.length>2 && action.todo.body.length>5) {
        return next(action)
    }
    console.log("Sax")
}

const store=createStore((state,action)=>{
    if(action.type === "ADD_TODO"){
        console.log(action)
        console.log(state)

        return {
        ...state,
            todo:[
                ...state.todo,
                {
                    id:parseInt(Math.random()*99999),
                    title:  action.todo.title,
                    body:  action.todo.body,
                }

            ]

        }
    }else if(action.type === "EDIT_TODO"){
        return {
            ...state,
            MainPost:{
                // title:"This is My Laptop",
                title:action.payload.title,
                body:action.payload.body
            }

        }
    }

    return state
},{
    todo:[{
        id:1,
        title:"This is a Laptop",
        body:"This is a Laptop, lorem inv and dolla`"
    }]

},applyMiddleware(logger))
export default store