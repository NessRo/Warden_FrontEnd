import { updateQuestionLogic }  from '../actions';
import Form from 'react-bootstrap/Form';
import { store } from '../../../../store';



export default function ConditionalLogicToggle ({Section, question}) {

    const inputId = `toggle-switch-logic-${Section.id}-${question.id}`;

    return(
        <>
        
        <Form.Check
            type="switch"
            id={inputId}
            label="Conditional Logic"
            checked={question.logical}
            onChange={() => store.dispatch(updateQuestionLogic(Section.id,question.id))}
        />
        
        
        
        
        </>)}