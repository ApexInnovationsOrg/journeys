import { BEGIN_LOADING, FINISH_LOADING, SHOW_ERROR, SELECT_ANSWER, FINISH_EXAM } from "../actions/types";

import { combineReducers } from "redux";

import questions from "./questions";
import answers from "./answers";

const initialState = {
	// the last question in the questions array is always the "current" one
	questions: [],
	answers: [],
	selectedAnswerId: "",
	isLoading: false,
	loadingStatus: "",
	error: null,
	examStatus: {
		completed: false,
		score: 0,
		numberOfQuestions: 0
	}
};

export default combineReducers({
	// This maps the state out to an object and then uses the spread operator to create basic reducers for each property in the initial state. Yeah, I know, right?
	...Object.assign({}, ...Object.keys(initialState).map(key => ({ [key]: (state = initialState[key]) => state }))),

	// non-basic reducers below
	isLoading: (state = initialState.isLoading, action) => {
		switch (action.type) {
			case BEGIN_LOADING:
				return true;
			case FINISH_LOADING:
				return false;
			default:
				return state;
		}
	},
	loadingStatus: (state = initialState.isLoading, action) => {
		switch (action.type) {
			case BEGIN_LOADING:
				return action.status;
			case FINISH_LOADING:
				return "";
			default:
				return state;
		}
	},
	error: (state = initialState.error, action) => {
		if (action.type === SHOW_ERROR) return action.error;

		return state;
	},
	selectedAnswerId: (state = initialState.selectedAnswerId, action) => {
		if (action.type === SELECT_ANSWER) return action.answerId;

		return state;
	},

	examStatus: (state = initialState.examStatus, action) => {
		if (action.type === FINISH_EXAM) {
			return {
				...action.examStatus,
				completed: true
			};
		}

		return state;
	},

	questions,
	answers
});
