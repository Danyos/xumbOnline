import './App.css'
import {useState} from "react";
function App() {
    let [count, setcount]=useState(0)
    let [InfoValue,setInfoValue]=useState("")
    let [msg,setmsg]=useState("")
    const infos=[
        {
            id:1,
            name:"Valod",
            payment_way:"visa",
            price:"1500$"
        },
        {
            id:2,
            name:"Vazgen",
            payment_way:"paypal",
            price:"1400$"
        },
        {
            id:3,
            name:"grish",
            payment_way:"bitcoin",
            price:"1700$"
        },
        {
            id:4,
            name:"Karo",
            payment_way:"visa",
            price:"100$"
        },
        {
            id:5,
            name:"Serob",
            payment_way:"bitcoin",
            price:"500$"
        },
    ]
    const [inpValue,settingValue]=useState({
        name:'',
        age:''
    })
    function decriment(){
        setcount(--count)
        setcount(count--)

        let inf=infos.find(res=>res.id === count)

        setInfoValue(inf?inf.name:'')

       let arr=[31,21,11,41,51,61]
        console.log(arr[Math.floor(Math.random()*arr.length)])
    }
    function incriment(){
        setcount(++count)
        let inf=infos.find(res=>res.id === count)
        setInfoValue(inf?inf.name:'')
    }
    function infomation(e){
    e.preventDefault()

if(e.target.elements.fullName.value.length>3 &&  e.target.elements.age.value.length>1){
    setmsg("")
    settingValue({
        name: e.target.elements.fullName.value,
        age: e.target.elements.age.value
    })

    e.target.elements.fullName.value=''
    e.target.elements.age.value=''
}else{
    setmsg("gortcoxutyan sxal")
}
}
  return (
    <div className="App">
        <button onClick={decriment}>-</button>
        <span>{count}</span>
        <button onClick={incriment}>+</button>

        {InfoValue&&<h1>{InfoValue}</h1>}

        {inpValue.name&&<h1>{inpValue.name}</h1>}
        {inpValue.age&&<h1>{inpValue.age}</h1>}

        {/*<input type="text" onChange={(e)=>{*/}
        {/*    settingValue({*/}
        {/*        name:e.target.value,*/}
        {/*        age:inpValue.age*/}
        {/*    })*/}
        {/*}*/}
        {/*}/>*/}
        {/*<input type="number" onChange={(e)=>{*/}
        {/*    settingValue({*/}
        {/*        name:inpValue.name,*/}
        {/*        age:e.target.value*/}
        {/*    })*/}
        {/*}*/}
        {/*}/>*/}


        {msg&&<strong>{msg}</strong>}
         <form onSubmit={infomation}>

            <input type="text" name='fullName'  placeholder="Lracreq dher anun@"/>
             <input type="number" name='age' placeholder="Lracreq dher tariqy"/>

            <button type="submit">Send</button>
         </form>


    </div>
  );
}

export default App;
