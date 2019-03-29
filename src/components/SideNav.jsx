import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { connect } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faVolumeUp, faVolumeMute, faInfoCircle);

class SideNavigation extends Component {
	state = {
		sideNavExpanded: this.props.sideNavExpanded,
	}

	itemSelected = selected => {
		switch (selected) {
			case "mute":
				this.setState({
					isMuted: !this.props.isMuted
				});
				break;

			default:
				return;
		}
	};

	render() {
		return (
			<SideNav onSelect={this.itemSelected} expanded={this.props.sideNavExpanded} onToggle={() => this.setState({ sideNavExpanded: !this.props.sideNavExpanded })}>
				<Toggle />
				<Nav defaultSelected="Question1">
					<NavItem disabled eventKey="mute" onClick={this.itemSelected.bind(null, "mute")}>
						<NavIcon>
							<FontAwesomeIcon
								icon={this.props.isMuted ? "volume-mute" : "volume-up"}
								size="lg"
								fixedWidth
							/>
						</NavIcon>
						<NavText className="padding-right-lg">
							{this.props.isMuted ? "Sound is isMuted." : "Sound is playing."}
						</NavText>
					</NavItem>

					<NavItem eventKey="info">
						<NavIcon>
							<FontAwesomeIcon icon="info-circle" size="lg" fixedWidth />
						</NavIcon>
						<NavText className="padding-right-lg">Information</NavText>
					</NavItem>
				</Nav>
			</SideNav>
		);
	}
}

function mapStateToProps(state) {
	return {
		sideNavExpanded: state.sideNavExpanded,
		isMuted: state.isMuted
	};
}

export default connect(mapStateToProps)(SideNavigation);
