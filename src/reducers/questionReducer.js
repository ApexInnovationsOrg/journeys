import { FETCH_QUESTION_BEGIN,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_FAILURE} from '../actions/types';

const initialState = {
    ID:"1",
    QuestionText:'Questions booting up',
    error:'null',
    loading:false
}

export default function(state=initialState,action){
    switch(action.type)
    {             
        case FETCH_QUESTION_BEGIN:
                return {
                    ...state,
                    loading:true,
                    error:null,
                    question:{

                    }
                }
        case FETCH_QUESTION_SUCCESS:
                return Object.assign({},action.payload.question,{
                    loading:false,
                    error:null,
                    question:state
                })

        case FETCH_QUESTION_FAILURE:
                return {
                    ...state,
                    loading:false,
                    error:action.payload.error,
                    question:{}
                }
        default:
            return state;
            
    }
}