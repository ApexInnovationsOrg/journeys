import React, { Component } from "react"

import { connect } from "react-redux"

// import logo from "../apex_logo.svg"
import journeysLogo from "../journeys_logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "../styles/header.scss"

library.add(faBars)

class HeaderComponent extends Component {
	state = {
		sideNavExpanded: this.props.sideNavExpanded
	}

	render() {
		return (
			<header className="flexed">
				<button
					id="mobileSideNavToggle"
					className="primary margin-right-lg margin-left-lg"
					onClick={() => this.setState({ sideNavExpanded: !this.props.sideNavExpanded })}
				>
					<FontAwesomeIcon icon="bars" />
				</button>
				<img src={journeysLogo} alt="journeysLogo" className="logo" />
				{/* <img src={logo} className="logo" alt="logo" /> */}
			</header>
		)
	}
}

function mapStateToProps(state) {
	return {
		sideNavExpanded: state.sideNavExpanded
	}
}

export default connect(mapStateToProps)(HeaderComponent)
