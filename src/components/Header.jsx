import React, { Component } from "react"
// import logo from "../apex_logo.svg"
import journeysLogo from "../journeys_logo.png"

class HeaderComponent extends Component {
	render() {
		return (
			<header className="flexed">
				<img src={journeysLogo} alt="journeysLogo" className="logo" />
				{/* <img src={logo} className="logo" alt="logo" /> */}
			</header>
		)
	}
}

export default HeaderComponent
