import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'
import Helmet from "../../components/admin/Helmet/Helmet"


const Brands = () => {
  return (
    <>
   <NavbarAdmin/>
      <Sidebar/>
      <Helmet title="Značky">
    <section className='brands '>
      <div className="header__brands">
        <h5 className='text-warning'>Značky</h5>
        <Link className='btn__plus' type='button' to='/admin/znacky/pridat'>Přidat značku</Link>
      </div>
      <table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Logo</th>
      <th scope="col">Název</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img className='img__brand' src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" /></td>
      <td>Apple</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/znacky/upravit/:id"><MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img className='img__brand' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjN9hC-GiI06nyJstFC9QybNbNapRtdPz1t1h72h-MU99T6xVlLVv4o_SRxDnzmJ1TZf4&usqp=CAU" /></td>
      <td>Starbucks</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/znacky/upravit/:id"><MdEdit className='icon__edit' /></Link>
          <FaTrash className='icon__trash' />
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img className='img__brand' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" /></td>
      <td>Nike</td>
      <td>
        <div className="action">
          <AiFillEye  className='icon__eye'/>
          <Link to="/admin/znacky/upravit/:id"><MdEdit className='icon__edit' /></Link>
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

export default Brands