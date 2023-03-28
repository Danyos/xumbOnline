import './style.css'
import maincss from './main.module.css'
import SelectFiled from "../../Main/component/Filed/SelectFiled";
function Header({data}) {


    return (
        <header className="App-header">
            <nav className={maincss.nav}>
                <ul>
                    {
                        data.map((res,index)=>(
                            <li key={index}>{res}</li>
                        ))
                    }
                </ul>
            </nav>
            <SelectFiled />
        </header>

    )
}

export default Header;
