import ConnectorLines from "../../../../SVGs/Lines";
import { store } from "../../../../store";
import { addConditionType, addConditionValue } from "../actions";
import { GiLogicGateNand } from "react-icons/gi";
import { Form } from "react-bootstrap";
import { NewSubQuestionButton } from "./NewQuestionButton";

export default function ConditionLogicFlow ({question,section}) {

    

    return(
        <>
        
        <div style={{ paddingTop: '8px' }}/>
        <div>
            <div className="flex-container">
                <GiLogicGateNand
                size={50}
                style={{ strokeWidth: '10px', stroke: 'black', fill: 'none' }}
                />
                <ConnectorLines />
                <span style={{ marginRight: '8px' }}>IF {question.type}</span>
                
               
                    <Form.Group>
                        <Form.Select onChange={(e) => store.dispatch(addConditionType(section.id,question.id,e.target.value))}>
                            <option  defaultValue={'Select a logical operator'}>Select a logical operator</option>
                            <option >Equals</option>
                            <option >Does not equal</option>
                        </Form.Select>
                    </Form.Group>
                

                <ConnectorLines />

                
                    <Form.Group>
                        <Form.Select onChange={(e) => store.dispatch(addConditionValue(section.id,question.id,e.target.value))}>
                            <option  defaultValue={'Select value from options'}>Select a value</option>
                            {question.content.options.map((option, index) => {
                                 return <option key={index} value={option}>{option}</option>;   
                            } )}
                        </Form.Select>
                    </Form.Group>
              

                <span style={{ marginLeft: '8px', marginRight: '8px'}}>THEN</span>

                <NewSubQuestionButton Section={section} Question={question} />


                
            </div>
        </div>
        
        
        
        
        </>)}