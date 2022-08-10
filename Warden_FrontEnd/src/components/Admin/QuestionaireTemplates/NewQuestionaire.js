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

const NewQuestionaire = () => {

   
    const [Name, setName] = useState("");


    const onNameChange = (val) => {
        setName(val);
      };


    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Form.Label>Template Name</Form.Label>
                            <EditableText onChange={onNameChange} val={Name} width="100%" />
                        </Col>
                    </Row>
                </Form>
            </Container>
            <div style={{ height: "50px" }}/>
            <Container>
                <Button type='submit'>New Section</Button>
            </Container>
        </div>
  )
}

export default NewQuestionaire