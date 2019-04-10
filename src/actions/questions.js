import {
	get as _get,
	filter as _filter,
	first as _first,
	map as _map,
	find as _find,
	shuffle as _shuffle
} from "lodash"

import {
	beginLoading,
	finishLoading,
	showError,
	updateQuestion,
	updateAnswers,
	updateFollowUp,
	updateexamResults,
	updateExamResults
} from "./"

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText)
	}
	return response
}

export function getAnswers() {
	return dispatch => {
		dispatch(beginLoading("Loading possible answers"))

		return fetch(process.env.REACT_APP_API_LOCATION, {
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
				dispatch(finishLoading())

				if (!json.success) return dispatch(showError(json.errormsg))

				dispatch(updateAnswers(_shuffle(json.data)))

				return json.data
			})
			.catch(error => dispatch(showError(error)))
	}
}

export function getQuestion(treeID) {
	return dispatch => {
		dispatch(beginLoading("Loading next question"))

		dispatch(updateFollowUp())

		return fetch(process.env.REACT_APP_API_LOCATION, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				controller: "Exam",
				action: "getQuestion",
				treeID: treeID
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(finishLoading())

				if (!json.success) return dispatch(showError(json.errormsg))

				let question = parseQuestion(_get(json, "data"))

				if (question === undefined) {
					// no question provided
					dispatch(showError("No questions have been provided for this exam."))
				} else {
					dispatch(updateQuestion(question))
					dispatch(getAnswers())
				}

				return json.data[0]
			})
			.catch(error => dispatch(showError(error)))
	}
}

function parseQuestion(questionJSON) {
	let question = _first(_get(questionJSON, "question"))

	if (question === undefined) return

	let questionContent = _map(_get(questionJSON, "content"), content => {
		let parsedContent = JSON.parse(content)

		return {
			...parsedContent,
			type: parsedContent.type,
			label: parsedContent.title,
			content: parsedContent.text
		}
	})

	// get the master media
	let media = _find(questionContent, media => {
		return media.type === "masterMedia"
	})

	if (media !== undefined) question.Media = media.src

	question.sections = _filter(questionContent, {
		type: "bubble"
	})

	return question
}
export function submitAnswer(answerId) {
	return dispatch => {
		dispatch(beginLoading("Submitting answer"))

		return fetch(process.env.REACT_APP_API_LOCATION, {
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
				dispatch(finishLoading())

				if (!json.success) return dispatch(showError(json.errormsg))

				// get the follow-up text
				dispatch(updateFollowUp(_get(json, "data.followUp")))

				dispatch(updateexamResults(_get(json, "data.examComplete")))
			})
			.catch(error => dispatch(showError(error)))
	}
}

export function getExamResults() {
	return dispatch => {
		dispatch(beginLoading("Loading exam results"))

		dispatch(updateFollowUp())

		return fetch(process.env.REACT_APP_API_LOCATION, {
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
				dispatch(finishLoading())

				if (!json.success) return dispatch(showError(json.errormsg))

				dispatch(updateExamResults(json.data))
			})
			.catch(error => dispatch(showError(error)))
	}
}
