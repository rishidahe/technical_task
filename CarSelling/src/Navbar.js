import React from "react";
//import { useHistory } from 'react-router-dom';

// function RedirectToLogin() {
//   const history = useHistory();
//   history.push('/Authentication');
// }
function Navbar() {
  return (
    <nav className="navbar fixed-top bg-light">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-dark font-weight-bold">
          Vehicle_Configurator
        </a>
        <a href="SignIn">
        <button className="btn font-weight-normal btn-outline-info ml-auto mx-2" >
          Log-in
        </button></a>
        <a href="Registration">
        <button className="btn font-weight-normal btn-outline-info mx-2" >
          Register
        </button></a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-solid fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              Projects
            </a>
          </div>
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              Blogs
            </a>
          </div>
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              About Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
