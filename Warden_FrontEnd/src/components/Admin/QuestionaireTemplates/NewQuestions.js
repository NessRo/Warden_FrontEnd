import React from 'react';
import { deleteQuestion, addDropdownOptions, updateQuestionTitle } from './actions';
import { QuestionLine } from '../../../SVGs/Lines';
import NewSubQuestion from './NewSubQuestion';
import RequiredToggle from './Components/RequiredToggle';
import { store } from '../../../store';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";

import { v4 as uuidv4 } from 'uuid';
import ConditionalLogicToggle from './Components/ConditionalLogicToggle';

import ConditionLogicFlow from './Components/ConditionLogicFlow';




export default function NewQuestion ({Section}) {



    return(
        <>
            {Section.questions.map((question, index) => {
            
            
                switch(question.type){
                    case 'free-text-small': 
                        {return(
                            <Form key={question.id}>
                                 <QuestionLine index={index} />
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="Type in your question or request - for a small text field" className="mb-3">
                                        <Form.Control placeholder="Type in your question or request" onChange={(e) => store.dispatch(updateQuestionTitle(Section.id,question.id, e.target.value))} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <RequiredToggle Section={Section} question={question} />
                                </Col>
                            </Row>
                            <br />

                            </Form>
                        );}
                    case 'free-text-large': 
                        {return(
                            <Form key={question.id}>
                                 <QuestionLine index={index} />
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="Type in your question or request - for a large text field" className="mb-3">
                                        <Form.Control placeholder="Type in your question or request" onChange={(e) => store.dispatch(updateQuestionTitle(Section.id,question.id, e.target.value))} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <RequiredToggle Section={Section} question={question} />
                                </Col>
                            </Row>
                            <br />

                            </Form>
                        );}
                    case 'drop-down':
                        {return(
                            
                            <Form key={question.id}>
                            
                            <QuestionLine index={index} />

                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="drop down title" className="mb-3">
                                        <Form.Control placeholder="drop down title" onChange={(e) => store.dispatch(updateQuestionTitle(Section.id,question.id, e.target.value))} />
                                    </FloatingLabel>
                                <div style={{ paddingTop: '8px' }}/>
                                <Container fluid="md">
                                    <Row>
                                        <Col >
                                            <FloatingLabel controlId="floatingTextarea2" label="Enter all drop down options, seperated by a comma.">
                                                <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Leave options here" onChange={(e) => store.dispatch(addDropdownOptions(Section.id,question.id,e.target.value))} />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div style={{ paddingTop: '8px' }}/>
                                    <Row>
                                        <Col>
                                            <RequiredToggle Section={Section} question={question} />
                                        </Col>
                                        <Col>
                                            <ConditionalLogicToggle Section={Section} question={question} />
                                        </Col>
                                     </Row >
                                     {question.logical === true ?(
                                        <>
                                        <ConditionLogicFlow question={question} section={Section}/>
                                        
                                        <Container fluid="md">
                                            <NewSubQuestion Question={question} Section={Section}/>
                                        </Container>
                                        
                                        
                                        </>
                                     ): null}
                                        <div style={{ paddingTop: '8px' }}/>
                                        
                                </Container>                                               
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <br />

                            </Form>
                        );}
                    case 'date-field':
                        {return(
                            <Form key={question.id}>
                                 <QuestionLine index={index} />
                            <Row>
                                <Col>
                                    <FloatingLabel  label="Date Title" className="mb-3">
                                        <Form.Control placeholder="this is a date" onChange={(e) => store.dispatch(updateQuestionTitle(Section.id,question.id, e.target.value))}/>
                                    </FloatingLabel>
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <Row />
                            <Row>
                                <Col>
                                    <RequiredToggle Section={Section} question={question} />
                                </Col>
                                
                            </Row>
                            <br />
                            </Form>
                        );}
                    case 'selection':
                        {return(
                            <Form key={question.id}>
                                 <QuestionLine index={index} />
                            <Row>
                                
                                <Col>
                                    <FloatingLabel  label="Selection title" className="mb-3">
                                        <Form.Control placeholder="Selection title" onChange={(e) => store.dispatch(updateQuestionTitle(Section.id,question.id, e.target.value))} />
                                    </FloatingLabel>
                                <div style={{ paddingTop: '8px' }}/>
                                <Container fluid="md">
                                    <Row>
                                        <Col >
                                            <FloatingLabel controlId="floatingTextarea2" label="Enter all Selection options, seperated by a comma.">
                                                <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Leave options here" onChange={(e) => store.dispatch(addDropdownOptions(Section.id,question.id,e.target.value))} />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div style={{ paddingTop: '8px' }}/>
                                    <Row>
                                        <Col>
                                            <RequiredToggle Section={Section} question={question} />
                                        </Col>
                                        <Col>
                                            <ConditionalLogicToggle Section={Section} question={question} />
                                        </Col>
                                     </Row>
                                     {question.logical === true ?(
                                        <>
                                        <ConditionLogicFlow question={question} section={Section}/>
                                        
                                        <Container fluid="md">
                                            <NewSubQuestion Question={question} Section={Section}/>
                                        </Container>
                                        
                                        
                                        </>
                                     ): null}
                                        <div style={{ paddingTop: '8px' }}/>
                                </Container>                                               
                                </Col>
                                <Col xs="auto">
                                    <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                    <AiOutlineDelete />
                                    </Button>
                                </Col>
                            </Row>
                            <Row />
                            <br />

                            </Form>
                        );}

                        case 'multi-selection':
                            {return(
                                <Form key={question.id}>
                                     <QuestionLine index={index} />
                                <Row>
                                    
                                    <Col>
                                        <FloatingLabel  label="Multi-Selection title" className="mb-3">
                                            <Form.Control placeholder="Multi-Selection title" onChange={(e) => store.dispatch(updateQuestionTitle(Section.id,question.id, e.target.value))} />
                                        </FloatingLabel>
                                    <div style={{ paddingTop: '8px' }}/>
                                    <Container fluid="md">
                                        <Row>
                                            <Col >
                                                <FloatingLabel controlId="floatingTextarea2" label="Enter all Selection options, seperated by a comma. user will be able to select multiple options">
                                                    <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Leave options here" onChange={(e) => store.dispatch(addDropdownOptions(Section.id,question.id,e.target.value))} />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <div style={{ paddingTop: '8px' }}/>
                                        <Row>
                                            <Col>
                                                <RequiredToggle Section={Section} question={question} />
                                            </Col>
                                        </Row>
                                    </Container>                                               
                                    </Col>
                                    <Col xs="auto">
                                        <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                        <AiOutlineDelete />
                                        </Button>
                                    </Col>
                                </Row>
                                
                                <br />

                                </Form>
                            );}
                    
                    case 'Address-Block':
                        { return(
                            <Form key={question.id}>  
                                    <QuestionLine index={index} />
                                <Row>
                                    
                                    <Col  >
                                        <Form.Label>Address 1</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Col>
                                    <Col xs='auto'>
                                        <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                        <AiOutlineDelete />
                                        </Button>
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
                                <Row>
                                    <Col>
                                        <RequiredToggle Section={Section} question={question} />
                                    </Col>
                                </Row>
                                <br />

                            </Form>
                        );}
                    case 'Contact-Block':{
                        return(
                            <Form key={question.id}> 
                                <QuestionLine index={index} />
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
                                    <Col xs='auto'>
                                        <Button bsPrefix="new-question-button" onClick={() => store.dispatch(deleteQuestion(Section.id,question.id))}>
                                        <AiOutlineDelete />
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <RequiredToggle Section={Section} question={question} />
                                    </Col>
                                </Row>
                                <br />

                            </Form>
                        )

                        
                    }
                        
                            
                        
                }
            })}
        </>
    )
 }


