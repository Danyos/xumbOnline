import './style.css'
import maincss from './main.module.css'
import SelectFiled from "../../Main/component/Filed/SelectFiled";
function Header({title}) {


    return (
        <header className="App-header">
            <nav className={maincss.nav}>{title}</nav>
            <SelectFiled />
        </header>

    )
}

export default Header;
