import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Helmet from "../../components/admin/Helmet/Helmet"

const Profile = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title="Profil">
     <section>
     Profil
     </section>
     </Helmet>
    <Footer />
    </>
  )
}

export default Profile