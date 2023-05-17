import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, NavLink} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();


    const logout = () => {
     signOut(auth).then(() => {
       navigate('/prihlaseni')
     }).catch(err=> {
       
     })
   }
  return (
    <div className='sidebar bg-light'>
      <Row >
        <Col>
        <div className='top' >
            <span className='logo text-warning ms-2'>Admin panel</span>
        </div>
        <div className='center'>
            <ul>
                <li>
                    <span><NavLink to='/admin/nastenka'className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Nástěnka</NavLink></span>
                </li>
                <p className='title text-warning'>Seznamy</p>
                <li>
                    
                    <span><NavLink to='/admin/uzivatele' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Uživatelé</NavLink></span>
                    
                </li>
                <li>
                   
                    <span><NavLink to='/admin/produkty' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Produkty</NavLink></span>
                </li>
                <li>
                   
                   <span><NavLink to='/admin/znacky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Značky</NavLink></span>
               </li>
                <li>
                   
                    <span><NavLink to='/admin/kategorie' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Kategorie</NavLink></span>
                </li>
                <li>
                   
                    <span><NavLink to='/admin/objednavky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Objednávky</NavLink></span>
                </li>
                <li>
                   
                    <span><NavLink to='/admin/doprava' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Doprava</NavLink></span>
                </li>
                <li>
                   
                    <span><NavLink to='/admin/platba' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Platba</NavLink></span>
                </li>
                <li>
                    
                    <span><NavLink to='/admin/dokumenty' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Dokumenty</NavLink></span>
                </li>
                <p className='title text-warning'>Ostatní odkazy</p>
                <li>
                    <span><NavLink to='/admin/statistiky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Statistiky</NavLink></span>
                </li>
                <li>
                    <span><NavLink to='/admin/recenze' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Recenze</NavLink></span>
                </li>
                <li>
                    
                    <span><NavLink to='/admin/upozorneni' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Upozornění</NavLink></span>
                </li>
                <li>
                    
                    <span><NavLink to='/admin/zpravy' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Zprávy</NavLink></span>
                </li>
                <p className='title text-warning'>Servis</p>
                <li>
                  
                    <span><NavLink to='/admin/prihlasovani' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Přihlašování</NavLink></span>
                </li>
                <li>
              
                    <span><NavLink to='/admin/nastaveni' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Nastavení</NavLink></span>
                </li>
                <p className='title text-warning'>Uživatel</p>
                <li>
                  
                    <span><NavLink to='/admin/profil' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Profil</NavLink></span>
                </li>
                <li>
                    
                    <span onClick={logout} >odhlásit se</span>
                </li>
            </ul>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Sidebar
