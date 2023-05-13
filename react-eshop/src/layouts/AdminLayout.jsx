import React from "react"
import {Container, Row} from "react-bootstrap"
import "../styles/admin/style.scss"
import NavbarAdmin from "../pages/admin/dashboard/NavbarAdmin"
import Sidebar from "../pages/admin/dashboard/Sidebar"

const AdminLayout=()=> {
    return(  
    <Container fluid>
        <Row>
            <NavbarAdmin/>
           <Sidebar/>
        </Row>
    </Container>
    )
}
export default AdminLayout