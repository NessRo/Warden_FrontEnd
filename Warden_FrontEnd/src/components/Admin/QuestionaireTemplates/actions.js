import { v4 as uuidv4 } from 'uuid';

export const updateDropdownOptionProperty = (sectionId, questionId, optionId, propertyName, propertyValue) => {
    return {
      type: 'update-dropdown-option-property',
      payload: {
        sectionId,
        questionId,
        optionId,
        propertyName,
        propertyValue,
      },
    };
  };

export const setTemplateName = (name) => {
    return {
        type: 'Questionaire/set-template-name',
        Payload:{
            name,
        },  
    }
};

export const setTemplateId = () => {
    return {
        type: 'Questionaire/set-template-id',
        Payload:{
            id:uuidv4(),
        },  
    }
};

export const addNewSection = (title,template_id) => {
    return {
        type: 'Questionaire/add-section',
        Payload:{
            id: uuidv4(),
            template_id,
            title,
            questions: [],
        },  
    }
};

export const removeSection = (id) => {
    return {
        type: 'Questionaire/remove-section',
        Payload:{
            id,
        },  
    }
};

export const updateSectionTitle = (id,title) => {
    return {
        type: 'Questionaire/update-section-title',
        Payload:{
            id,
            title,
        },  
    }
};

export const updateQuestionaireTitle = (title) => {
    return {
        type: 'Questionaire/update-questionaire-title',
        Payload:{
            title,
        },  
    }
};

export const addNewQuestion = (sectionId,question_dict) => {
    return {
        type: 'Questionaire/Section/add-new-question',
        Payload:{
            id: sectionId,
            question_dict
        },  
    }
};

export const deleteQuestion = (sectionId,questionId) => {
    return {
        type: 'Questionaire/Section/delete-question',
        Payload:{
            id: sectionId,
            questionId
        },  
    }
};

export const addDropdownOptions = (sectionId,questionId,text) => {
    return {
        type: 'Questionaire/Section/add-dropdown-options',
        Payload:{
            id: sectionId,
            questionId,
            text
        },  
    }
};

export const updateQuestionTitle = (sectionId,questionId,title) => {
    return {
        type: 'Questionaire/Section/update-question-title',
        Payload:{
            id: sectionId,
            questionId,
            title
        },  
    }
};

export const updateQuestionRequirement = (sectionId,questionId) => {
    return {
        type: 'Questionaire/Section/update-question-requirement',
        Payload:{
            id: sectionId,
            questionId,
        },  
    }
};

export const clearState = () =>{
    return{
        type: 'Clear-State'
    }
}