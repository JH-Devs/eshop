import React from 'react'
import NavbarUser from '../../components/user/NavbarUser'
import Footer from '../../components/user/Footer'
import { Container, Row } from 'react-bootstrap'
import Helmet from '../../components/user/Helmet/Helmet'

const Contact = () => {
  return (
    <Helmet title=" / Kontakt">
    <Container fluid>
    <Row>
    <NavbarUser/>
       <main>
        contact
       </main>             
       <Footer />
    </Row>
</Container>
</Helmet>
  )
}

export default Contact