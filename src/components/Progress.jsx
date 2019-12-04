import React, { Component } from "react";

export class ProgressIndicator extends Component {

	render() {
		console.log('progress being rendered',this.props.question);
		return (
			<div className="progressContainer">
				<div className="progressFiller" style={{width:`${this.props.question.progress*100}%`}}/>
			</div>
		);
	}
}
 