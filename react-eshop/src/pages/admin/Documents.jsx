import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'


const Documents = () => {
  return (
    <>
   <NavbarAdmin/>
      <Sidebar/>
    <section className='brands '>
      <div className="header__brands">
        <h5 className='text-warning'>Dokumenty</h5>
        <Link className='btn__plus' type='button' to='/admin/dokumenty/pridat'>Přidat dokument</Link>
      </div>
      <table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Název</th>
      <th>Vytvořeno</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Obchodní podmínky</td>
      <td>19.4.2023</td>
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
      <td>GDPR</td>
      <td>19.4.2023</td>
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
      <td>Reklamační řád</td>
      <td>19.4.2023</td>
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

export default Documents