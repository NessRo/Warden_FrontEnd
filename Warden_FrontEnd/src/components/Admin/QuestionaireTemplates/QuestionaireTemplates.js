import React, {useState} from 'react'
import './QuestionaireTemplates.css'
import { QuestionaireData } from './QuestionaireData';
import {nanoid} from 'nanoid';
import Table from 'react-bootstrap/Table';

const QuestionaireTemplates = () => {

  const [addformdata, setaddformdata] = useState({
    Template_name: '',
    Updated_by: '',
    Last_update: ''

  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addformdata};
    newFormData[fieldName] = fieldValue;

    setaddformdata(newFormData)
  };


  return (

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

    </Table>


    // <div className='QuestionaireTemplatesTable'>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Template name</th>
    //         <th>Updated by</th>
    //         <th>Last update</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {QuestionaireData.map((items) => <tr>
    //         <td>{items.Template_name}</td>
    //         <td>{items.Updated_by}</td>
    //         <td>{items.Last_update}</td>
    //       </tr>)}
    //     </tbody>
    //   </table>

    //   <h2>add a template</h2>
    //   <form>
    //     <input type = 'text' name="Template_name" required="required" onChange={handleAddFormChange}></input>
    //     <input type = 'text' name="Updated_by" required="required" onChange={handleAddFormChange}></input>
    //     <input type = 'text' name="Last_update" required="required" onChange={handleAddFormChange}></input>
    //     <button type="submit">Add new</button>
    //   </form>
    // </div>
  );
}

export default QuestionaireTemplates;