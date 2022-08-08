import React, {useState} from 'react'
import { Link, Router } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Admin = () => {



    return(
        <Container fluid>
            <Row>
                <Col>
                    <ListGroup as="ol" variant='flush'>

                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">
                            <Nav.Link href="/Questionaire-Templates">Questionaire Templates</Nav.Link>
                        </div>
                            Description
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">
                            <Nav.Link href="/On-Boarding-Templates">On-Boarding Templates</Nav.Link>
                        </div>
                            Description
                        </div>
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup as="ol" variant='flush'>

                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">
                                <Nav.Link href="/standard-document-repo">Standard Document Repository</Nav.Link>
                            </div>
                                Description
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        
    );
    }

    


export default Admin;