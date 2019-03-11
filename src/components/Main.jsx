import React, { Component } from "react";

import store from "../store";

import { getQuestion } from "../actions/questions";

import SideNavigation from "./SideNav";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";
import Question from "./Question";
import AnswerSelections from "./AnswerSelections";
import NextButton from "./NextButton";

import "../styles/journeys.scss";

export default class Main extends Component {
	componentDidMount() {
		store.dispatch(getQuestion());
	}

	render() {
		const currentQuestion = this.props.questions[this.props.questions.length - 1];

		return (
			<div className="container">
				<SideNavigation />

				<Header />

				<main style={{ position: "relative" }}>
					{/* Loader */}
					{(this.props.isLoading || this.props.error) && <Loader {...this.props} />}

					{!this.props.isLoading && !this.props.error && (
						<div style={{ margin: "0 auto", maxWidth: "1000px", padding: "1em" }}>
							{/* Question */}
							{currentQuestion && <Question question={currentQuestion} />}

							{/* Answers */}
							{this.props.answers.length > 0 && <AnswerSelections {...this.props} />}

							{/* Next Button */}

							<div className="right-align">
								<NextButton {...this.props} />
							</div>
						</div>
					)}
				</main>

				<Footer />
			</div>
		);
	}
}
