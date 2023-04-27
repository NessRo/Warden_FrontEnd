import ConnectorLines from "../../../../SVGs/Lines";
import { GiLogicGateNand } from "react-icons/gi";
import { Form } from "react-bootstrap";
import { NewSubQuestionButton } from "./NewQuestionButton";

export default function ConditionLogicFlow ({question}) {

    

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
                
                <Form>
                    <Form.Group>
                        <Form.Select>
                            <option  disabled selected>Select a logical operator</option>
                            <option >Equals</option>
                            <option >Does not equal</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                <ConnectorLines />

                <Form>
                    <Form.Group>
                        <Form.Select>
                            <option  disabled selected>Select a logical operator</option>
                            <option >Equals</option>
                            <option >Does not equal</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                <span style={{ marginLeft: '8px', marginRight: '8px'}}>THEN</span>

                <NewSubQuestionButton />


                
            </div>
        </div>
        
        
        
        
        </>)}