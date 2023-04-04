import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("mount")
      setTimeout(() => {
            setCount2( count + 1);
        }, 2000);


        return () => {
            console.log("un mount")

        }


    }, [count]);


    return(
        <>
            <div className='one'></div>
            <h1 onClick={()=>setCount(count+1)}>I've rendered {count} times!</h1>;

            <h6 >I've rendered {count2} times!</h6>
        </>
    );
}

export default App;
