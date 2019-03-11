import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Answer extends Component {
	static propTypes = {
		answer: PropTypes.shape({
			ID: PropTypes.string.isRequired,
			AnswerText: PropTypes.string.isRequired
		})
	};

	render() {
		return (
			<li
				className={"answer" + (this.props.selected ? " selected" : "")}
				disabled={this.props.selectedAnswerId === this.props.answer.ID}
				onClick={this.props.selectAnswer.bind(null, this.props.answer.ID)}
			>
				{this.props.answer.AnswerText}
			</li>
		);
	}
}
