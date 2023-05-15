import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
    <>
<NavbarAdmin/>
    <Sidebar/>
     <section className='add__user'>
     <h5 className='text-warning'>Přidat uživatele</h5>
     <form>
        <div className="mb-3">
            <label  className="form-label">Jméno</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Příjmení</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Telefon</label>
            <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Adresa</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Heslo</label>
            <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Obrázek</label>
            <input type="file" className="form-control" />
        </div>
       <div className="buttons">
       <Link type="button" to="/admin/uzivatele" className='btn__return'>zpět</Link>
        <button type="submit" className="btn__add">Přidat</button>
       </div>
        </form>
     </section>
  
    <Footer />
</>
  )
}

export default AddUser