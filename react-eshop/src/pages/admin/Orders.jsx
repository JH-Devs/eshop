import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/Footer'
import {AiFillEye} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'

const Orders = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <section className='users'>
      <div className="header__users">
        <h5 className='text-warning'>Objednávky</h5>
      </div>
      <table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Uživatel</th>
      <th scope="col">Stav objednávky</th>
      <th scope="col">Vytvořeno</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jana Nováková</td>
      <td className='text-primary fw-bold'>přijato ke zpracování</td>
      <td>25.4.2023</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jana Nováková</td>
      <td className='text-warning fw-bold'>zpracovává se</td>
      <td>19.4.2023</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jana Nováková</td>
      <td className='text-success fw-bold'>odesláno</td>
      <td>10.4.2023</td>
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
  
    <Footer />
    </>
  )
}

export default Orders