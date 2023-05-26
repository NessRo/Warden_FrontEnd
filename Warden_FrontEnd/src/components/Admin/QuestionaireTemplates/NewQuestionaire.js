import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState, useRef  } from 'react'
import { Form } from "react-bootstrap";
import { Button, Modal, FloatingLabel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect } from 'react';
import './QuestionaireTemplates.css'
import NewQuestionSection from './NewQuestionaireSection';
import { clearState, addNewSection, updateQuestionaireTitle } from './actions';
import { store } from '../../../store';
import { StyledBottomNavBarButton } from './CustomStyledComponents';
import { useSelector } from 'react-redux'
import ViewQuestionaire from './QuestionaireView/QuestionaireView';
import { handleQuestionairePublish } from './ApiHandlers/PostHandlers';
import PublishLoading from './Animations/Components/loading';
import { BiCheckCircle } from 'react-icons/bi';










const NewQuestionaire = () => {

    const navigate = useNavigate()
  
    const handleCancel = () => {
      store.dispatch(clearState())
      navigate('/Questionaire-Templates');
    };

    // handles all the Cancel button modals and modal states
    const [showCancelWarning, setCancelWarning] = useState(false);

    const handleCloseCancelWarning = () => setCancelWarning(false);
    const handleShowCancelWarning = () => setCancelWarning(true);

    // handles all the View button modals and modal states
    const [showViewScreen, setViewScreenn] = useState(false);

    const handleCloseViewScreen = () => setViewScreenn(false);
    const handleShowViewScreen = () => setViewScreenn(true);

    // handles all the submit button modals and modal states
    const [showSubmitWarning, setSubmitWarning] = useState(false);

    const handleCloseSubmitWarning = () => setSubmitWarning(false);
    const handleShowSubmitWarning = () => setSubmitWarning(true);

    // handles all the Publish modals and modal states
    const [showPublish, setPublish] = useState(false);

    const handleClosePublish = () => setPublish(false);
    const handleShowPublish = () => setPublish(true);

    // handles all the API request states and errors to backend service.
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const axiosSource = useRef(null);

    //reads current state of template
    const template = useSelector(state => state.QuestionaireTemplates);
    const templateCopy = { ...template };



    
    useEffect(()=>  { document.body.style.backgroundColor = '#EFEBEB' }, []);

    const state = store.getState()

    
  
    return (
        
        <div>
            
            <Container>
                <Form>
                    <Row >
                        <Col md={12}>
                          <FloatingLabel  label="Questionaire Name" className="mb-3">
                            <Form.Control placeholder="Questionaire Name" onChange={(e) => {store.dispatch(updateQuestionaireTitle(e.target.value))}}/>
                          </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <div style={{ height: "25px" }}/>
            
            <NewQuestionSection state ={state}  />

            <div style={{ height: "25px" }}/>
            <Container style={{ paddingBottom: "150px" }}>
                <div style={{ height: "25px" }}/>
                <Button onClick={() => {store.dispatch(addNewSection('',template.id)); console.log(store.getState())}}>New Section</Button>
            </Container>

            <Navbar bg="primary" variant="dark" fixed="bottom" className="custom-navbar">
              <Nav className='w-100 justify-content-between'>

              <Col className="col-auto">
                <StyledBottomNavBarButton  size="md" onClick={handleShowCancelWarning}> Cancel </StyledBottomNavBarButton>
                  <Modal show={showCancelWarning} onHide={handleCloseCancelWarning}>
                    <Modal.Header closeButton>
                      <Modal.Title>Discard All Changes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Are you sure you want to discard all changes? there is no way to undo this operation.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseCancelWarning}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleCancel}>
                        Discard
                      </Button>
                    </Modal.Footer>
                </Modal>
                
              </Col>

              <Col className="col-auto">
                <StyledBottomNavBarButton  size="md" onClick={handleShowViewScreen}>View</StyledBottomNavBarButton>
                  <Modal show={showViewScreen} onHide={handleCloseViewScreen} dialogClassName="modal-80w" aria-labelledby="example-custom-modal-styling-title">
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Questionaire On-Boarding View</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ViewQuestionaire/>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseViewScreen}>
                          Close
                        </Button>
                      </Modal.Footer>
                  </Modal>
                    
                
                <StyledBottomNavBarButton  size="md" onClick={handleCancel}>
                    Save Draft
                </StyledBottomNavBarButton>
                <StyledBottomNavBarButton  size="md" onClick={handleShowSubmitWarning}>Submit </StyledBottomNavBarButton>
                  <Modal show={showSubmitWarning} onHide={handleCloseSubmitWarning}>
                    <Modal.Header closeButton>
                      <Modal.Title>Publish Questionaire</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Are you ready to publish this questionaire template? it will show up as a published questionaire ready used.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseSubmitWarning}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {handleShowPublish();handleCloseSubmitWarning();handleQuestionairePublish(templateCopy,       // postData
                                                                                                                                        setIsLoading,   // loadingState
                                                                                                                                        setError,       // errorState
                                                                                                                                        setResponse,    // responseState
                                                                                                                                        axiosSource,    // axiosSource
                                                                                                                                        'publish'     // publishType
                                                                                                                                        )}}>
                        Publish
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal show={showPublish}>
                    <Modal.Body>
                      {isLoading ? <PublishLoading /> : (<div>
                                                          <BiCheckCircle size={24} color="green" /> Publish successful!
                                                        </div>)}
                    </Modal.Body>
                    <Modal.Footer>
                      {isLoading ? null : 
                      <Button variant="secondary" onClick={() => {handleClosePublish();handleCancel();}}>
                        Close
                      </Button>}
                    </Modal.Footer>
                  </Modal>
                
              </Col>
                
              </Nav>
            </Navbar>

        </div>
        
  )
}

export default NewQuestionaire