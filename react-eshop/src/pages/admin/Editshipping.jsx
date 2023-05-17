import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import { Link } from 'react-router-dom'
import Helmet from "../../components/admin/Helmet/Helmet"

const EditShipping = () => {
  return (
    <>
<NavbarAdmin/>
    <Sidebar/>
    <Helmet title="Upravit dopravu">
     <section className='add__user'>
     <h5 className='text-warning'>Upravit dopravce</h5>
     <form>
        <div className="mb-3">
            <label  className="form-label">Název</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Dodací doba</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Cena Kč</label>
            <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Logo</label>
            <input type="file" className="form-control" />
        </div>
       <div className="buttons">
       <Link type="button" to="/admin/doprava" className='btn__return'>zpět</Link>
        <button type="submit" className="btn__add">upravit</button>
       </div>
        </form>
     </section>
     </Helmet>
    <Footer />
</>
  )
}

export default EditShipping