import React from 'react'
import { Link,NavLink } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
import { FaUserAlt,FaSignInAlt } from 'react-icons/fa';


const NavbarUser = () => {
  return (
    <Navbar bg="dark" className='navbar'>
    <Link to="/" className="navbar-brand text-light fw-bold ms-3">{import.meta.env.VITE_APP_NAME}</Link>
    <div className='links_menu fw-bold mt-2 '>
    <ul>
        <li>              
            <span><NavLink to='/' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Domů</NavLink></span>             
        </li>
        <li>              
            <span><NavLink to='/eshop' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Eshop</NavLink></span>             
        </li>
        <li>              
            <span><NavLink to='/kontakt' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Kontakt</NavLink></span>             
        </li>
        <li>              
            <span><NavLink to='/blog' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Blog</NavLink></span>             
        </li>
    </ul>
    </div>
    <div className='user_login'>
        <button className='btn_user'>
        <FaUserAlt className='icon text-warning'/> Přihlášení  
        </button>
        <button className='btn_user-reg'>
        <FaSignInAlt className='icon text-light'/> Registrace 
        </button>
    </div>
</Navbar>
  )
}

export default NavbarUser