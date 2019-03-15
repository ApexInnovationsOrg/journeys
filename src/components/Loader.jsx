import React, { Component } from "react";

import { toString as _toString } from "lodash";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch, faTimesCircle);

class Loader extends Component {
	render() {
		return (
			<div className={"loader " + (this.props.isLoading ? "translucent-dark white-text" : "translucent-dark")}>
				<div>
					{!this.props.isLoading && this.props.error && (
						<div className="red-text" style={{ maxWidth: "400px" }}>
							<FontAwesomeIcon icon="times-circle" size="3x" />
							<p style={{ fontWeight: "bold" }}>{_toString(this.props.error)}</p>
						</div>
					)}

					{this.props.isLoading && <FontAwesomeIcon icon="circle-notch" size="3x" spin />}

					<h3 className={"padding-top-lg " + (this.props.isLoading ? "white-text" : "black-text")}>{this.props.loadingStatus}</h3>
				</div>
			</div>
		);
	}
}

export default Loader;
