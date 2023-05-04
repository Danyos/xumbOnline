import {useReducer} from "react";
import {initialState, todoReducer} from "../reducers/todos";
import {addTodo, deleteTodo, updatetodo} from "../actions/todos";

export default function TodoList(){
    let st=null
    const [state,dispatch]=useReducer(todoReducer,initialState)
    function SubmitHandlle(e){
        e.preventDefault()
        let name=e.target.elements.title
        dispatch(addTodo(name.value))
        name.value=''
    }
    function deleteHanddle(id){
        dispatch(deleteTodo(id))
        console.log(id)
    }
    function editinfohanddle(e){

        clearTimeout(st)
        st=setTimeout(res=>{

         dispatch(   updatetodo(e.target.dataset.id,e.target.innerText))
            console.log(state.todos)
        },300)

    }
    return(
        <>

            <form onSubmit={SubmitHandlle}>
                <input type="text"  name='title'/>
                <button>Save</button>
            </form>
          <table border={1}>
              <thead>
              <tr>
                  <th>name</th>
                  <th>button</th>
              </tr>
              </thead>
              <tbody>
              {
                  state.todos.map(res=>(
                      <tr key={res.id} >
                          <td contentEditable="" onKeyUp={editinfohanddle} data-id={res.id}>{res.title} </td>
                          <td>
                              <button onClick={()=>deleteHanddle(res.id)}>
                                  delete</button>
                          </td>
                      </tr>
                  ))
              }
              </tbody>
          </table>

        </>
    )
}