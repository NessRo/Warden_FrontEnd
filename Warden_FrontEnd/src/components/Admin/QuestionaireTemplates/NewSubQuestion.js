import React from 'react';
import { Form, Row, Col,FloatingLabel, Button, FormGroup, Container } from 'react-bootstrap';
import { updateConditionSubQuestionTitle, addSubQuestionDropdownOptions } from './actions';
import { store } from '../../../store';



export default function NewSubQuestion({ Section, Question }) {
    return (
        <>
            {(() => {
                switch (Question.conditional_question.condition_sub_question.type) {
                    case 'free-text-small':
                        {return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="Type in your question or request - for a small text field" className="mb-3">
                                        <Form.Control placeholder="Type in your question or request" onChange={(e) => store.dispatch(updateConditionSubQuestionTitle(Section.id, Question.id, e.target.value))}  />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </FormGroup>
                        );}
                    case 'free-text-large':
                        {return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                        
                            <Row>
                                <Col>
                                    <FloatingLabel  label="Type in your question or request - for a large text field" className="mb-3">
                                        <Form.Control placeholder="Type in your question or request" onChange={(e) => store.dispatch(updateConditionSubQuestionTitle(Section.id, Question.id, e.target.value))} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            
                            </FormGroup>
                        );}
                    case 'drop-down':
                        {return(
                            
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="drop down title" className="mb-3">
                                        <Form.Control placeholder="drop down title" onChange={(e) => store.dispatch(updateConditionSubQuestionTitle(Section.id, Question.id, e.target.value))} />
                                    </FloatingLabel>
                                <div style={{ paddingTop: '8px' }}/>
                                <Container fluid="md">
                                    <Row>
                                        <Col >
                                            <FloatingLabel controlId="floatingTextarea2" label="Enter all drop down options, seperated by a comma.">
                                                <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Leave options here" onChange={(e) => store.dispatch(addSubQuestionDropdownOptions(Section.id,Question.id,e.target.value))} />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div style={{ paddingTop: '8px' }}/>
                                </Container>                                               
                                </Col>
                            </Row>
                            <br />

                            </FormGroup>
                        );}

                    case 'date-field':
                        {return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                            <Row>
                                <Col>
                                    <FloatingLabel  label="Date Title" className="mb-3">
                                        <Form.Control placeholder="this is a date" onChange={(e) => store.dispatch(updateConditionSubQuestionTitle(Section.id, Question.id, e.target.value))} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <br />
                            </FormGroup>
                        );}
                    
                    case 'selection':
                        {return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="Selection title" className="mb-3">
                                        <Form.Control placeholder="Selection title" onChange={(e) => store.dispatch(updateConditionSubQuestionTitle(Section.id, Question.id, e.target.value))} />
                                    </FloatingLabel>
                                <div style={{ paddingTop: '8px' }}/>
                                <Container fluid="md">
                                    <Row>
                                        <Col >
                                            <FloatingLabel controlId="floatingTextarea2" label="Enter all Selection options, seperated by a comma.">
                                                <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Leave options here" onChange={(e) => store.dispatch(addSubQuestionDropdownOptions(Section.id,Question.id,e.target.value))} />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div style={{ paddingTop: '8px' }}/>
                                </Container>                                               
                                </Col>
                            </Row>
                            <Row />
                            <br />

                            </FormGroup>
                        );}
                    
                    case 'multi-selection':
                        {return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="Multi-Selection title" className="mb-3">
                                        <Form.Control placeholder="Multi-Selection title" onChange={(e) => store.dispatch(updateConditionSubQuestionTitle(Section.id, Question.id, e.target.value))} />
                                    </FloatingLabel>
                                <div style={{ paddingTop: '8px' }}/>
                                <Container fluid="md">
                                    <Row>
                                        <Col >
                                            <FloatingLabel controlId="floatingTextarea2" label="Enter all Selection options, seperated by a comma. user will be able to select multiple options">
                                                <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Leave options here" onChange={(e) => store.dispatch(addSubQuestionDropdownOptions(Section.id,Question.id,e.target.value))}  />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div style={{ paddingTop: '8px' }}/>
                                </Container>                                               
                                </Col>
                            </Row>
                            
                            <br />

                            </FormGroup>
                        );}

                    case 'Address-Block':
                        { return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                                <Row>
                                    
                                    <Col  >
                                        <Form.Label>Address 1</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Col>

                                </Row>
                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>TX</option>
                                        <option>GA</option>
                                    </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                    </Form.Group>
                                </Row>
                                <Row />
                                <br />

                            </FormGroup>
                        );}

                    case 'Contact-Block':{
                        return(
                            <FormGroup key={Question.conditional_question.condition_sub_question.id}>
                                <Row>
                                    <Col >
                                        <Form.Control id="inlineFormInputGroup" placeholder="Full Contact Name" />
                                    </Col>
                                    <Col >
                                        <Form.Control id="inlineFormInputGroup" placeholder="Contact Email" />
                                    </Col>
                                    <Col >
                                        <Form.Control id="inlineFormInputGroup" placeholder="Contact Number" />
                                    </Col>
                                </Row>
                                <br />

                            </FormGroup>
                        )

                        
                    }

                    default:
                        return <div></div>;
                }
            })()}
        </>
    );
}
