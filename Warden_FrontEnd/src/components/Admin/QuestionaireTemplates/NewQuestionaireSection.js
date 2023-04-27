import { store } from '../../../store';
import { removeSection, updateSectionTitle } from './actions';
import { useSelector } from 'react-redux';
import NewQuestion from './NewQuestions';
import { NewQuestionButton } from './Components/NewQuestionButton';



import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Button, Container, Card, Form } from 'react-bootstrap';


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


export default function NewQuestionSection() {

    const Sections = useSelector(state => state.QuestionaireTemplates.Sections);

    return(
    <>
          {Sections.map((Section, index) => (
          
          <Container className="mt-4 col-md-12" key={Section.id}>
            <Accordion defaultActiveKey="0">


              <div style={{display: "flex", justifyContent: "space-between", float: "right"}}>
                <Button bsPrefix="new-question-button" onClick={() => {store.dispatch(removeSection(Section.id))}}>
                    <AiOutlineDelete />
                </Button>
              </div>

              <Card>
                <Card.Header>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Form.Control style={{width: '50%',  display: "inline-block"}}  type="text" value={Section.title} placeholder='Please enter a title for this section of questions'  
                                                                                    onChange={e => {store.dispatch(updateSectionTitle(Section.id,e.target.value))}} ></Form.Control>
                    <CustomToggle eventKey="0"></CustomToggle>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                  
                  <NewQuestion Section = {Section} />                                                                                                                          

                  <NewQuestionButton Section = {Section}/>

                  </Card.Body>
                </Accordion.Collapse>
            </Card>


            </Accordion>
          </Container>
          
          
      ))}
    </>
    );
}   