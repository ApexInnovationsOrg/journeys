import React, { Component } from "react"

import logo from "../apex_logo_small.png"

import "../styles/footer.scss"

class Footer extends Component {
	render() {
		return (
			<footer className="white-text">
				<img src={logo} alt="Apex Logo" width="60" className="padding-top-lg" />
				<p className="small-text padding-top-lg">
					Copyright {new Date().getFullYear()} © Apex Innovations, LLC, All rights reserved.
				</p>
			</footer>
		)
	}
}

export default Footer
