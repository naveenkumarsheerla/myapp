import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


export const CardInfo = ({ data }) => {
    const { id, name } = useParams()
    const item = data.find((item) => item.name === name).value
    const card = item.find((c) => c.id == id)
     console.log(card)

    return (
        <>
            <Row className="justify-content-center container-fluid">
                <Card style={{ marginTop: '10rem', height: '25rem', width: '25rem', backgroundColor: "#F2F2F2" }}>
                    <Card.Body  >
                        <Card.Header>
                            <Card.Subtitle>Product: {card.name}</Card.Subtitle>
                        </Card.Header>
                        <Row style={{ marginTop: '2rem' }}>
                            <Card.Title>Price - &#x20B9;{card.price}</Card.Title>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text>{card.description}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>


        </>
    )

}