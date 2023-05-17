import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Helmet from "../../components/admin/Helmet/Helmet"

const Statictics = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title="Statistiky">
     <section>
     Statistiky
     </section>
     </Helmet>
    <Footer />
    </>
  )
}

export default Statictics