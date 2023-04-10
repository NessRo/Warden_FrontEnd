import React from 'react';
import { deleteQuestion } from './actions';
import { store } from '../../../store';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { updateDropdownOptionProperty } from './actions';




export default function NewQuestion ({Section}) {



    return(
        <>
            {Section.questions.map((question, index) => {
            
            
                switch(question.type){
                    case 'free-text': 
                        {return(
                            <Form key={question.id}>
                            <Row>
                                <Col xs="auto">
                                    {index +1 + '.'}
                                </Col>
                                <Col>
                                <Form.Control placeholder="Type in your question or request" />
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <hr />
                            </Form>
                        );}
                    case 'drop-down':
                        {return(
                            <Form key={question.id}>
                            <Row>
                                <Col xs="auto">
                                    {index +1 + '.'}
                                </Col>
                                <Col>
                                <Form.Control placeholder="drop down title" />
                                <div style={{ paddingTop: '8px' }}/>
                                <Container fluid="md">
                                    <Row>
                                        <Col sm="auto">
                                            {index +1 + '.'}
                                        </Col>
                                        <Col sm="auto">
                                            <Form.Control size="sm" type="text" placeholder="Small text" />
                                        </Col>
                                        <Col xs="auto">
                                            <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                            <AiOutlineDelete />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                                <div style={{ paddingTop: '8px' }}/>
                                    <Button size='sm' onClick={console.log('something')}>add option</Button>                                                   
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <hr />
                            </Form>
                        );}
                    case 'date-field':
                        {return(
                            <Form key={question.id}>
                            <Row>
                                <Col xs="auto">
                                    {index +1 + '.'}
                                </Col>
                                <Col>
                                <Form.Control placeholder="this is a date" />
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <hr />
                            </Form>
                        );}
                    case 'selection':
                        {return(
                            <Form key={question.id}>
                            <Row>
                                <Col xs="auto">
                                    {index +1 + '.'}
                                </Col>
                                <Col>
                                <Form.Control placeholder="this is a selection" />
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <hr />
                            </Form>
                        );} 
                }
            })}
        </>
    )
 }


