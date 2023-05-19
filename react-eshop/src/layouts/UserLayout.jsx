import React from "react"
import {Container, Row} from "react-bootstrap"
import "../styles/user/style.scss"
import NavbarUser from "../components/user/NavbarUser"
import Footer from "../components/user/Footer"
import Home from "../pages/user/Home"


const UserLayout=()=> {
    return(  
        <Container fluid>
        <Row>
        <NavbarUser/>
           <main>
            <Home/>
           </main>             
           <Footer />
        </Row>
    </Container>
    )
}
export default UserLayout