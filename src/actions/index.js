import {
	BEGIN_LOADING,
	FINISH_LOADING,
	ADD_QUESTION,
	JUMP_TO_QUESTION,
	UPDATE_ANSWERS,
	SELECT_ANSWER,
	SHOW_ERROR
} from "./types";

export function beginLoading() {
	return {
		type: BEGIN_LOADING
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
