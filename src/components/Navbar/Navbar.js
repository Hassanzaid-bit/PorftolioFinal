import './Navbar.css'
import '../../index.css'
import React from 'react'
import { Link, } from 'react-router-dom'

const Navbar = () => {
  
    return ( 
    <nav className="nav-content">
        <h1 className="logo  "> <Link to="/">Z</Link></h1>
        <ul className="nav-links  ">
            <li className="relative" >
                <Link to="/work">
                    Work 
                    <i className="bi bi-arrow-up-short absolute bottom-0 right-7 "></i>
                </Link>
            </li> 
            <li className="relative">
                <Link to="/articles">
                    Articles
                    <i className="bi bi-arrow-up-short absolute bottom-0 right-7 text-4xl "></i>
                </Link>
            </li>
            <li className="relative">
                <Link to="/about">
                    About
                    <i className="bi bi-arrow-up-short absolute bottom-0 right-7 text-4xl"></i>
                </Link>
            </li>
        </ul>
    </nav>
     );
}
 
export default Navbar;