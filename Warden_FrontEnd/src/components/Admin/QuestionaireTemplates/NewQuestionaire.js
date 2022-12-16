import React from 'react'
import { useState } from 'react'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import EditableText from '../../EditableText/Editabletext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';
import NewQuestionSection from './NewQuestionSection'
import './QuestionaireTemplates.css'
import { v4 as uuidv4 } from 'uuid';

const NewQuestionaire = () => {

    useEffect(()=>  { document.body.style.backgroundColor = '#EFEBEB' }, []);

    const [newSection, setNewSection] = useState([]);
    // const [newSection, setNewSection] = useState({questionaire_id:{}}); ---convert use state to dictionary IDs
    const [Name, setName] = useState("");


    const handleNewQuestionSection = () => {
        let NewQuestionaireSectionProps = {id:uuidv4(),
                                            title:'lower-level-prop',
                                            questions:[]}
        setNewSection([...newSection,NewQuestionaireSectionProps]);
        console.log(newSection)
    };

    const onNameChange = (val) => {
        setName(val);
        console.log(val);
      };

    

    return (
        <div>
            <Container>
                <Form>
                    <Row >
                        <Col md={12}>
                            <Form.Label>Template Name</Form.Label>
                            <EditableText onChange={onNameChange} val={Name} width="100%" />
                        </Col>
                    </Row>
                </Form>
            </Container>
            <div style={{ height: "25px" }}/>
            <Container>
            <div>
                {newSection.map(() => 
                <Container>
                    <div style={{ height: "25px" }}/>
                    <NewQuestionSection></NewQuestionSection>
                </Container>)}
            </div>
                <div style={{ height: "25px" }}/>
                <Button type='submit' onClick={handleNewQuestionSection}>New Section</Button>
            </Container>
        </div>
  )
}

export default NewQuestionaire