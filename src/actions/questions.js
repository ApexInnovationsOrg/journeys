import { get as _get } from "lodash";

import { beginLoading, finishLoading, showError, updateQuestion, updateAnswers, finishExam } from "./";

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export function getAnswers() {
	return dispatch => {
		dispatch(beginLoading("Loading possible answers"));

		return fetch("https://devbox2.apexinnovations.com/JourneyAPI/", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				controller: "Exam",
				action: "getAnswers"
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(finishLoading());

				if (!json.success) return dispatch(showError(json.errormsg));

				dispatch(updateAnswers(json.data));

				return json.data;
			})
			.catch(error => dispatch(showError(error)));
	};
}

export function getQuestion() {
	return dispatch => {
		dispatch(beginLoading("Loading next question"));

		return fetch("https://devbox2.apexinnovations.com/JourneyAPI/", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				controller: "Exam",
				action: "getQuestion"
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(finishLoading());

				if (!json.success) return dispatch(showError(json.errormsg));

				dispatch(updateQuestion(json.data[0]));

				dispatch(getAnswers());

				return json.data[0];
			})
			.catch(error => dispatch(showError(error)));
	};
}

export function submitAnswer(answerId) {
	return dispatch => {
		dispatch(beginLoading("Submitting answer"));

		return fetch("https://devbox2.apexinnovations.com/JourneyAPI/", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				controller: "Exam",
				action: "submitAnswer",
				data: answerId
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(finishLoading());

				if (!json.success) return dispatch(showError(json.errormsg));

				// either finish the exam or load the next question
				dispatch(_get(json, "data.examComplete") ? getExamResults() : getQuestion());
			})
			.catch(error => dispatch(showError(error)));
	};
}

export function getExamResults() {
	return dispatch => {
		dispatch(beginLoading("Loading exam results"));

		return fetch("https://devbox2.apexinnovations.com/JourneyAPI/", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				controller: "Exam",
				action: "getExamResults"
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(finishLoading());

				if (!json.success) return dispatch(showError(json.errormsg));

				dispatch(finishExam(json.data));
			})
			.catch(error => dispatch(showError(error)));
	};
}
