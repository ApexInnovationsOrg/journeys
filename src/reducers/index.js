import { combineReducers } from 'redux';
import answerReducer from './answerReducer';
import questionReducer from './questionReducer';
import activeAnswerReducer from './activeAnswerReducer';
import submitAnswerReducer from './submitAnswerReducer';

export default combineReducers({
   answers: answerReducer,
   activeAnswer: activeAnswerReducer,
   question: questionReducer,
   answeredQuestions: submitAnswerReducer
})