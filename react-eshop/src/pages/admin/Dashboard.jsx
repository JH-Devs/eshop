import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/Footer'

const Dashboard = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
     <section className='dashboard '>
     <h5>Nástěnka</h5>
     </section>
  
    <Footer />
    </>
  )
}

export default Dashboard
