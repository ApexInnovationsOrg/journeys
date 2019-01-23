import {
    FETCH_QUESTION_BEGIN, 
    FETCH_QUESTION_SUCCESS, 
    FETCH_QUESTION_FAILURE
} from './types';
import {getAnswers} from './answerActions';

export function getQuestion(){
    return dispatch => {
        dispatch(fetchQuestionBegin());
        return fetch("https://devbox2.apexinnovations.com/JourneyAPI/",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                controller:'Exam',
                action:'getQuestion'
            })
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => { 
                console.log('get question ',json);
                if(!json.success) 
                {
                    dispatch(fetchQuestionFailure(json.errormsg));
                }
                else
                {
                    dispatch(fetchQuestionSuccess(json.data[0]));
                    dispatch(getAnswers());
                    return json.data[0];
                }
            })
            .catch(error => dispatch(fetchQuestionFailure(error)));

    }
}

function handleErrors(response)
{
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const fetchQuestionBegin = () => ({
    type: FETCH_QUESTION_BEGIN
  });
  
  export const fetchQuestionSuccess = question => ({
    type: FETCH_QUESTION_SUCCESS,
    payload: { question }
  });
  
  export const fetchQuestionFailure = error => ({
    type: FETCH_QUESTION_FAILURE,
    payload: { error }
  });