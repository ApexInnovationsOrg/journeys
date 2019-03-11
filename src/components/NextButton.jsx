import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronCircleRight);

class NextButton extends Component {
	render() {
		return (
			<button
				className="primary"
				disabled={!this.props.selectedAnswerId || this.props.isLoading || this.props.error}
				onClick={this.props.submitAnswer.bind(null, this.props.selectedAnswerId)}
			>
				<span>Next</span>
				<FontAwesomeIcon icon="chevron-circle-right" />
			</button>
		);
	}
}

export default NextButton;
