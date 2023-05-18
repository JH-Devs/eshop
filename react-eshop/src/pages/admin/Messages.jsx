import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import {AiFillEye} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'
import Helmet from "../../components/admin/Helmet/Helmet"


const Reviews = () => {
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
      <th>Text  zprávy</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Uživatel 1</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas saepe veritatis recusandae optio adipisci dolore laborum eligendi corrupti! Ratione!</td>
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
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus possimus ipsam excepturi magnam saepe quibusdam, tenetur aliquid iusto exercitationem?</td>
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
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus perferendis amet, asperiores temporibus perspiciatis animi? Eaque odio voluptatem cum.</td>
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

export default Reviews