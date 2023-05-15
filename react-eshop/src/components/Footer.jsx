import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bg-light text-center fixed-bottom '>
    <div>
    <p className='fs-6 mt-2'>{year} © Eshop. Všechna práva vyhrazena. Vytvořeno <Link to="https://jh-devs.cz" className='text-decoration-none text-warning'>JH-Devs.cz </Link></p>
    </div>
    </div>

  )
}

export default Footer
