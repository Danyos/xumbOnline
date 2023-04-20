import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <div>

            <nav className="menu">

                <a href="#" className="logo">kami</a>

                <label htmlFor="toggle" className="menu-toggle">

                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>

                </label>

                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/blog">blog</Link>
                    </li>

                </ul>

            </nav>
        </div>
    );
}

export default Header;
