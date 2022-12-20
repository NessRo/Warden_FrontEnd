import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";



export default function ({Section_questions}) {


    return(
        <>
            {Section_questions.map((question) => (

                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="Type in your question or request" />
                        </Col>
                        <Col xs="auto">
                            <Button bsPrefix="new-question-button">
                            <AiOutlineDelete />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            ))};
        </>
    );

}


