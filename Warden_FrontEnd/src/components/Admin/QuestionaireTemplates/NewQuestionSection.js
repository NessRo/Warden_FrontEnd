import React from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import './QuestionaireTemplates.css'

import { BiMessageRoundedAdd } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";


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
  
  function NewQuestionSection() {
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
                <Button bsPrefix="new-question-button" variant="primary"><BiMessageRoundedAdd />New Question</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  
 

export default NewQuestionSection