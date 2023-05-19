import React from 'react'
import NavbarUser from '../../components/user/NavbarUser'
import Footer from '../../components/user/Footer'
import { Container, Row } from 'react-bootstrap'
import Helmet from '../../components/user/Helmet/Helmet'

const Blog = () => {
  return (
    <Helmet title=" / Blog">
    <Container fluid>
    <Row>
    <NavbarUser/>
       <main>
       blog
       </main>             
       <Footer />
    </Row>
</Container>
</Helmet>
  )
}

export default Blog