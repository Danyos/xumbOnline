import './App.css';
import {useEffect, useState} from "react";
import {question} from "./question";
import DeleteIcon from '@mui/icons-material/Delete';
import SpringModal from "./InsertItem";
function App() {
  const [quest,setquest]=useState(null)
  const [selectId,setselectId]=useState([])


  useEffect(()=>{

    setTimeout(function (){
      if(localStorage['question']){
        setquest(JSON.parse(localStorage['question']))
      }else{
        setquest(question)
      }

    },1000)

  },[])
  function removeElemnt(id){
  setquest(quest.filter(res=>res.id!==id))

  }
  useEffect(()=>{
    if(quest){
      localStorage['question']=JSON.stringify(quest)
    }
  },[quest])
  function selectChange(id){
   if(selectId.includes(id)){
     setselectId(selectId.filter(res=>res!==id))
   }else{
     setselectId([...selectId,id])
   }

  }

function removeAll(){
setquest(quest.filter(res=>!selectId.includes(res.id)))
}

  return (
    <div className="App">
      {
        quest?
            <div>
              <SpringModal callback={(res)=>{
                setquest([
                    ...quest,
                  {
                    id:quest.length?quest[quest.length-1].id+1:1,
                    ...res
                  }
                ])
              }} />
              <table className='myTable'>
                <thead>
                    <tr>
                      <td>{selectId.length} {selectId.length?<button onClick={removeAll}><DeleteIcon /></button>:''}</td>
                      <td>id</td>
                      <td>name</td>
                      <td>current</td>
                      <td>configuration</td>
                    </tr>
                </thead>
                <tbody>
                {
                  quest.map(res=>(
                  <tr key={res.id}>
                        <td><input type="checkbox" onChange={()=>selectChange(res.id)}/></td>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.current}</td>
                        <td><button onClick={()=>removeElemnt(res.id)}><DeleteIcon /></button></td>
                  </tr>
                  ))
                }
                </tbody>
              </table>

        </div>
            :<p>Loading...</p>
      }




    </div>
  );
}

export default App;
