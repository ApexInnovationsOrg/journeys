import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import PropTypes from "prop-types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "../styles/exam-completion.scss";

library.add(faCheckCircle);

export default class ExamCompletion extends Component {
	static propTypes = {
		examStatus: PropTypes.shape({
			completed: PropTypes.bool.isRequired,
			score: PropTypes.number.isRequired,
			numberOfQuestions: PropTypes.number.isRequired
		}).isRequired
	};

	state = {
		animateIn: false
	};

	render() {
		const { animateIn } = this.state;

		setTimeout(() => {
			this.setState({
				animateIn: true
			});
		}, 300);

		const { score, numberOfQuestions } = this.props.examStatus;

		return (
			<div className="examCompletionOverlay">
				<CSSTransition
					classNames="checkmark"
					in={animateIn}
					timeout={300}
					unmountOnExit
					onExited={() => {
						this.setState({ animateIn: true });
					}}
				>
					<FontAwesomeIcon icon="check-circle" size="8x" className="checkmark green-text" />
				</CSSTransition>

				<CSSTransition classNames="message" in={animateIn} timeout={300} unmountOnExit>
					<h1 className="message padding-top-sm margin-bottom-sm">Exam Completed!</h1>
				</CSSTransition>

				<CSSTransition classNames="message" in={animateIn} timeout={300} unmountOnExit>
					<h3 className="translucent-dark-text margin-top-sm margin-bottom-lg padding-bottom-md">
						You answered {score} questions correctly out of a total of {numberOfQuestions} questions.
					</h3>
				</CSSTransition>

				<CSSTransition classNames="message" in={animateIn} timeout={300} unmountOnExit>
					<a href="/" className="btn primary">Go Somewhere</a>
				</CSSTransition>
			</div>
		);
	}
}
