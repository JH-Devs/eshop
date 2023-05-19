import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import {AiFillEye} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'
import Helmet from "../../components/admin/Helmet/Helmet"


const Logs = () => {
  return (
    <>
   <NavbarAdmin/>
      <Sidebar/>
      <Helmet title="Recenze">
    <section className='brands '>
      <div className="header__brands">
        <h5 className='text-warning'>Zprávy</h5>
      </div>
      <table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Uživatel</th>
      <th>Poslední přihlášení</th>
      <th>Počet přihlášení</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Uživatel 1</td>
      <td>19.4.2023</td>
      <td>5x</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Uživatel 2</td>
      <td>15.5.2023</td>
      <td>2x</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Uživatel 3</td>
      <td>25.4.2023</td>
      <td>9x</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
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

export default Logs 

