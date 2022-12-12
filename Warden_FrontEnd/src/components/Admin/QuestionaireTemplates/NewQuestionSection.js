import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import './QuestionaireTemplates.css'
import { v4 as uuidv4 } from 'uuid';
import NewQuestions from './NewQuestions';
import { Container } from "react-bootstrap";


import { BiArrowFromTop } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey)
    ;
  
    return (
      <Button
        type="button"
        bsPrefix="new-question-button" variant="primary"
        onClick={decoratedOnClick}
      >
        {children}
        <BiArrowFromTop />
      </Button>
    );
  }

  
  const NewQuestionSection = () => {


    const [NewQuestion, setNewQuestion] = useState([]);

    const handleNewQuestion = () => {
      setNewQuestion([...NewQuestion,uuidv4()]);
      console.log(NewQuestion)
  };

    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <Form.Control style={{width: '50%',  display: "inline-block"}}></Form.Control>
            <CustomToggle eventKey="0"></CustomToggle>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>
                {NewQuestion.map((element, index) => 
                <Container>
                    <div style={{ height: "25px" }}/>
                    <NewQuestions current_id={element} modify_questions = {setNewQuestion} questions_so_far = {NewQuestion}></NewQuestions>
                </Container>)}
              </div>
              <div style={{ height: "25px" }}/>
                <DropdownButton
                  key='end'
                  id={`dropdown-button-drop-NewQuestion`}
                  drop='end'
                  variant="primary"
                  title={`New Question`}
                  size='sm'
                >
                  <Dropdown.Item eventKey="1" onClick={handleNewQuestion}>Freetext Question</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  
 

export default NewQuestionSection