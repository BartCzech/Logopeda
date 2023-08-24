import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Logo</h1>
                <ul className="nav-menu">
                    <li>
                        <a><i className="fa-solid fa-house"></i>Home</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;