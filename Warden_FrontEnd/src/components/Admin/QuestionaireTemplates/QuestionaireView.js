import { useSelector } from "react-redux";
import { Row, Container, Form, Col, FloatingLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './QuestionaireTemplates.css'
import { StyledCalendar } from "./CustomStyledComponents";

const CustomCalendarIcon = React.forwardRef(({ value, onClick }, ref) => (
    <div className="input-group">
      <StyledCalendar>
        <input
        type="text"
        className="form-control"
        style={{ width: "150px" }} // Add the inline style here
        value={value}
        onClick={onClick}
        ref={ref}
        readOnly
        />
      </StyledCalendar>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={onClick}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </button>
      </div>
    </div>
  ));

export default function ViewQuestionaire () {

    const template = useSelector(state => state.QuestionaireTemplates);

    return(
        <>
        <Row>
            <h2>{template.TemplateName}</h2>
        </Row>
       
    
        {template.Sections.map((section) => (
            
            <Container id={section.id}>
                <Row id={section.id}>
                    <h3>{section.title}</h3>
                </Row>
                <hr />
                {section.questions.map((question) => {
                    switch(question.type){
                        case 'free-text-small': {
                            return(
                                <Form id={question.id}>
                                        <Form.Label>{question.text}</Form.Label>
                                        
                                        <Form.Control  rows={3} />
                                    <br />
                                </Form>
                            );
                        }

                        case 'free-text-large': {
                            return(
                                <Form id={question.id}>
                                        <Form.Label>{question.text}</Form.Label>
                                        
                                        <Form.Control as='textarea' rows={3} />
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

                        case 'selection':{
                            return(
                                <Form id={question.id}>
                                    <Form.Group>
                                        <Form.Label>{question.text}</Form.Label>
                                        {question.options.map((option, index) => (
                                                <Form.Check
                                                type="radio"
                                                name="radioGroup"
                                                id={option.index}  
                                                label={option}
                                                />
                                            ))}

                                    </Form.Group>
                                    <br />
                                </Form>
                            )
                        }

                        case 'multi-selection':{
                            return(
                                <Form id={question.id}>
                                    <Form.Group>
                                        <Form.Label>{question.text}</Form.Label>
                                        {question.options.map((option, index) => (
                                                <Form.Check
                                                type="checkbox"
                                                id={option.index}  
                                                label={option}
                                                />
                                            ))}

                                    </Form.Group>
                                    <br />
                                </Form>
                            )
                        }

                        case 'date-field':{
                            return(
                                <Form  id={question.id}>
                                    <Form.Group controlId="datePicker">
                                        <Form.Label>{question.text}</Form.Label>
                                        <br />
                                            <DatePicker  
                                            
                                            customInput={<CustomCalendarIcon />}/>
                                    </Form.Group>
                                    <br />
                                </Form>
                            )
                        }

                        case 'Address-Block':{
                            return(
                                <Form key={question.id}>  
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
                                <br />
                            </Form>
                            )
                        }

                        case "Contact-Block":{
                            return(
                                <Form key={question.id}> 
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
                                <hr />
                            </Form>
                            )
                        }
                    }
                })}


            </Container>
        

        ))}
        
        
        </>
    );}

