import React from 'react'
import NavbarUser from '../../components/user/NavbarUser'
import Footer from '../../components/user/Footer'
import { Container, Row } from 'react-bootstrap'
import Helmet from '../../components/user/Helmet/Helmet'

const Eshop = () => {
  return (
    <Helmet title=" / Eshop">
    <Container fluid>
    <Row>
    <NavbarUser/>
       <main>
       eshop
       </main>             
       <Footer />
    </Row>
</Container>
</Helmet>
  )
}

export default Eshop