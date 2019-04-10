import React, { Component } from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

library.add(faChevronCircleRight)

export default class NextQuestionButton extends Component {
	render() {
		return (
			<button
				className="primary"
				onClick={
					this.props.examComplete
						? this.props.getExamResults.bind(null)
						: this.props.getQuestion.bind(null, this.props.examID)
				}
			>
				<span>{this.props.examComplete ? "Finish Exam" : "Next Question"}</span>
				<FontAwesomeIcon icon="chevron-circle-right" />
			</button>
		)
	}
}
