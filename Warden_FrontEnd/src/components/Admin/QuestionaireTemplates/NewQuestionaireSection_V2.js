import {useState} from 'react';

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Button, Container, Card, Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { AiOutlineDelete } from "react-icons/ai";
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


export default function NewQuestionSectionV2({Sections, onChangeTitle, onDeleteSection}) {
    return(
    <>
          {Sections.map((Section) => (
          
          <Container className="mt-4 col-md-12" key={Section.id}>
            <Accordion defaultActiveKey="0">


              <div style={{display: "flex", justifyContent: "space-between", float: "right"}}>
                <Button bsPrefix="new-question-button" onClick={() => onDeleteSection(Section.id)}>
                    <AiOutlineDelete />
                </Button>
              </div>

              <Card>
                <Card.Header>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Form.Control style={{width: '50%',  display: "inline-block"}}  type="text" value={Section.title}   onChange={e => {
                                                                                                                                        onChangeTitle({
                                                                                                                                          ...Section, 
                                                                                                                                          title: e.target.value
                                                                                                                                          });
                                                                                                                                          }} ></Form.Control>
                    <CustomToggle eventKey="0"></CustomToggle>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                  <DropdownButton
                  key='end'
                  id={`dropdown-button-drop-NewQuestion`}
                  drop='end'
                  variant="primary"
                  title={`New Question`}
                  size='sm'
                >
                  <Dropdown.Item eventKey="1" >Freetext Question</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>


            </Accordion>
          </Container>
          
      ))}
    </>
    );
}   