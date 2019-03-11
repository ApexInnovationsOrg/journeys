import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faTimes);

export default class Scenario extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSectionIndex: 0,
			contentHidden: false
		};
	}

	render() {
		const { QuestionText, Media, sections } = this.props.question;

		return (
			<div className="scenario">
				<div className="overlay">
					{/* Current Section */}
					<div className="currentSection">
						<div
							className="avatar"
							onClick={() => this.setState({ contentHidden: !this.state.contentHidden })}
						>
							<FontAwesomeIcon icon="user" size="2x" color="#555" />
						</div>
						<div className={"sectionContent " + (this.state.contentHidden ? " collapsed" : "")}>
							<span>{sections[this.state.selectedSectionIndex].content}</span>
							<div onClick={() => this.setState({ contentHidden: true })} className="closeButton">
								<FontAwesomeIcon icon="times" color="red" />
							</div>
						</div>
					</div>

					{/* Tabs */}
					<div className="sectionTabs">
						{sections.map((section, index) => {
							let classNames = ["translucent-light"];
							if (index === this.state.selectedSectionIndex) {
								classNames.push("selected");
							}
							return (
								<button
									onClick={() =>
										this.setState({
											selectedSectionIndex: index,
											contentHidden: false
										})
									}
									className={classNames.join(" ")}
									key={index}
								>
									{section.label}
								</button>
							);
						})}
					</div>
				</div>
				<img src={Media} alt={QuestionText} />
			</div>
		);
	}
}
