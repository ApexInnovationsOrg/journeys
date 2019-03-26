import React, { Component } from "react"

import { toString as _toString } from "lodash"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

library.add(faCircleNotch, faTimesCircle)

export default class Loader extends Component {
	render() {
		return (
			<div
				className={
					"content-overlay center-align " +
					(this.props.isLoading ? "translucent-dark white-text" : "translucent-dark")
				}
			>
				<div>
					{!this.props.isLoading && this.props.error && (
						<div className="red-text" style={{ maxWidth: "400px" }}>
							<FontAwesomeIcon icon="times-circle" size="5x" />
							<h3 className="padding-top-lg">{_toString(this.props.error)}</h3>
						</div>
					)}

					{this.props.isLoading && <FontAwesomeIcon icon="circle-notch" size="3x" spin />}

					<h3 className={"padding-top-lg " + (this.props.isLoading ? "white-text" : "black-text")}>
						{this.props.loadingStatus}
					</h3>
				</div>
			</div>
		)
	}
}
