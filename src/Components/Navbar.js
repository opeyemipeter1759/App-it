import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from "./Button";
import './Navbar.css' 

function Navbar() {
const [click, setClick] = useState(false)
const handleClick =() => setClick(!click)
const closeMobileMenu =() => setClick(false)


  return (
    <>
      <nav className="navBar">
        <Link to='/' className="navbarLogo">
          <i className="mt-2 fas fa-2x fa-tachometer-alt">
          </i>
           <span className="logoText"> <br/> App it</span> 
          
        </Link>
        <div className="bar" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars' } ></i>
        </div>
        <ul className= {click ? "navItems active" : "navItems"}>
          <li className="navItem">
            <Link 
              to='/' 
              className="navLinks" 
              onClick={closeMobileMenu}>
                Home
            </Link>
          </li>
          <li className="navItem">
            <Link 
              to='/log-in' 
              className="navLinks" 
              onClick={closeMobileMenu}>
              Log In
            </Link>
          </li>
          <li className="navItem">
            <Link 
              to='/sign-up' 
              className="navLinksMobile" 
              onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
          <Button/>
      </nav>
    </>
  )
}

export default Navbar
