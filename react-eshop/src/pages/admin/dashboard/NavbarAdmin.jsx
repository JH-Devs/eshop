import React from 'react'
import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'

const NavbarAdmin = () => {
  return (
    <>
    <Navbar bg="light">
        <Link to="/" className="navbar-brand text-warning fw-bold ms-3">{import.meta.env.VITE_APP_NAME}</Link>
    </Navbar>

</>
  )
}

export default NavbarAdmin
