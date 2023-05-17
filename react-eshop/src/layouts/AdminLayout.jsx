import React from "react"
import {Container, Row} from "react-bootstrap"
import "../styles/admin/style.scss"
import NavbarAdmin from "../components/admin/NavbarAdmin"
import Sidebar from "../components/admin/Sidebar"
import Footer  from "../components/admin/Footer"

const AdminLayout=()=> {
    return(  
    <Container fluid>
        <Row>
            <NavbarAdmin/>
           <Sidebar/>
           <main>

           </main>             
           <Footer />
        </Row>
    </Container>
    )
}
export default AdminLayout