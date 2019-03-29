import React, { Component } from "react"

import store from "../store"

import { getQuestion } from "../actions/questions"

import SideNavigation from "./SideNav"
import Header from "./Header"
import Loader from "./Loader"
import Footer from "./Footer"
import Question from "./Question"
import AnswerSelections from "./AnswerSelections"
import SubmitAnswerButton from "./SubmitAnswerButton"
import ExamCompletion from "./ExamCompletion"

import "../styles/journeys.scss"
import FollowUp from "./FollowUp"

export default class Main extends Component {
	componentDidMount() {
		store.dispatch(getQuestion())
	}

	render() {
		return (
			<div className="container">
				<SideNavigation sideNavExpanded={this.props.sideNavExpanded} />

				<Header sideNavExpanded={this.props.sideNavExpanded} />

				<main style={{ position: "relative" }}>
					{!this.props.isLoading && !this.props.error && (
						<div className={"question-container" + (this.props.examComplete ? " blurred" : "")}>
							{/* Question */}
							{this.props.question && <Question question={this.props.question} />}

							{/* Answers */}
							{this.props.answers.length > 0 && <AnswerSelections {...this.props} />}

							{/* Submit Answer Button */}
							{this.props.question && (
								<div className="right-align">
									<SubmitAnswerButton {...this.props} />
								</div>
							)}
						</div>
					)}

					{this.props.examResults && <ExamCompletion className="zoom" {...this.props} />}

					{this.props.followUp && <FollowUp {...this.props} />}

					{/* Loader */}
					{(this.props.isLoading || this.props.error) && <Loader {...this.props} />}
				</main>

				<Footer />
			</div>
		)
	}
}
