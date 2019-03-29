import React, { Component } from "react"

import { CSSTransition } from "react-transition-group"

import NextQuestionButton from "./NextQuestionButton"

export default class FollowUp extends Component {
	state = {
		animateIn: false
	}

	componentDidMount() {

		this.setState({
			animateIn: true
		})
	}
	render() {

		return (
			<div className="content-overlay translucent-dark">
				<CSSTransition classNames="followUp" in={this.state.animateIn} timeout={300} unmountOnExit>
					<div className="followUp">
						<div className="card padding-left-lg padding-right-lg margin-bottom-lg">
							<h2>Follow-Up</h2>

							{/* Follow-Up */}
							<div dangerouslySetInnerHTML={{ __html: this.props.followUp }} />
						</div>
						<div className="right-align">
							<NextQuestionButton {...this.props} />
						</div>
					</div>
				</CSSTransition>
			</div>
		)
	}
}
