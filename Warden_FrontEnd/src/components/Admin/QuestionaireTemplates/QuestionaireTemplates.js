import React, {useState} from 'react'
import './QuestionaireTemplates.css'
import { QuestionaireData } from './QuestionaireData';
import {nanoid} from 'nanoid';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const QuestionaireTemplates = () => {



  return (
     
    
    <>
    <Button variant="outline-primary" id="Create-new-questionaire-button">Create New</Button>{' '}

   
    <Table responsive>
      <thead>
        <tr>
          <th>
            Template ID
          </th>
          <th>
            Template Name
          </th>
          <th>
            Updated By
          </th>
          <th>
            Last Update
          </th>
        </tr>
      </thead>
      <tbody>
        {QuestionaireData.map((items) => <tr>
          <td>{items.Template_Id}</td>
          <td>{items.Template_name}</td>
          <td>{items.Updated_by}</td>
          <td>{items.Last_update}</td>
        </tr>)}
      </tbody>

    </Table></>
  );
}

export default QuestionaireTemplates;