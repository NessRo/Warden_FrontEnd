
const initialTemplateState = {id:'',
                                TemplateName:'',
                                created:'',
                                Sections:[]}


export function questionaireReducer_(state=initialTemplateState, action){
    switch (action.type) {
        case 'Questionaire/add-section': {
            return {...state,
                    Sections: [...state.Sections, action.Payload],}
        }
        
        case 'Questionaire/remove-section':{
            
            return{...state,
                    Sections: state.Sections.filter((t) => t.id !== action.Payload.id )}
        }

        case 'Questionaire/update-section-title':{
            return {...state,
            Sections: 
            state.Sections.map(t => {
                if (t.id === action.Payload.id) {
                    return {...t, title: action.Payload.title};
                } else {
                    return t;}
        })}}

        case 'Questionaire/set-template-name':{
            
            return{...state,
                    TemplateName:  action.Payload.name}
        }
    
        case 'Questionaire/Section/add-new-question':{
            return {...state,
                Sections: 
                state.Sections.map(t => {
                    if (t.id === action.Payload.id) {
                        return {...t, 
                                questions: [...t.questions,action.Payload.question_dict]};
                    } else {
                        return t;}
            })}
        }

        case 'Questionaire/Section/delete-question': {
            return {...state,
                    Sections: state.Sections.map(section => {
                        if (section.id === action.Payload.id) {
                            return {...section,
                                    questions: section.questions.filter((t) => t.id !== action.Payload.questionId)}
                                        }
                        else { return section}
                                    })}
        }

        case 'Questionaire/Section/add-dropdown-options': {
            return {...state,
                Sections: state.Sections.map(section => {
                    if (section.id === action.Payload.id) {
                        return {...section,
                                questions: section.questions.map(question =>{
                                    if(question.id === action.Payload.questionId) {
                                        const PayloadArray = action.Payload.text.split(',').map(item => item.trim());
                                        return{...question,
                                                options: PayloadArray}
                                    }
                                    else { return question}
                                })}
                                    }
                    else { return section}
                                })}
        }

        case 'Questionaire/Section/update-question-title': {
            return {...state,
                Sections: state.Sections.map(section => {
                    if (section.id === action.Payload.id) {
                        return {...section,
                                questions: section.questions.map(question =>{
                                    if(question.id === action.Payload.questionId) {
                                        return{...question,
                                                text: action.Payload.title}
                                    }
                                    else { return question}
                                })}
                                    }
                    else { return section}
                                })}
        }

        case 'Clear-State': {
            return  {id:'',
                    TemplateName:'',
                    created:'',
                    Sections:[]}
        }
                    
        
            
    }
    return state
}