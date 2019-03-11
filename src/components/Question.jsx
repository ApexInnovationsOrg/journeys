import React, { Component } from "react";
import PropTypes from "prop-types";

import Scenario from "./Scenario";

import "../styles/question.scss";

export default class Question extends Component {
	static propTypes = {
		question: PropTypes.shape({
			ID: PropTypes.string.isRequired,
			QuestionText: PropTypes.string.isRequired,
			Media: PropTypes.string.isRequired,
			sections: PropTypes.arrayOf(
				PropTypes.shape({
					label: PropTypes.string.isRequired,
					content: PropTypes.string.isRequired
				})
			)
		}).isRequired
	};

	render() {
		// FIXME:  get rid of these once question object is fully fleshed out coming from the backend
		this.props.question.Media = "https://i.ytimg.com/vi/mPF296tFRKo/hqdefault.jpg;";
		this.props.question.sections = [
			{
				label: "Situation",
				content:
					"This is the situation, fam. I say things. You better believe I say things. Fo shizzle, my glimglam. What is happening, broseph."
			},
			{
				label: "Background",
				content:
					"Yo, this is the background, homie. There will never be another background like this background, my glimglam. Holla at ya boi."
			}
		];

		return (
			<div>
				{/* Scenario */}
				<Scenario question={this.props.question} />

				{/* Text */}
				<div className="card margin-top-lg">
					<h3>{this.props.question.QuestionText}</h3>
				</div>
			</div>
		);
	}
}
