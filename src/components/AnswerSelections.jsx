import React, { Component } from "react";
import PropTypes from "prop-types";

import Answer from "./Answer.jsx";

export default class AnswerSelections extends Component {
	static propTypes = {
		answers: PropTypes.array.isRequired
	};

	render() {
		return (
			<ul className="answerSelections">
				{this.props.answers.map((answer, index) => {
					return (
						<Answer
							{...this.props}
							answer={answer}
							selectAnswer={this.props.selectAnswer}
							key={index}
							selected={this.props.selectedAnswerId === answer.ID}
						/>
					);
				})}
			</ul>
		);
	}
}
