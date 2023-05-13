import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();


    const logout = () => {
     signOut(auth).then(() => {
       navigate('/prihlaseni')
     }).catch(err=> {
       
     })
   }
  return (
    <Container className='sidebar bg-light'>
      <Row >
        <Col>
        <div className='top' >
            <span className='logo text-warning'>Admin panel</span>
        </div>
        <div className='center'>
            <ul>
                <li>
                    <span><Link to='/'className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Nástěnka</Link></span>
                </li>
                <p className='title text-warning'>Seznamy</p>
                <li>
                    
                    <span><Link to='/uzivatele' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Uživatelé</Link></span>
                    
                </li>
                <li>
                   
                    <span><Link to='/produkty' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Produkty</Link></span>
                </li>
                <li>
                   
                    <span><Link to='/kategorie' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Kategorie</Link></span>
                </li>
                <li>
                   
                    <span><Link to='/objednavky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Objednávky</Link></span>
                </li>
                <li>
                   
                    <span><Link to='/doprava' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Doprava</Link></span>
                </li>
                <li>
                   
                    <span><Link to='/platba' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Platba</Link></span>
                </li>
                <li>
                    
                    <span><Link to='/dokumenty' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Dokumenty</Link></span>
                </li>
                <p className='title text-warning'>Ostatní odkazy</p>
                <li>
                    <span><Link to='/statistiky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Statistiky</Link></span>
                </li>
                <li>
                    
                    <span><Link to='/upozorneni' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Upozornění</Link></span>
                </li>
                <p className='title text-warning'>Servis</p>
                <li>
                    
                    <span><Link to='/system' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>System Health</Link></span>
                </li>
                <li>
                  
                    <span><Link to='/prihlasovani' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Přihlašování</Link></span>
                </li>
                <li>
              
                    <span><Link to='/nastaveni' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Nastavení</Link></span>
                </li>
                <p className='title text-warning'>Uživatel</p>
                <li>
                  
                    <span><Link to='profil' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Profil</Link></span>
                </li>
                <li>
                    
                    <span onClick={logout} >odhlásit se</span>
                </li>
            </ul>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar
