import {createStore} from "redux";

const store=createStore((state,action)=>{
    if(action.type === "edit"){
        return {
            ...state,
            MainPost:{
                // title:"This is My Laptop",
                title:action.payload.title,
                description:action.payload.description
            }

        }
    }

    return state
},{
    MainPost:{
        title:"This is a Laptop",
        description:"This is a Laptop, lorem inv and dolla`"
    },
    user:{
        name:"Valod",
        login:"v123",
        psw:"v123"
    }
})
export default store