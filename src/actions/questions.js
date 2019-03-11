import { beginLoading, finishLoading, showError, updateQuestion, updateAnswers } from "./";

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export function getAnswers() {
	return dispatch => {
		dispatch(beginLoading());
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
		dispatch(beginLoading());
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
		dispatch(beginLoading());
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

				dispatch(updateQuestion());

				dispatch(getAnswers());

				return json.data;
			})
			.catch(error => dispatch(finishLoading(error)));
	};
}
