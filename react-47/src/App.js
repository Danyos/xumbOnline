import './App.css';
import MyCounter from "./MyCounter";
import {useState} from "react";


function App() {

  // const infoblock={
  //   title:"Lorem ipsum dolor sit amet",
  //   desc:`
  //   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum eius exercitationem facilis id modi nesciunt, nisi omnis perferendis rem sit tenetur! Animi dolor fuga id minus quas quis tempora!
  //   `,
  //   avatar:Logo
  //
  // }

    const [mSatate,setmState]=useState(1)

  return (
    <div className="App">
        <h2>{mSatate}</h2>
      <MyCounter incriment={(res=1,v="+")=>setmState(eval(mSatate+v+res))}/>



        {/*<InfoContext.Provider value={infoblock}>*/}
        {/*    <Information  />*/}
        {/*</InfoContext.Provider>*/}


    </div>
  );
}

export default App;
