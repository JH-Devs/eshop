import React from 'react'
import Footer from '../../components/admin/Footer'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import {AiFillEye} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Helmet from "../../components/admin/Helmet/Helmet"

const Products = () => {
  return (
    <>
     <NavbarAdmin/>
      <Sidebar/>
      <Helmet title="Produkty">
    <section className='products'>
      <div className="header__products">
        <h5 className='text-warning'>Produkty</h5>
        <Link className='btn__plus' type='button' to='/admin/produkty/pridat'>Přidat produkt</Link>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Obrázek</th>
      <th scope="col">Název</th>
      <th scope="col">Přátelská url</th>
      <th scope="col">Skladem ks</th>
      <th scope="col">Kategorie</th>
      <th scope="col">Značka</th>
      <th scope="col">Cena</th>
      <th scope="col">Cena po slevě</th>
      <th scope="col">Stav</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img className='img__product' src="https://m.media-amazon.com/images/I/71txcj1koLL._AC_UX695_.jpg" /></td>
      <td>Gumáky</td>
      <td>www.text.cz/cesta-k-produktu</td>
      <td>25</td>
      <td>Doplňky</td>
      <td>Ario</td>
      <td>259 Kč</td>
      <td>199 Kč</td>
      <td>aktivní</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/produkty/upravit/:id"><MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img className='img__product' src="https://m.media-amazon.com/images/I/71xXPjDuEDL._AC_UX695_.jpg" /></td>
      <td>Dámské tenisky</td>
      <td>www.text.cz/cesta-k-produktu</td>
      <td>10</td>
      <td>Doplňky</td>
      <td>Puma</td>
      <td>2599 Kč</td>
      <td>2299 Kč</td>
      <td>aktivní</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/produkty/upravit/:id"><MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img className='img__product' src="https://m.media-amazon.com/images/I/61sLLMI2tIL._AC_SY450_.jpg" /></td>
      <td>Vysoušeč vlasů</td>
      <td>www.text.cz/cesta-k-produktu</td>
      <td>5</td>
      <td>Elektronika</td>
      <td>Dreame </td>
      <td>2699 Kč</td>
      <td>2199 Kč</td>
      <td>neaktivní</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/produkty/upravit/:id"><MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
  </tbody>
</table>
    </section>
    </Helmet>
    <Footer />
    </>
   
  )
}

export default Products 
