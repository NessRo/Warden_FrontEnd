import { useSelector } from "react-redux";
import { Row, Container, Form } from "react-bootstrap";
import React from 'react'

export default function ViewQuestionaire () {

    const template = useSelector(state => state.QuestionaireTemplates);

    return(
        <>
        <Row>
            <h2>{template.TemplateName}</h2>
        </Row>
        <br />
    
        {template.Sections.map((section) => (
            
            <Container id={section.id}>
                <Row>
                    <h3>{section.title}</h3>
                </Row>
                <br />
                {section.questions.map((question) => {
                    switch(question.type){
                        case 'free-text': {
                            return(
                                <Form id={question.id}>
                                        <Form.Label>{question.text}</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    <br />
                                </Form>
                            );
                        }

                        case 'drop-down':{
                            return(
                                <Form id={question.id}>
                                    <Form.Group>
                                        <Form.Label>{question.text}</Form.Label>
                                        <Form.Select>
                                            <option  disabled selected>Select an option</option>
                                            {question.options.map((option, index) => (
                                                <option value={option.index +1 }>{option}</option>
                                            ))}
                                            
                                        </Form.Select>
                                    </Form.Group>
                                    <br />
                                </Form>
                            )
                        }
                    }
                })}


            </Container>
        

        ))}
        
        
        </>
    );}

