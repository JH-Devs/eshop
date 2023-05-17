import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Helmet from "../../components/admin/Helmet/Helmet"

const Settings = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title="Nastavení">
     <section>
     Nastavení
     </section>
     </Helmet>
    <Footer />
    </>
  )
}

export default Settings