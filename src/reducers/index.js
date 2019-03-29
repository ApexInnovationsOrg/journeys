import {
	BEGIN_LOADING,
	FINISH_LOADING,
	SHOW_ERROR,
	SELECT_ANSWER,
	UPDATE_EXAM_RESULTS,
	UPDATE_EXAM_COMPLETE,
	UPDATE_FOLLOW_UP,
	UPDATE_QUESTION
} from "../actions/types"

import { combineReducers } from "redux"

import answers from "./answers"

const initialState = {
	// the last question in the questions array is always the "current" one
	sideNavExpanded: false,
	isMuted: false,
	question: null,
	answers: [],
	selectedAnswerId: "",
	isLoading: false,
	loadingStatus: "",
	error: null,
	followUp: "",
	examComplete: false,
	examResults: null /*{
		score: 0,
		numberOfQuestions: 0
	}*/
}

export default combineReducers({
	// This maps the state out to an object and then uses the spread operator to create basic reducers for each property in the initial state. Yeah, I know, right?
	...Object.assign({}, ...Object.keys(initialState).map(key => ({ [key]: (state = initialState[key]) => state }))),

	// non-basic reducers below
	question: (state = initialState.question, action) => {
		if (action.type === UPDATE_QUESTION) return action.question

		return state
	},

	isLoading: (state = initialState.isLoading, action) => {
		switch (action.type) {
			case BEGIN_LOADING:
				return true
			case FINISH_LOADING:
				return false
			default:
				return state
		}
	},

	loadingStatus: (state = initialState.isLoading, action) => {
		switch (action.type) {
			case BEGIN_LOADING:
				return action.status
			case FINISH_LOADING:
				return ""
			default:
				return state
		}
	},

	error: (state = initialState.error, action) => {
		if (action.type === SHOW_ERROR) return action.error

		return state
	},

	selectedAnswerId: (state = initialState.selectedAnswerId, action) => {
		if (action.type === SELECT_ANSWER) return action.answerId

		if (action.type === UPDATE_QUESTION) return "";

		return state
	},

	followUp: (state = initialState.followUp, action) => {
		if (action.type === UPDATE_FOLLOW_UP) {
			return action.followUp
		}

		return state
	},

	examComplete: (state = initialState.examComplete, action) => {
		if (action.type === UPDATE_EXAM_COMPLETE) return action.examComplete

		return state
	},

	examResults: (state = initialState.examResults, action) => {
		if (action.type === UPDATE_EXAM_RESULTS)
			return {
				...action.examResults
			}
		return state
	},

	answers
})
