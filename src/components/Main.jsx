import React, { Component } from "react"

import store from "../store"

import { getQuestion } from "../actions/questions"

import SideNavigation from "./SideNav"
import Header from "./Header"
import Loader from "./Loader"
import Footer from "./Footer"
import Welcome from "./Welcome"
import Question from "./Question"
import AnswerSelections from "./AnswerSelections"
import SubmitAnswerButton from "./SubmitAnswerButton"
import ExamCompletion from "./ExamCompletion"

import "../styles/journeys.scss"
import FollowUp from "./FollowUp"

import { BrowserRouter as Router, Route } from "react-router-dom"

class QuestionContent extends Component {
	componentDidMount() {
		store.dispatch(getQuestion(this.props.match.params.id))
	}
	render() {
		return (
			<main style={{ position: "relative" }}>
				{!this.props.parentProps.isLoading && !this.props.error && (
					<div className={"question-container" + (this.props.parentProps.examComplete ? " blurred" : "")}>
						{/* Question */}
						{this.props.parentProps.question && <Question question={this.props.parentProps.question} />}

						{/* Answers */}
						{this.props.parentProps.answers.length > 0 && <AnswerSelections {...this.props.parentProps} />}

						{/* Submit Answer Button */}
						{this.props.parentProps.question && (
							<div className="right-align">
								<SubmitAnswerButton {...this.props.parentProps} />
							</div>
						)}
					</div>
				)}

				{this.props.parentProps.examResults && <ExamCompletion className="zoom" {...this.props.parentProps} />}

				{this.props.parentProps.followUp && <FollowUp {...this.props.parentProps} />}

				{/* Loader */}
				{(this.props.parentProps.isLoading || this.props.parentProps.error) && (
					<Loader {...this.props.parentProps} />
				)}
			</main>
		)
	}
}

export default class Main extends Component {
	render() {
		return (
			<div className="container">
				<SideNavigation sideNavExpanded={this.props.sideNavExpanded} />

				<Header sideNavExpanded={this.props.sideNavExpanded} />
				<Router>
					<Route exact path="/" render={() => <Welcome />} />
					<Route path="/exam/:id" render={props => <QuestionContent {...props} parentProps={this.props} />} />
				</Router>

				<Footer />
			</div>
		)
	}
}
