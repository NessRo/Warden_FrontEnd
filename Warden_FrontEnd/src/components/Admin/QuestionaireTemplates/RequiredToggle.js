import { updateQuestionRequirement } from './actions';
import Form from 'react-bootstrap/Form';
import { store } from '../../../store';



export default function RequiredToggle ({Section, question}) {



    return(
        <>
        
        <Form.Check
            type="switch"
            id="toggle-switch"
            label="Required"
            checked={question.required}
            onChange={() => store.dispatch(updateQuestionRequirement(Section.id,question.id))}
        />
        
        
        
        
        </>)}