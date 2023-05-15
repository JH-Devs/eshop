import React from 'react'
import Footer from '../../components/Footer'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import {AiFillEye} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <>
     <NavbarAdmin/>
      <Sidebar/>
    <section className='users'>
      <div className="header__users">
        <h5 className='text-warning'>Uživatelé</h5>
        <Link className='btn__plus' type='button' to='/admin/uzivatele/pridat'>Přidat užvatele</Link>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Obrázek</th>
      <th scope="col">Jméno</th>
      <th scope="col">Příjmení</th>
      <th scope="col">Email</th>
      <th scope="col">Telefon</th>
      <th scope="col">Adresa</th>
      <th scope="col">Akce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img className='img__user' src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" /></td>
      <td>Jana</td>
      <td>Nováková</td>
      <td>jana@jana.cz</td>
      <td>123 456 789</td>
      <td>Ulice 1, 111 11 Město</td>
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
      <td><img className='img__user' src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" /></td>
      <td>Jana</td>
      <td>Nováková</td>
      <td>jana@jana.cz</td>
      <td>123 456 789</td>
      <td>Ulice 1, 111 11 Město</td>
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
      <td><img className='img__user' src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" /></td>
      <td>Jana</td>
      <td>Nováková</td>
      <td>jana@jana.cz</td>
      <td>123 456 789</td>
      <td>Ulice 1, 111 11 Město</td>
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

export default Users
