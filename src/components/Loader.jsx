import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch, faTimesCircle);

class Loader extends Component {
	render() {
		return (
			<div className={"loader " + (this.props.isLoading ? "translucent-dark white-text" : "translucent-dark")}>
				{!this.props.isLoading && this.props.error && (
					<div className="red-text">
						<FontAwesomeIcon icon="times-circle" size="3x" />
						<p style={{ fontWeight: "bold" }}>{this.props.error}</p>
					</div>
				)}

				{this.props.isLoading && <FontAwesomeIcon icon="circle-notch" size="3x" spin />}
			</div>
		);
	}
}

export default Loader;
