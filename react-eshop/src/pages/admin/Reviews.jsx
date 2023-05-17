import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Helmet from "../../components/admin/Helmet/Helmet"

const Reviews = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title="recenze">
     <section>
    Recenze
     </section>
     </Helmet>
    <Footer />
    </>
  )
}

export default Reviews