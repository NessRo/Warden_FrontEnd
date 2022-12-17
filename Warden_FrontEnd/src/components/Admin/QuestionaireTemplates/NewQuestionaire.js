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

    const [QuestionaireTemplate, setQuestionaireTemplate] = useState({id:'',
                                                                    TemplateName:'',
                                                                    created:'',
                                                                    contents:{QuestionSections:''}});
    const [newSection, setNewSection] = useState({}); 
    const [Name, setName] = useState("");


    const handleNewQuestionSection = () => {

       
        let NewQuestionSectionId = uuidv4();
        let NewQuestionaireSectionContents = {};
        
        let NewQuestionaireSectionProps = {contents:{
                                                    title:"some-title",
                                                    questions:{} 
                                                                }};

        NewQuestionaireSectionContents[NewQuestionSectionId] = NewQuestionaireSectionProps;
        
        setNewSection(({
            ...newSection,
            ...NewQuestionaireSectionContents
        }));

        setQuestionaireTemplate({...QuestionaireTemplate,
            contents:{
                ...QuestionaireTemplate.contents,
                QuestionSections:newSection
            }});

        console.log(QuestionaireTemplate.contents.QuestionSections)
    };

    const onNameChange = (val) => {
        
        setQuestionaireTemplate({...QuestionaireTemplate,
                                Template_name:val})
        setName(val);
        console.log(val,QuestionaireTemplate);
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
                {Object.entries(QuestionaireTemplate.contents.QuestionSections).map(([key, value]) => 
                <Container>
                    <div style={{ height: "25px" }}/>
                    <NewQuestionSection current_questionaire_section_id = {key} 
                                        modify_questionaire_section_content = {setNewSection} 
                                        current_questionaire_section_content = {newSection} 
                                        modify_questionaire_template_content = {setQuestionaireTemplate}
                                        current_questionaire_template_content = {QuestionaireTemplate}></NewQuestionSection>
                </Container>
            )}
            </div>
                <div style={{ height: "25px" }}/>
                <Button type='submit' onClick={handleNewQuestionSection}>New Section</Button>
            </Container>
        </div>
  )
}

export default NewQuestionaire