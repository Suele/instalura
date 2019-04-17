import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => (

  <div className="container">
    <nav className="navbar navbar-expand-lg navbar">
      <div className="navbar-nav">
        <Link className="navbar-brand nav-link navbar-link" to="/">Amigos</Link>
        <Link className="navbar-brand nav-link navbar-link" to="/">Amizades Sugeridas</Link>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control nav-input" onChange={props.onChange} value={props.value} type="text" placeholder="procure pessoas ..." />
        </form>
      </div>
    </nav>
  </div>

);

export default Navbar;
