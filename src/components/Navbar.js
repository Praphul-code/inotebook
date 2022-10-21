import React from 'react'
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    let location = useLocation();
   
    

  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
            <Link className={`nav-link ${location.pathname==="/"? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"? "active" : ""}`} to="/about">About</Link>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0  ">
          <ul className="navbar-nav mr-auto">
       
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/login"? "active" : ""}`} to="/login">Login</Link>
            </li>

            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/signup"? "active" : ""}`} to="/signup">Sign Up</Link>
            </li>
         </ul>
 </form>

        </div>
      </nav>
    )
}

export default Navbar