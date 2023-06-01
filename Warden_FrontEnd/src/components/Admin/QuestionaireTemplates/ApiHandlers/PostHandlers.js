import axios from 'axios';

export const handleQuestionairePublish = (postData, loadingState, errorMessage, responseState, axiosSource, publishState, draftState, errorState, submitWarning, publishType) => {

    
    axiosSource.current = axios.CancelToken.source();

    const apiUrl = `${process.env.REACT_APP_BACKEND_API_URL}/questionaire_templates/append`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // any other headers
      },
      cancelToken: axiosSource.current.token
    };


    postData.tenant_id = 0
    postData.created_by = 'nassim rostane'
    postData.updated_by = 'nassim rostane'

    switch (publishType){
        case 'publish':
            postData.status = 'published'
            break
        case 'draft':
            postData.status = 'draft'
            break
        default:
            throw new Error("unrecognized publish type");
    }


    axios.post(apiUrl, postData, config)
      .then(response => {
        responseState(response.data);
        publishState(true);
        submitWarning(false);
        loadingState(false);
        switch (publishType){
            case 'publish':
                publishState(true);
                break
            case 'draft':
                draftState(true);
                break
            default:
                throw new Error("unrecognized publish type");
        };
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request cancelled:', error.message);
        } else {
            errorMessage(error);
            errorState(true);
            submitWarning(false);
            loadingState(false);
        }
      });
    
  };