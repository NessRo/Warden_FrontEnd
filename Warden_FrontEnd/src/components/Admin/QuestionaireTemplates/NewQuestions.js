import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";



const NewQuestions = (props) => {

    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    

    const handleQuestionDelete = () =>{
        console.log(props.current_idex)
        props.modify_questions(arrayRemove(props.questions_so_far,props.current_id))

    }

    return(

        <Form>
            <Row>
                <Col>
                  <Form.Control placeholder="Type in your question or request" />
                </Col>
                <Col xs="auto">
                    <Button bsPrefix="new-question-button" onClick={handleQuestionDelete}>
                      <AiOutlineDelete />
                    </Button>
                </Col>
            </Row>
        </Form>
        

    );

}


export default NewQuestions