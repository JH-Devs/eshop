import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'

const Payments = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <section className='brands '>
      <div className="header__brands">
        <h5 className='text-warning'>Platby</h5>
        <Link className='btn__plus' type='button' to='/admin/platba/pridat'>Přidat platbu</Link>
      </div>
      <table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Logo</th>
      <th scope="col">Název</th>
      <th scope='col'>Cena</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img className='img__brand' src="https://cdn4.vectorstock.com/i/1000x1000/38/13/digital-wallet-e-payment-logo-design-vector-28823813.jpg" /></td>
      <td>Online platba</td>
      <td>0 Kč</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <MdEdit className='icon__edit' />
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img className='img__brand' src="https://www.nicepng.com/png/detail/134-1340230_bank-transfers-icon-bank-transfer-icon-png.png" /></td>
      <td>Bankovní převod</td>
      <td>0 Kč</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <MdEdit className='icon__edit' />
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img className='img__brand' src="https://thumbs.dreamstime.com/b/cash-delivery-get-goods-payment-icon-logo-vector-illustration-199455809.jpg" /></td>
      <td>Dobírka</td>
      <td>39 Kč</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <MdEdit className='icon__edit' />
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
  </tbody>
</table>
    </section>
  
    <Footer />
    </>
  )
}

export default Payments