import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => (

  <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand nav-link" to="/">Amigos</Link>
    <Link className="navbar-brand nav-link" to="/">Amizades Sugeridas</Link>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control nav-input" onChange={props.onChange} value={props.value} type="text" placeholder="procure pessoas" />
    </form>
  </nav>

);

export default Navbar;
