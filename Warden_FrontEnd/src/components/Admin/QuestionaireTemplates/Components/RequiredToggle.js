import { updateQuestionRequirement } from '../actions';
import Form from 'react-bootstrap/Form';
import { store } from '../../../../store';



export default function RequiredToggle ({Section, question}) {

    const inputId = `toggle-switch-required-${Section.id}-${question.id}`;

    return(
        <>
        
        <Form.Check
            type="switch"
            id={inputId}
            label="Required"
            checked={question.required}
            onChange={() => store.dispatch(updateQuestionRequirement(Section.id,question.id))}
        />
        
        
        
        
        </>)}