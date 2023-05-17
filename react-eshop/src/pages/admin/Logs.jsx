import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Helmet from "../../components/admin/Helmet/Helmet"

const Logs = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title="Přihlašování">
     <section>
     Přihlašování
     </section>
     </Helmet>
    <Footer />
    </>
  )
}

export default Logs