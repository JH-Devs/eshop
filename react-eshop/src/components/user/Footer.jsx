import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <div className='bg-dark fixed-bottom '>
    <Container className="footer-links text-light mt-5">
      <Row>
        <Col lg="3">
        <h4>Informace</h4>
          <ul>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
          </ul>
        </Col>
        <Col lg="3">
        <h4>Informace</h4>
          <ul>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
          </ul>
        </Col>
        <Col lg="3">
        <h4>Informace</h4>
          <ul>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
          </ul>
        </Col>
        <Col lg="3">
        <h4>Informace</h4>
          <ul>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
            <li>
              odkaz 1
            </li>
          </ul>
        </Col>

      </Row>
    </Container>
    <div>
    <p className='fs-6 mt-2 text-white text-center'>{year} © Eshop. Všechna práva vyhrazena. Vytvořeno <Link to="https://jh-devs.cz" className='text-decoration-none text-warning'>JH-Devs.cz </Link></p>
    </div>
    </div>
    </>
  )
}

export default Footer