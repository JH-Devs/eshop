import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Helmet from '../../components/user/Helmet/Helmet'

const Home = () => {
  return (
    <Helmet title="">
    <Container fluid>
    <Row>
    <main>
    <div className='home_page'>
        <div className="slider">
        <div className="slider_hero">
            <h1>Letní výprodej</h1>
            <span>Slevy až do výše 80%</span>
            <p>Prohlédněte si naší nabídku</p>
            <button>zobrazit nabídku</button>
            </div>
        </div>
        <div className="title">Novinky</div>

       </div> 
    </main>            
    </Row>
</Container>
</Helmet>
  )
}

export default Home