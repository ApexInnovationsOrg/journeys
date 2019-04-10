import React, { Component } from "react"

export default class Welcome extends Component {
	render() {
		return (
			<main style={{ position: "relative" }} className="valign-container center-align">
				<div>
					<h1 className="primary-text" style={{ fontSize: "3em" }}>
						Welcome to Journeys!
					</h1>
					<h3>
						If you're seeing this, it's likely because you navigated here without an exam being specified.
					</h3>
				</div>
			</main>
		)
	}
}
