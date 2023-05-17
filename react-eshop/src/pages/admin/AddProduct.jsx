import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <>
<NavbarAdmin/>
    <Sidebar/>
     <section className='add__user'>
     <h5 className='text-warning'>Přidat produkt</h5>
     <form>
        <div className="mb-3">
            <label  className="form-label">Název</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Přátelská url</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Skladem</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Kategorie</label>
            <select class="form-control">
              <option>-- vybrat kategorii --</option>
              <option>Oblečení</option>
              <option>Doplňky</option>
              <option>Elektronika</option>
            </select>
        </div>
        <div className="mb-3">
            <label  className="form-label">Značka</label>
            <select class="form-control">
              <option>-- vybrat značku --</option>
              <option>Značka 1</option>
              <option>Značka 2</option>
              <option>Značka 3</option>
            </select>
        </div>
        <div className="mb-3">
            <label  className="form-label">Cena</label>
            <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Cena po slevě</label>
            <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Stav</label>
            <select class="form-control">
              <option>-- vybrat stav --</option>
              <option>aktivní</option>
              <option>neaktivní</option>
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label">Obrázek</label>
            <input type="file" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Obrázek 2</label>
            <input type="file" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Obrázek 3</label>
            <input type="file" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Obrázek 4</label>
            <input type="file" className="form-control" />
        </div>
       <div className="buttons">
       <Link type="button" to="/admin/produkty" className='btn__return'>zpět</Link>
        <button type="submit" className="btn__add">Přidat</button>
       </div>
        </form>
     </section>
  
    <Footer />
</>
  )
}

export default AddProduct