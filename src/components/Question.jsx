import React, { Component } from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"

import { truncate as _truncate } from "lodash"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons"

import Scenario from "./Scenario"

import "../styles/question.scss"

library.add(faExpand, faCompress)

export default class Question extends Component {
	static propTypes = {
		question: PropTypes.shape({
			ID: PropTypes.string.isRequired,
			QuestionText: PropTypes.string.isRequired,
			Media: PropTypes.string,
			Content: PropTypes.arrayOf(
				PropTypes.shape({
					type: PropTypes.string.isRequired,
					title: PropTypes.string.isRequired,
					text: PropTypes.string.isRequired
				})
			)
		}).isRequired
	}

	state = {
		questionExpanded: false
	}

	render() {
		// FIXME:  get rid of these once question object is fully fleshed out coming from the backend
		const MAX_QUESTION_LENGTH = 500

		return (
			<div>
				{/* Scenario */}
				<CSSTransition in={this.state.questionExpanded} timeout={400} classNames="media">
					<Scenario question={this.props.question} className="media" />
				</CSSTransition>

				{/* Text */}
				<CSSTransition in={this.state.questionExpanded} timeout={400} classNames="question">
					<div style={{ position: "relative" }} className="question card margin-top-lg flexed">
						<div style={{ overflowY: "auto", paddingRight: "2.5em" }}>
							<div className="margin-sm">
								{/* truncated */}
								{!this.state.questionExpanded && (
									<h3
										dangerouslySetInnerHTML={{
											__html: _truncate(this.props.question.QuestionText, {
												length: MAX_QUESTION_LENGTH
											})
										}}
									/>
								)}

								{/* full */}
								{this.state.questionExpanded && (
									<div dangerouslySetInnerHTML={{ __html: this.props.question.QuestionText }} />
								)}
							</div>
						</div>
						{this.props.question.QuestionText.length > MAX_QUESTION_LENGTH && (
							<button
								title="Expand or collapse question"
								style={{ position: "absolute", right: "12px" }}
								className="btn flat primary"
								onClick={() => this.setState({ questionExpanded: !this.state.questionExpanded })}
							>
								<FontAwesomeIcon icon={this.state.questionExpanded ? "compress" : "expand"} size="lg" />
							</button>
						)}
					</div>
				</CSSTransition>
			</div>
		)
	}
}
