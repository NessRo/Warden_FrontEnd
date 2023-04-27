import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../../../../store';
import { addNewQuestion } from '../actions';


export  function NewQuestionButton({Section}){
    
    
    
    return(
        <>
        <DropdownButton
                  key='end'
                  id={`dropdown-button-drop-NewQuestion`}
                  drop='end'
                  variant="primary"
                  title={`New Question`}
                  size='sm'
                >
                  <Dropdown.Item eventKey="1" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        type: 'free-text-small',
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        content:{text:''}
                                                                                                        }))}} >Freetext Field - Small</Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'free-text-large',
                                                                                                        content:{text:''}}))}} >Freetext Field - Large</Dropdown.Item>
                  
                  <Dropdown.Divider />

                  <Dropdown.Item eventKey="3" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'date-field',
                                                                                                        content:{date: ''}}))}} >Date Field</Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item eventKey="4" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'drop-down',
                                                                                                        conditional_question:{},
                                                                                                        content:{text:'',options:[]}
                                                                                                        }))}} >Dropdown Field</Dropdown.Item>
                  <Dropdown.Item eventKey="5" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'selection',
                                                                                                        conditional_question:{},
                                                                                                        content:{options:[]}}))}} >Selection Field</Dropdown.Item>
                  <Dropdown.Item eventKey="6" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        conditional_question:{},
                                                                                                        type: 'multi-selection',
                                                                                                        content:{options:[]}}))}} >multi-Selection Field</Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item eventKey="7" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'Address-Block',
                                                                                                        content:{address_1:'',
                                                                                                                address_2: '',
                                                                                                                country:'',
                                                                                                                city:'',
                                                                                                                state:'',
                                                                                                                zip:'',}
                                                                                                        }))}} >Address block</Dropdown.Item>
                  <Dropdown.Item eventKey="8" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'Contact-Block',
                                                                                                        content:{Name:'',
                                                                                                                email:'',
                                                                                                                phone_number:''}}))}} >Contact Block</Dropdown.Item>
                </DropdownButton>
        
        </>
    )
}

export function NewSubQuestionButton({Section}){
    
    
    
    return(
        <>
        <DropdownButton
                  key='end'
                  id={`dropdown-button-drop-NewSubQuestion`}
                  drop='end'
                  variant="primary"
                  title={`New Sub-Question`}
                  size='sm'
                >
                  <Dropdown.Item eventKey="1" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        type: 'free-text-small',
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        content:{text:''}
                                                                                                        }))}} >Freetext Field - Small</Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'free-text-large',
                                                                                                        content:{text:''}}))}} >Freetext Field - Large</Dropdown.Item>
                  
                  <Dropdown.Divider />

                  <Dropdown.Item eventKey="3" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'date-field',
                                                                                                        content:{date: ''}}))}} >Date Field</Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item eventKey="4" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'drop-down',
                                                                                                        conditional_question:{},
                                                                                                        content:{text:'',options:[]}
                                                                                                        }))}} >Dropdown Field</Dropdown.Item>
                  <Dropdown.Item eventKey="5" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'selection',
                                                                                                        conditional_question:{},
                                                                                                        content:{options:[]}}))}} >Selection Field</Dropdown.Item>
                  <Dropdown.Item eventKey="6" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        conditional_question:{},
                                                                                                        type: 'multi-selection',
                                                                                                        content:{options:[]}}))}} >multi-Selection Field</Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item eventKey="7" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'Address-Block',
                                                                                                        content:{address_1:'',
                                                                                                                address_2: '',
                                                                                                                country:'',
                                                                                                                city:'',
                                                                                                                state:'',
                                                                                                                zip:'',}
                                                                                                        }))}} >Address block</Dropdown.Item>
                  <Dropdown.Item eventKey="8" onClick={() => {store.dispatch(addNewQuestion(Section.id,{id:uuidv4(),
                                                                                                        section_id:Section.id,
                                                                                                        required: false,
                                                                                                        logical:false,
                                                                                                        type: 'Contact-Block',
                                                                                                        content:{Name:'',
                                                                                                                email:'',
                                                                                                                phone_number:''}}))}} >Contact Block</Dropdown.Item>
                </DropdownButton>
        
        </>
    )
}