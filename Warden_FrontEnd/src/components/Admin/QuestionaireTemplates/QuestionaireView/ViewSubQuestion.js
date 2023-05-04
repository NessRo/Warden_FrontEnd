import React from 'react';
import { Row, Container, Form, Col, FloatingLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledCalendar } from "../CustomStyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default function ViewSubquestion({ question }) {
  return (
    <>
      {(() => {
        switch (question.type) {
          case 'free-text-small': {
            return (
              <Form.Group id={question.id}>
                <Form.Label>
                  {question.content.text}
                  {question.required && <span style={{ color: 'red' }}> *</span>}
                </Form.Label>

                <Form.Control rows={3} required={question.required} />
                <br />
              </Form.Group>
            );
          }
          
          case 'free-text-large': {
            return(
                <Form.Group id={question.id}>
                        <Form.Label>
                            {question.content.text}
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                        
                        <Form.Control as='textarea' rows={3} required={question.required}/>
                    <br />
                </Form.Group>
            );
        }

        case 'drop-down':{
            return(
                <Form.Group id={question.id}>
                    <Form.Group>
                        <Form.Label>
                            {question.content.text}
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                        <Form.Select required={question.required}>
                            <option  disabled selected>Select an option</option>
                            {question.content.options.map((option, index) => (
                                <option value={option}>{option}</option>
                            ))}
                            
                        </Form.Select>
                    </Form.Group>
                </Form.Group>
            )
        }

        case 'selection':{
            return(
                <Form id={question.id}>
                    <Form.Group>
                        <Form.Label required={question.required}>
                            {question.content.text}
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                        {question.content.options.map((option, index) => (
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
                        <Form.Label required={question.required}>
                            {question.content.text}
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                        {question.content.options.map((option, index) => (
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
                        <Form.Label required={question.required}>
                            {question.content.text}
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
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
                        <Form.Label>
                            Address 1
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                        <Form.Control placeholder="1234 Main St" required={question.required} />
                    </Col>

                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>
                            Address 2
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" required={question.required}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>
                            Country
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                    <Form.Control required={question.required} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>
                            City
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                    <Form.Control required={question.required}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>
                        State
                    </Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>TX</option>
                        <option>GA</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>
                            Zip
                            {question.required && <span style={{color: 'red'}}> *</span>}
                        </Form.Label>
                    <Form.Control required={question.required}/>
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
                        <Form.Control id="inlineFormInputGroup" placeholder="Full Contact Name" required={question.required}/>
                        
                    </Col>
                    <Col >
                        <Form.Control id="inlineFormInputGroup" placeholder="Contact Email" required={question.required}/>
                     
                    </Col>
                    <Col >
                        <Form.Control id="inlineFormInputGroup" placeholder="Contact Number" required={question.required}/>
                       
                    </Col>
                </Row>
                <br />
            </Form>
            )
        }

          
          // Add more cases as needed
          default:
            return null;
        }
      })()}
    </>
  );
}
