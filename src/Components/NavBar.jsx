import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo1.jpg";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} className="logo" alt="" />
      <Link className="navbar-brand mr-auto ml-4" to="/">
        Calendly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="individuals">
              individuals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="teams">
              Teams
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="enterprise">
              Enterprise
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
