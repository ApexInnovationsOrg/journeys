import {
	BEGIN_LOADING,
	FINISH_LOADING,
	UPDATE_QUESTION,
	UPDATE_ANSWERS,
	SELECT_ANSWER,
	UPDATE_FOLLOW_UP,
	SHOW_ERROR,
	UPDATE_EXAM_COMPLETE,
	UPDATE_EXAM_RESULTS
} from "./types"

export function beginLoading(status = "") {
	return {
		type: BEGIN_LOADING,
		status
	}
}

export function finishLoading() {
	return {
		type: FINISH_LOADING
	}
}

export function showError(error = null) {
	return {
		type: SHOW_ERROR,
		error
	}
}

export function updateQuestion(question = null) {
	return {
		type: UPDATE_QUESTION,
		question
	}
}

export function updateAnswers(answers) {
	return {
		type: UPDATE_ANSWERS,
		answers
	}
}

export function selectAnswer(answerId) {
	return {
		type: SELECT_ANSWER,
		answerId
	}
}

export function updateexamResults(examComplete) {
	return {
		type: UPDATE_EXAM_COMPLETE,
		examComplete
	}
}

export function updateExamResults(examResults = {
	completed: false
}) {
	return {
		type: UPDATE_EXAM_RESULTS,
		examResults
	}
}

export function updateFollowUp(followUp = "") {
	return {
		type: UPDATE_FOLLOW_UP,
		followUp
	}
}
