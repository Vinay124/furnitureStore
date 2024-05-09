import React from 'react'
import './TrendWeek.moudle.css'
import { Col, Row } from 'react-bootstrap'

const TrendWeek = () => {

    // productJson
    const products = {
        "data" : [
            {
                "id":1,
                "product_name": "Smartphone X",
                "price": 599.99,
                "discount_amount": 100.00,
                "total_amount": 499.99,
                "product_image": "",
                "product_image2": ""
            }
        ]
    }

  return (
    <section className='TrendWeek'>
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    </section>
  )
}

export default TrendWeek