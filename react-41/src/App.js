import Header from "./Layout/header/Header";
import './App.css'
import Footer from "./Layout/footer/Footer";
import SelectFiled from "./Main/component/Filed/SelectFiled";
import BoxFirst from "./Main/component/Box/BoxFirst";
import {MyBaseInfo, Myinfo, MyMenu} from "./MYserver";

function App() {


    return (
        <>
            <Header data={Myinfo}/>
            <br/>
            <div className="App-header">
                <div className="nav">

                </div>
            </div>
            <div className="Mybanner">
                {
                    MyBaseInfo.map(res=>(

                       <BoxFirst key={res.id}  {...res}
                       />

                    ))


                }

            </div>
            <SelectFiled />
            <Header data={MyMenu}/>
            <Footer />
        </>
    )
}

export default App;
