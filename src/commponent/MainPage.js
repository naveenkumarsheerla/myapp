import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MainPage = ({ items }) => {
    return (
        <>
            <Row className="d-flex justify-content-center  container-fluid "style={{marginTop:'2rem'}}>
                  <h3 style={{justifyContent:'center',display:'flex',marginBottom:'2rem'}}>Categories</h3>
                {items.map((item) => (
                    <Col  md={{ offset:3 }} xl={{offset:2,span:4}}>
                        <Link to={`${item.name}`} style={{textDecoration:'none',color:'#202124'}}>
                            <Card style={{ margin: '1rem', width: '25rem', backgroundColor: '#8D98A8' ,textAlign:'center'}}>
                                <Card.Img src={item.img}></Card.Img>
                                <Card.Body style={{height:'8rem'}}>
                                 <Card.Title style={{margin:'2rem'}}>{item.name}</Card.Title>                            
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}