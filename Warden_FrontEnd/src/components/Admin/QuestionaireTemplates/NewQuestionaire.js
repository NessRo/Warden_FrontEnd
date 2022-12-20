import React from 'react'
import { useState } from 'react'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import EditableText from '../../EditableText/Editabletext';
import { useEffect } from 'react';
import './QuestionaireTemplates.css'
import { v4 as uuidv4 } from 'uuid';
import NewQuestionSectionV2 from './NewQuestionaireSection_V2';
import {useReducer} from 'react';



function questionaireReducer(newSection, action) {
    // return next state for React to set
    switch (action.type) {
        case 'added': {
            return[...newSection,{
                                    id: uuidv4(),
                                    Title: '',
                                    questions:[]
                                },
            ]
        }
        case 'changed': {
            return newSection.map((t) => {
                if (t.id == action.title.id) {
                    return action.title;
                } else {
                    return t;
                }
            })
        }
        case 'deleted': {
            return newSection.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
  }


const NewQuestionaire = () => {

    useEffect(()=>  { document.body.style.backgroundColor = '#EFEBEB' }, []);

    const [QuestionaireTemplate, setQuestionaireTemplate] = useState({id:'',
                                                                    TemplateName:'',
                                                                    created:'',
                                                                    contents:{QuestionSections:''}});
    const [newSection, setNewSection] = useState([]); 
    const [Name, setName] = useState("");

    const [Sections, dispatch] = useReducer(questionaireReducer, []);


    const handleNewQuestionSection = () => {

       setNewSection(
        [...newSection,
        {
            id: uuidv4(),
            Title: '',
            questions:[]
        }]
       )

       console.log(newSection)
    };

    const onNameChange = (val) => {
        
        setQuestionaireTemplate({...QuestionaireTemplate,
                                Template_name:val})
        setName(val);
        console.log(val,QuestionaireTemplate);
      };

    

    function handleAddSection() {
        dispatch({
          type: 'added',
          id: uuidv4(),
        });
      }

    function handleTitleChanges(title) {
        dispatch({
          type: 'changed',
          title: title,
        });
      }

    function handleDeleteTask(Id) {
        dispatch({
          type: 'deleted',
          id: Id,
        });
      }

    
      
      


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
            
            <NewQuestionSectionV2 Sections={Sections}/>

            <div style={{ height: "25px" }}/>
            <Container>
                <div style={{ height: "25px" }}/>
                <Button type='submit' onClick={handleAddSection}>New Section</Button>
            </Container>
        </div>
  )
}

export default NewQuestionaire