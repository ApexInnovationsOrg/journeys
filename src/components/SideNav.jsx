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
	constructor(props) {
		super(props);

		this.state = {
			muted: this.props.muted
		};
	}

	onToggle = expanded => {
		this.setState({ expanded: expanded });
	};

	itemSelected = selected => {
		switch (selected) {
			case "mute":
				this.setState({
					muted: !this.state.muted
				});
				break;

			default:
				return;
		}
	};

	render() {
		return (
			<SideNav onSelect={this.itemSelected}>
				<Toggle />
				<Nav defaultSelected="Question1">
					<NavItem disabled eventKey="mute" onClick={this.itemSelected.bind(null, "mute")}>
						<NavIcon>
							<FontAwesomeIcon
								icon={this.state.muted ? "volume-mute" : "volume-up"}
								size="lg"
								fixedWidth
							/>
						</NavIcon>
						<NavText className="padding-right-lg">
							{this.state.muted ? "Sound is muted." : "Sound is playing."}
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
	return state;
}

export default connect(mapStateToProps)(SideNavigation);
