import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Logo</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>{item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
