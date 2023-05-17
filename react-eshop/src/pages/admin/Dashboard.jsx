import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import Widget from '../../components/admin/widget/Widget'
import Featured from '../../components/admin/featured/Featured'
import {AiFillEye} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'
import Helmet from "../../components/admin/Helmet/Helmet"


const Dashboard = () => {
  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <Helmet title='Nástěnka'>
     <section className='dashboard '>
     <h5 className='text-warning'>Nástěnka</h5>
     
     <div className='home'>
        <div className='home__container'>
            <div className='widgets'>
              <Widget type='user' />
              <Widget type='order' />
              <Widget type='erarning' />
              <Widget type='balance'  />
            </div>
            <div className="charts">
              <Featured />
            </div>
            <div className="listContainer">
              <div className="listTitle text-warning">Nejnovější objednávky</div>
    
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
                    <AiFillEye  className='icon__eye text-primary'/>
                    <FaTrash className='icon__trash text-danger ms-2' />
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
                    <AiFillEye  className='icon__eye text-primary'/>
                    <FaTrash className='icon__trash text-danger ms-2' />
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
                    <AiFillEye  className='icon__eye text-primary'/>
                    <FaTrash className='icon__trash text-danger ms-2' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          </div>
        </div>
    </div>
    </section>
    </Helmet>
    <Footer />
    </>
  )
}

export default Dashboard
