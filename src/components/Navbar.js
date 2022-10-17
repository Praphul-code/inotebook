import React , {useEffect}from 'react'
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        // Google Analytics
       console.log(location.pathname)
      }, [location]);
    

  
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link className="navbar-brand" to="/">iNotebook</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
            <Link className={`nav-link ${location.pathname==="/"? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"? "active" : ""}`} to="/about">About</Link>
            </li>
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

export default Navbar