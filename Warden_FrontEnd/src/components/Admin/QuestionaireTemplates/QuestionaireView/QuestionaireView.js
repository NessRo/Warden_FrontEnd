import { useSelector } from "react-redux";
import { Row, Container, Form, Col, FloatingLabel } from "react-bootstrap";
import { SectionBreakLine } from "../../../../SVGs/Lines";
import DatePicker from "react-datepicker";
import React, {useState} from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledCalendar } from "../CustomStyledComponents";
import ViewSubQuestion from "./ViewSubQuestion";

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

    const [inputValue, setInputValue] = useState({});


    return(
        <>
        
       
    
        {template.Sections.map((section) => (
            
            <Container id={section.id}>
                <Row id={section.id}>
                    <SectionBreakLine section_name={section.title}/>
                </Row>
         
                {section.questions.map((question) => {
                    switch(question.type){
                        case 'free-text-small': {
                            return(
                                <Form id={question.id}>
                                        <Form.Label>
                                            {question.content.text}
                                            {question.required && <span style={{color: 'red'}}> *</span>}
                                        </Form.Label>
                                        
                                        <Form.Control  rows={3} required={question.required}/>
                                    <br />
                                </Form>
                            );
                        }

                        case 'free-text-large': {
                            return(
                                <Form id={question.id}>
                                        <Form.Label>
                                            {question.content.text}
                                            {question.required && <span style={{color: 'red'}}> *</span>}
                                        </Form.Label>
                                        
                                        <Form.Control as='textarea' rows={3} required={question.required}/>
                                    <br />
                                </Form>
                            );
                        }

                        case 'drop-down':{
                            return(
                                <Form id={question.id}>
                                    <Form.Group>
                                        <Form.Label>
                                            {question.content.text}
                                            {question.required && <span style={{color: 'red'}}> *</span>}
                                        </Form.Label>
                                        <Form.Select required={question.required} onChange={(e) => setInputValue({
                                                                                                                    ...inputValue,
                                                                                                                    [question.id]:e.target.value,
                                        })}>
                                            <option  disabled selected>Select an option</option>
                                            {question.content.options.map((option, index) => (
                                                <option value={option}>{option}</option>
                                            ))}
                                            
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                    {question.logical === true ? (
                                        question.conditional_question.condition_type === 'Equals' ? (
                                            question.conditional_question.condition_value === inputValue[question.id] ?(
                                                <>
                                                    <div style={{ paddingTop: '8px' }}/>
                                                    <ViewSubQuestion question={question.conditional_question.condition_sub_question}/>
                                                </>
                                            ): null
                                            

                                        ) : question.conditional_question.condition_type === 'Does not equal' ? (
                                                question.conditional_question.condition_value !== inputValue[question.id] ?(
                                                <>
                                                    <ViewSubQuestion question={question.conditional_question.condition_sub_question}/>
                                                </>
                                            ): null
                                        ) : null
                                    ) : null}

                                   
                                    </Form.Group>
                                    <br />
                                </Form>
                            )
                        }

                        case 'selection':{
                            return(
                                <Form id={question.id}>
                                    <Form.Group>
                                        <Form.Label required={question.required} >
                                            {question.content.text}
                                            {question.required && <span style={{color: 'red'}}> *</span>}
                                        </Form.Label>
                                        {question.content.options.map((option, index) => (
                                                <Form.Check
                                                type="radio"
                                                name={`radioGroup-${question.id}`}
                                                id={`${question.id}-${index}`}  
                                                label={option}
                                                onChange={(e) => {setInputValue({
                                                    ...inputValue,
                                                    [question.id]:e.target.labels[0].textContent})} }
                                                />
                                            ))}

                                    </Form.Group>
                                    <Form.Group>
                                    {question.logical === true ? (
                                        question.conditional_question.condition_type === 'Equals' ? (
                                            question.conditional_question.condition_value === inputValue[question.id] ?(
                                                <>
                                                    <div style={{ paddingTop: '8px' }}/>
                                                    <ViewSubQuestion question={question.conditional_question.condition_sub_question}/>
                                                </>
                                            ): null
                                            

                                        ) : question.conditional_question.condition_type === 'Does not equal' ? (
                                                question.conditional_question.condition_value !== inputValue[question.id] ?(
                                                <>
                                                    <ViewSubQuestion question={question.conditional_question.condition_sub_question}/>
                                                </>
                                            ): null
                                        ) : null
                                    ) : null}

                                   
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
                    }
                })}


            </Container>
        

        ))}
        
        
        </>
    );}

