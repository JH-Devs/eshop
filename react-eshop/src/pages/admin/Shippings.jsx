import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'
import Helmet from "../../components/admin/Helmet/Helmet"

const Shippings = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title="Doprava">
    <section className='brands '>
      <div className="header__brands">
        <h5 className='text-warning'>Dopravci</h5>
        <Link className='btn__plus' type='button' to='/admin/doprava/pridat'>Přidat dopravce</Link>
      </div>
      <table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Logo</th>
      <th scope="col">Název</th>
      <th scope='col'>Délka dopravy</th>
      <th scope='col'>Cena</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img className='img__brand' src="https://www.retailys.cz/wp-content/uploads/2022/09/zasilkovna-logo-1.png" /></td>
      <td>Zásilkovna</td>
      <td>1-2 dny</td>
      <td>79 Kč</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
         <Link to="/admin/doprava/upravit/:id"> <MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img className='img__brand' src="https://azanoviny.eu/wp-content/uploads/2021/10/balikovna.jpg" /></td>
      <td>Balíkovna</td>
      <td>1-2 dny</td>
      <td>65 Kč</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/doprava/upravit/:id"> <MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img className='img__brand' src="https://admin.gigacomputer.cz/gallery/7/862971e047.png" /></td>
      <td>Ppl</td>
      <td>1-2 dny</td>
      <td>119 Kč</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/doprava/upravit/:id"> <MdEdit className='icon__edit' /></Link>
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

export default Shippings