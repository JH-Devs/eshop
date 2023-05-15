import React from 'react'
import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa';
import {BsFillBellFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr'

const NavbarAdmin = () => {
  return (
    <>
    <Navbar bg="light" className='navbar'>
        <Link to="/" className="navbar-brand text-warning fw-bold ms-3">{import.meta.env.VITE_APP_NAME}</Link>
        <div className='notice'>
          <BsFillBellFill className='notice__icon'/>
          <span className="badge__notice">2</span>
          <GrMail className='mail__icon'/>
          <span className="badge__mail">4</span>
        </div>
        <div className='admin_name'>
          <FaUserAlt className='icon'/>
          <span>Přihlášen jako: </span> 
          <span className='ms-2 text-warning fw-bold'> Admin</span>
        </div>
    </Navbar>
   
</>
  )
}

export default NavbarAdmin
