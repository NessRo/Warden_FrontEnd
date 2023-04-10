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

export const addNewSection = (title) => {
    return {
        type: 'Questionaire/add-section',
        Payload:{
            id: uuidv4(),
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