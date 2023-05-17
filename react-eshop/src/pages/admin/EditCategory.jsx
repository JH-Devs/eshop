import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import { Link } from 'react-router-dom'

const EditCategory = () => {
  return (
    <>
<NavbarAdmin/>
    <Sidebar/>
     <section className='add__user'>
     <h5 className='text-warning'>Upravit kategorii</h5>
     <form>
        <div className="mb-3">
            <label  className="form-label">Název</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Logo</label>
            <input type="file" className="form-control" />
        </div>
       <div className="buttons">
       <Link type="button" to="/admin/kategorie" className='btn__return'>zpět</Link>
        <button type="submit" className="btn__add">upravit</button>
       </div>
        </form>
     </section>
  
    <Footer />
</>
  )
}

export default EditCategory