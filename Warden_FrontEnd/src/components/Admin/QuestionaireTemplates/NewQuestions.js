import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";



export default function NewQuestion ({Section_questions, onDeleteQuestion,Section, onNewQuestion}) {


    return(
        <>
            {Section_questions.map((question, index) => (
                
                <Form key={question.id}>
                    <Row>
                        <Col xs="auto">
                            {index +1 + '.'}
                        </Col>
                        <Col>
                        <Form.Control placeholder="Type in your question or request" />
                        </Col>
                        <Col xs="auto">
                            <Button bsPrefix="new-question-button" onClick={() => {onDeleteQuestion({
                                                                            ...Section,
                                                                            questions: Section.questions.filter((t) => t.id !== question.id)
                                                                            });}}>
                            <AiOutlineDelete />
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                </Form>
                
            ))}
        </>
    );

}


