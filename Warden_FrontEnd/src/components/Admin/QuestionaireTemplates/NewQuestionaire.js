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
import NewQuestionSection from './NewQuestionaireSection';
import {useReducer} from 'react';



function questionaireReducer(Sections, action) {
    // return next state for React to set
    switch (action.type) {
        case 'added': {
            return[...Sections,{
                                    id: uuidv4(),
                                    title: '',
                                    questions:[]
                                },
            ]
        }

        case 'changed': {
            return Sections.map(t => {
                if (t.id == action.section.id) {
                    return action.section;
                } else {
                    return t;
                }
            })
        }

        case 'deleted': {
            return Sections.filter((t) => t.id !== action.id);
        }

        case 'add-question': {
            return Sections.map(t => {
                if (t.id == action.section.id) {
                    return action.section;
                                
                } else {
                    return t;
                }
            })
        }

            case 'delete-question': {
                return Sections.map(t => {
                    if (t.id == action.section.id) {
                        return action.section;
                                    
                    } else {
                        return t;
                    }
                })
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
    const [Name, setName] = useState("");

    const [Sections, dispatch] = useReducer(questionaireReducer, []);



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
        console.log(Sections)
      }

    function handleTitleChanges(section) {
        dispatch({
          type: 'changed',
          section: section,
        });
      }

    function handleDeleteSection(Id) {
        dispatch({
          type: 'deleted',
          id: Id,
        });
      }

    function handleAddQuestion(section) {
        dispatch({
          type: 'add-question',
          section: section
        });
        
      }

    function handleDeleteQuestion(section) {
        dispatch({
          type: 'delete-question',
          section: section
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
            
            <NewQuestionSection Sections={Sections} onDeleteSection={handleDeleteSection} onChangeTitle={handleTitleChanges} onNewQuestion={handleAddQuestion} onDeleteQuestion={handleDeleteQuestion} />

            <div style={{ height: "25px" }}/>
            <Container>
                <div style={{ height: "25px" }}/>
                <Button type='submit' onClick={handleAddSection}>New Section</Button>
            </Container>
        </div>
  )
}

export default NewQuestionaire