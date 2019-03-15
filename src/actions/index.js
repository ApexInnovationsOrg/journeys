import {
	BEGIN_LOADING,
	FINISH_LOADING,
	ADD_QUESTION,
	JUMP_TO_QUESTION,
	UPDATE_ANSWERS,
	SELECT_ANSWER,
	SHOW_ERROR,
	FINISH_EXAM
} from "./types";

export function beginLoading(status = "") {
	return {
		type: BEGIN_LOADING,
		status
	};
}

export function finishLoading() {
	return {
		type: FINISH_LOADING
	};
}

export function showError(error = null) {
	return {
		type: SHOW_ERROR,
		error
	};
}

export function updateQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

export function jumpToQuestion(index) {
	return {
		type: JUMP_TO_QUESTION,
		index
	};
}

export function updateAnswers(answers) {
	return {
		type: UPDATE_ANSWERS,
		answers
	};
}

export function selectAnswer(answerId) {
	return {
		type: SELECT_ANSWER,
		answerId
	};
}

export function finishExam(examStatus) {
	return {
		type: FINISH_EXAM,
		examStatus
	};
}
