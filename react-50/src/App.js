import logo from './logo.svg';
import './App.css';
import {useEffect, useReducer} from "react";
import Myreducer from "./Myreducer";
import {info} from "./Infomation";

function App() {
  const [list,dispatch]=useReducer(Myreducer,[])

  useEffect(()=>{
    setTimeout(()=>{
      dispatch({
          type:"Update",
          payload:info
      })

    },1000)

  },[])

function hendleAdd(e){
      e.preventDefault()
   let name=e.target.elements.name.value
   let surname=e.target.elements.surname.value
   let email=e.target.elements.email.value
    if(name.length>2 && surname.length>3 && email.length>5){
        dispatch({
            type:"ADD",
            payload:{
                id:list.length?list[list.length-1].id+1:1,
                name:name,
                surname:surname,
                email:email
            }
        })
        e.target.elements.name.value=""
        e.target.elements.surname.value=""
        e.target.elements.email.value=""
    }
}



  return (
    <div className="App">
        <div>
            {list.length?  <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>surname</td>
                    <td>email</td>
                    <td>configuration</td>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.email}</td>
                            <td><button onClick={()=>{
                                dispatch(
                                    {
                                        type:"DELETE",
                                        payload:item.id
                                    }
                                ) }}>Deleted</button></td>

                        </tr>
                    ))
                }
                </tbody>
            </table>:"Loading..."}

        </div>
        <div>
            <form onSubmit={hendleAdd}>
              <div>
                  <label htmlFor="">name</label>
                  <br/>
                  <input type="text" name="name" placeholder="name"/>
              </div>
                <div>
                  <label htmlFor="">surname</label>
                    <br/>
                  <input type="text" name="surname" placeholder="surname"/>
              </div>
                <div>
                  <label htmlFor="">email</label>
                    <br/>
                  <input type="text" name="email" placeholder="email"/>
              </div>
                <button type="submit">Send</button>

            </form>
        </div>


    </div>
  );
}

export default App;
