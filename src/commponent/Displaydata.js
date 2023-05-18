import React, { useState } from "react";
import { Button, Card, CardImg, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


export const DisplayData = ({ items }) => {
    const { name } = useParams()
    console.log(items)
    const data = items.find((c) => c.name === name)
    const item = data.value
console.log(data)
    return (
        <>
            <Row className="container-fluid ">
                {item.map((item, index) => (
                    <Col>
                        <Link to={`${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card key={index} className="col-md-3 shadow-lg rounded border-0" style={{ margin: '1rem', width: '25rem', backgroundColor: '#8D98A8' }}>
                                <CardImg src={item.imageurl} style={{ height: '15rem', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }} />
                                <Card.Body style={{ height: '15rem', textAlign: 'center', }} >
                                    <Row style={{ paddingTop: '2rem' }}>
                                        <Col> <Card.Title>{item.name}</Card.Title></Col>
                                        <Col md={{ span: 4, offset: 3 }}>  <Card.Title>&#x20B9;{item.price}</Card.Title></Col>
                                    </Row>
                                    <Col style={{ paddingTop: '1rem' }}>
                                        <Button >View More</Button>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

