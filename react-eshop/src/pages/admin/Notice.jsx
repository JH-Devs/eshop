import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Helmet from "../../components/admin/Helmet/Helmet"

const Notice = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
      <Helmet title="Upozornění">
     <section>
     Upozornění
     </section>
     </Helmet>
    <Footer />
    </>
  )
}

export default Notice